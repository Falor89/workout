import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { useEffect } from 'react';

const modalContainer = document.querySelector('#modal')

export const Modal = ({ onClose, children }) => {

    const handleEscKeydown = (e) => {
        e.key === 'Escape' && onClose();
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscKeydown);
        return () => {
            document.removeEventListener('keydown', handleEscKeydown)
        }
    }, [])

    return createPortal(
        <>
            <div className={styles.container}>
                <button
                    className={styles.btnClose}
                    onClick={onClose}
                />
                {children}
            </div>
            <ModalOverlay close={onClose} />
        </>,
        modalContainer
    )
}
import styles from './modalOverlay.module.css';

export const ModalOverlay = ({ close }) => {
    return (
        <div
            className={styles.overlay}
            onClick={close}
        >
        </div>
    )
}
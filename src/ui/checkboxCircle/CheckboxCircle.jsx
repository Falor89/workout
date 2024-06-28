import styles from './checkboxCircle.module.css';

export const CheckboxCircle = ({ state, toggle }) => {
    return (
        state ?
            <button
                className={styles.btnActive}
                type='button'
            />
            :
            <button
                className={styles.btnDisabled}
                type='button'

            />
    )
}
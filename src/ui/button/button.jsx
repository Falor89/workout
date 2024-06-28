import styles from './button.module.css'

export const CustomButton = ({ text, size }) => {
    const checkSize = () => {
        switch (size) {
            case 'Normal': {
                return styles.btnNormal
            } break;
            case 'Medium': {
                return styles.btnMedium
            } break
            default: {
                return styles.btnNormal
            }
        }
    }

    return (
        <button className={checkSize()}>
            {text}
        </button>
    )
}
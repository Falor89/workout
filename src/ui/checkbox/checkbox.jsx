import { IoCheckbox as CheckboxActive } from "react-icons/io5";
import { MdCheckBoxOutlineBlank as CheckboxDisabled } from "react-icons/md";
import styles from './checkbox.module.css'
export const CustomCheckbox = ({ isComplited, onChange }) => {
    return isComplited ?

        <CheckboxActive
            onClick={() => onChange()}
            className={styles.checkboxActive}
            size={24}
            stroke="#01B9C5"
            fill="#01B9C5"
        />
        :
        <CheckboxDisabled
            onClick={() => onChange()}
            className={styles.checkboxDisabled}
            size={24}
            stroke="#01B9C5"
            fill="#01B9C5"
        />

}
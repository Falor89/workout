import { CheckboxCircle } from '../../ui/checkboxCircle/CheckboxCircle';
import { pastPriceDiscount } from '../../utils/pastPrice';
import { Discounter } from '../Discounter/Discounter';
import styles from './hotOffer.module.css';

export const HotOffer = ({ offer, current, onChange, oldPrice }) => {
    const { name, price } = offer;

    return (
        <li
            className={current[name] ? styles.offerContainerActive : styles.offerContainer}
            onClick={() => onChange(name)}
        >
            {console.log(current[name], name)}
            <div className={styles.titleContainer}>
                <span className={styles.name}>
                    {name}
                </span>
                <CheckboxCircle state={current[name]} />
            </div>
            <img
                className={styles.oldPrice}
                src={oldPrice}
                alt={pastPriceDiscount(price) + "\u{20BD}"}
            />
            <div className={styles.priceContainer}>
                <span
                    className={styles.price}
                >{price + "\u{20BD}"}</span>
                <Discounter price={price} isOffer={true} />
            </div>
        </li>
    )
}
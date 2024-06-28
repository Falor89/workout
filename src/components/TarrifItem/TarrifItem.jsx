import styles from './tarrifItem.module.css';
import { Discounter } from '../Discounter/Discounter';
import { pastPrice } from '../../utils/pastPrice';


export const TarrifItem = ({ item, isDiscount }) => {
    let { name, price, isPopular } = item;
    const tarrifText = () => {
        switch (name) {
            case '1 неделя': {
                return `Чтобы просто начать \u{1F44D}`
            }
                break;
            case '1 месяц': {
                return `Привести тело впорядок 💪🏻`
            } break;
            case '3 месяца': {
                return `Изменить образ жизни 🔥`
            } break;
            case 'навсегда': {
                return `Всегда быть в форме и поддерживать своё здоровье ⭐️`
            } break;
            default:
                return null
        }
    }

    return (
        <li className={isDiscount ? styles.listItem : styles.listItemDisabled}>
            <span className={styles.name}>{name}</span>
            <div className={styles.priceContainer}>
                <span
                    className={styles.price}
                >{price + "\u{20BD}"}
                </span>
                {isPopular ?
                    <span
                        className={styles.pastPrice}
                    >{pastPrice(price) + "\u{20BD}"}</span>
                    :
                    null}
            </div>
            <span>{tarrifText()}</span>
            {isPopular ?
                <Discounter
                    price={price}
                    isOffer={false}
                />
                :
                null}
        </li>
    )
}

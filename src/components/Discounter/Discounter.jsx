import styles from './discounter.module.css';

export const Discounter = ({ price, isOffer }) => {
    const percent = (price) => {
        switch (price) {
            case 699: {
                return '-30%'
            } break;
            case 999: {
                return '-40%'
            } break;
            case 2990: {
                return '-50%'
            } break;
            case 5990: {
                return '-70%'
            } break;
            default:
                return null
        }
    }
    const percentOffer = (price) => {
        switch (price) {
            case 599: {
                return '-30%'
            } break;
            case 599: {
                return '-40%'
            } break;
            case 799: {
                return '-50%'
            } break;
            case 1690: {
                return '-70%'
            } break;
            default:
                return null
        }
    }
    return (
        isOffer ?
            <div className={styles.discountOffer}>
                <span>{percentOffer(price)}</span>
            </div>
            :
            <div className={styles.discountContainer}>
                <span>{percent(price)}</span>
            </div>

    )
}
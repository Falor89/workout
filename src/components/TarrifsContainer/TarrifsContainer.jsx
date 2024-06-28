import styles from './tarrifsContainer.module.css';
import { getData } from '../../utils/api';
import { useEffect, useState } from 'react';
import { TarrifItem } from '../TarrifItem/TarrifItem';
import backgroundMan from '../../images/man_image.svg'
import { CustomCheckbox } from '../../ui/checkbox/checkbox';
import { CustomButton } from '../../ui/button/button';
import { Modal } from '../Modal/Modal';
import { Offer } from '../Offer/Offer';

export const TarrifsContainer = ({ isDiscount }) => {
    const [data, setData] = useState([])
    const [check, setCheck] = useState(false)

    const withDiscount = data.filter((item) => item.isPopular)
    const withoutDiscount = data.filter((item) => !item.isPopular && !item.isDiscount)
    const hotOffer = data.filter((item) => item.isDiscount)

    useEffect(() => {
        getData()
            .then((res) => {
                setData(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    const changeCheck = () => {
        setCheck(!check)
    }
    const [offer, setOffer] = useState(false)

    const openModal = () => {
        setOffer(true)
    }

    const closeModal = () => {
        setOffer(false)
    }


    useEffect(() => {
        const timer = setTimeout(() => {
            setOffer(true);
        }, 120000);

        // Очистка таймера
        return () => clearTimeout(timer);
    }, []);


    return (
        <section
            className={styles.section}
        >
            {console.log(isDiscount, data, withDiscount, withoutDiscount, hotOffer)}
            <h2 className={styles.title}>Выберите подходящий тарифный план</h2>
            <div
                className={styles.main}
            >
                <img
                    src={backgroundMan}
                    alt="Картинка"
                    className={styles.image}
                />
                <div className={styles.tarrifContainer}>
                    <ul className={styles.tarrifsList}>
                        {
                            isDiscount ?
                                withDiscount.map((item) => (
                                    <TarrifItem item={item} key={item.id} isDiscount={isDiscount} />
                                ))
                                :
                                withoutDiscount.map((item) => (
                                    <TarrifItem item={item} key={item.id} isDiscount={isDiscount} />
                                ))
                        }
                    </ul>
                    <span className={styles.text}>Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем за 1 месяц</span>
                    <form className={styles.form}>
                        <div className={styles.formContainer}>
                            <CustomCheckbox isComplited={check} onChange={changeCheck} />
                            <div className={styles.textContainer}>
                                <span className={styles.formText}>Я соглашаюсь с Правилами сервиса и  условиями</span>
                                <span className={styles.fromText}>Публичной оферты.</span>
                            </div>
                        </div>
                        <CustomButton
                            text='КУПИТЬ'
                            size='Normal'
                        />
                    </form>
                    <span
                        className={styles.description}
                    >Нажимая «Купить», Пользователь соглашается на автоматическое списание денежных средств по истечению купленного периода. Дальнейшие списания по тарифам участвующим в акции осуществляются по полной стоимости согласно оферте.</span>
                </div>
            </div>
            {
                offer && (
                    <Modal onClose={closeModal}>
                        <Offer offers={hotOffer} />
                    </Modal>
                )
            }
        </section>
    )
}
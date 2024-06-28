import { useEffect, useState } from 'react';
import { CustomButton } from '../../ui/button/button';
import styles from './offer.module.css';
import { HotOffer } from '../HotOffer/HotOffer';
import old_price_1 from '../../images/old_price_1.svg';
import old_price_2 from '../../images/old_price_2.svg';
import old_price_3 from '../../images/old_price_3.svg';


export const Offer = ({ offers }) => {
    const [current, setCurrent] = useState({
        '1 неделя': false,
        '1 месяц': false,
        '3 месяца': false,
    })

    const onChange = (name) => {
        console.log(current)
        console.log(name)
        switch (name) {
            case '1 неделя': {
                setCurrent({
                    '1 неделя': true,
                    '1 месяц': false,
                    '3 месяца': false,
                })
            } break;
            case '1 месяц': {
                setCurrent({
                    '1 неделя': false,
                    '1 месяц': true,
                    '3 месяца': false,
                }
                )
            } break;
            case '3 месяца': {
                setCurrent({
                    '1 неделя': false,
                    '1 месяц': false,
                    '3 месяца': true,
                }
                )
            } break;
            default: {
                return null
            }
        }
    }

    return (
        <section className={styles.section}>
            <span className={styles.notification}>горящее предложение</span>
            <div className={styles.headingContainer}>
                <div className={styles.textTop}>
                    <span>НЕ УПУСТИ СВОЙ</span>
                    <span className={styles.textBlue}> ПОСЛЕДНИЙ ШАНС</span>
                </div>
                <div className={styles.textMid}>
                    <span>Мы знаем, как трудно начать..</span>
                    <span className={styles.textBold}> Поэтому!</span>
                </div>
                <div className={styles.textBottom}>
                    <span>Дарим скидку для</span>
                    <span className={styles.textBlue}> лёгкого старта 🏃‍♂️</span>
                </div>
            </div>
            <p className={styles.offerDesc}>Посмотри, что мы для тебя приготовили 🔥</p>
            <ul
                className={styles.offersList}
            >
                <HotOffer
                    offer={offers[0]}
                    current={current}
                    onChange={onChange}
                    oldPrice={old_price_1}
                />
                <HotOffer
                    offer={offers[1]}
                    current={current}
                    onChange={onChange}
                    oldPrice={old_price_2}
                />
                <HotOffer
                    offer={offers[2]}
                    current={current}
                    onChange={onChange}
                    oldPrice={old_price_3}
                />
            </ul>
            <CustomButton
                text='Начать тренироваться'
                size="Medium"
            />
        </section>
    )
}
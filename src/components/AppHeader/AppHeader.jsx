import styles from './appHeader.module.css';

import { useRef, useState, useEffect } from 'react';
import Countdown from 'react-countdown';

export const AppHeader = ({ isDiscount, setIsDiscount }) => {

    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            setIsDiscount(false)

        } else {
            const checkStyle = () => {
                if (minutes < 1 && seconds < 30) {
                    return styles.countContainerActive
                } else {
                    return styles.countContainer
                }
            }
            return (
                <div className={checkStyle()}>
                    <span className={styles.count}>{minutes}</span>
                    <span className={styles.sem}>:</span>
                    <span className={styles.count}>{seconds < 10 ? "0" + seconds : seconds}</span>
                </div>
            )


        }
    };

    return (
        <header className={styles.header}>
            {
                isDiscount ?
                    <>
                        <h2 className={styles.title}>
                            Скидка действует:
                        </h2>
                        <Countdown
                            date={Date.now() + 120000}
                            renderer={renderer}>
                        </Countdown>
                    </>
                    :
                    <span className={styles.titleDisc}>Скидка уже закончилась, но скоро будет следующая!</span>
            }
        </header >
    )
}
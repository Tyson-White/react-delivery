import React from "react";
import Header from '../../compopnent/Header'
import Styles from './CartEmpty.module.scss'
import { Link } from 'react-router-dom'
export default function CartEmpty() {
    return (
        <>
        <Header/>
        <div className="wrapper">
            <div className={Styles.content}>
                😔 
                <div className={Styles.text}>Корзина пуста</div>
                <Link to={'/'}>
                    <button>Вернуться</button>
                </Link>
            </div>
        </div>
        </>
    )
}
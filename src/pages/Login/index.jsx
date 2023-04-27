import React from "react"
import Header from "../../compopnent/Header"
import Styles from "./Login.module.scss"
import { Link } from "react-router-dom"
import {useDispatch} from "react-redux"
import {login} from '../../redux/slices/UserSlice'
export default function Login() {
    const dispatch = useDispatch()

    return(
        <>
            <div className="wrapper">
                <Header/>
                <div className={Styles.login_wrapper}>
                    <div className={Styles.login_content}>
                        <div className={Styles.title}>
                            Вход
                        </div>
                        <div className={Styles.inputs}> 
                            <label htmlFor="">Имя пользователя</label>
                            <input type="text" placeholder="Имя пользователя"/>
                            <label htmlFor="password">Пароль</label>
                            <input id="password" type="password" placeholder="Пароль"/>
                        </div>
                        <Link to={'/'}>
                            <button onClick={() => dispatch(login())}>Войти</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
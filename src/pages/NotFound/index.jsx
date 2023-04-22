import React from 'react'
import { Link } from 'react-router-dom'


import Header from '../../compopnent/Header'
import Styles from './NotFound.module.scss'


export default function Index() {
	return (
		<>
		<div className="wrapper">
			<Header/>
			<div className={Styles.notfound_content}>
			😔 <br />
			Страница не найдена <br />
			<Link to={'/'}>
				<button className={Styles.backToHome}>На главную</button>
			</Link>
			</div>
		</div>
		</>
	)
}

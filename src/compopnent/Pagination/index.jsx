import React from 'react'
import Styles from './Pagination.module.scss'

export default function Pagination({pageCount, selectedPage, setSelectedPage}) {

	const createLi = () => {
		const list = []

		for (var i = 1; i < pageCount; i++) {
			list.push(
				i
			)
		}

		return list
	}

	return (
		<div className={Styles.root}>
			<button onClick={() => setSelectedPage(selectedPage - 1)} className={Styles.arrow_left}>{`<`}</button>
			<ul className={Styles.pages}>
				{createLi().map((item, i) => (
					<li key={i} onClick={() => setSelectedPage(i)} className={selectedPage === i ? Styles.selected : undefined}>{item}</li>
				))}
			</ul>
			<button onClick={() => setSelectedPage(selectedPage + 1)} className={Styles.arrow_right}>{`>`}</button>
		</div>
	)
}

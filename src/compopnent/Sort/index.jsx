import React from 'react'
import Styles from './Sort.module.scss'

export default function Index({value, onClickFilter}) {

	const sortList = [
		{name: 'популярности', sort: 'rating'},
		{name: 'цене', sort: 'productPrice'},
		{name: 'алфавиту', sort: 'productName'}
	]
	const [activeSelSort, setActiveSelSort] = React.useState(false)

	return (
		<>
		<div className={Styles.sort_wrapper}>
			<div className={Styles.sort_selected}>
				Сортировка по: <span onClick={() => setActiveSelSort(!activeSelSort)}>{value.name}</span>
			</div>

			<div className={activeSelSort ? `${Styles.popup} ${Styles.showPopup}` : Styles.popup}>
				<ul className={Styles.popup_list}>
					{sortList.map((item, i) => (
						<li 
							key={i + item.name} 
							className={value.name === item.name ? Styles.activeSort : undefined}
							onClick={() => {onClickFilter(item); setActiveSelSort(false)}}>
							{item.name}
						</li>
					)) }
				</ul>
			</div>
		</div>
		</>
	)
}

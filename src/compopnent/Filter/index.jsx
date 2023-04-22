import React from 'react'
import Styles from './Filter.module.scss'
export default function Index({value, onClickFilter}) {

	const filters = ['Все', 'Мясо', 'Масло', 'Молочная продукция', 'Зерновые изделия', 'Печенье',]

	return (
		<>
			<ul className={Styles.filter}>
				{
					filters.map((item, index) => (
						<li
							key={index}
							onClick={() => onClickFilter(index)} 
							className={value === index ? Styles.active : undefined}>{item}
							
						</li>
					))
				}
			</ul>
		</>
	)
}

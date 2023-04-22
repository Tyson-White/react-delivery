import React from 'react'
import Styles from './product.module.scss'
import { useSelector } from 'react-redux'


export default function Index(props) {


	const [size, setSize] = React.useState('small');
	
	const changeSize = (size) => {
		setSize(size)
	}

	const addToCart = () => {
		props.onClickAdd(props)
	}

	return (
		<>
			<div className={Styles.product}>
				<div className={Styles.product_img}>
					<img src={props.productImgURL}   alt={props.productName} />
				</div>
				<div className={Styles.product_name}>{props.productName}</div>
				<div className={Styles.product_info}>
					<div className={Styles.select_size}>
				
						<div className={Styles.select_content}>

							<div 
								className={size === 'small' ? `${Styles.size} ${Styles.selected}` : Styles.size}
								onClick={() => {changeSize('small')}}
							>маленький</div>

							<div 
								className={size === 'big' ? `${Styles.size} ${Styles.selected}` : Styles.size}
								onClick={() => {changeSize('big')}}
							>большой</div>
						
						</div>
					</div>
				</div>
				<div className={Styles.price_and_add}>
					<div className={Styles.price}>{size === 'big' ? props.bigPrice : props.productPrice} руб.</div>
					<div className={Styles.add} onClick={() => {addToCart()}}>Добавить <div className={Styles.count}>{0}</div></div>
				</div>
			</div>
		</>
	)
}

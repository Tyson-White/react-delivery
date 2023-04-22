import React from 'react'

import Styles from './Cart.module.scss'
import { useDispatch, useSelector } from 'react-redux'

// img
import del from '../../assets/icons/delete-1-svgrepo-com.svg'
// img

// components
import Header from '../../compopnent/Header'
// components

export default function Index() {



	return (
		<>
		<div className="wrapper">
			<Header />

			<div className={Styles.cart_content}>
				<div className={Styles.cart_content__header}>
					<div className={Styles.title}>Корзина</div>
					<div className={Styles.clear_cart}>Очистить корзину</div>
				</div>

				

				<div className={Styles.added_products}>

					{/* {itemsList && itemsList.map((item) => (
						<div className={Styles.added_product}>
						<div className={Styles.product_info}>
							<div className={Styles.product_img}>
								<img src={item.productImgURL} width={80} alt="" />
							</div>
							<div className={Styles.product_name}>
								{item.productName}
							</div>
						</div>

						<div className={Styles.product_actions}>
							<div className={Styles.add_product}>
								<button className={Styles.minus}>-</button>
								<div className={Styles.current}>2</div>
								<button className={Styles.plus}>+</button>
							</div>
							<div className={Styles.delete_product}>
								<img src={del} width={35} alt="" />
							</div>
						</div>
					</div>
					))} */}
					
				</div>
			</div>
		</div>
		</>
	)
}

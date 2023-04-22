import React from 'react'
import Styles from './Header.module.scss'
import { Link } from 'react-router-dom'

import logo from '../../assets/icons/logo.svg'
import cart from '../../assets/icons/cart.svg'

export default function Index({searchValue, setSearchValue}) {
	return (
		<>
			<div className={Styles.header}>
				<div className={Styles.header_content}>
					<Link to={'/'}>
					<div className={Styles.left_side}>
						<div className={Styles.logo}>
							<img src={logo} width={70} alt="delivery-logo" />
						</div>
						<div className={Styles.title_name}>
							<div className={Styles.name}>React Delivery</div>
							<div className={Styles.description}>Лучший сервис по доставке еды</div>
						</div>
					</div>
					</Link>

					<div className={Styles.search}>
						<div className={Styles.icon}>
						<svg width="25px" height="25px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
 					  <path fill="#000000" fillRule="evenodd" d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"/>
						</svg>
						</div>
						<input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder='Искать...' className={Styles.search_input} />
						{searchValue && 
							<div className={Styles.close} onClick={() => setSearchValue('')}>
						
						
								<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

								<g id="SVGRepo_bgCarrier" stroke-width="0"/>

								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

								<g id="SVGRepo_iconCarrier"> <g id="Menu / Close_LG"> <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </g>

  						  </svg>
							</div>
						}
					</div>
					

					<div className={Styles.right_side}>
						<Link to='/cart'>
						<div className={Styles.cart}>
							
							<div className={Styles.cart_elems}>
								<div className={Styles.total_price}>
									546 руб.
								</div>

								<div className={Styles.cart_img}>
									<img src={cart} width={25} alt="cart-icon" /> 
								</div>

								<div className={Styles.count}>2</div>
							</div>
							
						</div>
						</Link>
					</div>

				</div>
			</div>
		</>
	)
}

import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

import Link from '../../link'
import useOnClickOutside from '../../../../hooks/onClickOutside'
import GlobalUIButton from '../button'

const GlobalUISelect = ({ array, className, link, onChange, ...other }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selected, setSelected] = useState(array.find(({ active }) => active))

	const openSelect = () => {
		setIsOpen((isOpen) => !isOpen)
	}

	const ref = useRef()

	useOnClickOutside(ref, () => setIsOpen(false))

	const changeSelected = (event) => {
		const { id } = event.target.dataset
		const selected = array.find((item) => item.id.toString() === id)
		setSelected(selected)
		setIsOpen(false)
		onChange(selected.id)
	}

	return (
		<div className={`${styles.select} ${isOpen ? styles.open : ''}`} ref={ref}>
			<GlobalUIButton className={styles.select__input} onClick={openSelect}>
				{selected.text}
			</GlobalUIButton>
			{array.length > 0 && (
				<div className={styles.select__dropdown}>
					<div className={styles.select__list}>
						{array.map((item) => {
							const className = selected.id === item.id ? styles.selected : ''

							const propsData = {
								key: item.id,
								'data-id': item.id,
								className: `${className} ${styles.select__item}`,
								onClick: changeSelected,
							}

							return link ? (
								<Link
									partiallyActive
									to={item.value}
									{...propsData}
									activeClassName={'active'}
									state={{ active: item.value }}
								>
									{item.text}
								</Link>
							) : (
								<GlobalUIButton {...propsData}>{item.text}</GlobalUIButton>
							)
						})}
					</div>
				</div>
			)}
		</div>
	)
}

GlobalUISelect.defaultProps = {
	className: '',
	link: false,
	onChange: () => {},
}

GlobalUISelect.propTypes = {
	array: PropTypes.array.isRequired,
	onChange: PropTypes.func,
	className: PropTypes.string,
	link: PropTypes.bool,
}

export default GlobalUISelect

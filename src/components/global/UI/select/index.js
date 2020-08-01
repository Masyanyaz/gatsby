import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import styles from './index.module.css'

import useOnClickOutside from '../../../../hooks/onClickOutside'
import GlobalUIButton from '../button'

const GlobalUISelect = ({ array, className, link, onChange, width }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selected, setSelected] = useState(array.find(({ active }) => active))

	const openSelect = () => {
		setIsOpen((isOpen) => !isOpen)
	}

	const ref = useRef()

	useOnClickOutside(ref, () => setIsOpen(false))

	const changeSelected = (event) => {
		const { id, value } = event.target.dataset
		const selected = array.find((item) => item.id.toString() === id)
		setSelected(selected)
		setIsOpen(false)

		onChange(selected.id)

		if (link) {
			navigate(value)
		}
	}

	return (
		<div
			className={`${className} ${styles.select} ${isOpen ? styles.open : ''}`}
			style={{ maxWidth: width }}
			ref={ref}
		>
			<GlobalUIButton className={styles.select__input} onClick={openSelect}>
				{selected.text}
			</GlobalUIButton>
			<div className={styles.select__dropdown}>
				<div className={styles.select__list}>
					{array.map(({ id, value, text }) => (
						<GlobalUIButton
							key={id}
							data-id={id}
							data-value={value}
							onClick={changeSelected}
							className={`${selected.id === id ? styles.selected : ''} ${styles.select__item}`}
						>
							{text}
						</GlobalUIButton>
					))}
				</div>
			</div>
		</div>
	)
}

GlobalUISelect.defaultProps = {
	className: '',
	width: '300px',
	link: false,
	onChange: () => {},
}

GlobalUISelect.propTypes = {
	array: PropTypes.array.isRequired,
	onChange: PropTypes.func,
	className: PropTypes.string,
	width: PropTypes.string,
	link: PropTypes.bool,
}

export default GlobalUISelect

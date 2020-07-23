import React, { useState } from 'react'

import styles from './index.module.css'

import Link from '../../components/global/link'
import useScrollPosition from '../../hooks/scrollPosition'

const GeneralArrowUp = () => {
	const [arrowUpVisible, setArrowUpVisible] = useState(false)

	useScrollPosition(
		({ currPos }) => {
			setArrowUpVisible(currPos.y > 200)
		},
		[arrowUpVisible],
		null,
		true,
	)

	return <>{arrowUpVisible && <Link to="#top" className={styles.arrowUp} />}</>
}

export default GeneralArrowUp

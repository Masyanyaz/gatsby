import React from 'react'

import './column.css'
import AdvantBlock from './advant/advant'
import DirectionBlock from './direction/direction'
import CommonBlock from './common/common'

const RightColumn = () => {
	return (
		<div className="right-column">
			<DirectionBlock />
			<CommonBlock />
			<AdvantBlock />
		</div>
	)
}

export default RightColumn

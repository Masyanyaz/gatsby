import React from "react";

import "./column.css"
import AdvantBlock from "./advant/advant"
import DirectionBlock from "./direction/direction"
import CommonBlock from "./common/common"


const RightColumn = ({directionName}) => {

  return (
    <div className="right-column">
      <DirectionBlock directionName={directionName}/>
      <CommonBlock />
      <AdvantBlock />
    </div>
  )
}

export default RightColumn
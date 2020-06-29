import React from "react";

import "./advant.css"

const AdvantBlock = (props) => {
  return (
    <div className="advant">
      <p>nos avantages</p>
      <div className="advant__grid">
        <div className="advant__grid-element">
          <div className="advant__grid-element-icon"></div>
          <p>prix justes</p>
        </div>
        <div className="advant__grid-element">
          <div className="advant__grid-element-icon"></div>
          <p>paiements sécurisés</p>
        </div>
        <div className="advant__grid-element">
          <div className="advant__grid-element-icon"></div>
          <p>tour-operateur officiel</p>
        </div>
        <div className="advant__grid-element">
          <div className="advant__grid-element-icon"></div>
          <p>plus de 10 ans d'experiance</p>
        </div>
      </div>
    </div>
  )
}

export default AdvantBlock
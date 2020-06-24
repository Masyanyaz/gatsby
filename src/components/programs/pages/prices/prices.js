import React from "react"

const Prices = ({prices}) => {
    return(
        <>
            {prices.length ? <div>{prices[0].count} человека -- {prices[0].type} -- цена: {prices[0].value} euro </div> : `по запросу`}
        </>
    )
}

export default Prices
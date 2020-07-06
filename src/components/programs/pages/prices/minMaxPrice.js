import React from "react"

const MinMaxPriceBlock = ({ prices }) => {
  const pricesArray = prices.reduce((res, price) => {
    const prices = price.types.map(type => type.value)
    return [...res, ...prices]
  }, [])

  return (
    <>
      {
        prices.length ?
          `a ${ Math.min(...pricesArray) } - de ${ Math.max(...pricesArray) }` :
          `price`
      }
    </>
  )
}

export default MinMaxPriceBlock

import React from "react"

const Prices = ({ prices }) => {
  const types = [...new Set(prices.map(price => price.type))]



  console.log(prices)
  return (
    <>
      <table>
        <thead>
        <tr>
          <th>count</th>
          {
            types.map(type => (
              <th key={ type }>{ type }</th>
            ))
          }
        </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </>
  )
}

export default Prices

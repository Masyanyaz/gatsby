import React, { useState } from "react"

const Prices = ({ prices }) => {

  const [ countSelected, setCountSelected ] = useState(prices[0].count)
  const types = prices.filter(price => price.count === countSelected).map(price => price.types).flat(1)

  return (
    <>
        <div className="vkladki" >
          {
            prices.map(({count}) => (
              <div className="vkladki__item" key={ count } onClick={() => setCountSelected(count)}> { count } человека</div>
            ))
          }
        </div>
      <table>
        <thead>
        <tr>
          {
            types.map(type => (
              <td key={type.id}>{type.name}</td>
            ))
          }
        </tr>
        </thead>
        <tbody>
        <tr>
          {
            types.map(type => (
              <td key={type.id}>{type.value}</td>
            ))
          }
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default Prices

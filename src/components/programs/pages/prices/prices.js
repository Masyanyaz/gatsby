import React, { useState } from "react"

const Prices = ({ prices }) => {
  const counts = [ ...new Set(prices.map(price => price.count)) ]
  const [ countSelected, setCountSelected ] = useState(counts[0])

  const handleSelect = (e) => {
    setCountSelected(+e.target.value)
  }

  const filteredPrices = prices.filter(price => price.count === countSelected)

  return (
    <>
      <div>
        <select onChange={ handleSelect } defaultValue={ countSelected }>
          {
            counts.map(count => (
              <option key={ count } value={ count }>{ count } человека</option>
            ))
          }
        </select>
      </div>
      <table>
        <thead>
        <tr>
          {
            filteredPrices.map(price => (
              <th key={ price.id }>{ price.type }</th>
            ))
          }
        </tr>
        </thead>
        <tbody>
        <tr>
          {
            filteredPrices.map(price => (
              <td key={ price.id }>{ price.value } euro</td>
            ))
          }
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default Prices

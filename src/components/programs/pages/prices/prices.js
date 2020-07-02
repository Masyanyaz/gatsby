import React, { useState } from "react"

const Prices = ({ prices }) => {

  const [ countSelected, setCountSelected ] = useState(prices[0].count)
  const types = prices.find(({ count }) => count === countSelected).types

  return (
    <>
      <div className="tabs">
        {
          prices.map(({ count }) => (
            <button
              className="tabs__item"
              key={ count }
              onClick={ () => setCountSelected(count) }
              onKeyDown={ () => setCountSelected(count) }
            >
              { count } человека
            </button>
          ))
        }
      </div>
      <table>
        <thead>
        <tr>
          {
            types.map(type => (
              <th key={ type.id }>{ type.name }</th>
            ))
          }
        </tr>
        </thead>
        <tbody>
        <tr>
          {
            types.map(type => (
              <td key={ type.id }>{ type.value }</td>
            ))
          }
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default Prices

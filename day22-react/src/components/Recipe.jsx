import React from 'react'
import { Link } from 'react-router-dom'

export default function Recipe({rec}) {
  return (
   <tr className='recipe-content'>
          <td>{rec.id}</td>
          <td>
            <Link to={`/details/${rec.id}`}>
            {rec.name}
            </Link>
            </td>
          <td>{rec.cuisine}</td>
          <td>⭐{rec.rating}</td>
          <td>{rec.caloriesPerServing}</td>
          <td>
            <img style={{
                width: "80px",
                height: "80px"
            }}
            src={rec.image}/>
          </td>
        </tr>
  )
}

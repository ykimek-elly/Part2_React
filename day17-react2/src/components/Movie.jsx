// Movie.jsx

import React from 'react'

export default function Movie({title,rating}) {
    // 평점이 5점미만 p태그 안보이게 설정 
  return (
    <div>
        <h3>🎬 영화명:{title}</h3>
        {/* <p>⭐ 평점:{rating}</p> */}
        {rating >= 5 ? <p>⭐ 평점:{rating}</p> : null}
    </div>
  )
}
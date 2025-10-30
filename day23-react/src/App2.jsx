import React from 'react'
import { Route, Router } from 'react-router-dom'
import Server from './Server'

export default function App2() {
  return (
    <div>
        <h3>서버에서 데이터 받아오기</h3>
        <Router>
            <Route path='' element={<Server/>}></Route>
        </Router>
    </div>
  )
}

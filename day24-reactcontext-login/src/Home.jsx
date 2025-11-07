import React, { useContext } from 'react'
import {AuthContext} from './AuthContext'

export default function Home() {
  
    let user = useContext(AuthContext);
    console.log(user);

    return (
    <div>
        <h3>Home Page!</h3>
        <p>id:{user.user.id}</p>
        <p>id:{user.user.pass}</p>
    </div>
  )
}

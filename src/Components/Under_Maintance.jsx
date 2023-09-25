import React from 'react'
import Container from "react-bootstrap/Container";
import style from "./Under_Maintance.css"
const Under_Maintance = () => {
  return (
    <div className='container'>
    <h1 className="LOGO">WEBSITE TITLE<span> Desciption</span></h1> 
    <h1>We&rsquo;ll be back soon!</h1>
    <div className='font'>
        <p>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment.
        If you need to you can always <a href="mailto:team@email.com">contact us</a>
        , otherwise repairs are in progress and we&rsquo;ll be back online shortly!</p>
        <p>&mdash; The Team</p>
    </div>
</div>
  )
}

export default Under_Maintance

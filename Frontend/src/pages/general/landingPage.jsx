import React from 'react'
import { Link } from "react-router-dom";
const landingPage = () => {
  return (
    <div>
        <Link to="/user/login"> login as user </Link>
        <Link to="/user/register">register as user</Link>
        <Link to="/food_partner/register">register as foodpartner</Link>
        <Link to="/food_partner/login">login as food partner</Link>
    </div>
  )
}

export default landingPage
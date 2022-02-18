import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <div className="container">
            <div className='header'>
                <ul>
                    <li> <Link to='/'>Home</Link> </li>
                    <li> <Link to='/new'>Add user</Link> </li>
                </ul>
            </div>
            {children}
            <div className="footer">&copy;2022 @UserTest | All rights  reserved. </div>
        </div>
    )
}

export default Layout
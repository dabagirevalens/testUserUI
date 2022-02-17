import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="container">
            <div className='header'>WelCome to test User</div>
            {children}
            <div className="footer">&copy;2022 @UserTest | All rights  reserved. </div>
        </div>
    )
}

export default Layout
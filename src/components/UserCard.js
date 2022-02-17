import React from 'react'

const UserCard = ({ props }) => {
    return (
        <div className='user-card'>
            <div className="descriptions">
                <h2>
                    <span>User Name :</span>{props.userName}
                </h2>
                <h2>
                    <span>Given Name: </span>{props.givenName}
                </h2>
                <h2>
                    <span>SurName : </span> {props.surName}
                </h2>
                <h2>
                    <span>DOB : </span> {props.dob}
                </h2>
            </div>
        </div>
    )
}

export default UserCard
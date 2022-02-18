import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = (props) => {


    const handleDelete = async () => {
        return await axios.delete(`http://localhost:9000/user/delete/${props.id}`).then(() => {
            window.location.reload()
        })
    }

    return (
        <div className='user-card'>
            <div className="descriptions">
                <p>
                    <span>User Name : </span>{props.userName}
                </p>
                <p>
                    <span>Given Name: </span>{props.givenName}
                </p>
                <p>
                    <span>SurName : </span> {props.surName}
                </p>
                <p>
                    <span>DOB : </span> {props.dob}
                </p>
            </div>
            <div className="actions">
                <Link className='edit-icon' to='/edit'>
                    <i className='bx bxs-edit-alt'></i>
                </Link>
                <i className='bx bx-trash-alt' onClick={handleDelete}></i>
            </div>
        </div>
    )
}

export default UserCard
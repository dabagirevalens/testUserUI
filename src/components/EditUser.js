import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const EditUser = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [user, setUser] = useState({
        userName: '',
        givenName: '',
        surName: '',
        DOB: ''
    })

    useEffect(() => {
        const getUserData = async () => {
            const response = await axios.get(`http://localhost:9000/user/${id}`)
            setUser(response.data.user)
        }

        getUserData()
    }, [id])

    const { userName, givenName, surName, DOB } = user

    const submitHandler = async (e) => {
        e.preventDefault();

        const userData = {
            userName,
            givenName,
            surName,
            DOB
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await axios.patch(`http://localhost:9000/user/edit/${id}`, userData, config)
        if (response.data.success) {
            alert('user was edited successfully')
            navigate('/')
        }
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <Layout>
            <div className="form">
                <form className="user-form" onSubmit={submitHandler}>
                    <h1>New User</h1>

                    <div className="form-group">
                        <label htmlFor="name_field">User name</label>
                        <input
                            type="text"
                            id="name_field"
                            className="form-control"
                            name='userName'
                            value={userName}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name_field">Given name</label>
                        <input
                            type="text"
                            id="name_field"
                            className="form-control"
                            name='givenName'
                            value={givenName}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name_field">sur name</label>
                        <input
                            type="text"
                            id="name_field"
                            className="form-control"
                            name='surName'
                            value={surName}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name_field">Date of birth</label>
                        <input
                            type="text"
                            id="name_field"
                            className="form-control"
                            name='DOB'
                            value={DOB}
                            onChange={onChange}
                        />
                    </div>
                    <button type="submit" className="btn">Update User</button>
                </form>
            </div>
        </Layout>
    )
}

export default EditUser
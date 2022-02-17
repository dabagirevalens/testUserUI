import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import axios from 'axios'
import UserCard from './UserCard'

const Home = () => {

    const [users, setUsers] = useState([])


    const getUsers = async () => {
        const response = await axios.get('http://localhost:9000/user')
        const userData = response.data.users

        setUsers(JSON.stringify(userData))
    }


    useEffect(() => {
        getUsers()
    }, [users])

    let totalUsers = users


    return (
        <Layout>
            {totalUsers.length >0 &&(
                totalUsers.map((user) => <UserCard />)
            )}
        </Layout>
    )
}

export default Home
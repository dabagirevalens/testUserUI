import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import UserCard from './UserCard'

const Home = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await fetch("http://localhost:9000/user")
        const data = await response.json()

        setUsers(data.users)
    }

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <Layout>
            <div className="users">
                {users.length > 0 ? users.map(u => (
                    <div className="" key={u._id}>
                        <UserCard
                            userName={u.userName}
                            givenName={u.givenName}
                            surName={u.surName}
                            dob={u.DOB}
                            id={u._id}
                        />
                    </div>
                )) : <div className="no-users">
                    <h4 style={{ textAlign: 'center', margin : '4em auto' }}>There is no users.</h4>
                </div>}
            </div>
        </Layout>
    )
}

export default Home
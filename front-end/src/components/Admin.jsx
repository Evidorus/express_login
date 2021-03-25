import React, {useEffect, useState} from 'react'

export default function Admin() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log(token)
        fetch('http://localhost:8000/admin', {
            headers: {
                'authorization': `bearer ${token}`,
            }
        })
        .then((response) => response.json())
        .then((response) => {
            setUsers(response)
            console.log(response)
        })
    })

    return(
        <>
        <h1>Admin</h1>
        {users.map((user) => {
            return (
                <>
                    <p>{user.firstName}</p>
                    <p>{user.surname}</p>
                </>
            )
        })}
        
        </>
    )
    
}
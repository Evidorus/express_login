import React from 'react'
import { Link } from 'react-router-dom'

export default function AccountCreated() {
    return(
        <>
        <h1>Votre compte a bien était crée</h1>
        <Link to="/login">Login</Link>
        </>
    )
}

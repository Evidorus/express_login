import React from 'react'
import { Link } from 'react-router-dom'

export default function AccountCreated() {
    return(
        <>
        <h1>Votre compte n'a pas pu etre crée</h1>
        <Link to="/signup">Sign up</Link>
        </>
    )
}
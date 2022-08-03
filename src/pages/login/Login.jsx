import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../register/register.css'

export const Login = () => {
  return (
    <div className="auth-page">
      <h1>Welcome to Social Media App</h1>
      <form className="form">
        <h2>Login</h2>
        <div className="form-input">
          <TextField required type="email" label="Email" variant="outlined" />
        </div>
        <div className="form-input">
          <TextField
            required
            type="password"
            label="Password"
            variant="outlined"
          />
        </div>
        <Link to={"/register"}>
        <a href="/" className="auth-link">
          Go to Register
        </a>
        </Link>
        <Button type="submit" variant="contained" color="success">
          Register
        </Button>
      </form>
    </div>
  )
}

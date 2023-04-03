import { useState } from 'react';

const FormValidator = () =>
{
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ message, setMessage ] = useState('');

    const findErrors = () =>
    {
        const errors = [ ]
        if( !email || !password || !confirmPassword ) errors.push( 'All fields must be filled in' )

        if( [...email].filter( i => i === '@').length !== 1 )
        { errors.push('An email must contain exactly one @ sign') }

        if( password.length < 8 ) errors.push( 'Password must have at least 8 characters' )

        if( password !== confirmPassword ) errors.push( 'Passwords must match' )

        return errors
    }
    
    const handleSubmit = e =>
    {
        e.preventDefault()

        const errors = findErrors()
        setMessage( errors.length ? errors.join(', ') : 'User created!' )
    }

  return (
    <form onSubmit={ handleSubmit }>
        <h2>Sign Up</h2>

        <label htmlFor="email">E-mail</label>
        <input type="text" name='email' onChange={ e => setEmail(e.target.value) } />

        <label htmlFor="password">Password</label>
        <input type="password" name='password' onChange={ e => setPassword(e.target.value) } />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" name='confirm-password' onChange={ e => setConfirmPassword(e.target.value) } />

        { message }
        
        <input type="submit" value='Submit' />
    </form>
  )
}

export default FormValidator;
import React from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

const Login = () => {
  return (
    <div>
      <div className='text-center'><h1>Log In Page</h1></div>

      <form className='mt-10' >
        <div className='text-center '>
          <h1>User Name: 
            <Input id="UserName" placeholder="Type your Username" type="Text" /> 
            </h1>
        </div>
        <div className='text-center'>
          <h1>Password: 
            <Input id="Password" placeholder="Type your Password" type="password" /> 
            </h1>
        </div>
        <div className='text-center mt-5'><Button/></div>
      </form>





    </div>
  )
}

export default Login
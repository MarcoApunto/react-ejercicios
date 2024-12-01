import { useState } from 'react'

export default function RegistrationForm () {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')

  const handleChangeUser = (e) => {
    setUser(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <>
      <input type="text" placeholder="user" value={user} onChange={handleChangeUser}/>
      <p>User Confirm Input: <b>{user}</b></p>
      <input type="text" placeholder="email" value={email} onChange={handleChangeEmail}/>
      <p>Email Confirm Input: <b>{email}</b></p>
      <button type="submit" value="submit">Submit</button>
    </>
  )
}

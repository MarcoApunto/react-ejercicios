export const LogIn = () => {

  return (
    <div className="container-auth">
      <h2>Login</h2>

      <form>
        <input
          name="email"
          type="email"
          placeholder="E-mail"
        />
        <input
          name="pass"
          type="password"
          placeholder="Password"
        />
        <div className="container-buttons">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  )
}

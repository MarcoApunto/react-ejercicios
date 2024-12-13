export const SignIn = () => {

  return (
    <div className="container-auth">
      <h2>Create an account</h2>

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
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  )
}

// Write your code here
const Login = props => {
  const {login} = props

  return (
    <button className="btn-style" type="button" onClick={login}>
      Login
    </button>
  )
}

export default Login

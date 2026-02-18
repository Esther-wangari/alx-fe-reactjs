function Login({ setIsAuthenticated }) {
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => setIsAuthenticated(true)}>
        Simulate Login
      </button>
    </div>
  );
}

export default Login;

const Login = () => {
  return ( 
    <div className="mx-auto border rounded-lg w-1/2 h-3/4 shadow-md flex align-middle justify-center p-6">
      <h1 className="w-full">Choose your login method</h1>
      <div className="wrapper flex">
        <div className="left w-1/3 flex flex-col align-middle">
          <div className="login-button">
            <button href="/login/google" className="btn">Google</button>
          </div>
          <div className="login-button">
            <button href="/login/google" className="btn">Facebook</button>
          </div>
        </div>
        <div className="center w-5 h-full relative">
          <div className="line"></div>
          <div className="text">or</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" className="border rounded-md p-2"/>
          <input type="text" placeholder="Password" className="border rounded-md p-2" />
          <button className="btn">Login</button>
        </div>
       
      </div>
    </div>
   )
}
 
export default Login
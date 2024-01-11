const LoginForm = () => {
  return ( 
    <div className="grid grid-cols-3 w-2/3 max-w-[800px] mt-20 border border-gray-300 shadow-md rounded-lg p-10 h-1/2 max-h-96 mx-auto text-center">
      <h1 className="col-span-3 text-lg">Choose your login method</h1>
      <div className="left flex flex-col gap-6 content-center">
          <div className="login-button">
            <button href="/login/google" className="btn w-full bg-blue-800 text-white">Google</button>
          </div>
          <div className="login-button">
            <button href="/login/google" className="btn w-full bg-blue-800 text-white">Facebook</button>
          </div>
          <div className="login-button">
            <button href="/login/google" className="btn w-full bg-blue-800 text-white">Microsoft</button>
          </div>
        </div>
        <div className="center h-full relative items-center">
          <div className="relative flex-col items-center justify-center">
            <div className="after:block after:bg-black after:w-[1px] after:h-12 after:mx-auto after:my-2">
            </div>
            <div className="after:block after:bg-black after:w-[1px] after:h-12 after:mx-auto after:my-2">
              <span className="text-gray-400">or</span>
            </div>
          </div>
        </div>
        <div className="right flex flex-col gap-6">
          <input type="text" placeholder="Username" className="border border-gray-600 rounded-md p-2"/>
          <input type="text" placeholder="Password" className="border border-gray-600 rounded-md p-2" />
          <button className="btn bg-blue-800 text-white">Login</button>
        </div>
    </div>
   )
}
 
export default LoginForm



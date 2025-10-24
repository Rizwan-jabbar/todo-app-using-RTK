import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../slices/userSlice/userSlice"

function Login () {
    const [formData , setFormData] = useState({email : '' , password : ''})

    const {loginUser , error , success} = useSelector(state => state.users)
    console.log('login user from login page : ' , loginUser);
    const dispatch = useDispatch()
    


    function handleChange (e) {
            setFormData({...formData , [e.target.name] : e.target.value})
    }

    function handleSubmit (e){
        e.preventDefault()
        dispatch(login({user : formData}))
    }


    useEffect(() => {
    if (success) {
        setFormData({ email: '', password: '' });
    }
}, [success]);

    return (
        <>

         <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            

           
        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {
                error && <p className="text-red-600 capitalize text-[13px] mb-4">{error}</p>
            }

             {

                success && <p className="text-green-600 capitalize text-[13px] mb-4">{success}</p>
                
            }

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold"
        >
          Login
        </button>
      </form>
    </div>
        
        </>
    )
}

export default Login
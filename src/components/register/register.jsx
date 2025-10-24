import { useEffect, useState } from "react"
import {useSelector , useDispatch} from 'react-redux'
import { register } from "../slices/userSlice/userSlice"

function Register () {
    const [formData , setFormData] = useState({name : '' , email : '' , password : ''})
    const {users , error , success}  = useSelector(state => state.users)
    console.log('users data from register form : ' , users);
const dispatch = useDispatch()
    

    function handleChange (e) {

        setFormData({...formData , [e.target.name] : e.target.value})

    }

    function handleSubmit (e) {
        e.preventDefault()
        dispatch(register({user : formData}))
        
    }

    useEffect(() => {
      if(success){
          setFormData({name : '' , email : '' , password : ''})
        }
    } , [success])
    return (
        <>

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        { 
            error && <p className="text-red-600 text-[13px] mb-4">{error}</p>
        }
        {
          success && <p className="text-green-600 text-[13px] mb-4">{success}</p>
        }


        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        >
          Register
        </button>
      </form>
    </div>
        
        </>
    )
}

export default  Register
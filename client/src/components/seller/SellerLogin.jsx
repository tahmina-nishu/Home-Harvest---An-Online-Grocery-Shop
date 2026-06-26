import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const SellerLogin = () => {

    const { isSeller, setIsSeller, navigate, axios } = useAppContext()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault();

            // API call for seller login
            const {data} = await axios.post('/api/seller/login', {email, password})

            // check data response
            if(data.success){
                setIsSeller(true)
                navigate('/seller')
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(data.message)
        }
    }

    useEffect(() => {
        if (isSeller) {
            navigate("/seller")
        }
    }, [isSeller, navigate])

    if (isSeller) return null

    return (
        <form
            onSubmit={onSubmitHandler}
            className="min-h-screen flex items-center justify-center text-sm text-gray-600"
        >
            <div className="flex flex-col gap-4 p-8 py-12 w-80 sm:w-88 text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white">

                <p className="text-2xl font-medium text-center">
                    <span className="text-primary">Seller</span> Login
                </p>

                {/* Email */}
                <div className="w-full">
                    <p>Email</p>
                    <input
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
                        required
                    />
                </div>

                {/* Password */}
                <div className="w-full">
                    <p>Password</p>
                    <input
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer"
                >
                    Login
                </button>

            </div>
        </form>
    )
}

export default SellerLogin
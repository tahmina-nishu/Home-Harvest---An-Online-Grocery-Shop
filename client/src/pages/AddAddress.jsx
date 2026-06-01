import React, { useState } from 'react'
import { assets } from '../assets/assets'

// Input Field Component
const InputField = ({
    type,
    placeholder,
    name,
    handleChange,
    address
}) => (
    <input
        className='w-full px-2 py-2.5 border border-gray-500/50 rounded outline-none text-gray-800 focus:border-primary transition'
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={address[name]}
        required
    />
)

const AddAddress = () => {

    const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value
        }))
        console.log(address);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()

    }

    return (
        <div className='mt-29 pb-16'>
            <p className='text-2xl md:text-3xl text-gray-500'>
                Add Shipping <span className='font-semibold text-primary'>Address</span>
            </p>

            <div className='flex flex-col-reverse md:flex-row justify-between mt-10 gap-3'>

                <div className='flex-1 max-w-md'>

                    <form onSubmit={onSubmitHandler} className='space-y-4 text-sm'>

                        {/* First Name & Last Name */}
                        <div className='grid grid-cols-2 gap-3'>
                            <InputField
                                handleChange={handleChange}
                                address={address}
                                name='firstName'
                                type='text'
                                placeholder='First Name'
                            />

                            <InputField
                                handleChange={handleChange}
                                address={address}
                                name='lastName'
                                type='text'
                                placeholder='Last Name'
                            />
                        </div>

                        {/* Email */}
                        <InputField
                            handleChange={handleChange}
                            address={address}
                            name='email'
                            type='email'
                            placeholder='Email Address'
                        />

                        {/* Street */}
                        <InputField
                            handleChange={handleChange}
                            address={address}
                            name='street'
                            type='text'
                            placeholder='Street Address'
                        />

                        {/* City & State */}
                        <div className='grid grid-cols-2 gap-3'>
                            <InputField
                                handleChange={handleChange}
                                address={address}
                                name='city'
                                type='text'
                                placeholder='City'
                            />

                            <InputField
                                handleChange={handleChange}
                                address={address}
                                name='state'
                                type='text'
                                placeholder='State'
                            />
                        </div>

                        {/* Zipcode & Country */}
                        <div className='grid grid-cols-2 gap-3'>
                            <InputField
                                handleChange={handleChange}
                                address={address}
                                name='zipcode'
                                type='text'
                                placeholder='Zip Code'
                            />

                            <InputField
                                handleChange={handleChange}
                                address={address}
                                name='country'
                                type='text'
                                placeholder='Country'
                            />
                        </div>

                        {/* Phone */}
                        <InputField
                            handleChange={handleChange}
                            address={address}
                            name='phone'
                            type='tel'
                            placeholder='Phone Number'
                        />

                        {/* Submit Button */}
                        <button
                            type='submit'
                            className='w-full bg-primary text-white py-3 rounded cursor-pointer hover:opacity-90 transition'
                        >
                            Save Address
                        </button>

                    </form>
                </div>

                <img
                    className='md:mr-16 mb-16 md:mb-0 w-4/5 md:w-2/5'
                    src={assets.add_address_image}
                    alt='Add Address'
                />

            </div>
        </div>
    )
}

export default AddAddress
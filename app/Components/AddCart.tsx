'use client'
import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FaShoppingCart } from "react-icons/fa";

type Props = {
    productId?: number
}

const AddCart = ({productId}:Props) => {
    // const {data: session} = useSession()
    // const id = session?.user?.id
    // const Router = useRouter()

    const handleCart = async () => {
        // try{
        //     const response = await axios.post('/api/cart/add', {
        //         productId: productId,
        //         userId: id
        //     })
        //     .then((response) =>{
        //         Router.push('/cart')
        //         console.log(response)

        //     })
        // }
        // catch(error){
        //     console.log(error)
        // }
    
    }
    return (
        <div  className='flex items-center space-x-4 bg-purple-500 text-white  px-6 p-2 rounded-full cursor-pointer' >
            <span>
                <FaShoppingCart size={24} />
            </span>
            <span className='text-wm'> Añadir</span>
        </div>
    )
}
export default AddCart
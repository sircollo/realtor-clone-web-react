import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
export default function Header() {
    const [pageState, setPageState] = useState("Sign in");
    const auth = getAuth();
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setPageState("Profile");
            }else{
                setPageState("Sign in");
            }
        })
    }, [auth])
    const location = useLocation()
    // console.log(location.pathname)
    const navigate = useNavigate()
    function pathMatchRoute(route){
        if(route === location.pathname){
            return true
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div className='cursor-pointer'>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt='header-logo'width="200" onClick={()=>navigate('/')}/>
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-2 border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"}`} onClick={()=>navigate('/')}>Home</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-2 border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`} onClick={()=>navigate('/offers')}>Offers</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-2 border-b-transparent ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black border-b-red-500"}`} onClick={()=>navigate('/profile')}>{pageState}</li>
                </ul>
            </div>
        </header>
    </div>
  )
}

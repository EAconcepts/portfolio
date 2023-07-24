import React from 'react'
import { useState, useRef } from 'react'
import {useClickAway} from 'react-use'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faMoon, faSun, faHome, faUser, faComputer, faSuitcase, faPenToSquare, faMessage } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { navList } from './SideMenu'

const MobileMenu = ({darkMode, setDarkMode}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMode =()=>{
        setDarkMode(!darkMode)
    }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const ref = useRef(null)
    useClickAway(ref,()=>{
        setIsOpen(false)
    })

  return (
    <div>
        <div className='w-full flex flex-row justify-between'>
            <div ref={ref} className={`relative`}>
                <button
                    className={`block md:hidden m-2 bg-white dark:bg-purple-200 dark:text-gray-700 px-2 py-1 rounded-md text-gray-800`}
                    onClick={toggleMenu}
                >
                    {<FontAwesomeIcon icon={faBars} className=' text-2xl'/> 
                    // <FontAwesomeIcon icon={faClose} className='text-2xl'/>
                }
                </button>

                {isOpen && (
                    <div ref={ref} className={`fixed h-full z-10 top-0 bottom-0 right-0 left-0 w-2/4 bg-white dark:bg-gray-700 shadow-md transform transition duration-500 ${!isOpen ? 'transition duration-200 transform translate-x-0 ease-in' : '-translate-x-0 ease-out'}`} onClick={toggleMenu}>
                        <div className=' absolute transition duration-200 ease-in transform -translate-x-[50%] mx-[50%] my-[50%]'>
                            <button className={`bg-white dark:bg-purple-200 dark:text-gray-700 px-2 py-1 rounded-md text-gray-800`} onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faClose} className='text-2xl'/>
                            </button>
                        </div>
                        {/* <nav className="flex-grow h-full "> */}
                        {navList}
                    </div>
                )}
            </div>
            <div className='flex flex-row items-center gap-1'>
                <button onClick={toggleMode} ref={ref}>
                    <div className='flex flex-row justify-center items-center h-6 w-6 rounded-full border border-slate-800 dark:border-purple-300 dark:text-purple-100'>
                        {!darkMode ? <FontAwesomeIcon icon={faMoon} className=''/> : <FontAwesomeIcon icon={faSun} className=''/>}
                    </div>
                </button>
                <p className='text-gray-800 dark:text-purple-100 pr-2'>EAConcepts</p>
            </div>
        </div>
    </div>
  )
}

export default MobileMenu
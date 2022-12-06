import Link from 'next/link'
import { React, useRef } from 'react'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

const Header = () => {

    const toggleMenu = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }

        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    const ref = useRef()

    return (
        <>
            <main className='sticky top-0 z-10 px-3 md:px-0'>
                <section className='container mx-auto py-6 md:block hidden'>
                    <nav className='flex justify-between items-center'>
                        <div>
                            <Link href='/'><span className='font-extrabold text-2xl text-primary-400'>SaasyFy</span></Link>
                        </div>
                        <div>
                            <ul className='flex gap-10'>
                                <Link href='#'><li className='text-lg font-medium border-b-2 border-transparent transition duration-500 hover:border-primary-400'>About</li></Link>
                                <Link href='#'><li className='text-lg font-medium border-b-2 border-transparent transition duration-500 hover:border-primary-400'>Services</li></Link>
                                <Link href='#'><li className='text-lg font-medium border-b-2 border-transparent transition duration-500 hover:border-primary-400'>Clients</li></Link>
                                <Link href='/blogs'><li className='text-lg font-medium border-b-2 border-transparent transition duration-500 hover:border-primary-400'>Blogs</li></Link>
                                <li><Link href='#' className='py-3 px-8 bg-gradient-to-r from-secondary-400 to-primary-400 rounded text-white'>Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </section>

                <section className='container mx-auto py-6 block md:hidden'>
                    <nav className='flex justify-between items-center'>
                        <div>
                            <span className='font-extrabold text-2xl text-primary-400'>SaasyFy</span>
                        </div>
                        <div>
                            <RxHamburgerMenu onClick={toggleMenu} className='text-2xl'/>
                        </div>
                    </nav>
                </section>

                <div ref={ref} className='h-[100vh] overflow-y-auto absolute top-0 right-0 bg-blue-100 p-10 translate-x-full transition-transform transform w-80 z-20'>
                <span className='font-extrabold text-2xl text-primary-400'>SaasyFy</span>
                <RxCross1 className='text-2xl absolute top-10 right-10' onClick={toggleMenu} />
                <ul className='flex flex-col gap-4 mt-10'>
                    <Link href='#'><li className='text-lg font-medium border-b-2 border-transparent transition duration-500 hover:border-primary-400'>About</li></Link>
                    <Link href='#'><li className='text-lg font-medium border-b-2 border-transparent transition duration-500 hover:border-primary-400'>Services</li></Link>
                    <Link href='#'><li className='text-lg font-medium border-b-2 border-transparent transition duration-500 hover:border-primary-400'>Clients</li></Link>
                    <Link href='/blogs'><li className='text-lg font-medium border-b-2 border-transparent transition duration-500 hover:border-primary-400'>Blogs</li></Link>
                    <Link href='#'><li className='text-lg font-medium border-b-2 border-transparent transition duration-500 hover:border-primary-400'>Contact</li></Link>
                </ul>
            </div>

            </main>
        </>
    )
}

export default Header
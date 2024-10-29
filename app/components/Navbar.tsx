
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import Logo from '../components/logoipsum-295.svg'
const Navbar = () => {
  return (
    <div className='text-white'>
      <div className='p-6 md:p-10 flex items-center justify-between z-50'>
    <div>
    <Link href={`/`} className='cursor-pointer'>
   <Image 
   src={Logo}
   alt='logo'
   width={8}
   height={8}
   className='w-10 h-10 md:w-14 md:h-14'
    />
    </Link>
    </div>
<div className='cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>
<div className='hover:text-gray-50'>Home</div>
<div className='hover:text-gray-50'>About</div>
<div className='hover:text-gray-50'>Services</div>
<div className='hover:text-gray-50'>Ad Design</div>
<div className='hover:text-gray-50'>Templates</div>
<Link href={`authentication`} className='hover:text-teal-500'>
<button>Sign In</button>
</Link>
       </div>
       
      </div>
    </div>
  )
}

export default Navbar

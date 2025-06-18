import { Menu } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { ModeToggle } from '../utilities/theme-switch'

const Nav = () => {
  return (
    <div className='sticky top-0 w-screen h-16 flex items-center justify-between px-6'>
        <div className='text-xl font-bold'>Joshua<span className='text-indigo-700 text-4xl'>.</span></div>
        <ModeToggle />
    </div>
  )
}

export default Nav
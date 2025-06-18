import React from 'react'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { SiDiscord, SiGithub, SiTelegram } from 'react-icons/si'

const Footer = () => {
  return (
            <section className="w-full mx-auto px-4 py-8 flex flex-col items-center justify-center">
                <h2 className="mx-auto text-xs opacity-80 mb-4">Made with ❤ by Joshua Idele</h2>
            <div className='flex items-center justify-center gap-3'>
                <Link href="https://github.com.Coding-With-Josh" target="_blank" rel="noopener noreferrer">
                <div
                 className='p-1 border text-sm dark:text-white dark:bg-neutral-800/30 dark:hover:bg-neutral-800/40 transition-all rounded-full cursor-pointer hover:scale-105 w-fit'
                >
                    <SiGithub className='text-xl' />
                </div>
                </Link>
                <Link href="https://discord.gg/josh_scriptz" target="_blank" rel="noopener noreferrer">
                <div
                 className='p-1 border dark:border-neutral-800 text-sm dark:text-white dark:bg-neutral-800/30 dark:hover:bg-neutral-800/40 transition-all rounded-full cursor-pointer hover:scale-105 w-fit'
                >
                    <SiDiscord className='text-xl' />
                </div>
                </Link>
                <Link href="https://t.me/josh_scriptz" target="_blank" rel="noopener noreferrer">
                <div
                 className='p-1 border dark:border-neutral-800 text-sm dark:text-white dark:bg-neutral-800/30 dark:hover:bg-neutral-800/40 transition-all rounded-full cursor-pointer hover:scale-105 w-fit'
                >
                    <SiTelegram className='text-xl' />
                </div>
                </Link>
            </div>
            </section>
  )
}

export default Footer
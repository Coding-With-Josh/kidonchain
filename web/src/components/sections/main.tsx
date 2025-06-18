import Image from 'next/image'
import React from 'react'
import pic from '@/assets/images/pic.jpg'
import { Separator } from '../ui/separator'
import { Magnetic } from '../ui/magnetic-button'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { SiDiscord, SiGithub, SiTelegram } from 'react-icons/si'

const Main = () => {
    return (
        <div className="flex flex-col items-start justify-center gap-4 h-screen lg:mt-[-3.5rem]">
            <Image
                src={pic}
                alt="Me"

                width={500}
                height={500}
                className="rounded-xl w-auto h-20"
            />
            <div className='flex items-center justify-center gap-2'>
                <h2 className="text-lg font-bold">Hi, I'm Joshua
                </h2>
                <span className='hover:rotate-90 hover:scale-110 transition-all duration-300'>👋</span>
            </div>
            <h2 className="text-md mt-[-2px]">Based in <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-600 dark:via-white via-zinc-400/60 to-green-500'>Nigeria</span></h2>
            <Separator className='w-1/2' />
            <div className='flex flex-col items-start justify-center text-primary/80'>
                <h2 className="text-sm text-white">4+ years</h2>
                <h2 className="text-sm">Blockchain Developer. Mobile Developer. Web Developer</h2>
                <h2 className="text-sm">I build things that make life easier especially for devs like me 😊.</h2>
                <h2 className="text-sm">Currently working on <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 font-bold animate-bounce cursor-pointer hover:scale-105 hover:underline transition-all duration-300">SolanaWearables</span>✨.</h2>
            </div>
            <Separator className='w-1/2' />
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
            <Magnetic>
                <Link href="#">
                    <Button className="rounded-full active:scale-95">
                        <ArrowUpRight className="" />
                        Get in touch now
                    </Button></Link>
            </Magnetic>
        </div>
    )
}

export default Main
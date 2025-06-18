import Image from 'next/image'
import React from 'react'
import pic from '@/assets/images/pic.jpg'
import { Separator } from '../ui/separator'
import { Magnetic } from '../ui/magnetic-button'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

const About = () => {
    return (
        <div className="flex flex-col items-start justify-center gap-4 h-screen ">
            <h2 className="font-bold text-left text-xl md:text-2xl">Who am I?</h2>
            <h2 className="text-md text-left mb-6 w-[26.2rem]">
                I am a 15 year old blockchain developer with a keen interest in building innovative solutions that make life easier for everyone, especially fellow developers.<br/> My journey in the tech world has been driven by a desire to create impactful applications and tools that enhance productivity and user experience.
            </h2>
            <Magnetic> 
                    <Button className="rounded-full active:scale-95">
                        <Mail className="" />
                        Hmmm...
                    </Button>
            </Magnetic>
        </div>
    )
}

export default About
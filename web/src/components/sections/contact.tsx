import React from 'react'
import { Magnetic } from '../ui/magnetic-button'
import { Mail } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const Contact = () => {
    return (
        <section className="min-h-screen max-[]: mx-auto px-4 py-8 flex flex-col items-start justify-center">
            <h2 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100 text-left">
                Contact Me
            </h2>
            <p className="max-w-md mb-6 text-sm text-neutral-700 dark:text-neutral-300">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <form className="space-y-4 w-full max-w-md">
                <div className="grid gap-1">
                    <Label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                    />
                </div>
                <div className="grid gap-1">
                    <Label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Message
                    </Label>
                    <Textarea
                        id="message"
                        placeholder="Your message..."
                        rows={4}
                    />
                </div>
                 <Magnetic> 
                                <Link href="mailto:codewithjoshh@gmail.com">
                                    <Button className="rounded-full active:scale-95," type='submit'>
                                        <Mail className="" />
                                        Email me
                                    </Button></Link>
                            </Magnetic>
            </form>
        </section>
    )
}

export default Contact

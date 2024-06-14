'use client';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {User, MailIcon, ArrowRightIcon, MessageSquare} from 'lucide-react'


const Form = () => {
  return (
        <form action="https://formspree.io/f/xoqggkbl" method="POST" className="flex flex-col gap-y-4">
            {/* input */}
            <div className="relative flex items-center">
                <Input name='Name' type='name' id='name' placeholder='Name' required/>
                <User className="absolute right-6 " size={20} />
            </div>
               {/* email */}
               <div className="relative flex items-center">
                <Input name='Email' type='email' id='email' placeholder='Email id' required/>
                <MailIcon className="absolute right-6 " size={20} />
            </div>
               {/* textarea */}
               <div className="relative flex items-center">
                <Textarea name='Message'  placeholder='Type Your Message Here.' required />
                <MessageSquare className="absolute top-4 right-6 " size={20} />
            </div>
            <Button className='flex items-center gap-x-1 max-w-[166px]'>Let's Talk
                <ArrowRightIcon size={20}/>
            </Button>
        </form>
    )
}

export default Form;
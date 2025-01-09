"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import React, { useState } from "react"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+852) 6666 6666"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "noreply@sunnyso22.dev"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Kowloon, Hong Kong"
    },
]

const Contact = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()

        const data = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }

        const JSONdata = JSON.stringify(data)

        const endpoint = "/api/send"

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        }

        await fetch(endpoint, options)
            .then(
                (response) => {
                    if (response.status === 200) {
                        console.log("Message sent.")
                        setEmailSubmitted(true)
                    }
                }
            )
    }


    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1, 
                transition: {delay: 0.5, duration: 0.5, ease: "easeIn"}
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[60%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent font-medium">Let's Connect</h3>
                            <p className="text-white/60">Please feel free to contact me, my inbox is always open.<br/>
                            Whether you have question or just want to say hi, I will try my best to get back to you!</p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input name="firstname" type="firstname" placeholder="First name" />
                                <Input name="lastname" type="lastname" placeholder="Last name" />
                                <Input name="email" type="email" placeholder="Email address" />
                                <Input name="phone" type="phone" placeholder="Phone number" />
                            </div>
                            <Input name="subject" type="subject" placeholder="Subject" />
                            {/* select */}
                            {/* <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">UI/UX Design</SelectItem>
                                        <SelectItem value="mst">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select> */}
                            {/* textarea */}
                            <Textarea 
                                name="message"
                                className="h-[200px]"
                                placeholder="Type your message here."
                            />
                            {/* button */}
                            <div className="flex flex-row gap-5">
                                <Button size="md" className="max-w-40">
                                    Send Message
                                </Button>
                                {
                                    emailSubmitted && (
                                        <p className="text-green-500 test-sm mt-2">
                                            Email sent successfully!
                                        </p>
                                    )
                                }
                            </div>
                        </form>
                    </div>
                    {/* info */}
                    {/* <div className="flex-1 flex items-center justify-center order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div> */}
                </div>
            </div>
        </motion.section>
    )
}

export default Contact
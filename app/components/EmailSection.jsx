"use client"
import React, { useState } from 'react'
import GithubIcon from "../../public/github-icon.svg"
import LinkedinIcon from "../../public/linkedin-icon.svg"
import Link from "next/link"
import Image from "next/image"

const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()

        const data = {
            email: e.target.email.value,
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
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    Please feel free to contact me, my inbox is always open.
                    Whether you have question or just want to say hi, I will try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/sunnyso22">
                        <Image src={GithubIcon} alt="Github icon"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/sunny-so-273549211/">
                        <Image src={LinkedinIcon} alt="Linkedin icon" />
                    </Link>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="mb-2">
                        <label 
                            htmlFor="email" 
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Your email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="example@mail.com"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label 
                            htmlFor="subject" 
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Your subject"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label 
                            htmlFor="message" 
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Leave your message here..."
                        />
                    </div>
                    <button 
                        type="submit"
                        className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-2 rounded-lg w-full"
                    >
                        Send Message
                    </button>
                    {
                        emailSubmitted && (
                            <p className="text-green-500 test-sm mt-2">
                                Email sent successfully!
                            </p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}

export default EmailSection
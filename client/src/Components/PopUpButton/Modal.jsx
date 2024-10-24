import { useState } from 'react'
import { motion } from "framer-motion"
import { Tooltip } from "@material-tailwind/react";

const Modal = ({ open, setOpen }) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message);
        setMessage("");
        setOpen(false);
    }

    return (
        <>


            <div className="sm:hidden">
                <motion.div
                    className="bg-white fixed right-4 bottom-2 sm:right-0 sm:bottom-0 z-20 flex flex-col rounded-2xl"
                    initial={{ scale: 1, opacity: 0, height: 0, width: 0 }}
                    animate={{
                        x: open ? -30 : 0,
                        y: open ? -30 : 0,
                        width: open && "300px",
                        height: open && "250px",
                        opacity: 1,
                    }}
                    transition={{ type: "spring", duration: 2, ease: "easeInout" }}
                >
                    <motion.div
                        className="pt-4 flex flex-col pl-4 sm:p-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "Tween", duration: 2 }}
                    >
                        <h5 className="cursor-pointer text-4xl sm:text-2xl text-blue-500 font-inter font-medium tracking-tight pt-4 text-start">
                            Hello There 🖐️
                        </h5>
                        <p className="text-lg sm:text-base text-blue-500 font-inter font-medium tracking-tight pt-4 sm:pt-2 text-start">
                            Welcome to our website.
                        </p>
                        <span className="text-md sm:text-base text-blue-500 font-inter font-medium tracking-tight pt-4 sm:pt-2 text-start">
                            Ask us anything
                        </span>
                        <div className="pt-8 sm:pt-2 text-start">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text" name="message"
                                    className="outline-none border-none text-black"
                                    placeholder="Send us a message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}></input>
                            </form>
                        </div>
                        <Tooltip content="Close" placement="left">
                            <div className="absolute top-4 right-4 text-white cursor-pointer" onClick={(e) => setOpen(false)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#fff"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#000"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                        </Tooltip>
                    </motion.div>
                </motion.div>
            </div>


            <div className="sm:block hidden">
                <motion.div
                    className="bg-white fixed right-4 bottom-2 sm:right-0 sm:bottom-0 z-20 flex flex-col rounded-2xl"
                    initial={{ scale: 1, opacity: 0, height: 0, width: 0 }}
                    animate={{
                        x: open ? -30 : 0,
                        y: open ? -30 : 0,
                        width: open && "250px",
                        height: open && "200px",
                        opacity: 1,
                    }}
                    transition={{ type: "spring", duration: 2, ease: "easeInout" }}
                >
                    <motion.div
                        className="pt-4 flex flex-col pl-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "Tween", duration: 2 }}
                    >
                        <h5 className="cursor-pointer text-4xl sm:text-2xl text-blue-500 font-inter font-medium tracking-tight pt-4 text-start">
                            Hello There 🖐️
                        </h5>
                        <p className="text-lg sm:text-base text-blue-500 font-inter font-medium tracking-tight pt-4 sm:pt-2 text-start">
                            Welcome to our website.
                        </p>
                        <span className="text-md sm:text-base text-blue-500 font-inter font-medium tracking-tight pt-4 sm:pt-2 text-start">
                            Ask us anything
                        </span>
                        <div className="pt-8 sm:pt-2 text-start">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text" name="message"
                                    className="outline-none border-none text-black"
                                    placeholder="Send us a message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}></input>
                            </form>
                        </div>
                        <Tooltip content="Close" placement="left">
                            <div className="absolute top-4 right-4 text-white cursor-pointer" onClick={(e) => setOpen(false)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#fff"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#000"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                        </Tooltip>
                    </motion.div>
                </motion.div>
            </div>

        </>
    )
}

export default Modal

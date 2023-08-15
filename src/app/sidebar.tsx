"use client"
import React, { useState } from 'react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSideBar = () => setIsOpen(!isOpen)

    return (
        <div>
            <button
            className="flex text-sm text-white items-center cursor-pointer fixed right-5 top-5 z-50"
             onClick={() => toggleSideBar()}>
                {isOpen ? `Close` : `Open`}
            </button>
            <div className={`top-0 right-0 w-[50%] bg-green-600 pt-20 pl-10 text-white fixed h-full z-40 ease-in-out duration-300 ${isOpen ? "translate-x-0 " : "translate-x-full"}`}
            >
                <ul>
                    <li className="mb-5">
                        <a href="/" className="text-lg">Home</a>
                    </li>
                    <li className="mb-5">
                        <a href="/projects" className="text-lg">Projects</a>
                    </li>
                    <li className="mb-5">
                        <a href="/events" className="text-lg">Events</a>
                    </li>
                    <li className="mb-5">
                        <a href="/contact" className="text-lg">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
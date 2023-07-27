import React from 'react';
import {Logo} from "../assets/icons/Logo";
import {Telegram} from "../assets/icons/Telegram";
import {LinkedIn} from "../assets/icons/LinkedIn";
import {Insta} from "../assets/icons/Insta";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white w-full">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full sm:w-auto mb-4 sm:mb-0">
                        <Logo/>
                        <p className="mt-2">A website for movie enthusiasts.</p>
                    </div>
                    <div className="w-full sm:w-auto">
                        <nav>
                            <ul className="flex space-x-4">
                                <li><a href="#/main/home" className="hover:text-gray-400">Home</a></li>
                                <li><a href="#/main/genre-page/action" className="hover:text-gray-400">Movies</a></li>
                                <li><a href="#/main/contact" className="hover:text-gray-400">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <hr className="my-4 border-gray-800"/>
                    <div className="flex items-center justify-between">
                        <p>&copy; 2023 FindFilmKZ. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <a href="https://t.me/cloudninja18" className="text-gray-400 hover:text-white">
                                <Telegram/>
                            </a>
                            <a href="https://www.linkedin.com/in/shokan-tatayev-46278a285" className="text-gray-400 hover:text-white">
                                <LinkedIn/>
                            </a>
                            <a href="https://www.instagram.com/shoqqan" className="text-gray-400 hover:text-white">
                                <Insta/>
                            </a>
                        </div>
                    </div>
            </div>
        </footer>

);
};


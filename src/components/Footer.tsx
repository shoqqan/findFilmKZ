import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white w-full">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full sm:w-auto mb-4 sm:mb-0">
                        <h2 className="text-2xl font-bold">Film Website</h2>
                        <p className="mt-2">A website for movie enthusiasts.</p>
                    </div>
                    <div className="w-full sm:w-auto">
                        <nav>
                            <ul className="flex space-x-4">
                                <li><a href="#" className="hover:text-gray-400">Home</a></li>
                                <li><a href="#" className="hover:text-gray-400">Movies</a></li>
                                <li><a href="#" className="hover:text-gray-400">Actors</a></li>
                                <li><a href="#" className="hover:text-gray-400">About</a></li>
                                <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <hr className="my-4 border-gray-800"/>
                    <div className="flex items-center justify-between">
                        <p>&copy; 2023 Film Website. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M22 0h-20c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-20c0-1.104-.896-2-2-2zM12 2c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zM17.598 6.586c0 1.536-1.248 2.784-2.784 2.784s-2.784-1.248-2.784-2.784c0-1.538 1.248-2.784 2.784-2.784s2.784 1.246 2.784 2.784zM8.402 17.452c0-4.584 6-4.584 6 0v2.048h-1.6v-1.502c0-1.442-2.4-1.442-2.4 0v1.502h-1.6v-2.048z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M19.254 3.266c-.877.389-1.815.652-2.806.771 1.007-.604 1.78-1.56 2.143-2.698-.942.557-1.987.96-3.104 1.181-.891-.948-2.162-1.54-3.569-1.54-2.7 0-4.887 2.188-4.887 4.886 0 .385.043.76.126 1.121-4.06-.204-7.654-2.148-10.062-5.11-.42.719-.66 1.554-.66 2.453 0 1.692.861 3.183 2.168 4.056-.799-.026-1.547-.245-2.201-.61v.061c0 2.363 1.679 4.331 3.913 4.783-.41.111-.845.17-1.292.17-.314 0-.615-.03-.913-.088.617 1.929 2.402 3.336 4.523 3.373-1.655 1.297-3.737 2.07-6.005 2.07-.39 0-.775-.022-1.156-.066 2.14 1.368 4.668 2.168 7.387 2.168 8.864 0 13.722-7.327 13.722-13.723 0-.209 0-.419-.015-.627.943-.68 1.769-1.532 2.423-2.502l.002-.003z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zM9 18.331v-12.662l12 6.331-12 6.331z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
            </div>
        </footer>

);
};


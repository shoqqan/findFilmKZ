import React from 'react';
import {Insta} from "../assets/icons/Insta";
import {Mail} from "../assets/icons/Mail";
import {Github} from "../assets/icons/Github";
import {LinkedIn} from "../assets/icons/LinkedIn";
import {Telegram} from "../assets/icons/Telegram";

export const Contact = () => {
    const info = [
        {socialWeb: 'Email', nick: "tataev.shokan@gmail.com", url: 'tataev.shokan@gmail.com', icon: <Mail/>},
        {socialWeb: 'Instagram', nick: "@shoqqan", url: 'https://www.instagram.com/shoqqan', icon: <Insta/>},
        {socialWeb: 'Github', nick: "@shoqqan", url: 'https://github.com/shoqqan', icon: <Github/>},
        {socialWeb: 'LinkedIn', nick: "@shoqqan", url: 'https://www.linkedin.com/in/shokan-tatayev-46278a285', icon: <LinkedIn/>},
        {socialWeb: 'Telegram', nick: "@shoqqan", url: 'https://t.me/cloudninja18', icon: <Telegram/>},

    ]
    return (
        <div className={'flex flex-col items-center gap-y-12 text-white'}>
            {info.map((el) => {
                return (
                    <a key={el.socialWeb} href={el.socialWeb==='Email'?`mailto:${el.url}`:`${el.url}`} target={'_blank'}>
                        <div
                            className={'w-80 h-24 flex items-center justify-center bg-gray-900 gap-x-5 border-2 border-purple-800 text-white rounded-2xl transition hover:bg-gray-700 ease-in'}
                        >
                            {el.icon}
                            {el.socialWeb}: {el.nick}
                        </div>
                    </a>
                )
            })}

        </div>
    );
}
    ;


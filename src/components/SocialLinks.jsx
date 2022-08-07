import React from 'react';
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import wantedly from "../assets/wantedly.png";

const SocialLinks = () => {
    const links = [
        {
            id:1,
            child: (
                <>
                    Wantedly<img src={wantedly} width={50} style={{marginLeft:"1.1rem"}} alt="wantedly"/>
                </>
            ),
            href: 'https://www.wantedly.com/id/daisuke_katayama_dbp',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                    GitHub<FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/daisuke23bubu',
        },
        {
            id:3,
            child: (
                <>
                    Facebook<BsFacebook size={30}/>
                </>
            ),
            href: 'https://www.facebook.com/profile.php?id=100080023538524',
        },
        {
            id:4,
            child: (
                <>
                    Mail<HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:daisuke23bubu@gmail.com',
            style: 'rounded-br-md'
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, style}) => (
                <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] font-title hover:rounded-md duration-300 bg-gray-500 ${style}`}>
                <a href={href} className='flex justify-between items-center w-full text-white' target='_blank' rel="noreferrer">
                    {child}
                </a>
                </li>
            )
            )}
        </ul>
    </div>
  )
}

export default SocialLinks

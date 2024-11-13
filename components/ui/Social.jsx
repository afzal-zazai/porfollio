import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/afzal-zazai"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/afzal-ahamed-983833298/"},
    {icon: <FaInstagram/>, path: "https://www.instagram.com/afzal_.zazai/"},
    //{icon: <FaTwitter/>, path: "https://x.com/saaijosh"},//
    
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
                  </Link>
        })}
    </div>
  )
}

export default Social
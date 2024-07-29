import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/IlangoIlangeeran"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/ilangeeran-ilango-1a2bb8258/"},
    {icon: <FaInstagram/>, path: "https://www.instagram.com/ilango_ilangee/"},
    {icon: <FaTwitter/>, path: "https://x.com/saaijosh"},
    
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
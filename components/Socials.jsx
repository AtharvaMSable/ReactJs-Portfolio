"use client";

import { RiLinkedinFill, RiGithubFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";

import Link from "next/link";

const icons = [
{
  path: 'https://www.linkedin.com/in/atharva-sable-2ba525250/',
  name: <RiLinkedinFill/>,
},
{
  path: 'https://github.com/AtharvaMSable',
  name: <RiGithubFill/>,
},
{
  path: '/',
  name: <RiYoutubeFill/>,
},
{
  path: '/',
  name: <RiInstagramFill/>,
},
];

const Socials = ({containerStyles, iconsStyles}) => {
  return  <div className={`${containerStyles}`}>

    {icons.map((icon,index) => {
      return (
        <Link href={icon.path} key={index}>
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      )
    })}

  </div>;
};

export default Socials;

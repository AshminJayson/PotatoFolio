"use client"


import { userdata } from "../data";
import { ReactElement, useState } from "react";
import { obj } from "../data";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Image from "next/image";


// import './Profile.css'

function ProfileCard({userdata}: {userdata: userdata}) {

    const [connectState, setConnectState] = useState('Follow')
    const {username, bling, location, Handles, coverimage, profileimage, techstack} = userdata
    
    function getIcon(key: string) {
        let rs : ReactElement
        if (key == 'instagram')
            rs = <FaInstagram color="purple"/>
        else if(key == 'facebook')
            rs = <FaFacebookF color="blue"/>
        else if(key == 'github')
            rs = <FaGithub color="black"/>
        else 
            rs = <FaLinkedin color="blue" />
        
        return rs
    }

    return (
        <div className="profile-card w-4/5 mx-auto min-h-[20rem] m-12 rounded-2xl border border-solid border-white overflow-hidden">
            {/* <Image src={coverimage} className="object-cover w-full h-40 profile-card-cover"></img> */}
            <Image className="object-cover w-full h-40 profile-card-cover" src={coverimage? coverimage : ''} alt=' ' width={100} height={100}/>
            <div className="flex justify-center gap-4 evenly profile-card-content-section">
                <Image className="profile-card-image w-40 h-40 rounded-[50%] -mt-20 ml-4 object-cover" src={profileimage? profileimage : ' '} alt="" width={100} height={100} ></Image>
                <div className="flex flex-col justify-between gap-4 mt-4 profile-card-content">
                    <h2 className="text-xl font-bold ">{username}</h2>
                    <h4 className="font-normal text-[#7a7a82]">{bling}</h4>
                    <h4 className="font-normal text-[#7a7a82]">📍 {location}</h4>
                    <div className="grid grid-cols-5 gap-4 tech-stack">
                        {techstack.map((item, index) => {
                            return <div className="bg-[#f4f4f5] rounded-lg p-2 font-semibold text-center" key={index}>{item}</div>
                        })}
                    </div>
                    <div className="flex items-center justify-center gap-8 social-links">
                        {Object.keys(Handles? Handles : []).map(key => {
                            return <a href={Handles? Handles[key] : ''} key={key}>{getIcon({key}.key)}</a>
                        })}
                    {/* <button className="save-user"></button> */}
                    <button className="w-20 h-12 leading-3 px-2 py-4 font-normal bg-[#4f46e5] text-white cursor-pointer rounded-lg connect-action">{connectState}</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default function Profile() {
    return (
      <>
        <ProfileCard userdata={obj} />
      </>
    )
}
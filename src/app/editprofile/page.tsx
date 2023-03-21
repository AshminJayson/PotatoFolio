"use client"

import { FaCloudsmith } from 'react-icons/fa'
import { useState } from "react";
import { userdata } from '../../data';
import { obj } from '../../data';
import ProfileEditor from './ProfileEditor';
import SocialsEditor from './SocialsEditor';
// import './EditProfile.css'


function Sidebar({setEditor}: {setEditor : React.Dispatch<React.SetStateAction<string>>}) {

    const currentEditor = (targetid: string) => {
        // Change active element
        document.querySelector('.active')?.classList.remove('active')
        document.querySelector(`#${targetid}`)?.classList.add('active')


        // Setting parent State
        setEditor(targetid)
    }

    return (
        <div className="sidebar-options flex flex-col gap-6 text-xl font-medium shrink-0">
            <div className='active sidebar-div' id='Profile' onClick={() => currentEditor('Profile')}><FaCloudsmith />  Profile</div>
            <div className="sidebar-div"id='Socials' onClick={() => currentEditor('Socials')}><FaCloudsmith />  Socials</div>
            <div className='sidebar-div' id='Portfolio' onClick={() => currentEditor('Portfolio')}><FaCloudsmith />  Portfolio</div>
            <div className='sidebar-div' id='Resume' onClick={() => currentEditor('Resume')}><FaCloudsmith />  Resume</div>
        </div>
    )
}





function EditorSection({currentEditor}: {currentEditor: string}) {
    return(
        <div className='editor-section w-full pl-[25%] pr-[10%] m-auto flex flex-col'>
            {currentEditor == 'Profile' && (
                <ProfileEditor obj={obj}/>
            )}
            {currentEditor == 'Socials' && (
                <SocialsEditor obj={obj} />
            )}

        </div>
    )
}



export default function EditProfile() {


    const [currentEditor, setEditor] = useState<string>('Profile')


    return (
        <div className="profile-edit flex items-start w-screen p-16">
            <Sidebar setEditor = {setEditor} />
            <EditorSection currentEditor={currentEditor} />
        </div>
    )

}
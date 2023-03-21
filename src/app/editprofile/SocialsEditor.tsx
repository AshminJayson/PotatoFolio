import { handles, userdata } from "@/data";
import React from 'react'


export default function SocialsEditor({obj} : {obj: userdata}) {

    const [userEdit, setUserEdit] = React.useState<handles>(obj.Handles)


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEdit({...userEdit, [e.target.name] : e.target.value})
        // console.log(userEdit)
    }

    const submitForm = () => {
        // 
    }


    return (
        <>
            <form action="" className="flex flex-col w-full gap-4">
                <label className="font-medium" htmlFor="github">GitHub</label>
                <input id='github' name='github' className="border rounded-md focus:outline-none p-2" onChange={onChange} type="text" placeholder="Github profile URL"/>
                <label className="font-medium" htmlFor="linkedin">Linkedin</label>
                <input id='linkedin'name='linkedin' className="border rounded-md focus:outline-none p-2" onChange={onChange} type="text" placeholder="Linkedin profile URL"/>
                <label className="font-medium" htmlFor="facebook">Facebook</label>
                <input id='facebook' name='facebook' className="border rounded-md focus:outline-none p-2" onChange={onChange} type="text" placeholder="Facebook profile URL"/>
                <label className="font-medium" htmlFor="instagram">Instagram</label>
                <input id='instagram'name='instagram' className="border rounded-md focus:outline-none p-2" onChange={onChange} type="text" placeholder="Instagram profile URL" />
                <label className="font-medium" htmlFor="dribble">Dribble</label>
                <input id='dribble'name='dribble' className="border rounded-md focus:outline-none p-2" onChange={onChange} type="text" placeholder="Dribble profile URL"/>
                <label className="font-medium" htmlFor="behance">Behance</label>
                <input id='behance'name='behance' className="border rounded-md focus:outline-none p-2" onChange={onChange} type="text" placeholder="Behance profile URL"/>
            </form>
            <div className='self-end mt-10  [&_button]:px-3 [&_button]:py-2 [&_button]:rounded-lg [&_button]:font-medium'>
                    <button className='bg-gray-300 m-2 '>Cancel</button>
                    <button className='bg-[#4f46e5] text-white' onClick={submitForm}>Save Changes</button>
            </div>
        </>
    )
}
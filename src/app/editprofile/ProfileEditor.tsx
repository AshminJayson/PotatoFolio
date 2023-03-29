import { useState } from 'react'
import { userdata } from '../../data';

export default function ProfileEditor({obj} : {obj : userdata}) {
    const [userEdit, setUserEdit] = useState<userdata>(obj)

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserEdit({...userEdit, [e.target.name] : e.target.value })
    }


    const handleProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.files?.[0])
    }

    const deleteProfileImage = () => {
        const cs = {...obj}
        delete cs.profileimage
        setUserEdit({...cs})
        // console.log(obj)   
    }


    return (
        <>
        <div className='mb-6 flex gap-4 [&_button]:px-3 [&_button,label]:py-2 [&_button,label]:rounded-lg [&_button]:font-medium items-center'>
            <img className="bg-slate-600 rounded-[50%] object-cover w-[90px] h-[90px]" src={userEdit.profileimage} alt=""/>
            <input className='hidden' type="file" placeholder='' name="" id="profileimage" onChange={handleProfileImage}/>
            <label htmlFor='profileimage' className='cursor-pointer bg-[#4f46e5] text-white px-3 py-2 rounded-lg font-medium items-center'>Upload new picture</label>
            <button className='bg-gray-300' onClick={deleteProfileImage}>Delete</button>
        </div>
        <form className='editor-form w-full flex flex-col [&_input]:border-gray-200 [&_textarea]:border-gray-200'>
            <label htmlFor="dispname">Display Name</label>
            <input type="text" name='username' onChange={onChange} placeholder={userEdit.username}/>
            <label htmlFor="about">About</label>
            <textarea className='p-4 mt-3 mb-7' name='bling' onChange={onChange} placeholder={userEdit.bling}/>
            <label htmlFor="profession">Profession</label>
            <input type="text" name='profession' onChange={onChange} placeholder={userEdit.profession}/>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" name='dob' onChange={onChange} placeholder={userEdit.dob == ''? 'DD/MM/YYYY' : userEdit.dob}/>
            <label htmlFor="gender">Gender</label>
            <input list='genders' name='gender' onChange={onChange} placeholder={userEdit.gender == '' ? 'What is your gender?' : userEdit.gender}/>
            <datalist id='genders'>
                <option value="Male" />
                <option value="Female" />
                <option value="Non Binary" />
            </datalist>
        </form>
        <h3 className='my-2 text-2xl font-bold'>Section visibility</h3>
        <p className='text-gray-500'>Select which sections and content should show on your profile page.</p>
        <div className="visibility-options">
            <div className="followers-and-following">
                <div>
                    <h3 className='text-lg font-medium'>Follower and Following</h3>
                    <p className='text-sm text-gray-500'>Shows your followers and the users you follow on codedamn</p>
                </div>
                <input className="toggle-button" type="checkbox" name="" id="" />
            </div>
            <div className="xp">
                <div>
                    <h3 className='text-lg font-medium'>XP</h3>
                    <p className='text-sm text-gray-500'>Shows the XP you&apos;ve earned</p>
                </div>
                <input className="toggle-button" type="checkbox" name="" id="" />
            </div>
            <div className="achievement-badges">
                <div>
                    <h3 className='text-lg font-medium'>Achievement Badges</h3>
                    <p className='text-sm text-gray-500'>Shows your relative percentile and proficiency </p>
                </div>
                <input className="toggle-button" type="checkbox" name="" id="" />
            </div>
        </div>
        <div className='self-end  [&_button]:px-3 [&_button]:py-2 [&_button]:rounded-lg [&_button]:font-medium'>
            <button className='m-2 bg-gray-300 '>Cancel</button>
            <button className='bg-[#4f46e5] text-white'>Save Changes</button>
        </div>
        </>
    )
}
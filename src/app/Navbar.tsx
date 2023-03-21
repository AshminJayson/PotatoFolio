import Image from "next/image"
import { FaSearch } from "react-icons/fa"
import { AiOutlineDown, AiOutlineBell } from 'react-icons/ai'
import { IoIosFlash } from 'react-icons/io'

export default function NavBar() {
    return (
        <div className="flex justify-center p-6 navbar" >
            <div className="flex-1">
                <Image src='/codedamn.png' width={100} height={100} alt="codedamn" className=""></Image>
            </div>
            <div className="flex items-center gap-3 p-1 rounded-lg bg-gray-100 searchbar focus-within:outline-none">
                <FaSearch className='mx-1' color="grey"/>
                <input className="border-none bg-gray-100 focus-within:outline-none
                " type="text" placeholder="Search"/>
            </div>
            <div className="flex gap-4 flex-1 justify-end">
                <div className="flex items-center gap-1 p-1 text-sm bg-gray-100 rounded-md text-xs-gray-600">Courses <AiOutlineDown /></div>
                <div className="energy flex items-center">
                    <IoIosFlash size={20}/>
                </div>
                <div className="bell flex items-center ">
                    <AiOutlineBell size={20}/>
                </div>
                <div className="rounded-[50%] overflow-hidden profile-small w-10 h-10">
                    <Image src='/assets/random.jpeg' className="w-full h-full object-cover" width={1000} height={1000} alt='profilimage'></Image>
                </div>
            </div>
        </div>
    )
}
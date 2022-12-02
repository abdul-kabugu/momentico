import React from 'react'
import { AiOutlineDashboard, AiOutlineDatabase } from 'react-icons/ai'
//import {useMoralisQuery, useMoralis} from 'react-moralis'
import { useDispatch,  useSelector} from 'react-redux'
import PlayListCard from '../components/PlayListCard'
import HashLoader from 'react-spinners/HashLoader'
export default function UserPlayLists() {
  const {activeSong, isPlaying} = useSelector((state) => state.player )
   
   // console.log("the  user playlists array", data)

     

       
  return (
    <div className='flex flex-wrap justify-start md:justify-center gap-4 md:gap-8'>
    <div className='w-full h-screen flex items-center justify-center flex-col gap-3'>
    <img  src='/img/coming-son.svg' className='w-[200px]' />
     <p className='text-gray-300 font-semibold text-lg capitalize'>our team is at hard work to ring this feature</p>
</div>
 </div>
  )
}

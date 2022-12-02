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
      
     <h3>hello  world</h3>
 </div>
  )
}

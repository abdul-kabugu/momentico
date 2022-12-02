import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
//import { useMoralisQuery, useMoralis} from 'react-moralis'
import { TrackBar } from '../components';
import {useSelector,} from 'react-redux'
import { FaUserAlt } from 'react-icons/fa';
import { truncateString } from '../hooks/useSubString';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsShare } from 'react-icons/bs';
import { MdAudiotrack } from 'react-icons/md';
import HashLoader from 'react-spinners/HashLoader'
import {TwitterShareButton} from 'react-share'
//import {} from '../redux/features/playerSlice'
export default function PlayListsDetails() {
  
  const {activeSong, isPlaying} = useSelector((state) => state.player)
  const {playListId}  =  useParams()
  
   
   // console.log("my active  song", activeSong)

      const shareUrl = `https://audax-nu.vercel.app/playlists/${playListId}`
  return (
    <div>
      <h1>hellow  world</h1>
    </div>
  )
}

import React from 'react'
import { useState } from 'react'

import { useDispatch,  useSelector} from 'react-redux'
import { SongCard } from '../components'
import PlayListCard from '../components/PlayListCard'
import HashLoader from 'react-spinners/HashLoader'
 import {playPause, setActiveSong} from '../redux/features/playerSlice'
export default function PlayLists() {
 (
  <div className='w-full h-screen flex items-center justify-center flex-col gap-3'>
    <img  src='/img/coming-son.svg' className='w-[200px]' />
     <p className='text-gray-300 font-semibold text-lg capitalize'>our team is at hard work to ring this feature</p>
</div>
  )
}

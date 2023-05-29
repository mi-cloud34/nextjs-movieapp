"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

function Movie({dt}) {
    const router=useRouter();
    console.log("datam",dt);
  return (
    <div onClick={()=>router.push(`/movie/${dt?.id}`)} className='min-w-[470px] relative imageContainer cursor-pointer'>
        <Image width={470} height={300} src={`${process.env.API_IMAGE}/t/p/original/${dt?.backdrop_path||dt?.poster_path}`}/>
        <div className='absolute text-white bottom-0 p-3 w-full h-full flex items-center flex-col justify-center opacity-0 hover:opacity-100 transition-opacity'>
            <div className='text-2xl font-bold'>{dt.title}</div>
            <div>{dt.release_date}-{dt.vote_avarage}</div>
        </div>
    </div>
  )
}

export default Movie
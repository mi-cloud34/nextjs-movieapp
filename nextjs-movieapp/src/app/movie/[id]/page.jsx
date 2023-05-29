import Image from 'next/image';
import React from 'react'

const getMovie=async (id)=>{
    const res=await fetch(`${process.env.API_KEY}/3/movie/${id}?api_key=&language=en-US&page=1`);
    return await res.json();
}

const  Page=async({params})=> {
    const id=params.id;
    const movieDetail=await getMovie(id);
    console.log("detail",movieDetail);
  return ( 
    <div  className='relative p-7 min-h-screen'>
    <Image style={{objectFit:'cover'}} fill src={`${process.env.API_IMAGE}/t/p/original/${movieDetail?.backdrop_path||movieDetail?.poster_path}`}/>
    <div className='absolute'>
        <div className='text-4xl font-bold my-3'>{movieDetail?.title}</div>
        <div className='w-1/2'>{movieDetail?.overview}</div>
        <div className='my-5'>{movieDetail?.release_date}-{movieDetail?.vote_avarage}</div>
        <div className='my-3 border w-32 hover:bg-white hover:text-black rounded-md text-center cursor-pointer text-lg'>Trial</div>
    </div>
</div>
  )
} 

export default Page
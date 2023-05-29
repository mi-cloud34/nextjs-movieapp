import Movie from '@/components/Movie';
import React from 'react'

const Page=async({searchParams})=> {
    const res =  await fetch(`${process.env.API_KEY}/3/${searchParams.genre?"movie/"+searchParams.genre:"trending/all/day"}?api_key=&language=en-US&page=1`,{next:{revalidate:1000}});
    const data=await res.json();
    console.log("data",data);
  return (
    <div className='flex items-center justify-center flex-wrap gap-5'>
        {
            data?.results?.map((dt,i)=>(
                <Movie key={i} dt={dt}/>
            ))
        }  
    </div>
  )
}
export default Page;
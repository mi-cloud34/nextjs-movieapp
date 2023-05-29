import Movie from '@/components/Movie';
import React from 'react'
const searchMovie=async (keyword)=>{
    
    return await res.json();
}

const  Page=async({params})=> {
    const keyword=params.keyword;
    const res=await fetch(`${process.env.API_KEY}/3/search/movie?api_key=&query=${keyword}
    &language=en-US&include_adult=false`);
    const data =res.json();
    console.log("datammmm",data);
  return (
    <div>{
        !data?.results?<div>Aradıgınız Sayfa bulunamadı</div>:
        <div className='flex flex-wrap gap-3'>
            { data?.results?.map((dt,i)=>(
                <Movie key={i} dt={dt}/>
            ))}
        </div>
        }</div>
  )
}

export default Page
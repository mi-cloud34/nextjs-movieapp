/** @type {import('next').NextConfig} */
const nextConfig = {

    env:{
        
        API_IMAGE:process.env.API_IMAGE
    },
    images:{
        domains:["image.tmdb.org"]
    }
}

module.exports = nextConfig

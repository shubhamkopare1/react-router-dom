import React from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()
  return (
    <div>
      GitHub Fallowers : {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  )
}
export default GitHub

export const githubInfoLoader = async ()=>{
  const response =   await fetch("https://api.github.com/users/shubhamkopare1")
  return response.json();
}

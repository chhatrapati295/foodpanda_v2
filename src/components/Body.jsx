import React, { useEffect, useState } from 'react'
import ResCard, { PromotedCard } from './ResCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Swiggy_API } from '../services/utils'

const Body  = () => {
    const[resData,setResData] = useState({})
    const[inpValue , setInpValue] = useState('')
    const LablePromotedCard = PromotedCard(ResCard)
    const getResData = async ()=>{
     try{
      const url = await fetch(Swiggy_API)
      const json = await url.json()
      console.log(json)
      setResData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     }
     catch(err){
      console.log('API NOT CALLED')
     }
    }
    useEffect(()=>{
        getResData()
      }, 2000,[inpValue])
    const getBestRes = ()=>{
        setResData(resData?.filter((res)=>{
            return res?.info?.avgRating > 4.5
        }))
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setInpValue(e.target.value)
             setResData(resData?.filter((res)=>{
                return res?.info?.name?.toLowerCase()?.includes(inpValue?.toLowerCase())
            }))
            console.log(resData)
    }
  return (
    <div className='body topDiv'>
      <div style={{display : 'flex', gap : '0.5rem'}}>
      <form action="" >
        <input type="text" placeholder='Search for restaurant' value={inpValue} onChange={(e)=> handleSubmit(e)} />
        <button onSubmit={(e)=> handleSubmit(e)}>Search</button>
      </form>
      <div style={{display : 'flex', gap : '0.5rem'}}>
        <button onClick={()=> getResData()}>All Restaurant </button>
        <button onClick={()=>getBestRes()}>Best Restaurant ⭐</button>
      </div>
      </div>
      <div className="restaurant_box">
        {resData?.length > 0 ? resData?.map((res)=>{
            return  <Link key={res?.info?.id} to={'/restaurant/' + res?.info?.id}>{res?.info?.avgRating > 4 ? <LablePromotedCard resData={res} key={res?.info?.id} /> : <ResCard resData={res} key={res?.info?.id}/>}</Link>
        }) : <span>Loading...</span>}
      </div>
    </div>
  )
}

export default Body

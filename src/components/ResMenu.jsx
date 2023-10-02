import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useApi from '../services/useApi'
import useOnlineStatus from '../services/useOnlineStatus'
import { log } from 'console'

const ResMenu = () => {
  const params = useParams()
  console.log(params);
  const info = useApi(params.resId)
  // const info = info2[0]?.card?.card?.info

  const onlineStatus = useOnlineStatus()
  if(onlineStatus === false){
    return <h1 className='topDiv'>OOPS ! YOU ARE OFFLINE 🫠</h1>
  }
  if(!info){
    return ;
  }
  return info === null ? <span>Loading...</span> : (
     <div style={{marginTop : '60px'}} className='res_menu'>
      <div>
      <h2>{info[0]?.card?.card?.info?.name}</h2>
      <h2>{info[0]?.card?.card?.info?.id}</h2>
      <p>{info[0]?.card?.card?.info?.cuisines?.join(' , ')}</p>
      <div style={{display : 'flex', gap : '1rem'}}>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + info[0]?.card?.card?.info?.cloudinaryImageId} alt="" />
      <div>
        <h3>Recommended Items  </h3>
        {info[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(item=>{
          return (
            <>
            <div style={{display : 'flex' , flexDirection : 'column'}}>
              <span>{item?.card?.info?.name}</span>
            </div>
            </>
          )
        })}
      </div>
      </div>
      </div>
    </div>
  )
}

export default ResMenu

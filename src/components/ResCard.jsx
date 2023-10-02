import React from 'react'

const ResCard = ({resData}) => {
  return (
    <div className='resCard'>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData?.info?.cloudinaryImageId} alt="res photo" />
      <span style={{fontWeight : '600' , fontSize : '1rem'}}>{resData?.info?.name}</span>
      <span>{resData?.info?.cuisines?.join(' , ')}</span>
      <span>{resData?.info?.avgRating}</span>
      <span>{resData?.info?.costForTwo}</span>
    </div>
  )
}

export const PromotedCard = (ResCard)=>{
  return (props)=>{
    return (
      <div style={{position : 'relative' }}>
        <span style={{position : 'absolute' , padding : '0.3rem ' , backgroundColor : '#fc5c17', left : '0.5rem' , top : '0.5rem' , color : 'white' , borderTopRightRadius : '6px' , borderBottomRightRadius : '6px' , fontSize : '0.6rem'}}>Top Rated ⭐</span>
        <ResCard {...props}/>
      </div>
    )
  }
}

export default ResCard

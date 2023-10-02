import { useEffect, useState } from "react"
import { Menu_API } from "./utils"

const useApi = (resId)=>{
    const [apiData , setApiData] = useState(null)
    useEffect(()=>{
        getMenuData()
    },[])
    const getMenuData = async ()=>{
        try{
            const url = await fetch(Menu_API + resId)
            const json = await url.json()
            setApiData(json?.data?.cards)
        }
        catch(err){
            console.log(err)
        }
    }
    return apiData
}
export default useApi;
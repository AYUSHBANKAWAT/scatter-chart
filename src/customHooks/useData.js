import React from "react"
import { useEffect,useState } from "react"
import * as d3 from 'd3'

const useData = (url) =>{
    const [data, setData] = useState([])
    useEffect(()=>{
        const row = d =>{
            d['Attainment'] = + d['Attainment'] 
            d['Payout'] = + d['Payout']
            return d;
        };
        d3.csv(url,row).then( setData )     
    }
  ,[])
  return data
}

export default useData
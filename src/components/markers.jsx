import React from "react"


const colors = (data)=>{
    if( data['Location']=='a' ){
        return "#FF0000"
    }else if( data['Location']=='b' ){
        return "#00FF00"
    }
    else if( data['Location']=='c' ){
        return "#0000FF"
    }else{
        return "#FFFF00"
    }
}

const Markers = ({data,xscale,yscale,xValue,yValue}) =>
     (data.map((d,index)=> 
     <circle className="bars" style={{fill:colors(d)}}
cx={xscale(xValue(d))}
cy={yscale(yValue(d))}
r={5}     
    />))

export default Markers;
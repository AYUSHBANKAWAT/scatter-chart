import React from "react"

const AxisVertical = ({yscale,innerWidth}) => yscale.ticks().map((tickValue,index) =>(
    <g className="tick"  transform= {`translate(${0},${yscale(tickValue)})`}  >
    <line key={tickValue} x2={innerWidth} stroke='black'/>    
    <text  key={index} x="-6"  style={{textAnchor:"end"}}  dy={"0.32rem"} >{tickValue}</text>
    </g>
  )
 )
export default AxisVertical
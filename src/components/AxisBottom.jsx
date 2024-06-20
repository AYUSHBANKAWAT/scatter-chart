import React from 'react'

const AxisBottom = ({xscale,innerHeight}) => xscale.ticks().map((tickValue,index) =>(
    <g className='tick' key={index+'a'} transform= {`translate(${xscale(tickValue)},0)`} >
    <line key={tickValue} y2={innerHeight} stroke='black'/>
    <text key={index+tickValue} dy={20} y={innerHeight} style={{textAnchor:"middle"}}  >{tickValue}</text>
    </g>
  )
)

export default AxisBottom;
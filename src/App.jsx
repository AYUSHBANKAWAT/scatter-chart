import './App.css'
import React from 'react';
import Markers from './components/markers'
import useData from './customHooks/useData'
import AxisBottom from './components/AxisBottom';
import AxisVertical from './components/AxisVertical';
import { extent, scaleLinear } from 'd3'


const width = 960
const height = 500
const margin = {top:20 ,right:20,bottom:20,left:500};
const innerHeight = height -margin.top-margin.bottom
const innerWidth = width-margin.left-margin.right
const xValue = d=>d['Payout']
const yValue = d=>d['Attainment']
function App() {
  const url = 'https://gist.githubusercontent.com/AYUSHBANKAWAT/c19a0e8cff64e33f6b3360cac1663463/raw/payout-attainment-curve'
  //data callled 
  const data = useData(url)
  console.log(data)

  const xScale = scaleLinear()
  .domain(extent(data,xValue))
  .range([0,innerWidth])

  const yScale = scaleLinear()
  .domain(extent(data,yValue))
  .range([0,innerHeight])
  return (
    <div className="App">
      <svg height={height} width={width}  >
        <g className='graph' transform={`translate(${margin.left},${margin.top})`} >
          <AxisBottom xscale={xScale} innerHeight={innerHeight} />
          <AxisVertical yscale={yScale} innerWidth={innerWidth} />
          <Markers 
          xscale={xScale} 
          yscale={yScale} 
          data={data}
          xValue={xValue}
          yValue={yValue}
          />
        </g>
      </svg>
    </div>
  )
}

export default App

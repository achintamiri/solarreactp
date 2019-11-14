import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines,ChartLabel,VerticalBarSeries,LineSeries,RadialChart,DecorativeAxis,LabelSeries,FlexibleWidthXYPlot,DiscreteColorLegend,FlexibleHeightXYPlot, FlexibleXYPlot} from 'react-vis';
import 'react-vis/dist/style.css';
import {makeVisFlexible} from "react-vis";
const FRadialChart = makeVisFlexible(RadialChart);
const FChartLabel = makeVisFlexible(ChartLabel)

class App extends Component {
  state = {
    todos: [], todos1:[],todos2:[],todos3:[],other:[]
  }
  componentDidMount() {
    fetch('http://127.0.0.1:8000/yearly87')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)



      fetch('http://127.0.0.1:8000/dailymonth87')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos1: data })
      console.log(this.state.todos1)
    })
    .catch(console.log)

   fetch('http://127.0.0.1:8000/yearly790')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos2: data })
      console.log(this.state.todos2)
    })
    .catch(console.log)



      fetch('http://127.0.0.1:8000/dailymonth790')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos3: data })

      console.log(this.state.todos3)
    })
    .catch(console.log)


  }
  // [...]
  render() {
      const dat = this.state.todos.map((entry) => ({x: entry.Month, y: entry.Rating}))
      const datnode2 = this.state.todos2.map((entry) => ({x: entry.Month, y: entry.Rating}))
      const try2 = this.state.todos.map(({Rating}) =>Rating )
     const  try1 = try2.map(Number);

      const t1 =this.state.todos2.map(({Rating}) =>Rating )
      const t2 =  t1.map(Number);


var totalnode1 =0

      for (var i = 0; i < try1.length; i++) {
          if(try1[i]>=0){
    totalnode1 += try1[i]}
}
      var totalnode2 =0

      for (var i = 0; i < t2.length; i++) {
          if(t2[i]>=0){
    totalnode2 += t2[i]}
}
      const calx = (totalnode1/(totalnode1+totalnode2))*100
      const caly= (totalnode2/(totalnode1+totalnode2))*100
const myData = [{ angle:caly}, {angle: calx}]



      /*const dat1 = this.state.todos1.map((entry) => ({x: entry.Timestamp, y: entry.Rating}))*/
    const sh = this.state.todos1.map(({Rating}) =>Number(Rating.toFixed(2)) )

      const shh = this.state.todos1.map(({Timestamp}) =>Timestamp )
const x1 = [shh[0]];const x2 = [shh[8]];const x3 = [shh[16]];const x4 = [shh[24]];const x5 = [shh[32]];const x6 = [shh[40]];
const x7 = [shh[48]];const x8 = [shh[56]];const x9 = [shh[64]];const x10 = [shh[72]];const x11 = [shh[80]];const x12 = [shh[88]];

const y1 = [sh[0]];const y2 = [sh[8]];const y3 = [sh[16]];const y4 = [sh[24]];const y5 = [sh[32]];const y6 = [sh[40]];
const y7 = [sh[48]];const y8 = [sh[56]];const y9 = [sh[64]];const y10 = [sh[72]];const y11 = [sh[80]];const y12 = [sh[88]];

      const month1 =  [{x:x1,y:y1},{x:x2,y:y2},{x:x3,y:y3},{x:x4,y:y4},{x:x5,y:y5},{x:x6,y:y6},{x:x7,y:y7},{x:x8,y:y8},{x:x9,y:y9},{x:x10,y:y10},{x:x11,y:y11},{x:x12,y:y12}]

      /*const dat1node2 = this.state.todos3.map((entry) => ({x: entry.Timestamp, y: entry.Rating}))*/
      const sh2 = this.state.todos3.map(({Rating}) =>Number(Rating.toFixed(2)) )
      const shh2 = this.state.todos3.map(({Timestamp}) =>Timestamp )
      const xx1 = [shh2[0]];const xx2 = [shh2[8]];const xx3 = [shh2[16]];const xx4 = [shh2[24]];const xx5 = [shh2[32]];const xx6 = [shh2[40]];
const xx7 = [shh2[48]];const xx8 = [shh2[56]];const xx9 = [shh2[64]];const xx10 = [shh2[72]];const xx11 = [shh2[80]];const xx12 = [shh2[88]];

const yy1 = [sh2[0]];const yy2 = [sh2[8]];const yy3 = [sh2[16]];const yy4 = [sh2[24]];const yy5 = [sh2[32]];const yy6 = [sh2[40]];
const yy7 = [sh2[48]];const yy8 = [sh2[56]];const yy9 = [sh2[64]];const yy10 = [sh2[72]];const yy11 = [sh2[80]];const yy12 = [sh2[88]];

const month2 =  [{x:xx1,y:yy1},{x:xx2,y:yy2},{x:xx3,y:yy3},{x:xx4,y:yy4},{x:xx5,y:yy5},{x:xx6,y:yy6},{x:xx7,y:yy7},{x:xx8,y:yy8},{x:xx9,y:yy9},{x:xx10,y:yy10},{x:xx11,y:yy11},{x:xx12,y:yy12}]

      const labelData = month1.map((d, idx) => ({
  x: d.x,
  y: Math.max(month1[idx].y,month2[idx].y) ,xOffset:-9,yOffset:-20,style: {fontSize: 12, fontWeight: 620}
}));


      const axisStyle = {
    ticks: {
      fontSize: '12px',
      color: '#333',
        text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600},
    },
    title: {
      fontSize: '20px',
      color: 'red',
    }
  };

return (
    <div>
        <div style={{paddingLeft: '70vw'}}>Achin</div>
        <div style={{paddingLeft: '10vw',overflow:'hidden',zIndex:"0"}}>eeee</div>
        <div  style={{display: "flex", width: "150%", height: "40%" ,position: "fixed",}} >
                 <FRadialChart   data={myData}/>
        </div>


        <div  style={{display: "flex", width: "50%", height: "50%", background: "black" ,position: "fixed",}} >
          <FlexibleXYPlot margin={{left:80,bottom:100}}  xType="ordinal">
                        <XAxis  style={axisStyle}  tickLabelAngle={-45}/>
                        <YAxis style={axisStyle} />
                        <VerticalBarSeries  data={dat}/>
                        <VerticalBarSeries data={datnode2}/>
                        <DiscreteColorLegend items={['PV Solar',]} orientation="vertical"/>
             </FlexibleXYPlot>
        </div>


       <div  style={{display: "flex", width: "100%", height: "100%",position: "fixed",}}>
            <FlexibleXYPlot margin={{left:80,top:360,bottom:190,right:489}} yDomain={[0,4500]} xType="ordinal">
                        <XAxis title='Time' tickLabelAngle={-45}/>
                        <YAxis  style={axisStyle} />
                        <ChartLabel text="Time" includeMargin={false} xPercent={0.4025} yPercent={3.0} className="alt-x-label" style={{fontWeight: 'bold', textAnchor: 'middle', fontsize: 50, fill: "#6b6b76", fontFamily: "sans-serif"}}/>
                        <VerticalBarSeries data={month1}/>
                        <VerticalBarSeries data={month2}/>
                         <LineSeries data={month1}/>
                        <LineSeries data={month2}/>
                        <LabelSeries data={labelData} getLabel={d => d.y}/>
            </FlexibleXYPlot>
        </div>

         <div  style={{display: "flex", width: "50%", height: "50%", background: "white" ,position: "fixed",}} >
            <FlexibleXYPlot margin={{left:80,bottom:100}} xType="ordinal">
                         <XAxis  style={axisStyle} tickLabelAngle={-45}/>
                        <YAxis style={axisStyle}/>
                        <VerticalBarSeries data={dat}/>
                        <VerticalBarSeries data={datnode2}/>
                      <DiscreteColorLegend items={['PV Solar',]} orientation="vertical"/>
            </FlexibleXYPlot>
        </div>

      </div>


    )

  }


}

export default App;

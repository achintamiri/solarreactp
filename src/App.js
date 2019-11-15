import React, { Component } from 'react';
import { XAxis, YAxis, HorizontalGridLines,VerticalBarSeries,LineSeries,RadialChart,LabelSeries,DiscreteColorLegend,makeVisFlexible, FlexibleXYPlot} from 'react-vis';
import 'react-vis/dist/style.css';
const FRadialChart = makeVisFlexible(RadialChart);

class App extends Component {state = {todos: [], todos1:[],todos2:[],todos3:[]}
   componentDidMount()

      {
               fetch('http://127.0.0.1:8000/yearly87')
                    .then(res => res.json())
                    .then((data) => {this.setState({ todos: data })
               console.log(this.state.todos)}).catch(console.log)

               fetch('http://127.0.0.1:8000/dailymonth87')
                    .then(res => res.json())
                    .then((data) => {this.setState({ todos1: data })
               console.log(this.state.todos1)}).catch(console.log)

               fetch('http://127.0.0.1:8000/yearly790')
                    .then(res => res.json())
                    .then((data) => {
                     this.setState({ todos2: data })
                console.log(this.state.todos2)}).catch(console.log)

               fetch('http://127.0.0.1:8000/dailymonth790')
                    .then(res => res.json())
                    .then((data) => {
                    this.setState({ todos3: data })
                console.log(this.state.todos3)}).catch(console.log)
      }
  render()
      {
          var totalnode1 =0;var totalnode2 =0;
          var today = new Date();
          today.setDate(today.getDate() - 1)
          var currentyear = today.getFullYear()
          var currentdate=today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();


          const dat = this.state.todos.map((entry) => ({x: entry.Month, y: entry.Rating}))
          const datnode2 = this.state.todos2.map((entry) => ({x: entry.Month, y: entry.Rating}))

          const try1 = (this.state.todos.map(({Rating}) =>Rating )).map(Number)//const  try1 = try2.map(Number);
          const t2 =(this.state.todos2.map(({Rating}) =>Rating )).map(Number)//const t2 =  t1.map(Number);
          for (var i = 0; i < try1.length; i++) {if(try1[i]>=0){totalnode1 += try1[i]}}
          for (var j = 0; j < t2.length; j++) {if(t2[j]>=0){totalnode2 += t2[j]}}
          const calx = ((totalnode1/(totalnode1+totalnode2))*100).toFixed(1)
          const caly= ((totalnode2/(totalnode1+totalnode2))*100).toFixed(1)
          const myData = [{  label:caly,color: 'orange',angle:caly}, { label:calx,color:'blue',angle: calx}]

          const sh = this.state.todos1.map(({Rating}) =>Number(Rating.toFixed(1)) );const shh = this.state.todos1.map(({Timestamp}) =>Timestamp )
          const sh2 = this.state.todos3.map(({Rating}) =>Number(Rating.toFixed(1)) );const shh2 = this.state.todos3.map(({Timestamp}) =>Timestamp )

          const x1 = [shh[0]];const x2 = [shh[4]];const x3 = [shh[8]];const x4 = [shh[12]];const x5 = [shh[16]];const x6 = [shh[20]];const x7 = [shh[24]];const x8 = [shh[28]];const x9 = [shh[32]];const x10 = [shh[36]];const x11 = [shh[40]];const x12 = [shh[44]];const x13 = [shh[48]];const x14 = [shh[52]];const x15 = [shh[56]];const x16 = [shh[60]];const x17 = [shh[64]];const x18 = [shh[68]];const x19 = [shh[72]];const x20 = [shh[76]];const x21= [shh[80]];const x22 = [shh[84]];const x23 = [shh[88]];const x24 = [shh[92]];
          const y1 = [sh[0]];const y2 = [sh[4]];const y3 = [sh[8]];const y4 = [sh[12]];const y5 = [sh[16]];const y6 = [sh[20]];const y7 = [sh[24]];const y8 = [sh[28]];const y9 = [sh[32]];const y10 = [sh[36]];const y11 = [sh[40]];const y12 = [sh[44]];const y13 = [sh[48]];const y14 = [sh[52]];const y15 = [sh[56]];const y16 = [sh[60]];const y17 = [sh[64]];const y18 = [sh[68]];const y19 = [sh[72]];const y20 = [sh[76]];const y21= [sh[80]];const y22 = [sh[84]];const y23 = [sh[88]];const y24 = [sh[92]];


          const xx1 = [shh2[0]];const xx2 = [shh2[4]];const xx3 = [shh2[8]];const xx4 = [shh2[12]];const xx5 = [shh2[16]];const xx6 = [shh2[20]];const xx7 = [shh2[24]];const xx8 = [shh2[28]];const xx9 = [shh2[32]];const xx10 = [shh2[36]];const xx11 = [shh2[40]];const xx12 = [shh2[44]];const xx13 = [shh2[48]];const xx14 = [shh2[52]];const xx15 = [shh2[56]];const xx16 = [shh2[60]];const xx17 = [shh2[64]];const xx18 = [shh2[68]];const xx19 = [shh2[72]];const xx20 = [shh2[76]];const xx21= [shh2[80]];const xx22 = [shh2[84]];const xx23 = [shh2[88]];const xx24 = [shh2[92]];
          const yy1 = [sh2[0]];const yy2 = [sh2[4]];const yy3 = [sh2[8]];const yy4 = [sh2[12]];const yy5 = [sh2[16]];const yy6 = [sh2[20]];const yy7 = [sh2[24]];const yy8 = [sh2[28]];const yy9 = [sh2[32]];const yy10 = [sh2[36]];const yy11 = [sh2[40]];const yy12 = [sh2[44]];const yy13 = [sh2[48]];const yy14 = [sh2[52]];const yy15 = [sh2[56]];const yy16 = [sh2[60]];const yy17 = [sh2[64]];const yy18 = [sh2[68]];const yy19 = [sh2[72]];const yy20 = [sh2[76]];const yy21= [sh2[80]];const yy22 = [sh2[84]];const yy23 = [sh2[88]];const yy24 = [sh2[92]];

          const month1 =  [{x:x1,y:y1},{x:x2,y:y2},{x:x3,y:y3},{x:x4,y:y4},{x:x5,y:y5},{x:x6,y:y6},{x:x7,y:y7},{x:x8,y:y8},{x:x9,y:y9},{x:x10,y:y10},{x:x11,y:y11},{x:x12,y:y12},{x:x13,y:y13},{x:x14,y:y14},{x:x15,y:y15},{x:x16,y:y16},{x:x17,y:y17},{x:x18,y:y18},{x:x19,y:y19},{x:x20,y:y20},{x:x21,y:y21},{x:x22,y:y22},{x:x23,y:y23},{x:x24,y:y24}]
          const month2 =  [{x:xx1,y:yy1},{x:xx2,y:yy2},{x:xx3,y:yy3},{x:xx4,y:yy4},{x:xx5,y:yy5},{x:xx6,y:yy6},{x:xx7,y:yy7},{x:xx8,y:yy8},{x:xx9,y:yy9},{x:xx10,y:yy10},{x:xx11,y:yy11},{x:xx12,y:yy12},{x:xx13,y:yy13},{x:xx14,y:yy14},{x:xx15,y:yy15},{x:xx16,y:yy16},{x:xx17,y:yy17},{x:xx18,y:yy18},{x:xx19,y:yy19},{x:xx20,y:yy20},{x:xx21,y:yy21},{x:xx22,y:yy22},{x:xx23,y:yy23},{x:xx24,y:yy24}]

          const labelData = month1.map((d, idx) => ({x: d.x, y: Math.max(month1[idx].y,month2[idx].y) ,xOffset:-9,yOffset:-20,style: {fontSize: 11, fontWeight: 620}}));

return (
        <div>
            <div><div style={{paddingLeft: '30vw',zIndex:"1",position:"relative"}}><h1>Energy Balance Data for Year {currentyear}</h1></div></div>



            <div  style={{display: "flex", left:60,top:10,width: "50vw", height: "30vw", background: "white" ,position: "relative",}} >
                  <div style={{paddingTop: '15vw',paddingLeft: '0vw',zIndex:"1",position:"relative"}}><h6>Kw/Hr</h6></div>
                  <FlexibleXYPlot margin={{left:80,bottom:100,top:90}} xType="ordinal" >
                       <XAxis  tickLabelAngle={-30} style={{ticks: {fontSize: '13px', text: {stroke: 'none', fill: '#6b6b76', fontWeight: 700}}}} />
                       <YAxis style={{ticks: {fontSize: '13px', color: '#000000', text: {stroke: 'none', fill: '#6b6b76', fontWeight: 700},}}}/>
                       <HorizontalGridLines />
                       <DiscreteColorLegend colors={['blue','orange']}items={['Node1','Node2']} height={900} width={500} orientation="horizontal"/>
                       <VerticalBarSeries data={dat}color={"blue"}/><VerticalBarSeries data={datnode2} color={"orange"}/>

                  </FlexibleXYPlot>
            </div>
            <div style={{paddingLeft:'14vw',paddingTop:'0vw',zIndex:"1",position:"relative"}}><h2>Monthly Energy Balance Data for Year {currentyear}</h2></div>




             <div  style={{display: "flex", left:80,top:60,width: "80vw", height: "35vw", background: "white" ,position: "relative",}} >
                    <div style={{paddingTop: '15vw',paddingLeft: '0vw',zIndex:"1",position:"relative"}}><h6>Kw/Hr</h6></div>
                    <FlexibleXYPlot margin={{left:100,bottom:100,top:50}}  yDomain={[0,Math.max(y24,yy24)]} xType="ordinal" >
                        <XAxis  style={{ticks: {fontSize: '13px', text: {stroke: 'none', fill: '#6b6b76', fontWeight: 700}}}} />
                        <YAxis style={{ticks: {fontSize: '13px', text: {stroke: 'none', fill: '#6b6b76', fontWeight: 700}}}} />
                        <DiscreteColorLegend colors={['blue','orange']}items={['Node1','Node2']} orientation="horizontal"/>
                        <VerticalBarSeries data={month1}color={"blue"}/><VerticalBarSeries data={month2}color={"orange"}/>
                         <LineSeries data={month1}/><LineSeries data={month2}/>
                         <LabelSeries data={labelData} getLabel={d => d.y}/>
                    </FlexibleXYPlot>
             </div>
             <div style={{paddingLeft:'28vw',paddingTop:'0vw',zIndex:"1",position:"relative"}}><h5>Hourly Consumption</h5></div>
             <div style={{paddingLeft:'35vw',paddingTop:'0vw',zIndex:"1",position:"relative"}}><h2>Daily Energy Balance on {currentdate}</h2></div>





            <div  style={{display: "flex", left:900,bottom:1270,width: "50vw", height: "30vw", background: "white" ,position: "relative",}} >
                    <div>
                            <FRadialChart   data={myData} colorType="literal"showLabels={true}  labelsRadiusMultiplier={0.8}labelsStyle={{ fontSize: 22, fill: 'white' }}/>
                            <div style={{paddingLeft:'12vw',paddingTop:'2vw',paddingBottom:'10vw',zIndex:"1",position:"relative"}}><DiscreteColorLegend colors={['blue','orange']}items={['Node1','Node2']} orientation="horizontal"/>
                             <div style={{paddingLeft:'0vw',paddingTop:'0vw',zIndex:"1",position:"relative"}}><h2>Annual Energy Balance Data for Year {currentyear}</h2></div>
                            </div>
                    </div>
             </div>


        </div>


    )

  }


}

export default App;

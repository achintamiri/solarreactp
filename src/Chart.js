import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

const Chart = (props) => {

    const dataArr = props.todos.map((d)=> {return {x: d.Month,y:d.Rating}});

    return (
        const dataArr = props.todos.map((d)=> {return {x: d.Month,y:d.Rating}});
        <XYPlot
            xType="ordinal"
            width={1000}
            height={500}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Month and year " />
            <YAxis title="Energy COndumption Rating" />
                <LineSeries
                    todos1={dataArr}
                    style={{stroke: 'violet', strokeWidth: 3}}/>
        </XYPlot>
    );
}

export default Chart;
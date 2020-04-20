import React, { Component } from 'react';
import { ColumnChart } from 'react-chartkick';
import 'chart.js'
class Updates extends Component {
	render() {
        return(
            <div style={{"margin-top" : "250px"}}>
            
        <ColumnChart data={[["United States", 764,265], ["Spain", 198,674], ["Italy", 178,972],
        ["France", 152,894],["India", 17,615],["Germany", 145,743],["China", 82,747],["Switzerland", 27,740],["South Korea", 10,674],["Saudi Arabia", 9,362]]} />
        </div>);
	}
}
export default Updates;          
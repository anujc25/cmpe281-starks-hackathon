import React, {Component} from 'react';
import * as API from '../Api/Api';

class OSAccessInfo extends Component{
    state = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        data: [0, 10, 5, 2, 20, 30, 45]
    }
        
    componentDidMount(){
        window.drawAccessInfoChart(this.state.labels, this.state.data, "OSAccessInfo", "OS Access Info");
    }


    render(){


        return(
            <div className="OSAccessInfo">
                <canvas id="OSAccessInfo"></canvas>
            </div>
        )
    }
};

export default OSAccessInfo;
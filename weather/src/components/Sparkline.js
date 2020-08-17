import _ from 'lodash'
import React from 'react'
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';

const Sparkline = (props) => {
  const  average=(data)=>{
        return _.round(_.sum(data)/data.length)
      }  
    return (
        <div>
             <Sparklines data={props.data}  style={{ fill: "none" }}>
              <SparklinesLine color={props.color} />
              <SparklinesReferenceLine type="mean" />
             </Sparklines>
                <div>{average(props.data)} {props.units}</div>
        </div>
    )
}

export default Sparkline

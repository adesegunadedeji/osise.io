import React from 'react';
import {Bar} from 'react-chartjs-2';
  const Chart = (props)=>{

    const state = {
        labels: [`${props.reviews.map((index)=>
         index.name
        )}`],
        datasets: [
          {
            label: 'Employee Performances',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [10,20,`${props.reviews.map(index =>
            index.score
            )}`, 10,20]
          }
        ]
      }
      return(
          <Bar 
          data={state}
          options={{
            title:{
              display:true,
              text:'Employee Performance in Q1',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          >

          </Bar>
      )
  }
  export default Chart;
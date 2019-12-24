import React from 'react';
import {VictoryArea, VictoryChart, VictoryGroup} from 'victory';
import './SmallCharts.css';

export default function SmallChart() {

      return (
        <VictoryChart 
        width={400} 
        height={400}
        style = {{
          line: {display: 'none'}
        }}
        >
          <VictoryGroup
            style={{
              data: { strokeWidth: 3, fillOpacity: 0.4 }
            }}
          >
            <VictoryArea
              style={{
                data: { fill: "rgb(93, 157, 225)", stroke: "rgb(93, 157, 225)" },
              }}
              data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 },
                { x: 1, y: 2 },
                { x: 5, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
             
              ]}
            />
            
          </VictoryGroup>
        </VictoryChart>
      );
  }

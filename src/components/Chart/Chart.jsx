import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

let Chart = props => {
  let maxValue = props.dataPoints.reduce((max, dataPoint) => {
    return max > dataPoint.value ? max : dataPoint.value;
  });

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

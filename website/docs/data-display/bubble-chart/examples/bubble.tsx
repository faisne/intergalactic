import React from 'react';
import { Plot, Bubble, XAxis, YAxis, Tooltip } from '@semcore/ui/d3-chart';
import { scaleLinear } from 'd3-scale';
import { Text } from '@semcore/ui/typography';

export default () => {
  const MARGIN = 40;
  const width = 500;
  const height = 300;

  const xScale = scaleLinear()
    .range([MARGIN, width - MARGIN])
    .domain([0, 10]);

  const yScale = scaleLinear()
    .range([height - MARGIN, MARGIN])
    .domain([0, 10]);

  return (
    <Plot data={data} scale={[xScale, yScale]} width={width} height={height}>
      <YAxis>
        <YAxis.Ticks />
        <YAxis.Grid />
      </YAxis>
      <XAxis>
        <XAxis.Ticks />
      </XAxis>
      <Bubble x="x" y="y" value="value" />
      <Tooltip>
        {({ xIndex }) => {
          return {
            children: (
              <>
                <Tooltip.Title>Data</Tooltip.Title>
                <Text tag="div">X axis {data[xIndex].x}</Text>
                <Text tag="div">Y axis {data[xIndex].y}</Text>
                <Text tag="div">Value {data[xIndex].value}</Text>
              </>
            ),
          };
        }}
      </Tooltip>
    </Plot>
  );
};

const data = Array(10)
  .fill({})
  .map((d, i) => ({
    x: Math.random() * 10,
    y: Math.random() * 10,
    value: Math.random() * 1000,
  }));
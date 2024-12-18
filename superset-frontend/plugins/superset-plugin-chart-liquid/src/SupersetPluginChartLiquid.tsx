import React, { useMemo } from 'react';
import { Liquid } from '@ant-design/charts';

const LiquidChart = (props: any) => {
  const { height, width, shape ,data} = props;
  console.log('LiquidChart props', props);
  console.log('LiquidChart props', { height, width, shape });

  //get first key
  const keys = Object.keys(data[0]);
  console.log('LiquidChart keys', keys);
  const key = keys[0];
  console.log('LiquidChart key', key);
  //parse key 
  const percentage = parseFloat(data[0][key]);
  console.log('LiquidChart percentage', percentage);
  const config = useMemo(
    () => ({
      percent: percentage/100,
      outline: {
        border: 2,
        distance: 4,
      },
      shape,
      wave: {
        length: 128,
      },
      width,
      height,
      autoFit: false,
    }),
    [height, width, percentage, shape],
  );

  return <Liquid {...config} />;
};

export default LiquidChart;

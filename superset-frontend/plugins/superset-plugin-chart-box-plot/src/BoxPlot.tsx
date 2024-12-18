import React, { useState } from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { AgCharts } from 'ag-charts-react';
import "ag-charts-enterprise";


// Define the props type explicitly
type ChartExampleProps = {
  data: any;
  header: string;
};

const ChartExample = ({ data, header }: ChartExampleProps) => {
  console.log("data in chart", data);
  const groupedData = data.reduce((acc: any, item: any) => {
    if (!acc[item.Summery]) {
      acc[item.Summery] = [];
    }
    acc[item.Summery].push(item);
    return acc;
  }, {});

  // get the  for each group  min , max , q1, q3 and median, 

  const boxPlotData = Object.keys(groupedData).map((key) => {
    const group = groupedData[key];

    const scores = group.reduce((acc: any, item: any) => {
      for (let i = 0; i < item.count; i++) {
        acc.push(item.value);
      }
      return acc;
    }, []);

    scores.sort((a: any, b: any) => a - b);
    const min = scores[0];
    const max = scores[scores.length - 1];
    const median = scores[Math.floor(scores.length / 2)];
    const q1 = scores[Math.floor(scores.length / 4)];
    const q3 = scores[Math.floor((scores.length / 4) * 3)];
    return {
      Summery: key,
      min,
      q1,
      median,
      q3,
      max,
    };
  });
  console.log("boxPlotData", boxPlotData);
  //sort by alphabet
  boxPlotData.sort((a: any, b: any) => a.Summery.localeCompare(b.Summery));

  const [options, setOptions] = useState({
    title: {
      text: header,
    },
    subtitle: {
      text: "",
    },
    data: boxPlotData,
    series: [
      {
        type: "box-plot",
        yName: "Employee Salaries",
        xKey: "Summery",
        minKey: "min",
        q1Key: "q1",
        medianKey: "median",
        q3Key: "q3",
        maxKey: "max",
        fill: header === "Trust Foundations" || header === "Trust Worthiness" || header === "Trust Propensity" ? "#fcedac" :
              header === "Predictability" || header === "Shared Values" || header === "Reliability" ? '#a793bf' :
              header === "System" || header === "Structures" || header === "Processes" ? '#e6a717' :
              header === "Habits" || header === "Practices" || header === "Learning & Feedback" ? '#7fc3c3' :
              "#7fc3c3",

        stroke: "black",
        //width
        lineWidth: 2,
        whisker: {
          stroke: "black",
          strokeWidth: 2,
        },
      },
    ],
  });

  return <AgCharts options={options}
    style={{
      width: '100%', color: 'black', height: '500px',
      border: '1px solid #03a690', borderRadius: '10px'
    }}

  />;
};


const BoxPlot = (props: any) => {
  return <ThemeProvider theme={MuiTheme}>
    <Box sx={{ padding: '2rem', display: 'flex', flexDirection: 'column' }} display='flex' flexBasis='column'>
      <ChartExample data={props.data} header={props.headerText} />
    </Box>
  </ThemeProvider>
};
const MuiTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
  },
});
export default BoxPlot;
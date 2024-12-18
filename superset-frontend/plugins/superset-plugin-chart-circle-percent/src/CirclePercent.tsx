import React from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import CircularPercentageChart from './components/PieClickNoSnap';


const BoxPlot = (props: any) => {
  console.log("data in chart", props.data);
  const data= props.data
  const percentage = data[0].value

//make it int
  const percentageInt = parseInt(percentage)
  return <ThemeProvider theme={MuiTheme}>
    <Box sx={{ padding: '2rem', display: 'flex', flexDirection: 'column' }} display='flex' flexBasis='column'>
      <CircularPercentageChart percentage={percentageInt} label='Structural' />
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
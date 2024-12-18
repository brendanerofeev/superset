import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Typography, Box } from '@mui/material';

export default function CircularPercentageChart({
  percentage,
  label,
}: {
  percentage: number;
  label: string;
}) {
  const data = [
    { label: 'Completed', value: percentage },
    { label: 'Remaining', value: 100 - percentage },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="h6" color="black" textAlign={'center'} fontFamily={'bold'}

      >
        {label}
      </Typography>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          width: 100,

          height: 'auto',
        }}
      >
        <PieChart
          series={[
            {
              data,
              cx: 100, // Center x-coordinate
              cy: 75, // Center y-coordinate
              innerRadius: 70,
              outerRadius: 86,
            },
          ]}
          slotProps={{
            legend: { hidden: true },
          }}
          height={150}
          width={200}
          colors={['#00C49F', '#FF8042']}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" color="black" textAlign={'center'}>
            {percentage}%
          </Typography>
        </Box>
      </Box>
    </Box>

  );
}
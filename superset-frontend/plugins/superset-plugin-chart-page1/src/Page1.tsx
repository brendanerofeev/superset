
import React from 'react';
import { Typography, Box } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { createTheme, ThemeProvider } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Image from './images/image.png'
import CircularProgressWithLabel from './components/CollaborationModel';
import CircularPercentageChart from './components/PieClickNoSnap';

const MuiTheme = createTheme({
  palette: {
    mode: 'light', // Ensures light mode is used
    background: {
      default: '#ffffff', // Sets the default background to white
    },
  },
});

const CollaborationDashboard = (props: any) => {
  console.log("props ", props);
  const { data } = props;
  console.log("data ", data);
  // const data = [
  //   {
  //     "label": "Behavioural_Avg",
  //     "value": 53.89,
  //     "count": 1
  //   },
  //   {
  //     "label": "Dynamics",
  //     "value": 51,
  //     "count": 1
  //   },
  //   {
  //     "label": "Earned Trust",
  //     "value": 55,
  //     "count": 1
  //   },
  //   {
  //     "label": "Mechanics",
  //     "value": 56,
  //     "count": 1
  //   },
  //   {
  //     "label": "Mindset_Avg",
  //     "value": 54.91,
  //     "count": 1
  //   },
  //   {
  //     "label": "Overall_Percentage",
  //     "value": 55,
  //     "count": 1
  //   },
  //   {
  //     "label": "Structural_Avg",
  //     "value": 57.13,
  //     "count": 1
  //   },
  //   {
  //     "label": "Swift Trust",
  //     "value": 57,
  //     "count": 1
  //   },
  //   {
  //     "label": "total_contributions",
  //     "value": 19,
  //     "count": 1
  //   }
  // ]
  const totalContributions = data.find((d: any) => d.label === 'total_contributions')?.value;
  const overallPercentage = data.find((d: any) => d.label === 'Overall_Percentage')?.value;
  const trustData = data.filter((d: any) => d.label === 'Swift Trust' || d.label === 'Earned Trust' || d.label === 'Mechanics' || d.label === 'Dynamics').map((d) => ({ category: d.label, value: d.value }));
  const Structural_Avg = data.find((d: any) => d.label === 'Structural_Avg')?.value;
  const Behavioural_Avg = data.find((d: any) => d.label === 'Behavioural_Avg')?.value;
  const Mindset_Avg = data.find((d: any) => d.label === 'Mindset_Avg')?.value;



  return (
    <ThemeProvider theme={MuiTheme}>
      <Box sx={{ padding: '0rem', display: 'flex', flexDirection: 'column' }} display='flex' flexBasis='column'>
        <Header totalContributions={totalContributions || 0} />
        <Box sx={{ padding: '0rem' }} display='flex' flexBasis='row' width={'100%'}>
          <BarChartComponent
            trustData={trustData}
          />
          <Box
            sx={{
              width: '35%',
            }}
          >

            <Box
              sx={{
                textAlign: "center",
              }}
            >

              <Box
                sx={{
                  backgroundColor: "#f5f5f5",
                  padding: "1rem",
                  display: "inline-block",
                  borderRadius: "8px",
                  marginBottom: "2rem",
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  {overallPercentage}
                  %
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Average Collaboration Result
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} flexDirection={'row'}>
                  <CircularPercentageChart percentage={
                    parseInt(Structural_Avg || 0)
                  } label='Structural' />
                  <CircularPercentageChart percentage={
                    parseInt(Behavioural_Avg || 0)
                  } label='Behavioural' />
                </Box>
                <CircularPercentageChart percentage={
                  parseInt(Mindset_Avg || 0)
                } label='Mindset' />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              padding: 2,
              width: '25%'
            }}
          >
            <img alt="placeholder"
              src={Image}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              Interpreting Results
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
                fontSize: "0.65rem",
                marginBottom: "1rem",
              }}
            >
              The Collaboration model tells us that the Foundations and the
              Integrations are both fundamental for successful collaboration.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
                marginBottom: "1rem",
                fontSize: "0.65rem",
              }}
            >
              The goal is to gradually increase all four Collaboration Domains
              over time so that the Collaboration can thrive.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "0.65rem",
                fontStyle: "italic",
              }}
            >
              You can learn more about each domain by clicking on the bars to
              the left.
            </Typography>
          </Box>

          {/* <CollaborationModel /> */}

        </Box>

      </Box>
    </ThemeProvider>
  );
};

const Header = (
  { totalContributions }: { totalContributions: number }
) => {
  return <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    }}
  >
    <Typography variant="h6" color="textPrimary">
      Transdev/ALTRAC Collaboration Dashboard
    </Typography>
    <Box
      sx={{
        display: 'flex',
        gap: 2, // Space between the two boxes
        padding: 2, // Optional padding for the overall layout
      }}
    >
      {/* First Card */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 2,
          border: '1px solid #A0D5D3', // Matches the green outline
          borderRadius: 4, // Rounded corners
          backgroundColor: '#F7FAFA', // Light grayish background
          flex: 1, // Allows cards to have equal width
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold">
          What are they saying?
        </Typography>
        <HelpOutlineIcon sx={{ color: '#A0D5D3' }} />
      </Box>

      {/* Second Card */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          border: '1px solid #A0D5D3', // Matches the green outline
          borderRadius: 4, // Rounded corners
          backgroundColor: '#F7FAFA', // Light grayish background
          flex: 1, // Allows cards to have equal width
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ marginRight: 1 }} // Space between number and text
        >
          {totalContributions}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold">
          Contributions
        </Typography>
      </Box>
    </Box>
  </Box>
}

const BarChartComponent = (
  { trustData }: { trustData: any }
) => {

  // const trustData = [
  //   { category: 'Swift', value: 64 },
  //   { category: 'Earned', value: 69 },
  //   { category: 'Mechanics', value: 61 },
  //   { category: 'Dynamics', value: 59 },
  // ];
  return <BarChart dataset={trustData} yAxis={[{
    scaleType: 'band', dataKey: 'category', colorMap: {
      colors: ['#f0f4c3', '#e1bee7', '#ffe0b2', '#b2dfdb'],
      type: 'ordinal',
    }
  }]}
    series={[{
      dataKey: 'value',
    },]}
    layout="horizontal"
    barLabel='value'
    xAxis={[{
      label: 'Trust',
      labelStyle: {
        display: 'none'
      },
    }
    ]}
    sx={{
      flex: 1,
      width: '40%',
    }}

    height={400}
  />
}

export default CollaborationDashboard;

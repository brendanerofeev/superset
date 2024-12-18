import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { PieChart } from "@mui/x-charts";




export default function CircularProgressWithLabel({
    value,
    label,
}: {
    value: number;
    label: string;
}) {
    const data = [
        { label: 'Completed', value: value },
        { label: 'Remaining', value: 100 - value },
    ];

    return (<Box
        sx={{
            position: "relative",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        {/* <CircularProgress
            variant="determinate"
            value={value}
            size={100}
            thickness={6}
            sx={{
                color: "#4caf50", // Green
                "& .MuiCircularProgress-circle": {
                    strokeLinecap: "round",
                },
            }}
        /> */}
        <PieChart
            series={[
                {
                    data,
                    cx: 100, // Center x-coordinate
                    cy: 100, // Center y-coordinate
                    innerRadius: 50,
                    outerRadius: 80,
                },
            ]}
            height={200}
            slotProps={{
                legend: { hidden: true },
            }}
        />
        <Box
            sx={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography variant="h6" component="div" color="textPrimary">
                {`${value}%`}
            </Typography>
        </Box>
    </Box>

    )
};

import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { useEffect, useState, useCallback } from "react";
import axios from 'axios';

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);
  // formatData fn
  const formatData = useCallback((data) => {
    if (!Array.isArray(data)) {
      return [];
    }
    let mockBarData = [];
    data.forEach(item => {
      let buildingIndex = mockBarData.findIndex(building => building.building === item.building_id);
      if (buildingIndex !== -1) {
        if (mockBarData[buildingIndex][item.floor_id]) {
          mockBarData[buildingIndex][item.floor_id] += item.power;
        } else {
          mockBarData[buildingIndex][item.floor_id] = item.power;
          mockBarData[buildingIndex][item.floor_id + 'Color'] = getColor(item.floor_id);
        }
      } else {
        mockBarData.push({
          building: item.building_id,
          [item.floor_id]: item.power,
          [item.floor_id + 'Color']: getColor(item.floor_id)
        });
      }
    });
    return Array.from(mockBarData.values());
  }, [])
  const getColor = (floor) => {
    switch (floor) {
      case "T1":
        return "hsl(72, 70%, 50%)";
      case "T2":
        return "hsl(96, 70%, 50%)";
      case "T3":
        return "hsl(106, 70%, 50%)";
      case "T4":
        return "hsl(9, 70%, 50%)";
      case "T5":
        return "hsl(326, 70%, 50%)";
      case "T6":
        return "hsl(256, 70%, 50%)";
      default:
        return "hsl(300, 70%, 50%)"
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/home');
        const data = response.data;
        const dataFormated = formatData(data);
        setData(dataFormated);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [formatData]);
  return (
    <ResponsiveBar
      data={data}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={["T1", "T2", "T3", "T4", "T5", "T6"]}
      indexBy="building"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Building", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Power", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in building: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;

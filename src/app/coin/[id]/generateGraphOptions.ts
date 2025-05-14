import getChartsData from "@/network/getChartData";
import { PlotDataPoint } from "@/types";

export default async function getGraphOptions(cryptoCurrencyId: string) {
  const plot = await getChartsData(cryptoCurrencyId);
  const options = {
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    series: [
      {
        name: "Price",
        data: plot.map((value: PlotDataPoint) => value.priceUsd),
        color: "#1A56DB",
      },
    ],
    xaxis: {
      categories: plot.map(
        (value: PlotDataPoint) =>
          new Date(value.date).toDateString() +
          " " +
          new Date(value.date).toLocaleTimeString(),
      ),
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };
  return options;
}

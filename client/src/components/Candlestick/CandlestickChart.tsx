import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

type Candle = {
  open: number;
  close: number;
  city: string;
  max: number;
  min: number;
  hour: string;
};

interface CandlestickChartProps {
  candles: Candle[];
  title?: string;
}

export const CandlestickChart: React.FC<CandlestickChartProps> = ({
  candles,
  title,
}) => {
  const series = [
    {
      data: candles.map((c) => ({
        x: new Date(c.hour),
        y: [c.open, c.max, c.min, c.close],
      })),
    },
  ];
  const options: ApexOptions = {
    chart: { type: 'candlestick', height: 350 },
    title: { text: title, align: 'left' },
    xaxis: { type: 'datetime' },
    yaxis: { tooltip: { enabled: true } },
  };
  return (
    <Chart options={options} series={series} type='candlestick' height={350} />
  );
};

import { ResponsiveBar } from '@nivo/bar';

import { ChartData } from './ChartData';

export const BarChart = () => {
  return (
    <ResponsiveBar
      data={ChartData}
      keys={['degress']}
      indexBy="day"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.4}
      valueScale={{ type: 'linear' }}
      colors="#3182CE"
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'degrees',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
    />
  );
};

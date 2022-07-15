import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";
interface CharProps {
  coinId: string | undefined;
  isDark: boolean;
}
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
function Chart({ coinId, isDark }: CharProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  const a = data?.map((price) => [
    price.time_close,
    price.open,
    price.high,
    price.low,
    price.close,
  ]) as [];
  console.log(a);
  return (
    <div>
      {isLoading ? (
        "Loding chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: a,
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },

            chart: {
              height: 200,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },

            xaxis: {
              axisTicks: { show: false },
              axisBorder: { show: false },
              labels: { show: false },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            fill: {},
            colors: ["red"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;

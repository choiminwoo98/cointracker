import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinHistory, fetchCoinTickers } from "./api";

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
interface CharProps {
  coinId: string | undefined;
}
interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const PriceInfo = styled.div`
  margin: 10px;
`;
function Price({ coinId }: CharProps) {
  const { isLoading, data } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    { refetchInterval: 5000 }
  );

  return (
    <div>
      {isLoading ? (
        "Loding Price..."
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>1년 변동률: </span>
              {data?.quotes.USD.percent_change_1y}%
            </OverviewItem>
            <OverviewItem>
              <span>1달 변동률:</span>
              {data?.quotes.USD.percent_change_30d}%
            </OverviewItem>
            <OverviewItem>
              <span>1주일 변동률:</span>
              {data?.quotes.USD.percent_change_7d}%
            </OverviewItem>
          </Overview>
        </>
      )}
    </div>
  );
}

export default Price;

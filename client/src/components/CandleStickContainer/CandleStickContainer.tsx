import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { CandlestickChart } from '../Candlestick/CandlestickChart';
import ErrorComponent from '../UiComponents/ErrorComponent/ErrorComponent';
import Spinner from '../UiComponents/Spinner/Spinner';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface GetCandleSticksQueryVaribles {
  city: string;
  from?: string;
  to?: string;
}
interface GetCandleSticksQueryResponse {
  candlesticks: {
    open: number;
    close: number;
    city: string;
    max: number;
    min: number;
    hour: string;
  }[];
}
const GET_CANDLESTICKS = gql`
  query Candlesticks($city: String!, $from: String, $to: String) {
    candlesticks(city: $city, from: $from, to: $to) {
      open
      close
      city
      max
      min
      hour
    }
  }
`;

const CITY_OPTIONS = ['Berlin', 'NewYork', 'Tokyo', 'SaoPaulo', 'CapeTown'];
const INTERVAL_OPTIONS = ['1h', '1m'];

export const CandlestickContainer = () => {
  const [city, setCity] = useState<string>('Berlin');
  const [fromInterval, setFromInterval] = useState<string>('1h');
  // const [toInterval, setToInterval] = useState<string>('3h');
  const [errorOpen, setErrorOpen] = useState<boolean>(false);

  const { data, loading, error, refetch } = useQuery<
    GetCandleSticksQueryResponse,
    GetCandleSticksQueryVaribles
  >(GET_CANDLESTICKS, {
    variables: { city, from: fromInterval, to: '3h' },
    fetchPolicy: 'cache-and-network',
  });

  console.log('🚀 ~ CandlestickContainer ~ data:', data);

  useEffect(() => {
    if (error) setErrorOpen(true);
  }, [error]);

  const handleCloseError = () => {
    setErrorOpen(false);
  };

  return (
    <Box sx={{ maxWidth: 700, margin: '2rem auto' }}>
      <h2>Candlestick Chart</h2>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <FormControl sx={{ minWidth: 140 }}>
          <InputLabel id='city-label'>City</InputLabel>
          <Select
            labelId='city-label'
            value={city}
            label='City'
            onChange={(e) => {
              setCity(e.target.value as string);
              refetch();
            }}>
            {CITY_OPTIONS.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 140 }}>
          <InputLabel id='interval-label'>Interval</InputLabel>
          <Select
            labelId='interval-label'
            value={fromInterval}
            label='Interval'
            onChange={(e) => {
              setFromInterval(e.target.value as string);
              refetch();
            }}>
            {INTERVAL_OPTIONS.map((i) => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* <FormControl sx={{ minWidth: 140 }}>
          <InputLabel id='interval-label'>Interval</InputLabel>
          <Select
            labelId='interval-label'
            value={toInterval}
            label='Interval'
            onChange={(e) => {
              setToInterval(e.target.value as string);
              refetch();
            }}>
            {INTERVAL_OPTIONS.map((i) => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}
      </Box>
      {loading && <Spinner />}
      {error && (
        <ErrorComponent
          message={error.message}
          open={errorOpen}
          onClose={handleCloseError}
        />
      )}
      {data && (
        <CandlestickChart
          candles={data.candlesticks}
          title={`${city} (${fromInterval}) OHLC`}
        />
      )}
    </Box>
  );
};

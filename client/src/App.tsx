import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';
import { CandlestickContainer } from './components/CandleStickContainer/CandleStickContainer';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <CandlestickContainer />
    </ApolloProvider>
  );
}

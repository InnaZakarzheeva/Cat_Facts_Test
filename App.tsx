import React from 'react';
import Navigation from './src/navigation';
import {QueryClient, QueryClientProvider} from 'react-query';

function App(): React.JSX.Element {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}

export default App;

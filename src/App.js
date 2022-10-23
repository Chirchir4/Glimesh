import './App.css';
import { useEffect } from 'react';
import { getToken } from './auth/auth';
import Header from './Header';
import { TableExampleCelled } from './components/Table';
import MetadataContext from './Context/Metadata'
// import { MetricsProvider } from '@cabify/prom-react';
// import { callConfig, customPromMetrics } from './Metrics/Custom';

import { MetricDefinition, useMetrics } from '@cabify/prom-react';
import { createCaller } from 'react-outside-call';

function App() {
  useEffect(() => {
    const checkToken = (async () => {
      const Token = JSON.parse(localStorage.getItem('credentialss'))
      if (!Token) {
        const dt = await getToken()
        if (dt && dt.access_token) {
          localStorage.setItem('credentials', JSON.stringify(dt));
          return
        }
      }
    })
    checkToken()
  }, [])


  const PROM_UI_REQUEST_SECONDS_COUNT: MetricDefinition = {
    type: 'histogram',
    name: 'glimesh_recv_Packets',
    description: 'A metric for glimesh recv  pkts',
    buckets: [0.2, 0.5, 1, 2, 5, 10],
  };

  const customPromMetrics: MetricDefinition[] = [
    PROM_UI_REQUEST_SECONDS_COUNT,
  ];

  const callConfig = createCaller({
    // eslint-disable-next-line react-hooks/rules-of-hooks
    metrics: () => useMetrics(),
  });
  return (

    < div className="App" >
      <Header />
      <div className="tableSection">
        <MetadataContext>
          <TableExampleCelled />
        </MetadataContext>
      </div>
    </div >

  );
}

export default App;

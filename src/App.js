import './App.css';
import { useEffect } from 'react';
import { getToken } from './auth/auth';
import Header from './Header';
import { TableExampleCelled } from './Table';
import MetadataContext from './Metadata'

function App() {
  useEffect(() => {
    const checkToken = (async () => {
      const Token = JSON.parse(localStorage.getItem('credentials'))
      if (!Token) {
        const dt = await getToken()
        if (dt.access_token) {
          localStorage.setItem('credentials', JSON.stringify(dt));
          return
        }
      }
    })
    checkToken()

  }, [])

  return (
    <div className="App">
      <Header />
      <MetadataContext>
        <TableExampleCelled />
      </MetadataContext>
    </div>
  );
}

export default App;

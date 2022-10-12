import './App.css';
import { useEffect } from 'react';
import { getToken } from './auth/auth';
import Header from './Header';
import { TableExampleCelled } from './components/Table';
import MetadataContext from './Context/Metadata'


function App() {
  useEffect(() => {
    const checkToken = (async () => {
      const Token = JSON.parse(localStorage.getItem('credentials'))
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

  return (
    <div className="App">
      <Header />
      <div className="tableSection">
        <MetadataContext>
          <TableExampleCelled />
        </MetadataContext>
      </div>
    </div>
  );
}

export default App;

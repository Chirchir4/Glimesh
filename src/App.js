import './App.css';
import StreamMetaData from './StreamMetaData';
import { useEffect } from 'react';
import { getToken } from './auth/auth';


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
      <StreamMetaData />
    </div>
  );
}

export default App;

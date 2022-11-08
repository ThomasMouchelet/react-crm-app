import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('./invoices.json')
    .then(response => response.json())
    .then(data => console.log("data", data))
    .catch(error => console.log(error));
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

import './App.css';
import { DataProvider } from './DataContext';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes />
      </DataProvider>
    </div>
  );
}

export default App;

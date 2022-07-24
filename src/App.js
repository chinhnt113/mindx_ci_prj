import './App.css';
import Dashboard from './components/dashboard/Dashboard'
import DesignContextProvider from './context/DesignContext';

function App() {
  return (
    <div className="App">
      <DesignContextProvider>
        <Dashboard/>
      </DesignContextProvider>
    </div>
  );
}

export default App;

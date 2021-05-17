import './App.css';
import { useState, useEffect } from 'react';
import { NormalComponent } from './components/NormalComponent';
import { PortalComponent } from './components/PortalComponent';

function App() {
  const [showPortal, setShowPortal] = useState(false);

  useEffect(() => {
    setShowPortal(true);
  }, []);

  setTimeout(() => {
    setShowPortal(false);
  }, 5000);

  return (
    <div className="App">
      <NormalComponent />

      {showPortal && (
        <PortalComponent>
          <h1>This is my Portal!</h1>
        </PortalComponent>
      )}
    </div>
  );
}

export default App;

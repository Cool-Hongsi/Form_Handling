import React from 'react';

const App = () => {
  return (
    <div data-testid="app-component">
      <div>
        {process.env.REACT_APP_API_ADDRESS}
        {process.env.REACT_APP_NAME}
      </div>
    </div>
  );
};

export default App;

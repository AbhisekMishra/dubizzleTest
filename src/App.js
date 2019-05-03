import React from 'react';
import { Provider } from 'react-redux'
import Home from './routes/home';
import store from './redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;

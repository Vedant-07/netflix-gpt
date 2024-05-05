// App.js
import React from 'react';
import Body from './components/Body';
import Header from './components/Header';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';

function App() {
  return (
    
      <Provider store={appStore}>
        <div className="m-0 p-0 box-border ">
          <Body />
        </div>
      </Provider>
    
  );
}

export default App;

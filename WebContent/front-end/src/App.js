import React from 'react';
import Button from "./component/Button.js"
import './sass/index.scss';

function App() {
  return (
    <div className="App">
      <Button/>
      {/* component/Button.js 안에 dom 있음 */}
    </div>
  );
}

export default App;

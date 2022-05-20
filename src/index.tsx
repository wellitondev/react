import * as React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import './style.css';

const App: app = () => {
  const [name, setName] = React.useState('');

  return (
    <div>
      <Hello name={name} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

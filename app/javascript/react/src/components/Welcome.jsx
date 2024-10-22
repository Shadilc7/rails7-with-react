import * as React from 'react'
import { createRoot } from 'react-dom/client';

const Welcome = () => {
  return(
    <div className='container'>
      <h1>Hello World !!!!</h1>
      <p>Hai</p>
    </div>
  )

}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  const root = createRoot(container); 
  root.render(<Welcome />);
});

export default Welcome
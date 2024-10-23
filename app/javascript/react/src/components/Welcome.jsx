import * as React from 'react'
import { createRoot } from 'react-dom/client';
import QuestionList from './QuestionList';

const Welcome = () => {
  return(
    <div className='container'>
      <h1>Hello World !!!!</h1>
      <p className='lead'>Hai</p>
      < QuestionList/>
    </div>
  )

}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  const root = createRoot(container); 
  root.render(<Welcome />);
});

export default Welcome
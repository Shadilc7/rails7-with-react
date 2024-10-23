import * as React from 'react'
import { createRoot } from 'react-dom/client';

const QuestionList = () => {
  const questionsList = [
    {
      title: "Sample Question",
      tag: "Hai"
    }
  ]
  return (
    <div className='row'>
      <div className='col-lg-10 mx-auto'>
        {questionsList.map((question) => 
          <div className='card rounded-0 mt-3'>
            <div className='card-body'>
              <h3 className='card-title'>{question.title}</h3>
              <p className='lead'>
                <span className='badge bg-primary'>{question.tag}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionList;
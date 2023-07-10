import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const notes = [
    {
        id: 1,
        content: "Note 1",
        important: true
    },
    {
        id: 2,
        content: "Note 2",
        important: false
    },   
    {
        id: 3,
        content: "Note 3",
        important: true
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App notes = {notes}/>)
import React from 'react'
import { Navbar } from './components/Navbar'
import { Todo } from './pages/Todo';
 

function App() {
    return (
        <div className="App">
            <Navbar />
            <Todo />
        </div>
    );
}

export default App;

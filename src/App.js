import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index';

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

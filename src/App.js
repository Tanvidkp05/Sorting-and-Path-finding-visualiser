// import logo from './logo.svg';
// import './App.css';
// import SortingVisualizer from './SortingVisualizer/SortingVisualizer.jsx';

// function App() {
//   return (
//     <div className="App">
//       <SortingVisualizer></SortingVisualizer>
      
//     </div>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';
// import SortingVisualizer from './SortingVisualizer/SortingVisualizer.jsx';
// import PathFindingVisualizer from './PathFindingVisulizer/PathFindingVisualizer.jsx';
// import { useState } from 'react';

// function App() {
//   const [currentView, setCurrentView] = useState('sorting'); // Default view is SortingVisualizer

//   return (
//     <div className="App">
//       <nav>
//         <ul>
//             <button onClick={() => setCurrentView('sorting')}>Sorting Visualizer</button>
          
//             <button onClick={() => setCurrentView('pathfinding')}>Path Finding Visualizer</button>
        
//         </ul>
//       </nav>
//       {currentView === 'sorting' ? <SortingVisualizer /> : <PathFindingVisualizer />}
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer.jsx';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer.jsx';
import { useState } from 'react';

function App() {
  const [currentView, setCurrentView] = useState('sorting'); // Default view is SortingVisualizer

  return (
    <div className="App">
      <nav>
        <ul>
          {/* Render Sorting Visualizer button only if Path Finding Visualizer is active */}
          {currentView === 'pathfinding' && (
            <button onClick={() => setCurrentView('sorting')}>Sorting Visualizer</button>
          )}

          {/* Render Path Finding Visualizer button only if Sorting Visualizer is active */}
          {currentView === 'sorting' && (
            <button onClick={() => setCurrentView('pathfinding')}>Path Finding Visualizer</button>
          )}
        </ul>
      </nav>
      {currentView === 'sorting' ? <SortingVisualizer /> : <PathfindingVisualizer />}
    </div>
  );
}

export default App;





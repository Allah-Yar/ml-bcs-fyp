// import React from 'react';
// import {HashRouter as Router, Routes, Route} from 'react-router-dom';
// import GrokBackground from './GrokBackground';
// import Navbar from './components/Navbar';
// import ImageUploadForm from './components/ImageUploadForm';

// function App() {
 
//   return (
//     <Router>
//       <div>
//         <GrokBackground />
//         <Navbar />
//           <Routes>
//           {/* <Route path="/" exact component={ImageUploadForm} /> */}
//           <Route path="/check" element={<ImageUploadForm />} />
//           {/* <Route path="/instructions" component={ImageUploadForm} /> */}
//         </Routes>
//       </div>
//     </Router>
    
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GrokBackground from './GrokBackground';
import Home from './pages/Home';
import ImageUploadForm from './components/ImageUploadForm';


function App() {
  return (
    <Router>
      <div>
        <GrokBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/check" element={<ImageUploadForm />} />
          <Route path="/instructions" element={<ImageUploadForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


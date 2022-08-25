import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyGallery from '../Gallery';
import React from 'react';
import Scene from './Scene';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Scene />} />
        <Route path="/gallery" exact element={<MyGallery />} />
        {/* <Route path=":galleryId" exact>
            <Route path="13_desserts" exact element={<Gallery />} />
          </Route> */}
      </Routes>
    </Router>
  );
}
export default App;

import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from "react-router-dom";
import ReactDOM from "react-dom";
import GravityCollector from '@smartesting/gravity-data-collector/dist'
import Interactions from "./pages/Interactions";
import CopyPaste from "./pages/CopyPaste";
import Form from "./pages/Form";
import DragNDrop from "./pages/DragNDrop";
import Screen from "./pages/Screen";
import Mouse from "./pages/Mouse";
import Navigation from "./pages/Navigation";
import Video from "./pages/Video";

function App() {
    GravityCollector.init({
        authKey: process.env.REACT_APP_GRAVITY_KEY
    })
    const navigate = useNavigate()

  return (
      <Routes>
        <Route
            path='/'
            element={<Interactions next={() => navigate('/copy-paste')}/>}
        />
          <Route
              path='/copy-paste'
              element={<CopyPaste next={() => navigate('/form')} /> }
          />
          <Route
              path='/form'
              element={<Form next={() => navigate('/drag-n-drop')} /> }
          />
          <Route
              path='/drag-n-drop'
              element={<DragNDrop next={() => navigate('/screen')} /> }
          />
          <Route
              path='/screen'
              element={<Screen next={() => navigate('/mouse')} />}
          />
          <Route
              path='/mouse'
              element={<Mouse next={() => navigate('/navigation')} />}
          />
          <Route
              path='/navigation'
              element={<Navigation next={() => navigate('/video')} />}
          />
          <Route
              path='/video'
              element={<Video next={() => navigate('/video')} />}
          />
      </Routes>
  );
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

export default App;

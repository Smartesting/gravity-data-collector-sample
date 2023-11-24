import {Route, Routes, useNavigate} from "react-router-dom";
import Interactions from "./pages/Interactions";
import CopyPaste from "./pages/CopyPaste";
import Form from "./pages/Form";
import DragNDrop from "./pages/DragNDrop";
import Screen from "./pages/Screen";
import Mouse from "./pages/Mouse";
import Navigation from "./pages/Navigation";
import Video from "./pages/Video";
import React from "react";

export const samplePages = [
    { path: '/', title: 'Interactions', element: Interactions },
    { path: '/copy-paste', title: 'Copy paste', element: CopyPaste },
    { path: '/form', title: 'Forms', element: Form },
    { path: '/drag-n-drop', title: 'Drag and drop', element: DragNDrop },
    { path: '/screen', title: 'Screen', element: Screen },
    { path: '/mouse', title: 'Mouse', element: Mouse },
    { path: '/navigation', title: 'Navigation', element: Navigation },
    { path: '/video', title: 'Video', element: Video },
]

const Routing: React.FunctionComponent = () => {
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
    )
}

export default Routing

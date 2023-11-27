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
import Mobile from "./pages/Mobile";

export const samplePages = [
    { path: '/', title: 'Interactions', element: Interactions },
    { path: '/mobile', title: 'Mobile', element: Mobile },
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
            { samplePages.map(({path, element: Element}, index) => {
                const next = (index === samplePages.length - 1) ? () => {} : () => navigate(samplePages[index + 1].path)
                return <Route key={`route-${index}`} path={path} element={<Element next={next} />} />
            })}
        </Routes>
    )
}

export default Routing

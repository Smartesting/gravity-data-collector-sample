import React from "react";
import makeSamplePage from "./makeSamplePage";

const Interactions = makeSamplePage(
    'Basic interactions',
    ['click', 'contextmenu', 'dblclick', 'toggle'],
    (eventTriggered) => (
        <>
            <button onClick={() => eventTriggered('click')}>Click me</button>
            <button onContextMenu={() => eventTriggered('contextmenu')}>Right click me</button>
            <button onDoubleClick={() => eventTriggered('dblclick')}>Double click me</button>
            <details onToggle={() => eventTriggered('toggle')}>
                <summary>Expand this</summary>
                <p>Here are some details.</p>
            </details>
        </>
    )
)

export default Interactions

import React from "react";
import makeSamplePage from "./makeSamplePage";
import {Button, ButtonGroup} from "@mui/material";

const Interactions = makeSamplePage(
    'Basic interactions',
    ['click', 'contextmenu', 'dblclick', 'toggle', 'scroll'],
    (eventTriggered) => (
        <>
            <ButtonGroup variant="contained">
                <Button onClick={() => eventTriggered('click')} >Click me</Button>
                <Button onContextMenu={() => eventTriggered('contextmenu')} >Right click me</Button>
                <Button onDoubleClick={() => eventTriggered('dblclick')} >Double click me</Button>
            </ButtonGroup>

            <details onToggle={() => eventTriggered('toggle')}>
                <summary>Expand this</summary>
                <p>Here are some details.</p>
            </details>

            <div className="scrollContainer" onScroll={() => eventTriggered('scroll')}>
                <div>Scroll me</div>
            </div>
        </>
    )
)

export default Interactions

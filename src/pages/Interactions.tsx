import React from "react";
import makeSamplePage from "./makeSamplePage";
import {Button, ButtonGroup} from "@mui/material";

enum DataTestIds {
    Click = 'Interactions.Click',
    ContextMenu = 'Interactions.ContextMenu',
    DblClick = 'Interactions.DblClick',
    Toggle = 'Interactions.Toggle',
    Scroll = 'Interactions.Scroll',
}

const Interactions = makeSamplePage(
    'Basic interactions',
    ['click', 'contextmenu', 'dblclick', 'toggle', 'scroll'],
    (eventTriggered) => (
        <>
            <ButtonGroup variant="contained">
                <Button data-testid={DataTestIds.Click} onClick={() => eventTriggered('click')} >Click me</Button>
                <Button data-testid={DataTestIds.ContextMenu} onContextMenu={() => eventTriggered('contextmenu')} >Right click me</Button>
                <Button data-testid={DataTestIds.DblClick} onDoubleClick={() => eventTriggered('dblclick')} >Double click me</Button>
            </ButtonGroup>

            <details  data-testid={DataTestIds.Toggle} onToggle={() => eventTriggered('toggle')}>
                <summary>Expand this</summary>
                <p>Here are some details.</p>
            </details>

            <div  data-testid={DataTestIds.Scroll} className="scrollContainer" onScroll={() => eventTriggered('scroll')}>
                <div>Scroll me</div>
            </div>
        </>
    )
)

export default Interactions

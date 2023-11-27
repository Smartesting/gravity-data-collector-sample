import makeSamplePage from "./makeSamplePage";
import React from "react";
import {Button} from "@mui/material";

enum DataTestIds {
    TouchStart = 'Mobile.TouchStart',
    TouchMove = 'Mobile.TouchMove',
    TouchEnd = 'Mobile.TouchEnd',
    TouchCancel = 'Mobile.TouchCancel',
}

const Mobile = makeSamplePage(
    'Mobile events',
    ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
    (eventTriggered) => <>
        <Button data-testid={DataTestIds.TouchStart} onTouchStart={() => eventTriggered('touchstart')}>Touch here</Button>
        <Button data-testid={DataTestIds.TouchMove} onTouchMove={() => eventTriggered('touchmove')}>Touch and move</Button>
        <Button data-testid={DataTestIds.TouchEnd} onTouchEnd={() => eventTriggered('touchend')}>Touch and release</Button>
        <Button  data-testid={DataTestIds.TouchCancel} onTouchCancel={() => eventTriggered('touchcancel')}>Touch and cancel</Button>
    </>
)

export default Mobile

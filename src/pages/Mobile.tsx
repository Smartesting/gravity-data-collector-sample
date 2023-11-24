import makeSamplePage from "./makeSamplePage";
import React from "react";
import {Button} from "@mui/material";

const Mobile = makeSamplePage(
    'Mobile events',
    ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
    (eventTriggered) => <>
        <Button onTouchStart={() => eventTriggered('touchstart')}>Touch here</Button>
        <Button onTouchMove={() => eventTriggered('touchmove')}>Touch and move</Button>
        <Button onTouchEnd={() => eventTriggered('touchend')}>Touch and release</Button>
        <Button onTouchCancel={() => eventTriggered('touchcancel')}>Touch and cancel</Button>
    </>
)

export default Mobile

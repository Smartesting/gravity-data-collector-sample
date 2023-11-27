import makeSamplePage, {EventTriggered} from "./makeSamplePage";
import React from "react";

const FullScreenComponent: React.FunctionComponent<{eventTriggered: EventTriggered}> = ({eventTriggered}) => {
    React.useEffect(() => {
        const fullscreenDiv = document.getElementById('fullscreen-element')
        if (fullscreenDiv) {
            fullscreenDiv.addEventListener('fullscreenchange', () => eventTriggered('fullscreenchange'))
        }

        window.addEventListener('resize', () => eventTriggered('resize'))
    }, [eventTriggered])

    return (<>
        <div id="fullscreen-element">Take me full screen</div>
        <button onClick={() => document.getElementById('fullscreen-element')!.requestFullscreen()}>Click me</button>
    </>)
}

const Screen = makeSamplePage(
    'Screen',
    ['fullscreenchange', 'resize'],
    (eventTriggered) => <FullScreenComponent eventTriggered={eventTriggered} />
)

export default Screen

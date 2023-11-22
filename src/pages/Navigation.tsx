import makeSamplePage, {EventTriggered} from "./makeSamplePage";
import React from "react";

const NavigationComponent: React.FunctionComponent<{eventTriggered: EventTriggered}> = ({eventTriggered}) => {
    React.useEffect(() => {
        window.addEventListener('hashchange', () => eventTriggered('hashchange'))
    },[eventTriggered])

    return <>
        <a href="#some-anchor">Click me</a>
        <h1 id="some-anchor">A title</h1>
    </>
}

const Navigation = makeSamplePage(
    'Navigation',
    ['hashchange'],
    (eventTriggered) => <NavigationComponent eventTriggered={eventTriggered} />
)

export default Navigation

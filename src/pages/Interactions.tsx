import BasicPage from "./BasicPage";
import React from "react";

const Interactions: React.FunctionComponent<{next: () => void}> = ({next }) => {
    const [ triggeredEvents, setTriggeredEvents ] = React.useState<string[]>([])

    return (
        <BasicPage
            title={"Basic interactions"}
            expectedEvents={['click', 'contextmenu', 'dblclick']}
            triggeredEvents={triggeredEvents}
            next={next}
        >
            <button onClick={() => setTriggeredEvents([...triggeredEvents, 'click'])}>Click me</button>
            <button onContextMenu={() => setTriggeredEvents([...triggeredEvents, 'contextmenu'])}>Right click me</button>
            <button onDoubleClick={() => setTriggeredEvents([...triggeredEvents, 'dblclick'])}>Double click me</button>
        </BasicPage>
    )
}

export default Interactions

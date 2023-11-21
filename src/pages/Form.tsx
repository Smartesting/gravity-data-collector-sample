import BasicPage from "./BasicPage";
import React from "react";

const Form: React.FunctionComponent<{next: () => void}> = ({next }) => {
    const [ triggeredEvents, setTriggeredEvents ] = React.useState<string[]>([])

    return (
        <BasicPage
            title={"Copy-paste"}
            expectedEvents={['keyup', 'keydown', 'change']}
            triggeredEvents={triggeredEvents}
            next={next}
        >
            <input onKeyUp={() => {setTriggeredEvents([...triggeredEvents, 'keyup'])}} placeholder="Type something" />
            <input onKeyDown={() => {setTriggeredEvents([...triggeredEvents, 'keydown'])}} placeholder="Type something" />
            <label><input type="checkbox" onChange={() => { setTriggeredEvents([...triggeredEvents, 'change'])}} /> Change me</label>
        </BasicPage>
    )
}

export default Form

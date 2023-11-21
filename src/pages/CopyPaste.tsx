import BasicPage from "./BasicPage";
import React from "react";

const CopyPaste: React.FunctionComponent<{next: () => void}> = ({next }) => {
    const [ triggeredEvents, setTriggeredEvents ] = React.useState<string[]>([])

    return (
        <BasicPage
            title={"Copy-paste"}
            expectedEvents={['select', 'copy', 'cut', 'paste']}
            triggeredEvents={triggeredEvents}
            next={next}
        >
            <input onSelect={() => setTriggeredEvents([...triggeredEvents, 'select'])} value={"Select my content"}/>
            <input onCopy={() => setTriggeredEvents([...triggeredEvents, 'copy'])} value={"Copy my content"}/>
            <input onCut={() => setTriggeredEvents([...triggeredEvents, 'cut'])} value={"Cut my content"}/>
            <input onPaste={() => setTriggeredEvents([...triggeredEvents, 'paste'])} placeholder={"Paste something here"}/>
        </BasicPage>
    )
}

export default CopyPaste

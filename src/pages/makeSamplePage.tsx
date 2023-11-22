import React, {ReactNode} from "react";
import Layout from "./Layout";

export type EventTriggered = (event: string) => void
export default function makeSamplePage(
    title: string,
    events: string[],
    makeChildren: (eventTriggered: EventTriggered) => ReactNode,
): React.FunctionComponent<{next: () => void}> {
    return ({next}) => {
        const [ triggeredEvents, setTriggeredEvents ] = React.useState<string[]>([])
        const eventTriggered: EventTriggered = (event) => setTriggeredEvents([...triggeredEvents, event])

        return (
            <Layout
                title={title}
                expectedEvents={events}
                triggeredEvents={triggeredEvents}
                next={next}
            >
                {makeChildren(eventTriggered)}
            </Layout>
        )
    }
}

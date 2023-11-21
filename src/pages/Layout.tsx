import React, {PropsWithChildren} from "react";

type BasicPageProps = PropsWithChildren & {
    title: string,
    expectedEvents: ReadonlyArray<string>,
    triggeredEvents: ReadonlyArray<string>,
    next: () => void
}
const Layout: React.FunctionComponent<BasicPageProps> = ({title, expectedEvents, triggeredEvents, next, children}) =>  {
    const [showNext, setShowNext] = React.useState(false)
    React.useEffect(() => {
        setShowNext(expectedEvents.filter(event => !triggeredEvents.includes(event)).length === 0)
    }, [expectedEvents, triggeredEvents])

    return (
        <>
            <h1>{title}</h1>
            <p>Expected events:</p>
            <ul>
                { expectedEvents.map((event, index) => (
                    <li key={`event-${index}`}>{event} {triggeredEvents.includes(event) ? '✅' : '❌'}</li>
                ))}
            </ul>
            {children}
            {showNext && <a onClick={next}>Next page</a> }
        </>

    )
}

export default Layout

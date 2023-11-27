import React, {PropsWithChildren} from "react";
import {Box, Chip} from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle"
import HighlightOff from "@mui/icons-material/HighlightOff"

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
            <Box sx={{padding: '8px'}}>
               { expectedEvents.map((event, index) => <EventChip key={`event-chip-${index}`} event={event} triggeredEvents={triggeredEvents} /> )}
            </Box>

            <Box>
                {children}
            </Box>

            {showNext && <button onClick={next}>Next page</button> }
        </>
    )
}

const EventChip: React.FunctionComponent<{event: string, triggeredEvents: ReadonlyArray<string>}> = ({event, triggeredEvents}) => {
    const Icon = triggeredEvents.includes(event) ? CheckCircle : HighlightOff
    const color = triggeredEvents.includes(event) ? "success" : "error"

    return <Chip icon={<Icon color={color}/>} label={event} sx={{marginRight: '16px'}}/>
}

export default Layout

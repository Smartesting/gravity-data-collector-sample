import BasicPage from "./BasicPage";
import React, {DragEventHandler} from "react";

const DragNDrop: React.FunctionComponent<{next: () => void}> = ({next }) => {
    const [ triggeredEvents, setTriggeredEvents ] = React.useState<string[]>([])

    const onDragStart: DragEventHandler = (event) => {
        if (!event.dataTransfer || !event.target || !event.currentTarget) return
        // @ts-ignore
        event.dataTransfer.setData('text/plain', event.target.id);
        // @ts-ignore
        event.currentTarget.style.backgroundColor = 'yellow';
    }

    const onDragOver: DragEventHandler = (event) => {
        event.preventDefault();
    }

    const onDrop: DragEventHandler = (event) => {
        if (!event.dataTransfer) return

        const id = event
            .dataTransfer
            .getData('text');

        const draggableElement = document.getElementById(id);
        const dropzone = event.target;
        // @ts-ignore
        dropzone.appendChild(draggableElement);
        // @ts-ignore
        draggableElement.style.background = 'aquamarine'

        setTriggeredEvents([...triggeredEvents, 'drop'])
    }

    return (
        <BasicPage
            title={"Drag and drop"}
            expectedEvents={['drag', 'drop']}
            triggeredEvents={triggeredEvents}
            next={next}
        >
            <div className="dragContainer">
                <div className="dropZone"
                     onDragOver={onDragOver}
                     onDrop={onDrop}
                >
                    <div
                        id="draggable-1"
                        className="draggable"
                        draggable="true"
                        onDragStart={onDragStart}
                        onDrag={() => setTriggeredEvents([...triggeredEvents, 'drag'])}
                    >
                        Drag me
                    </div>
                </div>

                <div
                    className="dropZone"
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                >
                </div>
            </div>
        </BasicPage>
    )
}

export default DragNDrop

import React, {DragEventHandler} from "react";
import makeSamplePage, {EventTriggered} from "./makeSamplePage";

enum DataTestIds {
    Draggable = 'DragDrop.Draggable',
    DropZone = 'DragDrop.DropZone',
}

const DragNDropComponent: React.FunctionComponent<{eventTriggered: EventTriggered}> = ({eventTriggered }) => {
    const onDragStart: DragEventHandler = (event) => {
        if (!event.dataTransfer || !event.target || !event.currentTarget) return
        // @ts-ignore
        event.dataTransfer.setData('text/plain', event.target.id);
        // @ts-ignore
        event.currentTarget.style.backgroundColor = 'yellow';

        eventTriggered('dragstart')
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

        eventTriggered('drop')
    }

    return (
        <div className="dragContainer">
            <div className="dropZone"
                 onDragOver={onDragOver}
                 onDrop={onDrop}
            >
                <div
                    id="draggable-1"
                    data-testid={DataTestIds.Draggable}
                    className="draggable"
                    draggable="true"
                    onDragStart={onDragStart}
                    onDrag={() => eventTriggered('drag')}
                >
                    Drag me
                </div>
            </div>

            <div
                className="dropZone"
                data-testid={DataTestIds.DropZone}
                onDragOver={onDragOver}
                onDrop={onDrop}
            >
            </div>
        </div>
    )
}

const DragNDrop = makeSamplePage(
    'Drag and drop',
    ['dragstart', 'drag', 'drop'],
    (eventTriggered) => <DragNDropComponent eventTriggered={eventTriggered} />
)
export default DragNDrop

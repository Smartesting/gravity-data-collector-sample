import React from "react";
import makeSamplePage from "./makeSamplePage";

enum DataTestIds {
    Select = 'CopyPaste.Select',
    Copy = 'CopyPaste.Copy',
    Cut = 'CopyPaste.Cut',
    Paste = 'CopyPaste.Paste',
}

const CopyPaste = makeSamplePage(
    'Copy-paste',
    ['select', 'copy', 'cut', 'paste'],
    (eventTriggered) => (
        <>
            <input data-testid={DataTestIds.Select} onSelect={() => eventTriggered('select')} value={"Select my content"}/>
            <input data-testid={DataTestIds.Copy} onCopy={() => eventTriggered('copy')} value={"Copy my content"}/>
            <input data-testid={DataTestIds.Cut} onCut={() => eventTriggered('cut')} value={"Cut my content"}/>
            <input data-testid={DataTestIds.Paste} onPaste={() => eventTriggered('paste')} placeholder={"Paste something here"}/>
        </>
    )
)

export default CopyPaste

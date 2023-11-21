import React from "react";
import makeSamplePage from "./makeSamplePage";

const CopyPaste = makeSamplePage(
    'Copy-paste',
    ['select', 'copy', 'cut', 'paste'],
    (eventTriggered) => (
        <>
            <input onSelect={() => eventTriggered('select')} value={"Select my content"}/>
            <input onCopy={() => eventTriggered('copy')} value={"Copy my content"}/>
            <input onCut={() => eventTriggered('cut')} value={"Cut my content"}/>
            <input onPaste={() => eventTriggered('paste')} placeholder={"Paste something here"}/>
        </>
    )
)

export default CopyPaste

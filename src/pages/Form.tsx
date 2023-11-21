import React from "react";
import makeSamplePage from "./makeSamplePage";

const Form = makeSamplePage(
    'Forms',
    ['focus', 'blur', 'keyup', 'keydown', 'change'],
    (eventTriggered) => (
        <>
            <input onFocus={() => eventTriggered('focus')} onBlur={() => eventTriggered('blur')} placeholder="Focus me then leave" />
            <input onKeyUp={() => eventTriggered('keyup')} placeholder="Type something" />
            <input onKeyDown={() => eventTriggered('keydown')} placeholder="Type something" />
            <label><input type="checkbox" onChange={() => eventTriggered('change')} /> Change me</label>
        </>
    )
)

export default Form

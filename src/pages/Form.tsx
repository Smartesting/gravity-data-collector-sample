import React from "react";
import makeSamplePage, {EventTriggered} from "./makeSamplePage";
import {TextField} from "@mui/material";

const FormComponent: React.FunctionComponent<{eventTriggered: EventTriggered}> = ({eventTriggered}) => {
    return (
        <form
            onSubmit={(e) => { e.preventDefault(); eventTriggered('submit') }}
            onReset={() => eventTriggered('reset')}
        >
            <TextField fullWidth variant="outlined" onFocus={() => eventTriggered('focus')} onBlur={() => eventTriggered('blur')} placeholder="Focus me then leave" />
            <TextField fullWidth variant="outlined" onKeyUp={() => eventTriggered('keyup')} placeholder="Type something" />
            <TextField fullWidth variant="outlined" onKeyDown={() => eventTriggered('keydown')} placeholder="Type something" />
            <TextField fullWidth variant="outlined" id="searchField" type="search" placeholder="Search something here" />
            <label>
                <input type="checkbox" onChange={() => eventTriggered('change')} /> Change me
            </label>
            <input type="submit" value="Submit the form" />
            <input type="reset" value="Reset the form" />
        </form>
    )
}

const Form = makeSamplePage(
    'Forms',
    ['focus', 'blur', 'keyup', 'keydown', 'change', 'submit', 'reset'],
    (eventTriggered) => <FormComponent eventTriggered={eventTriggered} />
)

export default Form

import React from "react";
import makeSamplePage, {EventTriggered} from "./makeSamplePage";
import {TextField} from "@mui/material";

enum DataTestIds {
    Focus = 'Form.Focus',
    Blur = 'Form.Blur',
    KeyUp = 'Form.KeyUp',
    KeyDown = 'Form.KeyDown',
    Change = 'Form.Change',
    Submit = 'Form.Submit',
    Reset = 'Form.Reset'
}

const FormComponent: React.FunctionComponent<{eventTriggered: EventTriggered}> = ({eventTriggered}) => {
    return (
        <form
            onSubmit={(e) => { e.preventDefault(); eventTriggered('submit') }}
            onReset={() => eventTriggered('reset')}
        >
            <TextField data-testid={DataTestIds.Focus} fullWidth variant="outlined" onFocus={() => eventTriggered('focus')} onBlur={() => eventTriggered('blur')} placeholder="Focus me then leave" />
            <TextField data-testid={DataTestIds.KeyUp} fullWidth variant="outlined" onKeyUp={() => eventTriggered('keyup')} placeholder="Type something" />
            <TextField data-testid={DataTestIds.KeyDown} fullWidth variant="outlined" onKeyDown={() => eventTriggered('keydown')} placeholder="Type something" />
            <label>
                <input data-testid={DataTestIds.Change} type="checkbox" onChange={() => eventTriggered('change')} /> Change me
            </label>
            <input data-testid={DataTestIds.Submit} type="submit" value="Submit the form" />
            <input data-testid={DataTestIds.Reset} type="reset" value="Reset the form" />
        </form>
    )
}

const Form = makeSamplePage(
    'Forms',
    ['focus', 'blur', 'keyup', 'keydown', 'change', 'submit', 'reset'],
    (eventTriggered) => <FormComponent eventTriggered={eventTriggered} />
)

export default Form

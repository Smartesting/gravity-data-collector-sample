import React from "react";
import makeSamplePage, {EventTriggered} from "./makeSamplePage";

const FormComponent: React.FunctionComponent<{eventTriggered: EventTriggered}> = ({eventTriggered}) => {
    return (
        <form
            onSubmit={(e) => { e.preventDefault(); eventTriggered('submit') }}
            onReset={() => eventTriggered('reset')}
        >
            <input onFocus={() => eventTriggered('focus')} onBlur={() => eventTriggered('blur')} placeholder="Focus me then leave" />
            <input onKeyUp={() => eventTriggered('keyup')} placeholder="Type something" />
            <input onKeyDown={() => eventTriggered('keydown')} placeholder="Type something" />
            <input id="searchField" type="search" placeholder="Search something here" />
            <label><input type="checkbox" onChange={() => eventTriggered('change')} /> Change me</label>
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

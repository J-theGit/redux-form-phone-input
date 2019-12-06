import React from "react";
import { Field, reduxForm } from "redux-form";
import Phone from "./Phone";

const Form = () => {
    return (
        <form>
            <div>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
            </div>
            <Field name="phone" component={Phone} />
        </form>
    );
};

export default reduxForm({
    form: "example",
    destroyOnUnmount: false
})(Form);

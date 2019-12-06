import React, { Component } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

class Phone extends Component {
    render() {
        const {
            input: { value, onChange }
        } = this.props;

        return <PhoneInput country={"us"} value={value} onChange={onChange} />;
    }
}

export default Phone;

import React from "react";
import "./FormInput.scss"

const FormInput = ({ label, ...otherProps }) => {
     return (
        <div className="group">

            {label && (
                <label
                    className="form-input-label"
                >
                    {label}
                </label>
            )}
            <input className="form-input"{...otherProps} />

        </div>
    );
};

export default FormInput;

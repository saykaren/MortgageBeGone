import React from "react";

interface InputLabelOneProps {
    handleReset: (arg1:string, arg2:(arg1:number)=>void)=>void;
    title: string;
    arrayCheck?: [];
    value?: string;
    setProperty: (arg1:number)=>void;
}
const InputLabelOne = ({
                           handleReset,
                           title,
                           arrayCheck,
                           value,
                           setProperty,
                       }: InputLabelOneProps) => {
    return (
        <label className="inputSection">
            {title}:
            {(arrayCheck.length <= 1 && (
                <input
                    type="number"
                    name="Mortgage"
                    value={value}
                    onChange={(e) => handleReset(e.currentTarget.value, setProperty)}
                ></input>
            )) || <span>{value}</span>}
        </label>
    );
};

export default InputLabelOne;
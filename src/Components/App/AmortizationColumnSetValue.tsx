import React from "react";

interface AmortizationColumnSetValueProps {
    title: string;
    copyValue: number
    arr: number[];
}

const AmortizationColumnSetValue = ({title, copyValue, arr}: AmortizationColumnSetValueProps) => {
    return (
        <div className="tableCell">
            {title}
            {arr.map((value, index) => (
                <div className="cellDetails" key={index}>
                    {copyValue}
                </div>
            ))}
        </div>
    );
};

export default AmortizationColumnSetValue;
import React from "react";

interface AmortizationColumnProps {
    title: string;
    initialRow: string;
    arr: [];
}

const AmortizationColumn = ({title, initialRow, arr}: AmortizationColumnProps) => {
    return (
        <div className="tableCell">
            {title}
            <div className="cellDetails">{initialRow}</div>
            {arr.map((value, index) => (
                <div className="cellDetails" key={index}>
                    {value}
                </div>
            ))}
        </div>
    );
};

export default AmortizationColumn;
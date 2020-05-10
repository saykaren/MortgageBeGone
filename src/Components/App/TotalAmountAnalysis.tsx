import React from 'react';

interface TotalAmountAnalysisProps {
  loan: number;
  principalWidth: number;
  intTotal: number;
  interestWidth: number;
  overallTotal: number;
}

const TotalAmountAnalysis = ({
  loan,
  principalWidth,
  intTotal,
  interestWidth,
  overallTotal,
}: TotalAmountAnalysisProps) => {
  return (
    <div className="dataSection">
      <div className="amounts">
        Loan Amount: ${loan} ({principalWidth.toFixed(2)}%)
      </div>
      <div className="amounts">
        Total Interest Paid:{' '}
        <span className="negative">
          ${intTotal.toFixed(2)} ({interestWidth.toFixed(2)}%)
        </span>
      </div>
      <div className="amounts">
        Total Paid:{' '}
        <span className="negative"> ${overallTotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default TotalAmountAnalysis;

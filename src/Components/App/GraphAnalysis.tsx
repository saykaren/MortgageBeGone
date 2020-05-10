import React from 'react';

interface GraphAnalysisProps {
  totalPaidData: number;
  graphPWidth: number;
  graphIWidth: number;
}

const GraphAnalysis = ({
  totalPaidData,
  graphPWidth,
  graphIWidth,
}: GraphAnalysisProps) => {
  return (
    <div className="dataSection">
      <div className="negative">Total Paid ${totalPaidData.toFixed(2)}</div>
      <div className="growGraph">
        <div
          id="principalBar"
          className="detailsColumn"
          style={{
            height: `${graphPWidth / 2}%`,
            backgroundColor: '#61dafb',
            border: '2px solid white',
            color: '#282c34',
          }}
        >
          {graphPWidth.toFixed(2)}%
        </div>
        <div
          id="interestPaid"
          className="detailsColumn"
          style={{
            height: `${graphIWidth / 2}%`,
            backgroundColor: 'red',
            border: '2px solid white',
            color: '#282c34',
          }}
        >
          {graphIWidth.toFixed(2)}%
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>Principal</div>
        <div className="negative">Interest</div>
      </div>
    </div>
  );
};

export default GraphAnalysis;

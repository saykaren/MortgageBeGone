import React from 'react';

interface TimeAnalysisProps {
  title: string;
  arr: number[];
}

const TimeAnalysis = ({ title, arr }: TimeAnalysisProps) => {
  return (
    <div className="title">
      {title}
      <br />
      <div className="positiveLarge">
        {Math.floor(arr.length / 12)} years {arr.length % 12} months
      </div>
      ({arr.length} months)
    </div>
  );
};

export default TimeAnalysis;

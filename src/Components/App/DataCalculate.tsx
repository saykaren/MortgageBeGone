import React, { useState, useEffect, ChangeEvent, FC } from 'react';
import NumberConverter from './NumberConverter';
import DataAnalysis from './DataAnalysis';
import GenerateCalculation from './GenerateCalculation';
import ExtraPaymentCalculation from './ExtraPaymentCalculation';
import AmortizationColumnSetValue from './AmortizationColumnSetValue';
import AmortizationColumn from './AmortizationColumn';
import InputLabelOne from './InputLabelOne';
import Modal from './Modal';

const DataCalculate: React.FC = () => {
  // User Input
  const [principal, setPrincipal] = useState(172000);
  const [interestRate, setInterestRate] = useState(3.75);
  const [monthlyPayment, setMonthlyPayment] = useState(1500);
  const [extraPayment, setExtraPayment] = useState(1000);

  //Extra payment
  const [extraPrincipalPaidArray, setExtraPrincipalPaidArray] = useState([0]);
  const [extraInterestPaidArray, setExtraInterestPaidArray] = useState([0]);
  const [
    extraNewEndingPrincipalArray,
    setExtraNewEndingPrincipalArray,
  ] = useState<number[]>([0]);

  //Update Input
  const [principalPaidArray, setPrincipalPaidArray] = useState([0]);
  const [interestPaidArray, setInterestPaidArray] = useState([0]);
  const [newEndingPrincipalArray, setNewEndingPrincipalArray] = useState([0]);

  // Modal
  const [modal, setModal] = useState<boolean>(false);

  //Calculations
  interface handleGenerateCalculationProps {
    newEndingPrincipalArray: [];
    interestRate: number;
    monthlyPayment: number;
    principalPaidArray: number[];
    setPrincipalPaidArray: ([]) => void;
    interestPaidArray: number[];
    setInterestPaidArray: number[];
    setNewEndingPrincipalArray: ([]) => void;
    principal: number;
  }

  const handleGenerateCalculation = () => {
    GenerateCalculation({
      newEndingPrincipalArray,
      interestRate,
      monthlyPayment,
      principalPaidArray,
      setPrincipalPaidArray,
      interestPaidArray,
      setInterestPaidArray,
      setNewEndingPrincipalArray,
      principal,
    });
  };

  const handleGenerateExtraCalculation = () => {
    ExtraPaymentCalculation({
      extraNewEndingPrincipalArray,
      interestRate,
      setModal,
      extraPayment,
      monthlyPayment,
      extraPrincipalPaidArray,
      setExtraPrincipalPaidArray,
      extraInterestPaidArray,
      setExtraInterestPaidArray,
      setExtraNewEndingPrincipalArray,
      principal,
    });
  };

  const handleReset = (e: string, setEvent: (arg1: number) => void) => {
    let result = parseFloat(e);
    setEvent(result);
  };

  useEffect(() => {
    if (
      newEndingPrincipalArray.length >= 1 &&
      newEndingPrincipalArray[newEndingPrincipalArray.length - 1] > 0
    ) {
      setTimeout(handleGenerateCalculation, 100);
    }
  }, [newEndingPrincipalArray]);

  useEffect(() => {
    if (
      extraNewEndingPrincipalArray.length >= 1 &&
      extraNewEndingPrincipalArray[extraNewEndingPrincipalArray.length - 1] > 0
    ) {
      setTimeout(handleGenerateExtraCalculation, 100);
    }
  }, [extraNewEndingPrincipalArray]);

  const calculate = () => {
    handleGenerateCalculation();
    if (extraPayment > 0) {
      handleGenerateExtraCalculation();
    }
  };

  //Calculate total paid
  let totalPaidToBank = 0;
  let extraTotalPaidToBank = 0;

  if (interestPaidArray.length > 0) {
    totalPaidToBank = interestPaidArray.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  }
  if (extraInterestPaidArray.length > 0) {
    extraTotalPaidToBank = extraInterestPaidArray.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  }

  let savedYears = Math.floor(
    (interestPaidArray.length - extraInterestPaidArray.length) / 12,
  );
  let savedMonths =
    (interestPaidArray.length - extraInterestPaidArray.length) % 12;

  let savedTotalPaid = Math.floor(totalPaidToBank - extraTotalPaidToBank);

  return (
    <section className="App">
      {modal && (
        <Modal
          savedYears={savedYears}
          savedMonths={savedMonths}
          setModal={setModal}
          savedTotalPaid={savedTotalPaid}
        />
      )}
      <div id="inputSection">
        <form className="inputForm">
          <InputLabelOne
            handleReset={handleReset}
            title={'Mortgage Checking'}
            arrayCheck={newEndingPrincipalArray}
            value={principal}
            setProperty={setPrincipal}
          />
          <InputLabelOne
            handleReset={handleReset}
            title={'Interest Rate'}
            arrayCheck={newEndingPrincipalArray}
            value={interestRate}
            setProperty={setInterestRate}
          />
          <InputLabelOne
            handleReset={handleReset}
            title={'Monthly Payment'}
            arrayCheck={newEndingPrincipalArray}
            value={monthlyPayment}
            setProperty={setMonthlyPayment}
          />
          <InputLabelOne
            handleReset={handleReset}
            title={'Extra Monthly Payment'}
            arrayCheck={newEndingPrincipalArray}
            value={extraPayment}
            setProperty={setExtraPayment}
          />
        </form>
      </div>
      {(newEndingPrincipalArray[newEndingPrincipalArray.length - 1] <= 1 ||
        newEndingPrincipalArray[newEndingPrincipalArray.length - 1] ===
          undefined) && <button onClick={() => calculate()}>Calculate</button>}
      <button onClick={() => window.location.reload()}>Reset Numbers</button>

      {newEndingPrincipalArray.length > 2 && (
        <DataAnalysis
          interestPaidArray={interestPaidArray}
          mortgage={principal}
          extraInterestPaidArray={extraInterestPaidArray}
          extraTotalPaidToBank={extraTotalPaidToBank}
          totalPaidToBank={totalPaidToBank}
        />
      )}

      {extraNewEndingPrincipalArray.length > 2 && (
        <div id="flexTable">
          <AmortizationColumn
            title="Extra Principal"
            initialRow={principal}
            arr={extraNewEndingPrincipalArray}
          />
          <AmortizationColumnSetValue
            title="Monthly Payment"
            copyValue={monthlyPayment}
            arr={extraNewEndingPrincipalArray}
          />
          <AmortizationColumn
            title="Interest Paid (EXTRA Calculation)"
            initialRow=""
            arr={extraInterestPaidArray}
          />
          <AmortizationColumn
            title="Principal Paid (EXTRA Calculation)"
            initialRow=""
            arr={extraPrincipalPaidArray}
          />
          <AmortizationColumn
            title="Ending Principal (EXTRA Calculation)"
            initialRow=""
            arr={extraNewEndingPrincipalArray}
          />
        </div>
      )}

      <div id="flexTable">
        <AmortizationColumn
          title="Principal"
          initialRow={principal}
          arr={newEndingPrincipalArray}
        />
        <AmortizationColumnSetValue
          title={'Monthly Payment'}
          copyValue={monthlyPayment}
          arr={newEndingPrincipalArray}
        />
        <AmortizationColumn
          title="Interest Paid"
          initialRow=""
          arr={interestPaidArray}
        />
        <AmortizationColumn
          title="Principal Paid"
          initialRow=""
          arr={principalPaidArray}
        />
        <AmortizationColumn
          title="Ending Principal"
          initialRow=""
          arr={newEndingPrincipalArray}
        />
      </div>
    </section>
  );
};

export default DataCalculate;

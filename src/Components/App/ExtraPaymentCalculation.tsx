
import NumberConverter from './NumberConverter';

interface ExtraPaymentCalculationProps {
    extraNewEndingPrincipalArray: number[];
    interestRate: number;
    setModal: (arg: boolean)=>void;
    extraPayment: number;
    monthlyPayment: number;
    extraPrincipalPaidArray: number[];
    setExtraPrincipalPaidArray: ([])=>void;
    extraInterestPaidArray: number[];
    setExtraInterestPaidArray: ([])=>void;
    setExtraNewEndingPrincipalArray: ([])=>void;
    principal: number;
}

const ExtraPaymentCalculation = ({
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
                                 } : ExtraPaymentCalculationProps) => {
    let currentExtraPrincipal: any;
    if (extraNewEndingPrincipalArray.length > 0) {
        currentExtraPrincipal = NumberConverter(
            extraNewEndingPrincipalArray[extraNewEndingPrincipalArray.length - 1],
        );
    }

    const processEachExtraPayment = (num: number) => {
        let paymentExtraInterestPaid = NumberConverter(
            currentExtraPrincipal * ((interestRate * 0.01) / 12),
        );
        let principalExtraPaid;
        ///Last payment 0
        if (num === 0) {
            principalExtraPaid = NumberConverter(currentExtraPrincipal);
            setModal(true);
        } else {
            principalExtraPaid = NumberConverter(
                extraPayment + monthlyPayment - paymentExtraInterestPaid,
            );
        }
        let extraBalance = NumberConverter(
            currentExtraPrincipal - principalExtraPaid,
        );
        setExtraPrincipalPaidArray([
            ...extraPrincipalPaidArray,
            principalExtraPaid,
        ]);
        setExtraInterestPaidArray([
            ...extraInterestPaidArray,
            paymentExtraInterestPaid,
        ]);
        setExtraNewEndingPrincipalArray([
            ...extraNewEndingPrincipalArray,
            extraBalance,
        ]);
    };

    switch (true) {
        case extraNewEndingPrincipalArray[0] ===0 :
            setExtraNewEndingPrincipalArray([principal]);
            break;
        case currentExtraPrincipal > monthlyPayment + extraPayment &&
        extraNewEndingPrincipalArray.length >= 1:
            processEachExtraPayment(1);
            break;
        case currentExtraPrincipal < monthlyPayment + extraPayment &&
        extraNewEndingPrincipalArray[extraNewEndingPrincipalArray.length - 1] > 0:
            processEachExtraPayment(0);
            break;
        case extraNewEndingPrincipalArray[
        extraNewEndingPrincipalArray.length - 1
            ] <= 0:
            break;
        default:
            break;
    }
};

export default ExtraPaymentCalculation;

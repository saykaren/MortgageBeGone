import NumberConverter from './NumberConverter';

interface GenerateCalculationProps {
    newEndingPrincipalArray: number[];
    interestRate: number;
    monthlyPayment: number;
    principalPaidArray: number[];
    setPrincipalPaidArray: ([])=>void;
    interestPaidArray: number[];
    setInterestPaidArray: ([])=>void;
    setNewEndingPrincipalArray: ([])=>void;
    principal: number;
}

const GenerateCalculation = ({
                                 newEndingPrincipalArray,
                                 interestRate,
                                 monthlyPayment,
                                 principalPaidArray,
                                 setPrincipalPaidArray,
                                 interestPaidArray,
                                 setInterestPaidArray,
                                 setNewEndingPrincipalArray,
                                 principal,
                             }: GenerateCalculationProps) => {
    let currentPrincipal = 0;
    // let currentPrincipal;
    if (newEndingPrincipalArray.length > 0) {
        currentPrincipal = NumberConverter(
            newEndingPrincipalArray[newEndingPrincipalArray.length - 1],
        );
    }

    const processEachPayment = (num: number) => {
        let paymentInterestPaid = NumberConverter(
            currentPrincipal * ((interestRate * 0.01) / 12),
        );
        let principalPaid;
        ////0 is last payment
        if (num === 0) {
            principalPaid = NumberConverter(currentPrincipal);
        } else {
            principalPaid = NumberConverter(monthlyPayment - paymentInterestPaid);
        }
        let balance = NumberConverter(currentPrincipal - principalPaid);
        setPrincipalPaidArray([...principalPaidArray, principalPaid]);
        setInterestPaidArray([...interestPaidArray, paymentInterestPaid]);
        setNewEndingPrincipalArray([...newEndingPrincipalArray, balance]);
    };

    switch (true) {
        case newEndingPrincipalArray[0] === 0:
            setNewEndingPrincipalArray([principal]);
            break;
        case currentPrincipal > monthlyPayment &&
        newEndingPrincipalArray.length >= 1:
            processEachPayment(1);
            break;
        case currentPrincipal < monthlyPayment:
            processEachPayment(0);
            break;
        case newEndingPrincipalArray[newEndingPrincipalArray.length - 1] <= 0:
            break;
        default:
            break;
    }
};

export default GenerateCalculation;

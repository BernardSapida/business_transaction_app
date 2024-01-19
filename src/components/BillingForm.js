import { useState } from 'react';

export const useBilling = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [amount, setAmount] = useState('');

    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    return { mobileNumber, amount, handleMobileNumberChange, handleAmountChange };
};

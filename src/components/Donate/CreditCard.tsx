import React, { useState } from "react";

export default function CreditCard() {
  // Separate states for each input field
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [holderName, setHolderName] = useState("");
  const [expiration, setExpiration] = useState("");

  // Handlers for each field
  const handleCardNumberChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(evt.target.value);
  };

  const handleCvcChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(evt.target.value);
  };

  const handleHolderNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setHolderName(evt.target.value);
  };

  const handleExpirationChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setExpiration(evt.target.value);
  };

  // Data for form fields
  const formData = [
    {
      id: 1,
      fieldName: "Enter Credit Card Number",
      value: cardNumber,
      onChange: handleCardNumberChange,
    },
    {
      id: 2,
      fieldName: "CVC",
      value: cvc,
      onChange: handleCvcChange,
    },
    {
      id: 3,
      fieldName: "Credit Card Holder Name",
      value: holderName,
      onChange: handleHolderNameChange,
    },
    {
      id: 4,
      fieldName: "Expiration",
      value: expiration,
      onChange: handleExpirationChange,
    },
  ];

  return (
    <>
      {/* Component: Rounded basic input */}
      {formData.map((item) => (
        <div className="credit-card flex flex-col my-3" key={item.id}>
          <div className="relative">
            <input
              id={`field-${item.id}`}
              type="text"
              name={`field-${item.id}`}
              placeholder={item.fieldName}
              value={item.value}
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-red-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              onChange={item.onChange}
            />
            <label
              htmlFor={`field-${item.id}`}
              className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-red-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              {item.fieldName}
            </label>
          </div>
        </div>
      ))}
      {/* End Rounded basic input */}
    </>
  );
}

import React, { useState } from "react";

import cls from "./Profile_grid.module.css";

const Profile = (validateValue: any) => {
  const [changingMode, setChangingMode] = useState(false);
  const [editing, setEditing] = useState();
  const [valueName, setValueName] = useState();
  // const [valueAge, setValueAge] = useState();

  const priceFormater = (price: any, numberLength: number) => {
    // number with one dec without rounding up or down.
    const price2 = price * 10;
    const integerPart = Math.floor(price2);

    const wholeNumber = Math.floor(price);

    const digsAfterComma = price - integerPart;

    const numWithOneDec = price.toFixed(1);

    // getting the amount of last digits using the numberLength
    const lastDigits = numberLength - 2;

    // getting the actual number of digits from a price
    const theDigits = price.toString().slice(-lastDigits);

    // getting the number of digits after comma + (dot & 0)
    const numOfDigits = numberLength + 2;

    //checking what kind of a number is price

    const AmountOfDigitsOfAWholeNumber = Math.floor(price);
    const priceLengthMinusNumberLength =
      AmountOfDigitsOfAWholeNumber.toString().length - numberLength;
    const correctPriceLength =
      price / Math.pow(10, priceLengthMinusNumberLength + 1);

    // checking if the price begins with 0.0.....
    if (numWithOneDec - wholeNumber === 0) {
      if (digsAfterComma.toString().length > numOfDigits) {
        if (digsAfterComma < 0.1) {
          return numWithOneDec + "..." + theDigits;
        }
        return integerPart / 10 + "..." + theDigits;
      }
    }

    // checking if the price length > the given are for a number
    if (digsAfterComma.toString().length > numOfDigits) {
      if (digsAfterComma < 0.1) {
        return integerPart / 10 + 0 + "..." + theDigits;
      }
      return integerPart / 10 + "..." + theDigits;
    }

    if (AmountOfDigitsOfAWholeNumber.toString().length > numOfDigits) {
      return Math.floor(correctPriceLength) + "...";
    }

    if (numWithOneDec - wholeNumber === 0) {
      if (digsAfterComma.toString().length > numOfDigits) {
        if (digsAfterComma < 0.1) {
          if (digsAfterComma >= 0.01) {
            return price.toFixed(1) + "..." + theDigits;
          }
          return numWithOneDec + "..." + theDigits;
        }
        return integerPart / 10 + "..." + theDigits;
      }
    }
    if (price > 0 && price < 1) {
      if (price.toString().length) {
      }
    }

    if (digsAfterComma.toString().length > numOfDigits) {
      if (digsAfterComma < 0.1) {
        if (integerPart / 10 < 0.1) {
          return integerPart / 10 + ".0..." + theDigits;
        }
      }
    }
    // check if the price length is smaller than the numberLength
    if (price.toString().length < numberLength) {
      return price.toFixed(numberLength);
    }
    // if the price length is smaller than the numberLength + 2 (0+.)
    if (price.toString().length <= numOfDigits) {
      return price.toFixed(1) + "..." + theDigits;
    }
  };
  priceFormater(1.9123, 6);

  const modeHandler = () => {
    setChangingMode(true);
  };

  const nameHandler = (event: any) => {
    setEditing(event.target.value);
  };

  const save = () => {
    setValueName(editing);
    setChangingMode(false);
  };

  return (
    <div className={cls.container}>
      <div className={cls.item_a}>
        <p>Your Profile</p>
      </div>

      <div className={cls.item_b}>
        <div>
          <label>Name:</label>
          <label> {valueName}</label>
        </div>

        <div>
          <label>Age:</label>
          <label> </label>
        </div>
      </div>
      <div className={cls.item_b_inputs}>
        {changingMode && <input onChange={nameHandler}></input>}
        {changingMode && <input onChange={nameHandler}></input>}
      </div>

      <div className={cls.button_edit}>
        {changingMode && <button onClick={save}>Ok</button>}
        {!changingMode && <button onClick={modeHandler}>Edit</button>}
      </div>

      <div className={cls.item_c}>
        <p>sidebar</p>
      </div>

      <div className={cls.item_d}>
        <p>Footer</p>
      </div>
    </div>
  );
};

export default Profile;

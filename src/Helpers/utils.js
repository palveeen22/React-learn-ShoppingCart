// import { geolocated } from "react-geolocated";

export const formatNumber = (number) => {
  const numberString = number.toString();

  const [integerPart, decimalPart] = numberString.split(".");

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  if (decimalPart) {
    return `${formattedInteger}.${decimalPart}`;
  } else {
    return formattedInteger;
  }
};

// // Check if browser is supporting geolocated or not
// if (this.props.isGeolocationAvailable) {
//   // check if location in browser is enabled or not
//   if (this.props.isGeolocationEnabled) {
//     // check if coordinates of current location is available or not
//     if (this.props.coords) {
//       // render the coordinates of current location.
//     }
//   }
// }

// const myNumber = 1234567;
// const formattedNumber = formatNumber(myNumber);
// console.log(formattedNumber);

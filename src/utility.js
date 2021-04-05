const fs = require("fs");

/**
 *  Creating a Prking lot Of Size.. Entered
 */
const createParkingLot = (noOfParkingLots) => {
  var parkingLots = [];
  for (let i = 0; i < noOfParkingLots; i++)
    parkingLots.push({ vehicleNo: "", inTime: "", outTime: "" });
  fs.writeFileSync("parking-lots.json", JSON.stringify(parkingLots));
};

/**
 *  Checking if Parking Slot is avaialble
 */
const isParkingSlotAvailable = () => {};

/**
 *  Parking vehicle by Vehicle Number
 */
const park = (vehicleNo) => {
  const parkingLots = loadCurrentStatus();
  console.log(parkingLots);
  if (parkingLots) {
    parkingLots.push({
      vehicleNo: vehicleNo,
      inTime: new Date(),
    });
    try {
      fs.writeFileSync("parking-lot.json", parkingLots);
    } catch (error) {
      console.log("Error : " + error.message);
    }
  } else console.log("Parking LOt Is Empty");

  // Second way using Spread Operator
};

/**
 *  Vehicle is leaving from Parking Slot
 */
const leave = (vehicleNo) => {};

/**
 *  Calculating the Fee for the Parking by Time it's Parked
 */
const calculateParkingFee = () => {};

/**
 *  Prints the Current Status of the Parking Slots.
 */
const loadCurrentStatus = () => {
  try {
    const parkingStatusBuffer = fs.readFileSync("parking-lot.json");
    const parkingStatusJSON = parkingStatusBuffer.toString();
    return JSON.parse(parkingStatusJSON);
  } catch (error) {
    console.log("Error while loadinf  the Parjing LOt INFO" + error.message);
  }
};

module.exports = {
  createParkingLot,
  isParkingSlotAvailable,
  park,
  leave,
  loadCurrentStatus,
  calculateParkingFee,
};

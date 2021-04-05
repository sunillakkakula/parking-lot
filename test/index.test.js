const { createParkingLot, loadCurrentStatus } = require("../src/utility");

test("create parking lot of size 6 ", () => {
  createParkingLot(6);
  const status = loadCurrentStatus();
  if (status) {
    console.log("Has Created Parking lot for 6 Vehicles.");
  } else throw Error("Failed..Test Create");
});

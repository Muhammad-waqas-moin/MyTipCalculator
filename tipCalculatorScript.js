// console.log("ok");
"use strict";

let myMainForm = document.getElementById("myForm");
myMainForm.addEventListener("submit", runOnSubmitFunction);
function runOnSubmitFunction(e) {
  let initailBillValue = +document.getElementById("bill_inputValue").value;
  let initailTipValue = +document.getElementById("tip_InputValue").value;
  let howManyPerson = +document.getElementById("perPerson_tipValue").value;
  calculateMyTip(initailBillValue, initailTipValue, howManyPerson);
  clearInputFeildsAfterSubmit();
  e.preventDefault();
}
function clearInputFeildsAfterSubmit() {
  myMainForm.reset();
}
const calculateMyTip = function (B, T, P) {
  let setTip = document.getElementById("tipValueClass");
  let setTotal = document.getElementById("totalValueClass");
  let final_tip = ((T / 100) * B) / P;
  let final_totalBill = B / P + final_tip;
  //   let final_totalBill = (B + final_tip) / P;
  setTip.childNodes[1].innerHTML = `$${final_tip}`;
  setTotal.childNodes[1].innerHTML = `$${final_totalBill}`;
  console.log(final_tip, final_totalBill);
};

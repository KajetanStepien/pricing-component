const pageviewsOutput = document.querySelector(".pageviews");
const priceOutput = document.querySelector(".price");
const pageviewsInput = document.querySelector(".rangeInput");
const billingTime = document.querySelector(".billingTimeCheckbox");
let discount = 1;

function outputGenerator(pageviewsNumber, priceNumber) {
  pageviewsOutput.innerHTML = pageviewsNumber + " PAGEVIEWS";
  const price = priceNumber * discount;
  priceOutput.innerHTML = "$" + price + ".00";
}

function discountTracker() {
  if (billingTime.checked) {
    discount = 0.75;
    priceCalc();
  } else {
    discount = 1;
    priceCalc();
  }
}

pageviewsInput.oninput = function () {
  var value =
    ((pageviewsInput.value - pageviewsInput.min) /
      (pageviewsInput.max - pageviewsInput.min)) *
    100;
  pageviewsInput.style.background =
    "linear-gradient(to right, #a5f3eb 0%, #a5f3eb " +
    value +
    "%, #eaeefb 0%, #eaeefb 0%)";
};

function priceCalc() {
  if (pageviewsInput.value == 0) {
    outputGenerator("10K", 8);
  }
  if (pageviewsInput.value == 1) {
    outputGenerator("50K", 12);
  }
  if (pageviewsInput.value == 2) {
    outputGenerator("100K", 16);
  }
  if (pageviewsInput.value == 3) {
    outputGenerator("500K", 24);
  }
  if (pageviewsInput.value == 4) {
    outputGenerator("1M", 36);
  }
}

const dealsUrl = "https://www.cheapshark.com/api/1.0/deals?storeID=11&sortBy=Price&desc=1";
const storesUrl = "https://www.cheapshark.com/api/1.0/stores";

fetch(dealsUrl).then(function (response) {
  return response.json();
}).then(function (returned) {
  console.log(returned.reverse());
})

fetch(storesUrl).then(function (response) {
  return response.json();
}).then(function (result) {
  console.log(result)
})

// pseduo code

// eventlistener for submit
document.addEventListener("submit", function (event) {
  event.preventDefault();
  // metacritic testing
  const metacritic = document.getElementById("metacritic");
  const metacriticValue = metacritic.value;
  console.log('it worked');
  console.log(metacriticValue);
  const metaUrl = `https://www.cheapshark.com/api/1.0/deals?metacritic=${metacriticValue}`;
  fetch(metaUrl).then(function (response) {
    return response.json();
  }).then(function (returned) {
    console.log(returned);
  })
})

// is on sale checkbox

// for sorting by price:
// forEach loop that checks for prices and then sorts prices from highest to lowest using .sort()
// if

// store metacritic scores in a variable
// 

// steam review score

// game store
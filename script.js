const dealsUrl = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15";
const storesUrl = "https://www.cheapshark.com/api/1.0/stores"

fetch(dealsUrl).then(function (response) {
  return response.json();
}).then(function (returned) {
  console.log(returned.length);
  console.log(returned[8].salePrice);
  for (i = 0; i < 10; i++) {
    console.log(returned[i].salePrice);
  }
  // console.log( M)
})

fetch(storesUrl).then(function (response) {
  return response.json();
}).then(function (result) {
  console.log(result)
  console.log(result[3].storeName);
})

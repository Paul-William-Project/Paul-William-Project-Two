// const dealsUrl = "https://www.cheapshark.com/api/1.0/deals?storeID=11&sortBy=Price&desc=1";
const storesUrl = "https://www.cheapshark.com/api/1.0/stores";

const url = new URL('https://www.cheapshark.com/api/1.0/deals');

// use name spacing to append list of store names onto the 'game store' option in the form
const priceApp = {};

// takes list of stores from API
priceApp.getStoreArray = () => {
  fetch(storesUrl).then(function (response) {
    return response.json();
  }).then(function (jsonResponse) {
    // this returns the array for stores
    priceApp.displayArray(jsonResponse);
    console.log(jsonResponse);
  })
}

// function to append store name alphabetically to options
priceApp.displayArray = (storeArray) => {
  // variable for the store array, forEach loops feed into it
  let storeNames = [];
  const storeItems = document.getElementById('gameStore');

  // creating the array for store names and sorting by alphabetical order
  storeArray.forEach((storeID) => {
    selectStore = storeID.storeName;
    selectID = storeID.storeID;
    console.log(selectStore);
    storeNames.push(selectStore)
    storeNames.sort();

    let newOption = document.createElement('option');
    newOption.innerHTML = selectStore;
    newOption.value = selectID;
    // newOption.value = priceapp.displayArray
    storeItems.append(newOption);
  });

  console.log(storeNames);

  // // appends the sorted store name array into the option
  // storeNames.forEach((sortName) => {
  //   let newOption = document.createElement('option');
  //   newOption.innerHTML = sortName;
  //   // newOption.value = priceapp.displayArray
  //   storeItems.append(newOption);
  // })

  // https://stackoverflow.com/questions/278089/javascript-to-sort-contents-of-select-element
  function sortSelect(selElem) {
    let tmpAry = [];
    for (let i = 0; i < selElem.options.length; i++) {
      tmpAry[i] = [];
      tmpAry[i][0] = selElem.options[i].text;
      tmpAry[i][1] = selElem.options[i].value;
    }
    console.log(tmpAry);
    tmpAry.sort();
    for (var i = 0; i < tmpAry.length; i++) {
      var op = new Option(tmpAry[i][0], tmpAry[i][1]);
      selElem.options[i] = op;
    }
    return;
  }

  sortSelect(storeOptions);

}

// https://stackoverflow.com/questions/278089/javascript-to-sort-contents-of-select-element
let storeOptions = document.getElementById('gameStore');




// eventlistener for submit
document.addEventListener("submit", function (event) {
  event.preventDefault();

  const saleCheck = document.getElementById('sale')


  // Create variable to hold value for url parameter
  let isChecked
  if (saleCheck.checked === true) {
    isChecked = "1"
    console.log(isChecked)
  } else {
    isChecked = "0"
    console.log(isChecked)
  }


  // Event listener checks for if radio button is (Highest to Lowest- Lowest to highest)
  const radioSelector = document.querySelector('input[type="radio"]:checked')
  const radioValue = radioSelector.value

  const storeSelector = document.getElementById('gameStore')
  const storeValue = storeSelector.value
  console.log(storeValue);


  // Create variable to hold value for url parameter
  let priceSort = ""
  if (radioValue === "highest") {
    priceSort = "1"
  } else {
    priceSort = "0"
  }

  // metacritic testing
  const metacritic = document.getElementById("metacritic");
  const metacriticValue = metacritic.value;

  // Add results to new URL
  url.search = new URLSearchParams({
    onSale: isChecked,
    sortBy: "Price",
    desc: priceSort,
    metacritic: metacriticValue
  });
  console.log(url)

  fetch(url).then(function (response) {
    console.log(response.json());
  })
  // .then(function (returned) {
  //     console.log(returned);
  // })

})

priceApp.init = () => {
  priceApp.getStoreArray();
};

priceApp.init();

// Create a variable to hold parameter of url


// is on sale checkbox

// for sorting by price:
// forEach loop that checks for prices and then sorts prices from highest to lowest using .sort()
// if

// store metacritic scores in a variable
// 

// steam review score

// game store
// const dealsUrl = "https://www.cheapshark.com/api/1.0/deals?storeID=11&sortBy=Price&desc=1";
// const storesUrl = "https://www.cheapshark.com/api/1.0/stores";

const url = new URL('https://www.cheapshark.com/api/1.0/deals');

// pseduo code

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

    // Create variable to hold value for url parameter
    let priceSort = ""
    if (radioValue === "highest") {
        priceSort = "1"    
    }else {
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

// Create a variable to hold parameter of url


// is on sale checkbox

// for sorting by price:
// forEach loop that checks for prices and then sorts prices from highest to lowest using .sort()
// if

// store metacritic scores in a variable
// 

// steam review score

// game store
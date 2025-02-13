// Get all inputs

let productName, dateName, Amount;

productName = document.getElementById("name-asset");
dateName = document.getElementById("date-asset");
Amount = document.getElementById("amount-asset");
let expenseDiv = document.querySelector(".expenseCriterias");
let detailsExpense = document.querySelectorAll(".details");
const expenseForm = document.getElementById("expenseForm");
let expenseContainer = document.querySelector(".expenseMain");
let expenseNameProduct, expenseDate, expenseDetails_Amount;
expenseNameProduct = document.querySelector(".expenseName");
expenseDetails_Amount = document.querySelector(".expenseAmount");
expenseDate = document.querySelector(".expenseDate");
let expenseCriteria = document.querySelector(".expenseCriterias");
const addExpense = () => {
    if (productName.value.trim() == "" || dateName.value.trim() == "" 
        || Amount.value.trim() == "") {
        alert(
          "Some fields are missing or incomplete. Kindly check and try again"
        );
    }
    else{
      const paraName = document.createElement("p");
      const paraAmount = document.createElement("p");
      const paraDate = document.createElement("p");
      paraName.innerHTML = `${productName.value.trim()} `;
      expenseNameProduct.appendChild(paraName);
      paraAmount.innerHTML = `₦${Amount.value.trim()}`;
      expenseDetails_Amount.appendChild(paraAmount);
      paraDate.innerHTML = `${dateName.value.trim()} `;
      expenseDate.appendChild(paraDate);
        // if (window.innerWidth <= 768) {
        //   alert("You are using a mobile device");
            
        // }
      let expenses = {
        name: productName.value.trim(),
        amount: Amount.value.trim(),
        date: dateName.value.trim(),
      };
      // Retrieve existing expenses from localStorage or initialize an empty array
      let getExpenses = localStorage.getItem("expenses");

      // Ensure getExpenses is parsed correctly
      getExpenses = getExpenses ? JSON.parse(getExpenses) : [];

      // Check if getExpenses is an array, if not, reset it to an empty array
      if (!Array.isArray(getExpenses)) {
        getExpenses = [];
      }

      // Add new expense to the array
      getExpenses.push(expenses);

      // Save updated array back to localStorage
      localStorage.setItem("expenses", JSON.stringify(getExpenses));
      // detailsExpense.forEach((expense) => {
      //     expense.innerHTML += `
      //     <p> ${productName.value.trim()} </p>
      //     `;
      // })
      // expenseContainer.innerHTML += `
      //   <div class="expenseDetails_Name">
      //             <p> ${productName.value.trim()} </p>
      //         </div>
      //         <div class="expenseDetails_Amount">
      //             <p> ${Amount.value.trim()} </p>
      //         </div>
      //         <div class="expenseDetails_Date">
      //         <p> ${dateName.value.trim()} </p>
      //         </div>
      // `;
      productName.value = "";
      dateName.value = "";
      Amount.value = "";
    }
}

expenseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addExpense();
    // console.log(productName, dateName, Amount)
    // console.log(productName.value.trim(), dateName.value.trim(), Amount.value.trim())
});

// Store In LocalStorage


const storeLocal = () => {
   let getExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
     if (!Array.isArray(getExpenses)) {
       getExpenses = []; // Reset if somehow it’s not an array
     }
   getExpenses.forEach(expense => {
         const paraName = document.createElement("p");
         const paraAmount = document.createElement("p");
         const paraDate = document.createElement("p");
         paraName.innerHTML = `${expense.name} `;
         expenseNameProduct.appendChild(paraName);
         paraAmount.innerHTML = `₦${expense.amount}`;
         expenseDetails_Amount.appendChild(paraAmount);
         paraDate.innerHTML = `${expense.date} `;
         expenseDate.appendChild(paraDate);
   });
}
document.body.onload = storeLocal();


const deleteExpense = () => {
    const allParams = document.querySelectorAll("p");
    allParams.forEach((paragrapgh) => {
        paragrapgh.addEventListener("click", () => {
            paragrapgh.remove();
            alert()
        })
    })
    };

    // deleteExpense();
// const paraFound = false
// const deleteExpense = () => {
//     const allParams = document.querySelectorAll("p");
//     allParams.forEach((paragrapgh) => {
//         paragrapgh.addEventListener("click", () => {
//             paraFound = true
//             alert("sure")
//         })
//         if (paraFound) {
//             console.log(`Found ${paragrapgh} items`)
//         }else{
//             console.log("No paragraphs found")
//         }
//     })
// };

// deleteExpense();

// Check words in a string

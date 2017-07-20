// BUDGET CONTROLLER
var budgetController = (function() {

    //some code

})();





// UI CONTROLLER
var UIController = (function() {
    
    //some code

})();





//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var ctrlAddItem = function() {

        // 1. Get the feild input data

        // 2. Add item to budget controller

        // 3. Add new item to UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
        console.log("It works.");
    }

    // Event handler for when check button is CLICKED
    document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

    // Event handler for when ENTER is pressed
    document.addEventListener("keypress", function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);
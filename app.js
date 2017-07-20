// BUDGET CONTROLLER
var budgetController = (function () {

    // Some code

})(); // end IIFE





// UI CONTROLLER
var UIController = (function () {

    // Object to store DOM identifier strings
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    // Method for returning UI inputs 
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            } // end getInput return 

        }, // end getInput function

        // Make DOMStrings object public
        getDOMStrings: function () {
            return DOMStrings;
        }
    }; // end return
})(); // end IIFE





//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    //Function that sets up all event listeners
    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMStrings();

        // Event handler for when check button is CLICKED
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        // Event handler for when ENTER is pressed
        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            } // end IF

        }); // end EventListener for ENTER keypress

    }; // end setupEventListeners


    var ctrlAddItem = function () {

        // 1. Get the feild input data
        var input = UICtrl.getInput();

        // 2. Add item to budget controller


        // 3. Add new item to UI


        // 4. Calculate the budget


        // 5. Display the budget on the UI
    }

    // Initializaton function 
    return {
        init: function () {
            console.log('Application has started.');
            setupEventListeners();
        }
    };

})(budgetController, UIController); // end IIFE

controller.init();
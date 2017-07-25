// BUDGET CONTROLLER
var budgetController = (function () {

    // Expense function constructor
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // Income function constructor
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // Data struture for storing incomes and expenses
    var allExpenses = [];
    var allIncomes = [];
    var totalExpenses = 0;

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        } //end totals

    }; // end var data object

    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            //ID = last ID + 1

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Create new item based on 'inc' of 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);
            // Return new element
            return newItem;
        },

        testing: function () {
            console.log(data);
        }
    };
})(); // end IIFE





// UI CONTROLLER
var UIController = (function () {

    // Object to store DOM identifier strings
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };

    // Method for returning UI inputs 
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            } // end getInput return 

        }, // end getInput function

        addListItem: function (obj, type) {
            var html, newHtml, element;

            // 1. Create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix" > <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"> <i class="ion-ios-close-outline"></i></button> </div> </div > </div >';

            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                
                html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"> <i class="ion-ios-close-outline"> </i></button> </div> </div> </div>';
            }

            // 2. Replace placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // 3. Insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

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
        var input, newItem;
        // 1. Get the feild input data
        input = UICtrl.getInput();

        // 2. Add item to budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add new item to UI
        UICtrl.addListItem(newItem, input.type);

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
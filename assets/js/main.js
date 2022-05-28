/**
 * check if this js file is loaded
 */
console.log('hello world');

/**
 * Call the function getItems() when the page is loaded and the DOM is ready to get items and display them
 */
getItems();

/**
 * Listenning the change event on the html select element (select a category for laptops)
 */
document.getElementById('category').addEventListener('change', (e) => {
    // get the value of the selected option by call getLaptops function with the value of the selected option
    // e represents the event
    // e.target is the element that triggered the event
    // e.target.value is the value of the selected option
    getLaptops(e.target.value);
});

/**
 * Listenning the submit event on the html form element (create item)
 * @note: the submit event is triggered when the form is submitted
 * @note: handle form with Javascript step by step on https://flaviocopes.com/form-events/
 */
document.getElementById('item-form').addEventListener('submit', (e) => {
    // prevent the default behavior of the form
    e.preventDefault();
    // get the value of the input name, price, category in a new object
    const item = {
        name : e.target.name.value,
        price : e.target.price.value,
        category : e.target.category.value
    }
    // call the function handleCreateItem with the new object to create a new item
    handleCreateItem(item);
})
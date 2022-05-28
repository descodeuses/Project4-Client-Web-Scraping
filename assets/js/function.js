/**
 * @function getItems
 * @description : get all items from server then display them
 */
const getItems = async () => {
    // stock the response of the server in a variable
    const results = await axios.get('http://localhost:5050/api/items');
    // then call the function displayItems with the response.data to display items
    displayItems(results.data);
}

/**
 * @function deleteItem
 * @param {string|int} id 
 * @description : delete item from server then get all items from server then display them
 */
const deleteItem = async (id) => {
    // delete item on the server
    await axios.delete(`http://localhost:5050/api/items/${id}`);
    // reload items
    getItems();
}

/**
 * @function getLaptops
 * @param {string} category
 * @description : get laptops by category from server then display them 
 */
const getLaptops = async (category) => {
    // verify if category is not empty
    if (category !== '') {
        // if not, get laptops by category from server
        const results = await axios.get(`http://localhost:5050/api/laptops?category=${category}`);
        // and display them by calling the function displayItems
        displayLaptops(results.data);
    // if category is empty, clear the html element from the previous items
    } else document.getElementById('laptops-list').innerHTML = '';
}

/**
 * @function handleCreateItem
 * @param {object} item 
 * @description : create item on server then get all items from server then display them
 */
const handleCreateItem = (item) => {
    // check if all fields are filled
    if (item.name === '' || item.price === '' || item.category === '') {
        // if not, display an error message
        alert('Please fill all the fields');
    } else {
        // if yes, create item and post it on the server
        axios.post('http://localhost:5050/api/items', item)
        .then(res => {
            // if the item is created
            if (res.data.item) {
                // clear the form
                e.target.name.value = '';
                e.target.price.value = '';
                e.target.category.value = '';
                // reload items 
                getItems();
            } else {
            // if the item is not created, display an error message
                alert('Something went wrong');
            }
        });
    }
}
/**
 * @function getItems
 * @description : get all items from server then display them
 */
const getItems = async () => {
    const results = await axios.get('http://localhost:5050/api/items');
    displayItems(results.data);
}

/**
 * @function deleteItem
 * @param {string|int} id 
 * @description : delete item from server then get all items from server then display them
 */
const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5050/api/items/${id}`);
    getItems();
}

/**
 * @function getLaptops
 * @param {string} category
 * @description : get laptops by category from server then display them 
 */
const getLaptops = async (category) => {
    if (category !== '') {
        const results = await axios.get(`http://localhost:5050/api/laptops?category=${category}`);
        displayLaptops(results.data);
    } else document.getElementById('laptops-list').innerHTML = '';
}
/**
 * check if this js file is loaded
 */
console.log('hello world');

/**
 * load items
 */
getItems();


document.getElementById('category').addEventListener('change', (e) => {
    getLaptops(e.target.value);
});

//getPostsFromServer();

document.getElementById('item-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const item = {
        name : e.target.name.value,
        price : e.target.price.value,
        category : e.target.category.value
    }
    if (item.name === '' || item.price === '' || item.category === '') {
        alert('Please fill all the fields');
    } else {
        axios.post('http://localhost:5050/api/items', item)
        .then(res => {
            if (res.data.item) {
                getItems();
                e.target.name.value = '';
                e.target.price.value = '';
                e.target.category.value = '';
            } else {
                alert('Something went wrong');
            }
        });
    }
})
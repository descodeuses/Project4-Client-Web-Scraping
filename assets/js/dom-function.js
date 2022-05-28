/**
 * @function displayItems
 * @param {array} items 
 * @description : display items in the DOM
 */
 const displayItems = (items) => {
    // get element html from DOM where we want to display items
    const row_results = document.getElementById('items-list');
    // clear the html of the element to being clean
    row_results.innerHTML = '';

    // loop through items and display them
    items.forEach(item => {
        // create elements for each item :

        // div for card
        const card = document.createElement('div');
        // div for card body (contains title, price, category)
        const cardBody = document.createElement('div');
        // h5 for title
        const title = document.createElement('h5');
        // p for category
        const category = document.createElement('p');
        // p for price
        const price = document.createElement('p');
        // btn for delete action
        const deleteBtn = document.createElement('button');

        // set id card for each item to be able to target it
        card.id = `item-${item.id}`;
        // set classes for each element
        // all classes used here are bootstrap classes
        card.classList.add('card');
        card.classList.add('col-3');
        card.classList.add('my-2');
        cardBody.classList.add('card-body');
        title.classList.add('card-title');
        category.classList.add('card-text');
        price.classList.add('card-text');
        deleteBtn.classList.add('btn');
        deleteBtn.classList.add('btn-danger');  

        // set text or value for each element
        deleteBtn.value = item.id;
        deleteBtn.innerText = 'Delete';

        title.innerText = item.name;
        category.innerText = item.category;
        price.innerText = item.price;

        // listenning click event on delete button
        deleteBtn.onclick = (e) => {
            // call deleteItem function with id of the item if delete button is clicked
            deleteItem(e.target.value);
        }

        // append each element to the card body
        cardBody.appendChild(title);
        cardBody.appendChild(category);
        cardBody.appendChild(price);
        cardBody.appendChild(deleteBtn);
        card.appendChild(cardBody);

        // append card to the row results
        row_results.appendChild(card);
    });
}

/**
 * @function displayLaptops
 * @param {array} laptops 
 * @description : display laptops in the DOM
 */
const displayLaptops = async (laptops) => {
    // get element html from DOM where we want to display laptops
    const row_results = document.getElementById('laptops-list');
    // clear the html of the element to being clean
    row_results.innerHTML = '';

    // loop through laptops and display them
    laptops.forEach(laptop => {
        // create elements for each laptop :
        const card = document.createElement('div');
        const card_title = document.createElement('h5');
        const card_body = document.createElement('div');
        const card_footer = document.createElement('div');
        const card_img = document.createElement('img');

        // set id card for each laptop to be able to target it
        card.id = `laptop-${laptop.id}`;
        // set classes for each element
        card.className = 'card col-3 my-2 p-0';
        card_title.className = 'card-title';
        card_body.className = 'card-body';
        card_footer.className = 'card-footer';
        card_img.className = 'card-img-top';
        
        // set text or value for each element
        card_title.innerHTML = laptop.title;
        card_footer.innerHTML = `<b>Price :</b> ${laptop.price}`;
        card_img.src = laptop.image;
        card_img.alt = laptop.title;

        // append each element to the card body
        card.appendChild(card_img);
        card_body.appendChild(card_title);

        // for each infos we want to display we create a p element and append it to the card body
        laptop.infos.map(info => {
            const p = document.createElement('p');
            p.innerHTML = `<b>${info.label}</b> : ${info.value}`;
            card_body.appendChild(p);
        });

        card.appendChild(card_body);
        card.appendChild(card_footer);

        // append card to the row results
        row_results.appendChild(card);
    });
}

// const getPostsFromServer = async () => {
//     const results = await axios.get('http://localhost:5050/api/posts');
//     const row_results = document.getElementById('posts-list');

//     results.data.forEach(post => {
//         const card = document.createElement('div');
//         const cardBody = document.createElement('div');
//         const title = document.createElement('h5');
//         const body = document.createElement('p');
//         const author = document.createElement('p');

//         card.classList.add('card');
//         card.classList.add('col-3');
//         card.classList.add('my-2');
//         card.id = `post-${post.id}`;
//         cardBody.classList.add('card-body');
//         title.classList.add('card-title');
//         body.classList.add('card-text');
//         author.classList.add('card-text');

//         title.innerText = post.title;
//         body.innerText = post.body;
//         author.innerText = `author : ${post.userId}`;

//         cardBody.appendChild(title);
//         cardBody.appendChild(body);
//         cardBody.appendChild(author);
//         card.appendChild(cardBody);
//         row_results.appendChild(card);
//     });
// }
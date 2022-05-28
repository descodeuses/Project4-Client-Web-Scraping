const getItems = async() => {
    const results = await axios.get('http://localhost:5050/api/items');
    displayItems(results.data);
}

const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5050/api/items/${id}`);
    getItems();
}

const displayItems = (items) => {
    const row_results = document.getElementById('items-list');
    row_results.innerHTML = '';

    items.forEach(item => {
        const card = document.createElement('div');
        const cardBody = document.createElement('div');
        const title = document.createElement('h5');
        const category = document.createElement('p');
        const price = document.createElement('p');
        const deleteBtn = document.createElement('button');

        card.classList.add('card');
        card.classList.add('col-3');
        card.classList.add('my-2');
        card.id = `item-${item.id}`;
        cardBody.classList.add('card-body');
        title.classList.add('card-title');
        category.classList.add('card-text');
        price.classList.add('card-text');
        deleteBtn.classList.add('btn');
        deleteBtn.classList.add('btn-danger');  
        deleteBtn.innerText = 'Delete';
        deleteBtn.value = item.id;

        title.innerText = item.name;
        category.innerText = item.category;
        price.innerText = item.price;

        deleteBtn.onclick = (e) => {
            deleteItem(e.target.value);
        }

        cardBody.appendChild(title);
        cardBody.appendChild(category);
        cardBody.appendChild(price);
        cardBody.appendChild(deleteBtn);
        card.appendChild(cardBody);
        row_results.appendChild(card);
    });
} 

const getPostsFromServer = async () => {
    const results = await axios.get('http://localhost:5050/api/posts');
    const row_results = document.getElementById('posts-list');

    results.data.forEach(post => {
        const card = document.createElement('div');
        const cardBody = document.createElement('div');
        const title = document.createElement('h5');
        const body = document.createElement('p');
        const author = document.createElement('p');

        card.classList.add('card');
        card.classList.add('col-3');
        card.classList.add('my-2');
        card.id = `post-${post.id}`;
        cardBody.classList.add('card-body');
        title.classList.add('card-title');
        body.classList.add('card-text');
        author.classList.add('card-text');

        title.innerText = post.title;
        body.innerText = post.body;
        author.innerText = `author : ${post.userId}`;

        cardBody.appendChild(title);
        cardBody.appendChild(body);
        cardBody.appendChild(author);
        card.appendChild(cardBody);
        row_results.appendChild(card);
    });
}

const getLaptopsFromServer = async (category) => {
    const results = await axios.get(`http://localhost:5050/api/laptops?category=${category}`);
    const row_results = document.getElementById('laptops-list');

    row_results.innerHTML = '';

    results.data.forEach(result => {

        const card = document.createElement('div');
        const card_title = document.createElement('h5');
        const card_body = document.createElement('div');
        const card_footer = document.createElement('div');
        const card_img = document.createElement('img');

        card.className = 'card col-3 my-2 p-0';
        card_title.className = 'card-title';
        card_title.innerHTML = result.title;
        card_body.className = 'card-body';
        card_footer.className = 'card-footer';
        card_footer.innerHTML = `<b>Price :</b> ${result.price}`;
        card_img.className = 'card-img-top';
        card_img.src = result.image;
        card_img.alt = result.title;
        card.appendChild(card_img);
        card_body.appendChild(card_title);
        result.infos.map(info => {
            const p = document.createElement('p');
            p.innerHTML = `<b>${info.label}</b> : ${info.value}`;
            card_body.appendChild(p);
        });
        card.appendChild(card_body);
        card.appendChild(card_footer);
        row_results.appendChild(card);
        
    });
}
fetch("http://localhost:3000/api/products")
.then((resp) => resp.json())
.then(function(data) {
    const container = document.querySelector('#items');
    data.forEach((product) => {
        let a = document.createElement('a');
        a.href = `./product.html?id=${product._id}`;
        
        let article = document.createElement('article');

        let img = document.createElement('img');
        img.src = product.imageUrl;
        img.alt = product.name;
        
        let h3 = document.createElement('h3');
        h3.textContent = product.name;
        h3.className = 'productName';

        let p = document.createElement('p');
        p.textContent = product.description;
        p.className = 'productDescription';

        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(p);

        a.appendChild(article);

        container.appendChild(a);
    }); 
})
.catch(function(error) {
  console.log(error);
});

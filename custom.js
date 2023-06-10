
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Process the data here
        // const menu_div = document.getElementById('my_menu');
        const options = { style: 'decimal' };
        categ = []
        data.forEach(record => {
            category = record.category
            info = record.info
            title = info.name
            dozen = info.dozen
            type = info.type
            url = info.url
            price = parseInt(info.price).toLocaleString('en-US', options);
            if (category == 'Special Mankoush') { category = 'Special' }
            const menu_div = document.getElementById('menu-' + category);
            var nestedDiv = menu_div.getElementsByTagName('div')[0];
            // Dozen
            if (dozen !== undefined) {
                dozen_html = `<p class="ingredients">دزدينة ${dozen} .ل.ل</p>`
            } else {
                dozen_html = ''
            }
            // Pizza
            if (type !== undefined) {
                type_html = `${type}`
            } else {
                type_html = ''
            }
            var htmlCode = `
                <div class="col-lg-4 menu-item">
                        <a href="${url}" class="glightbox">
                        <img src="${url}" class="menu-img img-fluid" style="border-radius:50%;" alt="">
                        </a>
                        <h4>${title} ${type_html}</h4>
                        <p class="price">
                        ${price} ل.ل.
                        </p>
                        ${dozen_html}
                        </div>`;

            nestedDiv.innerHTML += htmlCode;
        });
    })
    .catch(error => {
        // Handle any errors
        console.error('Error:', error);
    });
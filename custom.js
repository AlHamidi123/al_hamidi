
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Process the data here
        const container = document.getElementById('menu_element');
        const container2 = document.getElementById('menu-flters');
        const options = { style: 'decimal' };
        categories = []
        // data.forEach(record => {
        //     category = record.category
        //     if (category == 'Special Mankoush') { category = 'Special' }
        //     if (!categories.includes(category)) { categories.push(category) }
        // });
        
        data.forEach(record => {
            category = record.category
            info = record.info
            title = info.name
            price = parseInt(info.price).toLocaleString('en-US', options);
            dozen = info.dozen
            type = info.type
            url = info.url
            // Category array
            if (category == 'Special Mankoush') { category = 'Special' }
            if (!categories.includes(category)) { categories.push(category) }
            if (category == 'Special Mankoush') { category = 'Special' }
            // Dozen
            if (dozen !== undefined) {
                dozen_html = `<span>دزدينة ${dozen} .ل.ل</span>`
            } else {
                dozen_html = ''
            }
            // Pizza
            if (type !== undefined) {
                type_html = `${type}`
            } else {
                type_html = ''
            }
            const htmlCode = `
                <div class="col-lg-6 menu-item filter-${category}">
                    <div class="menu-content">
                        <a href="#">${title} ${type_html}</a><span>${price} .ل.ل</span>
                    </div>
                    <div class="menu-ingredients">
                        ${dozen_html}
                    </div>
                </div>
                `;
            container.innerHTML += htmlCode;
        });
        categories.forEach(categ => {
            const htmlCode = `<li data-filter=".filter-${categ}">${categ}</li>`
            container2.innerHTML += htmlCode;
        });
    })
    .catch(error => {
        // Handle any errors
        console.error('Error:', error);
    });

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Process the data here
        const menu_div = document.getElementById('my_menu');
        const options = { style: 'decimal' };
        const htmlCode = ""

        data.forEach(record => {
            category = record.category
            info = record.info
            title = info.name
            price = parseInt(info.price).toLocaleString('en-US', options);
            dozen = info.dozen
            type = info.type
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
            htmlCode += '<div class="col-lg-6 menu-item filter-'+category+'">'
                    '<div class="menu-content">'
                        '<a href="#">'+title+' '+type_html+'</a><span>'+price+'.ل.ل</span>'
                    '</div>'
                    '<div class="menu-ingredients">'
                        +dozen_html+
                    '</div>'
                '</div>';
            });
        menu_div.innerHTML = htmlCode;
    })
    .catch(error => {
        // Handle any errors
        console.error('Error:', error);
    });
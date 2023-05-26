
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Process the data here
        const container = document.getElementById('menu_element');
        categories = []
        data.forEach(record => {
            // Process each record here
            category = record.category
            info = record.info
            title = info.name
            price = info.price
            dozen = info.dozen
            type = info.type
            url = info.url 
            // Category
            if (!categories.includes(category)){
                categories += [category]
                catego_html = `
                    <div class="container mb-2">
                        <div class="row">
                            <div class="col-xl-6 desktop-only"></div>
                            <div class="col-3">
                                <h1 class="sub_taital">${category}</h1>
                            </div>
                        </div>
                    </div>
                                `
            }
            else{
                catego_html =""
            }
            // Dozen
            if (dozen !== undefined) {
                dozen_html = `<span>دزدينة ${dozen} .ل.ل</span>`
            } else {
                dozen_html = ''
            }

            if (category !== 'Pizza') {
                const htmlCode = `
                ${catego_html}
                    <div class="container mb-2">
                        <div class="row">
                            <div class="col-xl-3 desktop-only"></div>
                            <div class="col-3">
                                <img src=${url} alt="Your Image" class="image">
                            </div>
                            <div class="col-xl-3 col-9 d-flex align-items-center text_wrap">
                                <div class="div text">
                                    <p>${title}
                                    ${price} .ل.ل
                                    </p>
                                    ${dozen_html}
                                </div>
                            </div>
                            <div class="col-xl-3 desktop-only"></div>
                        </div>
                    </div>
                `;
                container.innerHTML += htmlCode;
            }
           
        });
    })
    .catch (error => {
    // Handle any errors
    console.error('Error:', error);
});
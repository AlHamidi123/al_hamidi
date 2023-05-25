
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Process the data here
        const container = document.getElementById('menu_element');
        data.forEach(record => {
            // Process each record here
            category = record.category
            info = record.info
            title = info.name
            price = info.price
            dozen = info.dozen
            type = info.type
            if (dozen !== undefined) {
                dozen_html = `<span>دزدينة ${dozen} .ل.ل</span>`
            }else{
                dozen_html = ''
            }
            if (type !== undefined) {
                console.log(type);
            }else{
                const htmlCode = `
                    <div class="container mb-2">
                        <div class="row">
                            <div class="col-xl-3 desktop-only"></div>
                            <div class="col-3">
                                <img src="images/1.jpg" alt="Your Image" class="image">
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
    .catch(error => {
        // Handle any errors
        console.error('Error:', error);
    });
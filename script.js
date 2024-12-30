
            document.addEventListener('DOMContentLoaded', () => {
                let productListHtml = document.querySelector('.product-list');

                for (let i = 0; i < 9; i++) {
                    productListHtml.innerHTML += 
                    `<a href="product.html" style="text-decoration: none">
                            <div class="product slideshow">
                            <div class="product-img"></div>
                            <div class="product-section-1">
                                <div class="product-title"></div>
                            </div>
                            <div class="product-section-2">
                                <div class="box-p"></div>
                                <div>
                                    <button class="cart-btn">ADD TO CART</button>
                                     </div>
                            </div>
                        </div>
                    </a>
                    `;
                }

                displayProductHandler()

                const products = {
                    0: {title: "Royal Reign", price: 525}, // INCLUDE IMAGES
                    1: {title: "White Bliss", price: 642},
                    2: {title: "Natural Gold", price: 259},
                    3: {title: "Aqua Leads", price: 422},
                    4: {title: "Virgin Whites", price: 623},
                    5: {title: "Maroon Peace", price: 295},
                    6: {title: "Benjamin Bee", price: 458},
                    7: {title: "Black Marvel", price: 456},
                    8: {title: "Gold Grain", price: 509}
                }

                localStorage.setItem("products", JSON.stringify(products));

                let productBox = document.querySelectorAll('.slideshow');

                for (let i = 0; i < productBox.length; i++) {
                    console.log(productBox[i]);

                    let productTitle = JSON.parse(localStorage.getItem("products"))[i]['title'];
                    let productPrice = JSON.parse(localStorage.getItem("products"))[i]['price'];

                    productBox[i].querySelector('.product-title').innerHTML = productTitle;
                    productBox[i].querySelector('.box-p').innerHTML = `Price: $${productPrice}.00`;
                    productBox[i].querySelector('.product-img').innerHTML = `<img src="static/images/featured-collection/0${i+1}.avif">`;
                }

                // SLIDESHOW

                let num = 0;
                let screenWidth = screen.width;
                let cardsDisplayed = parseInt(screenWidth / (280 + 100));
                let productList = document.getElementsByClassName('slideshow');
                let productLength = productList.length;

                document.querySelector('#prev-btn').addEventListener('click', prevSlide);
                document.querySelector('#next-btn').addEventListener('click', nextSlide);

                for (let i = num; i < num + cardsDisplayed; i++) {              
                    productList[i % productLength].style.display = 'flex';
                }

                function nextSlide() {
                    for (let i = num; i < num + cardsDisplayed; i++) {
                        productList[i % productLength].style.display = 'none';
                    }

                    num = num + cardsDisplayed;

                    for (let i = num; i < num + cardsDisplayed; i++) {
                        productList[i % productLength].style.display = 'flex';
                    }
                }

                function prevSlide() {
                    for (let i = num; i < num + cardsDisplayed; i++) {
                        productList[i % productLength].style.display = 'none';
                    }

                    num = num - cardsDisplayed;
                    if (num < 0) {
                        num = productLength - cardsDisplayed;
                    }

                    for (let i = num; i < num + cardsDisplayed; i++) {
                        productList[i % productLength].style.display = 'flex';
                    }
                }

                setInterval(nextSlide, 5000);
            });
     document.addEventListener('DOMContentLoaded', () => {
                let itemName = localStorage.getItem('itemName');
                let itemImage = localStorage.getItem('itemImage');
                let itemPrice = localStorage.getItem('itemPrice');

                document.querySelector('#single-product-title').innerHTML = itemName;
                document.querySelector('#single-product-box-image img').src = itemImage;
                document.querySelector('#single-product-price').innerHTML = itemPrice;
            })
            document.addEventListener('DOMContentLoaded', () => {
                document.addEventListener('scroll', () => {
                    let navBar = document.querySelector('nav');
                    let logoImage = document.querySelector('#about-page-navbar img');
                    let navLinks = document.querySelectorAll('#about-page-nav-text a');

                    if (window.scrollY > 0) {
                        navBar.style.backgroundColor = "white";
                        navBar.style['boxShadow'] = '0 2px 10px rgba(0, 0, 0, 0.05)';
                        logoImage.src = 'static/images/about-pages/logo6.png';
                        logoImage.width = '190';
                        for (let i = 0; i < navLinks.length; i++) {
                            navLinks[i].style.color = 'rgb(50, 50, 50)';
                        }
                    }

                    else {
                        navBar.style.backgroundColor = "transparent";
                        navBar.style['boxShadow'] = 'none';
                        logoImage.src = 'static/images/about-pages/logo5.png';
                        logoImage.width = '200'
                        for (let i = 0; i < navLinks.length; i++) {
                            navLinks[i].style.color = 'rgb(255, 255, 255)';
                        }
                        
                    }
                })
            })       
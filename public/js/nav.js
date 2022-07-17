const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/brand-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <ul class="links-container">
                    <li class="link-item"><a href="index.html" class="link">Home</a></li>
                    <li class="link-item"><a href="equipment.html" class="link">Equipment</a></li>
                    <li class="link-item"><a href="apparel.html" class="link">Apparel</a></li>
                    <li class="link-item"><a href="cart.html" class="link">Cart</a></li>
                </ul>
                <a href=""><img src="img/user.jpg" class="image-user" alt=""></a>
            </div>
        </div>
    `;
}

createNav();
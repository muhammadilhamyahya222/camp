const createFooter = () => {
    let footer = document.querySelector('footer')

    footer.innerHTML = `
        <div class="footer-content">
            <img src="img/brand-logo-light.png" alt="" class="logo">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Equipment</li>
                    <li><a href="equipment.html" class="footer-link">Tent</a></li>
                    <li><a href="equipment.html" class="footer-link">Backpack</a></li>
                    <li><a href="equipment.html" class="footer-link">Stove</a></li>
                    <li><a href="equipment.html" class="footer-link">Lighting</a></li>
                    <li><a href="equipment.html" class="footer-link">Chair</a></li>
                    <li><a href="equipment.html" class="footer-link">Sleep Bag</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">Apparel</li>
                    <li><a href="apparel.html" class="footer-link">Jacket</a></li>
                    <li><a href="apparel.html" class="footer-link">Shoes</a></li>
                    <li><a href="apparel.html" class="footer-link">Sweater</a></li>
                    <li><a href="apparel.html" class="footer-link">Pants</a></li>
                    <li><a href="apparel.html" class="footer-link">Shirt</a></li>
                    <li><a href="apparel.html" class="footer-link">Cap/Hat</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-credit">CAMP, Best online camping store</p>
    `
}

createFooter();
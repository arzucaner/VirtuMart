import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

    < template >
    <div>
        <h2 class="animate__animated animate__fadeIn">Welcome to VirtuMart!</h2>
        <div class="container">
            <div class="menu">
                <a class="menu-link" href="#">Home</a>
                <a class="menu-link" href="#">About</a>
                <a class="menu-link" href="#">Services</a>
                <a class="menu-link" href="#">Contact</a>
            </div>
            <div class="title-wrapper">
                <h1 class="title">Welcome to VirtuMart</h1>
            </div>
            <div class="content">
                <h2>Discover Our Products</h2>
                <p>Check out our amazing selection of products!</p>
                <div class="products-container">
                    <div class="product">
                        <h3>Product 1</h3>
                        <p>Description of Product 1</p>
                        <span>$19.99</span>
                        <button>Add to Cart</button>
                    </div>
                    <div class="product">
                        <h3>Product 2</h3>
                        <p>Description of Product 2</p>
                        <span>$29.99</span>
                        <button>Add to Cart</button>
                    </div>
                    <div class="product">
                        <h3>Product 3</h3>
                        <p>Description of Product 3</p>
                        <span>$39.99</span>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div class="cart-container">
                    <div class="cart-item">
                        <h3>Cart Item 1</h3>
                        <p>Product: Product 1</p>
                        <span>$19.99</span>
                        <button>Remove</button>
                    </div>
                    <div class="cart-item">
                        <h3>Cart Item 2</h3>
                        <p>Product: Product 2</p>
                        <span>$29.99</span>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <p>&copy; 2023 My Website. All rights reserved. | <a class="footer-link" href="#">Privacy Policy</a> | <a class="footer-link" href="#">Terms of Service</a></p>
        </footer>
    </div>




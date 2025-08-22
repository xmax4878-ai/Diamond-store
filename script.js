document.addEventListener('DOMContentLoaded', () => {
    // Main page buttons
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    
    if (loginBtn && registerBtn) { // Check if we are on the main page
        loginBtn.addEventListener('click', () => {
            window.location.href = 'login.html'; // Redirect to login page
        });

        registerBtn.addEventListener('click', () => {
            window.location.href = 'register.html'; // Redirect to register page
        });
    }

    // Login Form logic
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the form from submitting
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // This is just a placeholder. Real login requires a server.
            alert(`အကောင့်ဝင်ရောက်နေပါသည်...\nအီးမေးလ်: ${email}\nစကားဝှက်: ${password}`);
            window.location.href = 'index.html'; // Redirect to main page after login
        });
    }

    // Register Form logic
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the form from submitting
            const name = document.getElementById('register-name').value;
            const phone = document.getElementById('register-phone').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            
            if (password !== confirmPassword) {
                alert("စကားဝှက်နှစ်ခု မတူညီပါ၊ ပြန်စစ်ဆေးပေးပါ");
                return;
            }

            // This is just a placeholder. Real register requires a server.
            alert(`အကောင့်သစ်ဖွင့်နေပါသည်...\nနာမည်: ${name}\nဖုန်း: ${phone}`);
            window.location.href = 'login.html'; // Redirect to login page after successful registration
        });
    }

    const userIdInput = document.getElementById('user-id');
    const serverIdInput = document.getElementById('server-id');
    const productsGrid = document.getElementById('products-grid');
    const purchaseModal = document.getElementById('purchase-modal');
    const closeButton = document.querySelector('.close-button');
    const modalConfirmBtn = document.getElementById('modal-confirm-btn');
    const modalCancelBtn = document.getElementById('modal-cancel-btn');
    const modalUserId = document.getElementById('modal-user-id');
    const modalServerId = document.getElementById('modal-server-id');
    const modalPackageInfo = document.getElementById('modal-package-info');
    
    // Product packages (ဒါတွေကို သင်ပြောင်းလဲနိုင်ပါတယ်)
    const productPackages = [
        { id: 'weekly-pass', title: 'Weekly Pass', price: 6500, description: '6500 ကျပ်' },
        { id: 'twilight-pass', title: 'Twilight Pass', price: 34000, description: '34000 ကျပ်' },
        { id: '500-diamond', title: '500 Diamond', price: 33000, description: '33000 ကျပ်' },
        { id: '250-diamond', title: '250 Diamond', price: 16500, description: '16500 ကျပ်' },
        { id: '150-diamond', title: '150 Diamond', price: 10500, description: '10500 ကျပ်' },
        { id: '50-diamond', title: '50 Diamond', price: 3600, description: '3600 ကျပ်' },
        { id: '11-diamond', title: '11 Diamond', price: 1000, description: '1000 ကျပ်' },
        { id: '22-diamond', title: '22 Diamond', price: 2000, description: '2000 ကျပ်' },
        { id: '44-diamond', title: '44 Diamond', price: 4000, description: '4000 ကျပ်' },
    ];

    // Packages တွေကို HTML ထဲကို ထည့်သွင်းခြင်း
    if (productsGrid) {
        productPackages.forEach(pkg => {
            const item = document.createElement('div');
            item.className = 'product-item';
            item.innerHTML = `
                <img src="https://mobilelegends.com/images/logo/mlbb-logo-icon-1x.png" alt="ML Icon" class="product-icon-small">
                <h3 class="package-price">${pkg.price} ကျပ်</h3>
                <p class="package-details">${pkg.title}</p>
            `;
            productsGrid.appendChild(item);

            // Product ကို Click လုပ်ရင် Modal ပေါ်လာစေဖို့
            item.addEventListener('click', () => {
                const userId = userIdInput.value;
                const serverId = serverIdInput.value;

                if (!userId || !serverId) {
                    alert("ကျေးဇူးပြု၍ User ID နှင့် Server ID ကို အရင်ဖြည့်ပါ");
                    return;
                }

                modalUserId.textContent = userId;
                modalServerId.textContent = serverId;
                modalPackageInfo.textContent = `သင်ဝယ်ယူမည့် ပက်ကေ့ချ်: ${pkg.title} - ${pkg.price} ကျပ်`;
                
                // Show modal
                purchaseModal.style.display = 'flex';
            });
        });
    }

    // Modal ကို ပိတ်ခြင်း
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            purchaseModal.style.display = 'none';
        });
    }
    if (modalCancelBtn) {
        modalCancelBtn.addEventListener('click', () => {
            purchaseModal.style.display = 'none';
        });
    }
    if (purchaseModal) {
        window.addEventListener('click', (event) => {
            if (event.target == purchaseModal) {
                purchaseModal.style.display = 'none';
            }
        });
    }

    // "ဝယ်ယူမည်" button ကိုနှိပ်ခြင်း
    if (modalConfirmBtn) {
        modalConfirmBtn.addEventListener('click', () => {
            alert("ဝယ်ယူမှု အောင်မြင်ပါသည်။ ကျေးဇူးတင်ပါသည်!");
            purchaseModal.style.display = 'none';
        });
    }
});

// 20 Adet Ürün Verisi Oluşturma
const productGrid = document.getElementById('productGrid');
let selectedProducts = [];
let isRegisterMode = false;

// 20 Tane Ürün Listesi
for (let i = 1; i <= 20; i++) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = i;
    card.innerHTML = `
        <div>
            <div class="product-img-placeholder">🛞</div>
            <div class="product-name">Ürün ${i}</div>
            <div class="product-price">Özel Fiyat / Teklif</div>
        </div>
        <button class="select-product-btn" onclick="toggleProduct(${i})">Seç / İncele</button>
    `;
    productGrid.appendChild(card);
}

// Ürün Seçme / Sepete Ekleme Mantığı
function toggleProduct(id) {
    const card = document.querySelector(`.product-card[data-id="${id}"]`);
    const btn = card.querySelector('.select-product-btn');
    
    if (selectedProducts.includes(id)) {
        selectedProducts = selectedProducts.filter(item => item !== id);
        card.classList.remove('selected');
        btn.innerText = 'Seç / İncele';
    } else {
        selectedProducts.push(id);
        card.classList.add('selected');
        btn.innerText = 'Seçildi ✓';
    }
    
    updateCartBar();
}

// Alt Bar Güncelleme
function updateCartBar() {
    const countSpan = document.getElementById('cartCount');
    countSpan.innerText = `${selectedProducts.length} Ürün Seçildi`;
}

// WhatsApp Sipariş / Teklif Yönlendirmesi
document.getElementById('whatsappBtn').addEventListener('click', () => {
    if (selectedProducts.length === 0) {
        alert('Lütfen teklif almak istediğiniz en az bir ürünü seçin!');
        return;
    }

    const currentUser = localStorage.getItem('dekor_user') || 'Misafir Müşteri';
    const productListText = selectedProducts.map(id => `Ürün ${id}`).join(', ');
    
    const message = `Merhaba, Dekor Es Medya! Aşağıdaki ürünler için teklif almak istiyorum:\n\nSeçilenler: ${productListText}\n\nKullanıcı: ${currentUser}`;
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp Telefon Numarası: 0551 144 14 95
    const phone = '905511441495';
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
});

// Modal / Giriş Kayıt Yönetimi
const modal = document.getElementById('authModal');
const authBtn = document.getElementById('authBtn');
const closeModal = document.getElementById('closeModal');
const switchAuthText = document.getElementById('switchAuthText');
const modalTitle = document.getElementById('modalTitle');
const nameGroup = document.getElementById('nameGroup');
const submitAuthBtn = document.getElementById('submitAuthBtn');
const authForm = document.getElementById('authForm');
const userProfile = document.getElementById('userProfile');
const userNameDisplay = document.getElementById('userNameDisplay');
const logoutBtn = document.getElementById('logoutBtn');

authBtn.addEventListener('click', () => { modal.style.display = 'flex'; });
closeModal.addEventListener('click', () => { modal.style.display = 'none'; });

switchAuthText.addEventListener('click', () => {
    isRegisterMode = !isRegisterMode;
    if (isRegisterMode) {
        modalTitle.innerText = 'Kayıt Ol';
        nameGroup.style.display = 'block';
        submitAuthBtn.innerText = 'Kayıt Ol';
        switchAuthText.innerHTML = 'Zaten hesabın var mı? <span>Giriş yap</span>';
    } else {
        modalTitle.innerText = 'Giriş Yap';
        nameGroup.style.display = 'none';
        submitAuthBtn.innerText = 'Giriş Yap';
        switchAuthText.innerHTML = 'Hesabın yok mu? <span>Kayıt ol</span>';
    }
});

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const name = document.getElementById('fullName').value || email.split('@')[0];

    if (isRegisterMode) {
        localStorage.setItem('dekor_user', name);
        alert('Kayıt başarılı! Giriş yapıldı.');
    } else {
        localStorage.setItem('dekor_user', name);
        alert('Giriş başarılı!');
    }

    modal.style.display = 'none';
    checkUserSession();
});

function checkUserSession() {
    const savedUser = localStorage.getItem('dekor_user');
    if (savedUser) {
        authBtn.style.display = 'none';
        userProfile.style.display = 'block';
        userNameDisplay.innerText = `👤 ${savedUser}`;
    } else {
        authBtn.style.display = 'block';
        userProfile.style.display = 'none';
    }
}

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('dekor_user');
    checkUserSession();
});

// Sayfa açıldığında oturumu kontrol et
checkUserSession();

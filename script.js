// 20 Adet Kozmetik, Kimyasal ve Aksesuar Ürünü
const products = [
    { id: 1, name: "Motor Temizleme Spreyi", cat: "kozmetik", catLabel: "Bakım & Kimyasal", emoji: "🧴", desc: "Motor bloğundaki yağ ve kirleri söker, parlaklık kazandırır.", compat: "Tüm Motor Tipleri" },
    { id: 2, name: "Jant Temizleme İlacı", cat: "kozmetik", catLabel: "Bakım & Kimyasal", emoji: "🛞", desc: "Balata tozlarını ve inatçı demir tozlarını anında çözer.", compat: "Alaçat & Çelik Jantlar" },
    { id: 3, name: "Etiket & Yapışkan Sökücü", cat: "kozmetik", catLabel: "Bakım & Kimyasal", emoji: "✨", desc: "Cam ve kaportadaki folyo, film ve etiket izlerini boyaya zarar vermeden çıkarır.", compat: "Kaporta ve Cam" },
    { id: 4, name: "Vanilya Özel Seri Koku", cat: "koku", catLabel: "Özel Kokular", emoji: "🍃", desc: "Haftalarca kalıcı, ağırlaşmayan lüks araç parfümü.", compat: "Tüm Araçlar" },
    { id: 5, name: "Mat Torpido Parlatıcı", cat: "kozmetik", catLabel: "Bakım & Kimyasal", emoji: "🛡️", desc: "Toz tutmayan antistatik formüllü mat ve şık görünüm.", compat: "Plastik ve Torpido" },
    { id: 6, name: "Seramik Hızlı Wax", cat: "kozmetik", catLabel: "Bakım & Kimyasal", emoji: "💧", desc: "Su iticilik sağlayan hidrofobik koruyucu sprey wax.", compat: "Boyalı Yüzeyler" },
    { id: 7, name: "Okyonus Esintisi Koku", cat: "koku", catLabel: "Özel Kokular", emoji: "🌊", desc: "Ferahlık veren ferahlatıcı premium kabin kokusu.", compat: "Tüm Araçlar" },
    { id: 8, name: "Deri Bakım & Temizleyici", cat: "kozmetik", catLabel: "Bakım & Kimyasal", emoji: "💺", desc: "Deri koltukların çatlamasını önler, yumuşatır ve besler.", compat: "Deri Döşemeler" },
    { id: 9, name: "Kör Nokta Ayna Seti", cat: "aksesuar", catLabel: "Estetik Aksesuar", emoji: "🔍", desc: "Çerçevesiz şık tasarımıyla geniş görüş açısı sağlar.", compat: "Universal" },
    { id: 10, name: "Nostaljik Sarı Sis Film", cat: "aksesuar", catLabel: "Estetik Aksesuar", emoji: "💡", desc: "90'lar retro stilini yakalamak için özel sarı far folyosu.", compat: "Universal" },
    { id: 11, name: "Lastik Yanak Parlatıcı", cat: "kozmetik", catLabel: "Bakım & Kimyasal", emoji: "⚫", desc: "Islak ve derin siyah görünüm veren uzun ömürlü jel.", compat: "Kauçuk Lastikler" },
    { id: 12, name: "Derin Çizik Giderici Pasta", cat: "kozmetik", catLabel: "Bakım & Kimyasal", emoji: "🛠️", desc: "Yüzey çiziklerini alan profesyonel el pastası.", compat: "Boyalı Yüzeyler" },
    { id: 13, name: "Karbüratör / Enjektör Temizleyici", cat: "kozmetik", catLabel: "Bakım & Kimyasal", emoji: "⛽", desc: "Performans artıran profesyonel katkı spreyi.", compat: "Yakıt Sistemleri" },
    { id: 14, name: "Sportif Pedal Seti", cat: "aksesuar", catLabel: "Estetik Aksesuar", emoji: "🎮", desc: "Kaydırmaz kauçuk detaylı alüminyum sportif pedal kiti.", compat: "Universal / Manuel-Otomatik" },
    { id: 15, name: "Karbon Kapı Eşik Koruma", cat: "aksesuar", catLabel: "Estetik Aksesuar", emoji: "🏁", desc: "Çizilmeleri önleyen karbon desenli koruyucu bant set.", compat: "Universal" },
    { id: 16, name: "Böcek & Sinek Sökücü", cat: "kozmetik", catLabel: "Bakım & Kimyasal", emoji: "🪲", desc: "Ön tampon ve camdaki yapışmış kalıntıları kolayca söker.", compat: "Cam ve Kaporta" },
    { id: 17, name: "Tütün Karşıtı Araç Kokusu", cat: "koku", catLabel: "Özel Kokular", emoji: "🌿", desc: "Kötü kokuları hapseden özel Nötralizatör formül.", compat: "Tüm Araçlar" },
    { id: 18, name: "Led Plaka Aydınlatma Kiti", cat: "aksesuar", catLabel: "Estetik Aksesuar", emoji: "⚡", desc: "Modern beyaz ışık veren arıza yakmayan ampul seti.", compat: "Universal" },
    { id: 19, name: "Mikrofiber Kurulama Bezi", cat: "kozmetik", catLabel: "Bakım & Kimyasal", emoji: "🧶", desc: "Leke ve hav bırakmayan yüksek emiciliğe sahip dev bez.", compat: "Dış Yüzey" },
    { id: 20, name: "Dekor Es Medya Logolu Anahtarlık", cat: "aksesuar", catLabel: "Estetik Aksesuar", emoji: "🔑", desc: "Özel tasarım metalik prestij anahtarlık.", compat: "Kişisel" }
];

let selectedProducts = [];
let currentFilter = 'all';

// Ana Sekme Değiştirme (Mağaza / Medya)
function switchMainTab(tab) {
    const shopSec = document.getElementById('shopSection');
    const mediaSec = document.getElementById('mediaSection');
    const pills = document.querySelectorAll('.main-tabs .tab-pill');

    pills.forEach(p => p.classList.remove('active'));

    if (tab === 'shop') {
        shopSec.style.display = 'block';
        mediaSec.style.display = 'none';
        pills[0].classList.add('active');
    } else {
        shopSec.style.display = 'none';
        mediaSec.style.display = 'block';
        pills[1].classList.add('active');
    }
}

// Ürünleri Listeleme
const productGrid = document.getElementById('productGrid');

function renderProducts(filter = 'all') {
    productGrid.innerHTML = '';
    let filtered = filter === 'all' ? products : products.filter(p => p.cat === filter);

    filtered.forEach(p => {
        let isSelected = selectedProducts.includes(p.id);
        const card = document.createElement('div');
        card.className = `product-card ${isSelected ? 'selected' : ''}`;
        card.innerHTML = `
            <div>
                <div class="product-img-placeholder">${p.emoji}</div>
                <div class="product-name">${p.name}</div>
                <div class="product-price">${p.catLabel}</div>
            </div>
            <div class="product-actions">
                <button class="action-btn-sm" onclick="openDetail(${p.id})">🔍 İncele</button>
                <button class="action-btn-sm ${isSelected ? 'sel' : ''}" id="btn-sel-${p.id}" onclick="toggleSelect(${p.id})">${isSelected ? 'Seçildi ✓' : '+ Seç'}</button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Kategori Filtreleme
function filterCategory(cat) {
    currentFilter = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderProducts(cat);
}

// Ürün Seç / Bırak
function toggleSelect(id) {
    if (selectedProducts.includes(id)) {
        selectedProducts = selectedProducts.filter(item => item !== id);
    } else {
        selectedProducts.push(id);
    }
    renderProducts(currentFilter);
    updateCartBar();
}

function updateCartBar() {
    document.getElementById('cartCount').innerText = `${selectedProducts.length} Ürün Seçildi`;
}

// Ürün Detay Modalı
const detailModal = document.getElementById('detailModal');
const closeDetail = document.getElementById('closeDetail');
let activeDetailId = null;

function openDetail(id) {
    activeDetailId = id;
    const prod = products.find(p => p.id === id);
    document.getElementById('detailTitle').innerText = prod.name;
    document.getElementById('detailDesc').innerText = prod.desc;
    document.getElementById('detailCompat').innerText = prod.compat;
    document.getElementById('detailEmoji').innerText = prod.emoji;
    
    const actionBtn = document.getElementById('modalActionBtn');
    if (selectedProducts.includes(id)) {
        actionBtn.innerText = 'Seçimi Kaldır';
        actionBtn.style.background = '#374151';
    } else {
        actionBtn.innerText = 'Sepete Ekle / Seç';
        actionBtn.style.background = 'var(--accent)';
    }
    
    detailModal.style.display = 'flex';
}

closeDetail.addEventListener('click', () => { detailModal.style.display = 'none'; });

document.getElementById('modalActionBtn').addEventListener('click', () => {
    if (activeDetailId) {
        toggleSelect(activeDetailId);
        detailModal.style.display = 'none';
    }
});

// Sepet Modalı ve WhatsApp Gönderimi
const cartModal = document.getElementById('cartModal');
const openCartModalBtn = document.getElementById('openCartModalBtn');
const closeCartModal = document.getElementById('closeCartModal');
const cartItemList = document.getElementById('cartItemList');

openCartModalBtn.addEventListener('click', () => {
    if (selectedProducts.length === 0) {
        alert('Lütfen teklif almak için en az bir ürün seçin!');
        return;
    }
    cartItemList.innerHTML = '';
    selectedProducts.forEach(id => {
        const prod = products.find(p => p.id === id);
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.innerHTML = `<span>${prod.emoji} ${prod.name}</span><strong>${prod.catLabel}</strong>`;
        cartItemList.appendChild(row);
    });
    cartModal.style.display = 'flex';
});

closeCartModal.addEventListener('click', () => { cartModal.style.display = 'none'; });

// WhatsApp Entegrasyon Butonu (0551 144 14 95)
document.getElementById('sendWhatsappOrderBtn').addEventListener('click', () => {
    const currentUser = localStorage.getItem('dekor_user') || 'Misafir Müşteri';
    const note = document.getElementById('orderNote').value;
    const productNames = selectedProducts.map(id => products.find(p => p.id === id).name).join(', ');

    let message = `Merhaba, Dekor Es Medya! Yeni bir ürün/teklif talebim var:\n\nSeçilenler: ${productNames}\nKullanıcı: ${currentUser}`;
    if (note) message += `\nNot: ${note}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/905511441495?text=${encodedMessage}`, '_blank');
});

// Giriş / Kayıt Modal Mantığı
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
let isRegisterMode = false;

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
    localStorage.setItem('dekor_user', name);
    alert(isRegisterMode ? 'Kayıt başarılı!' : 'Giriş başarılı!');
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

// İlk Çalıştırma
renderProducts('all');
checkUserSession();

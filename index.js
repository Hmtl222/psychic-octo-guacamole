const menuData = {
    seafood: [
        { name: "Пивные креветки", price: 5890, desc: "Отборные креветки в пикантном фирменном соусе", tag: "Хит", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcFhbuP1-v_5Nj41wdYDclyAaTD16OHuVaxB_NE_LUGJulQXE7ehBWc4&s=10" },
        { name: "Креветки темпура", price: 3900, desc: "Хрустящие креветки в нежном кляре темпура", img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=600" },
        { name: "Салат с морепродуктами", price: 3890, desc: "Микс салата, тигровые креветки, кальмары, мидии", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600" },
        { name: "Салат рукола с лососем", price: 3790, desc: "Свежая рукола, слабосоленый лосось, черри, пармезан", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" },
        { name: "Паста с морепродуктами", price: 3890, desc: "Феттучини с креветками, мидиями и кальмарами под соусом", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600" },
        { name: "Уха по-царски", price: 2900, desc: "Наваристый рыбный бульон с благородными сортами рыбы", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600" },
        { name: "Рыбная солянка", price: 3200, desc: "Ароматная сборная солянка с красной и белой рыбой", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600" }
    ],
    steaks: [
        { name: "Стейк Рибай", price: 9700, desc: "Премиальный мраморный стейк из отборной говядины", tag: "Премиум", img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=600" },
        { name: "Стейк Т-бон", price: 9700, desc: "Классический стейк на Т-образной кости", img: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=600" },
        { name: "Стейк Шато", price: 6990, desc: "Нежнейший вырезка-стейк с авторским соусом", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600" },
        { name: "Шеф-стейк конины", price: 7900, desc: "Фирменный деликатесный стейк из конины", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600" },
        { name: "Говяжьи ребра", price: 6990, desc: "Томленые говяжьи ребра с молодым картофелем", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600" },
        { name: "Томленая конина", price: 6900, desc: "Нежная конина в ароматном соусе чимичури", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600" }
    ],
    pizza: [
        { name: "Пицца «Пепперони» (30 см)", price: 3590, desc: "Острая салями, моцарелла, фирменный томатный соус", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600" },
        { name: "Пицца «Болоньезе» (30 см)", price: 3200, desc: "Фарш болоньезе, томаты, сыр моцарелла, зелень", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600" },
        { name: "Пицца «Охотничья» (30 см)", price: 4100, desc: "Охотничьи колбаски, грибы, корнишоны, моцарелла", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600" },
        { name: "Пицца с голубым сыром и грушей", price: 4290, desc: "Сыр с плесенью, карамелизованная груша, мед, орехи", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600" },
        { name: "Пицца «Маргарита» (30 см)", price: 3100, desc: "Классика с томатами, базиликом и моцареллой", img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80&w=600" }
    ],
    pasta: [
        { name: "Паста с лососем и песто", price: 3790, desc: "Спагетти с кусочками лосося и ароматным соусом песто", tag: "Рекомендуем", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600" },
        { name: "Феттучини с курицей и грибами", price: 3190, desc: "Нежное куриное филе, шампиньоны, сливочный соус", img: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=600" },
        { name: "Спагетти болоньезе", price: 2600, desc: "Классическая паста с мясным соусом", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgsbKu3GEVjS62q2fPbZOTpSiM_OvsqsfojmXWmGEGJl0e3TLJfCjmxL0&s=10" },
        { name: "Паппарделле с кониной", price: 2900, desc: "Широкая паста с тушеной кониной в соусе", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600" }
    ],
    soups: [
        { name: "Том-ям с рисом", price: 4390, desc: "Традиционный тайский острый суп с морепродуктами и рисом", tag: "Острое", img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80&w=600" },
        { name: "Грибной крем-суп", price: 2900, desc: "Бархатистый суп из лесных грибов со сливками", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600" },
        { name: "Куриный суп-лапша", price: 2200, desc: "Домашний легкий куриный суп с лапшой", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600" },
        { name: "Похмельный супчик", price: 2500, desc: "Наваристый согревающий суп", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600" }
    ],
    snacks: [
        { name: "Закуска к вину", price: 7590, desc: "Ассорти элитных сыров, фруктов, орехов и вяленого мяса", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600" },
        { name: "Перчики тонато", price: 4100, desc: "Фаршированные перчики с нежным соусом тунец", img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=600" },
        { name: "Рыбные стрипсы", price: 2500, desc: "Хрустящие кусочки белой рыбы в панировке", img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSWA9Mq25T-Dq5sV3Qd5mGm7_oWau0PzfW_sXbGs-" },
        { name: "Сырные палочки", price: 2300, desc: "Моцарелла в хрустящей корочке с ягодным соусом", img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=600" },
        { name: "Луковые кольца", price: 1590, desc: "Хрустящие кольца лука во фритюре", img: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&q=80&w=600" }
    ]
};

let cart = [];
let activeCategory = 'seafood';

const categories = [
    { id: 'seafood', name: 'Рыба и морепродукты' },
    { id: 'steaks', name: 'Стейки и мясо' },
    { id: 'pizza', name: 'Пицца' },
    { id: 'pasta', name: 'Паста' },
    { id: 'soups', name: 'Супы' },
    { id: 'snacks', name: 'Закуски' }
];

function initMenu() {
    const categoriesContainer = document.getElementById('menu-categories');
    categoriesContainer.innerHTML = categories.map(cat => `
        <button onclick="switchCategory('${cat.id}')" class="px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id ? 'bg-[#C5A880] text-[#070D19] font-bold shadow-lg shadow-[#C5A880]/20' : 'bg-white/5 text-[#94A3B8] hover:text-white border border-white/5'}">
            ${cat.name}
        </button>
    `).join('');

    renderItems();
}

function switchCategory(catId) {
    activeCategory = catId;
    initMenu();
}

function renderItems() {
    const container = document.getElementById('menu-items-container');
    const items = menuData[activeCategory] || [];

    container.innerHTML = items.map(item => `
        <div class="bg-[#070D19] rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between hover:border-[#C5A880]/30 transition-all group">
            <div class="relative h-48 overflow-hidden">
                <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                ${item.tag ? `<span class="absolute top-4 right-4 bg-[#070D19]/80 backdrop-blur-md text-[#C5A880] text-xs px-3 py-1 rounded-full font-semibold border border-[#C5A880]/20">${item.tag}</span>` : ''}
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h4 class="text-lg font-serif font-bold text-white mb-2">${item.name}</h4>
                    <p class="text-[#94A3B8] text-sm mb-4 font-light">${item.desc}</p>
                </div>
                <div class="flex items-center justify-between pt-4 border-t border-white/5">
                    <span class="text-lg font-bold text-[#C5A880]">${item.price} ₸</span>
                    <button onclick="addToCart('${item.name}', ${item.price})" class="bg-white/10 hover:bg-[#C5A880] text-white hover:text-[#070D19] px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2">
                        <i class="fa-solid fa-plus"></i> В корзину
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function addToCart(name, price) {
    const existing = cart.find(i => i.name === name);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }
    updateCartUI();
    showNotification(`Блюдо "${name}" добавлено в корзину`);
}

function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
    
    if (totalQty > 0) {
        badge.textContent = totalQty;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }

    const itemsContainer = document.getElementById('cart-items');
    if (cart.length === 0) {
        itemsContainer.innerHTML = `<div class="text-center text-[#94A3B8] py-12">Корзина пуста</div>`;
    } else {
        itemsContainer.innerHTML = cart.map(item => `
            <div class="flex items-center justify-between bg-[#070D19] p-4 rounded-xl border border-white/5">
                <div>
                    <h5 class="text-white font-medium text-sm mb-1">${item.name}</h5>
                    <div class="text-[#C5A880] text-xs font-bold">${item.price} ₸ × ${item.qty}</div>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="changeQty('${item.name}', -1)" class="w-7 h-7 rounded-lg bg-white/5 text-white hover:bg-white/10 flex items-center justify-center">-</button>
                    <span class="text-white text-sm font-bold w-4 text-center">${item.qty}</span>
                    <button onclick="changeQty('${item.name}', 1)" class="w-7 h-7 rounded-lg bg-white/5 text-white hover:bg-white/10 flex items-center justify-center">+</button>
                </div>
            </div>
        `).join('');
    }

    const totalPrice = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    document.getElementById('cart-total').textContent = `${totalPrice} ₸`;
}

function changeQty(name, delta) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.name !== name);
        }
    }
    updateCartUI();
}

function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    drawer.classList.toggle('translate-x-full');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('translate-x-full');
}

function openBooking() {
    document.getElementById('booking-modal').classList.remove('hidden');
}

function closeBooking() {
    document.getElementById('booking-modal').classList.add('hidden');
}

function submitBooking(e) {
    e.preventDefault();
    alert('Спасибо! Ваш столик успешно забронирован. Мы свяжемся с вами для подтверждения.');
    closeBooking();
}

function checkout() {
    if (cart.length === 0) {
        alert('Ваша корзина пуста');
        return;
    }
    alert('Заказ успешно оформлен! Оператор свяжется с вами в ближайшее время.');
    cart = [];
    updateCartUI();
    toggleCart();
}

function showNotification(text) {
    const notif = document.createElement('div');
    notif.className = 'fixed bottom-6 right-6 z-50 bg-[#C5A880] text-[#070D19] px-6 py-3 rounded-2xl font-semibold shadow-2xl transition-all transform translate-y-10 opacity-0';
    notif.textContent = text;
    document.body.appendChild(notif);
    setTimeout(() => {
        notif.classList.remove('translate-y-10', 'opacity-0');
    }, 50);
    setTimeout(() => {
        notif.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => notif.remove(), 300);
    }, 2500);
}

document.addEventListener('DOMContentLoaded', initMenu);
function submitBooking(event) {
    event.preventDefault();

    const modal = document.getElementById('booking-modal');
    const name = modal.querySelector('input[type="text"]').value;
    const phone = modal.querySelector('input[type="tel"]').value;
    const date = modal.querySelector('input[type="date"]').value;
    const guests = modal.querySelector('select').value;

    const whatsappNumber = "77081806825"; 

    const message = `✨ Новая бронь столика в Sollmarine!%0D%0A%0D%0A👤 Имя: ${name}%0D%0A📞 Телефон: ${phone}%0D%0A📅 Дата: ${date}%0D%0A👥 Количество гостей: ${guests}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

    closeBooking();
    event.target.reset();
}
function checkout() {
    if (cart.length === 0) {
        alert("Ваша корзина пуста!");
        return;
    }

    
    const whatsappNumber = "77081806825"; 

    let orderText = "🛍 Новый заказ из Sollmarine!%0D%0A%0D%0AСостав заказа:%0D%0A";
    
    let totalSum = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalSum += itemTotal;
        orderText += `${index + 1}. ${item.name} — ${item.quantity} шт. (${itemTotal} ₸)%0D%0A`;
    });

    orderText += `%0D%0A💰 Итоговая сумма: ${totalSum} ₸`;

    window.open(`https://wa.me/${whatsappNumber}?text=${orderText}`, '_blank');

    cart = [];
    updateCart();
    toggleCart();
}
// script.js - FULLY COMPLETE WITH ALL YOUR PRODUCTS

const products = [
  // TOMATO ONION POTATO
  {name: "ONION (REGULAR)", price: 20, unit: "KILOGRAM", category: "tomato-onion-potato", img: "onion"},
  {name: "TOMATO (LARGE)", price: 30, unit: "KILOGRAM", category: "tomato-onion-potato", img: "tomato large"},
  {name: "TOMATO (GRAVY)", price: 20, unit: "KILOGRAM", category: "tomato-onion-potato", img: "tomato gravy"},
  {name: "ONION (LARGE)", price: 26, unit: "KILOGRAM", category: "tomato-onion-potato", img: "onion large"},
  {name: "POTATO (REGULAR)", price: 22, unit: "KILOGRAM", category: "tomato-onion-potato", img: "potato"},
  {name: "POTATO (LARGE)", price: 20, unit: "KILOGRAM", category: "tomato-onion-potato", img: "potato large"},
  {name: "TOMATO HYBRID (MIXED SIZE/RIPENESS)", price: 32, unit: "KILOGRAM", category: "tomato-onion-potato", img: "tomato hybrid"},
  {name: "ONION (MIXED SIZE)", price: 19, unit: "KILOGRAM", category: "tomato-onion-potato", img: "onion"},
  {name: "POTATO CHIPSONA", price: 23, unit: "KILOGRAM", category: "tomato-onion-potato", img: "potato chips"},
  {name: "RED POTATO - LADY ROSETTA (LR)", price: 19, unit: "KILOGRAM", category: "tomato-onion-potato", img: "red potato"},
  {name: "SIRKA ONION", price: 24, unit: "NUMBER", category: "tomato-onion-potato", img: "pickled onion"},
  {name: "POTATO (MIXED SIZE)", price: 20, unit: "NUMBER", category: "tomato-onion-potato", img: "potato"},
  {name: "BABY POTATO", price: 18, unit: "KILOGRAM", category: "tomato-onion-potato", img: "baby potato"},
  {name: "TOMATO DESI (MIXED SIZE/RIPENESS)", price: 28, unit: "KILOGRAM", category: "tomato-onion-potato", img: "desi tomato"},
  {name: "POTATO (MARKET BAG)", price: 19, unit: "KILOGRAM", category: "tomato-onion-potato", img: "potato bag"},
  {name: "ONION (MARKET BAG)", price: 17, unit: "KILOGRAM", category: "tomato-onion-potato", img: "onion bag"},
  {name: "WHITE ONION", price: 110, unit: "KILOGRAM", category: "tomato-onion-potato", img: "white onion"},
  {name: "ONION PEELED (BIG SIZE)", price: 75, unit: "KILOGRAM", category: "tomato-onion-potato", img: "peeled onion"},

  // LEAFY VEGETABLES
  {name: "CORIANDER LEAVES/DHANIA", price: 130, unit: "KILOGRAM", category: "leafy-vegetables", img: "coriander"},
  {name: "PUDINA", price: 120, unit: "KILOGRAM", category: "leafy-vegetables", img: "mint pudina"},
  {name: "SPRING ONION", price: 40, unit: "KILOGRAM", category: "leafy-vegetables", img: "spring onion"},
  {name: "PALAK", price: 50, unit: "KILOGRAM", category: "leafy-vegetables", img: "spinach palak"},
  {name: "CURRY LEAVES", price: 800, unit: "KILOGRAM", category: "leafy-vegetables", img: "curry leaves"},
  {name: "BANANA LEAF", price: 20, unit: "TWO PIECE", category: "leafy-vegetables", img: "banana leaf"},
  {name: "SARSO KA SAAG", price: 40, unit: "KILOGRAM", category: "leafy-vegetables", img: "sarson saag"},

  // FROZEN VEGETABLES
  {name: "FROZEN SWEET CORN", price: 80, unit: "KILOGRAM", category: "frozen-vegetables", img: "frozen corn"},
  {name: "FROZEN GREEN PEAS", price: 110, unit: "KILOGRAM", category: "frozen-vegetables", img: "frozen peas"},

  // INDIAN VEGETABLES
  {name: "Green Capsicum (Big size)", price: 120, unit: "KILOGRAM", category: "indian-vegetables", img: "green capsicum"},
  {name: "Orange Carrot", price: 50, unit: "KILOGRAM", category: "indian-vegetables", img: "orange carrot"},
  {name: "Garlic Peeled", price: 80, unit: "KILOGRAM", category: "indian-vegetables", img: "peeled garlic"},
  {name: "Green Chilli", price: 55, unit: "KILOGRAM", category: "indian-vegetables", img: "green chilli"},
  {name: "Lemon", price: 65, unit: "KILOGRAM", category: "indian-vegetables", img: "lemon"},
  {name: "Cabbage", price: 50, unit: "KILOGRAM", category: "indian-vegetables", img: "cabbage"},
  {name: "Ginger", price: 100, unit: "KILOGRAM", category: "indian-vegetables", img: "ginger"},
  {name: "Beans", price: 120, unit: "KILOGRAM", category: "indian-vegetables", img: "green beans"},
  {name: "Indian Cucumber", price: 35, unit: "KILOGRAM", category: "indian-vegetables", img: "indian cucumber"},
  {name: "Cauliflower", price: 90, unit: "KILOGRAM", category: "indian-vegetables", img: "cauliflower"},
  {name: "GREEN CAPASICUM (MIXED SIZE)", price: 55, unit: "KILOGRAM", category: "indian-vegetables", img: "green capsicum"},
  {name: "LAOKI (MIXED SIZE)", price: 40, unit: "KILOGRAM", category: "indian-vegetables", img: "bottle gourd"},
  {name: "BEETROOT", price: 40, unit: "KILOGRAM", category: "indian-vegetables", img: "beetroot"},
  {name: "GARLIC WHOLE", price: 80, unit: "KILOGRAM", category: "indian-vegetables", img: "garlic"},
  {name: "CABBAGE (UNSORTED)", price: 30, unit: "KILOGRAM", category: "indian-vegetables", img: "cabbage"},
  {name: "BHINDI", price: 40, unit: "KILOGRAM", category: "indian-vegetables", img: "okra bhindi"},
  {name: "PUMPKIN", price: 60, unit: "KILOGRAM", category: "indian-vegetables", img: "pumpkin"},
  {name: "BRINJAL (BIG)", price: 55, unit: "KILOGRAM", category: "indian-vegetables", img: "brinjal"},
  {name: "KARELA", price: 50, unit: "KILOGRAM", category: "indian-vegetables", img: "bitter gourd"},
  {name: "IMPORTED GARLIC", price: 200, unit: "KILOGRAM", category: "indian-vegetables", img: "garlic"},
  {name: "DRUMSTICK/MORINGA", price: 170, unit: "KILOGRAM", category: "indian-vegetables", img: "drumstick"},
  {name: "BROWN NARIYAL", price: 50, unit: "PIECE", category: "indian-vegetables", img: "brown coconut"},
  {name: "PARWAL", price: 90, unit: "KILOGRAM", category: "indian-vegetables", img: "parwal"},
  {name: "INDIAN CUCUMBER MIXED SIZE", price: 25, unit: "KILOGRAM", category: "indian-vegetables", img: "cucumber"},
  {name: "BEANS UNSORTED", price: 100, unit: "KILOGRAM", category: "indian-vegetables", img: "beans"},
  {name: "JACKFRUIT", price: 100, unit: "KILOGRAM", category: "indian-vegetables", img: "jackfruit"},
  {name: "BRINJAL (SMALL)", price: 25, unit: "KILOGRAM", category: "indian-vegetables", img: "small brinjal"},
  {name: "RAWE PAPAYA", price: 40, unit: "KILOGRAM", category: "indian-vegetables", img: "raw papaya"},
  {name: "MOTA CHILLI", price: 90, unit: "KILOGRAM", category: "indian-vegetables", img: "mota chilli"},
  {name: "ARBI", price: 45, unit: "KILOGRAM", category: "indian-vegetables", img: "arbi"},
  {name: "KACCHA MANGO", price: 200, unit: "KILOGRAM", category: "indian-vegetables", img: "raw mango"},
  {name: "LOTUS STEM", price: 40, unit: "4-5 PACKS", category: "indian-vegetables", img: "lotus stem"},
  {name: "SWEET POTATO", price: 80, unit: "KILOGRAM", category: "indian-vegetables", img: "sweet potato"},
  {name: "CAULIFLOWER (MIXED SIZE)", price: 80, unit: "KILOGRAM", category: "indian-vegetables", img: "cauliflower"},
  {name: "MIXED VEG", price: 120, unit: "KILOGRAM", category: "indian-vegetables", img: "mixed vegetables"},
  {name: "REDDISH WHITE", price: 35, unit: "KILOGRAM", category: "indian-vegetables", img: "white radish"},
  {name: "BRINJAL (LONG PURPLE)", price: 35, unit: "KILOGRAM", category: "indian-vegetables", img: "long brinjal"},
  {name: "CARROT (BIG)", price: 50, unit: "KILOGRAM", category: "indian-vegetables", img: "carrot"},
  {name: "KACCHA BANANA", price: 50, unit: "KILOGRAM", category: "indian-vegetables", img: "raw banana"},

  // IMPORTED & EXOTIC VEGETABLES
  {name: "BUTTON MUSHROOM", price: 210, unit: "KILOGRAM", category: "imported-vegetables", img: "button mushroom"},
  {name: "LETTUCE ICEBERG", price: 130, unit: "KILOGRAM", category: "imported-vegetables", img: "iceberg lettuce"},
  {name: "ENGLISH CUCUMBER", price: 20, unit: "KILOGRAM", category: "imported-vegetables", img: "english cucumber"},
  {name: "BASIL LEAVES", price: 300, unit: "KILOGRAM", category: "imported-vegetables", img: "basil"},
  {name: "RED CAPASICUM (MIXED SIZE/SHAPE)", price: 230, unit: "KILOGRAM", category: "imported-vegetables", img: "red capsicum"},
  {name: "YELLOW CAPASICUM (MIXED SIZE/SHAPE)", price: 240, unit: "KILOGRAM", category: "imported-vegetables", img: "yellow capsicum"},
  {name: "PARSLEY CURLY", price: 400, unit: "KILOGRAM", category: "imported-vegetables", img: "parsley"},
  {name: "LETTUCE GREEN (SALAD LEAVES/CURLY)", price: 150, unit: "KILOGRAM", category: "imported-vegetables", img: "green lettuce"},
  {name: "ZUCCHINI GREEN", price: 170, unit: "KILOGRAM", category: "imported-vegetables", img: "green zucchini"},
  {name: "BABY CORN PEELED", price: 300, unit: "KILOGRAM", category: "imported-vegetables", img: "baby corn"},
  {name: "BROCCOLI", price: 300, unit: "KILOGRAM", category: "imported-vegetables", img: "broccoli"},
  {name: "CHEERRY TOMATO RED", price: 180, unit: "KILOGRAM", category: "imported-vegetables", img: "cherry tomato"},
  {name: "ZUCCHINI YELLOW", price: 200, unit: "KILOGRAM", category: "imported-vegetables", img: "yellow zucchini"},
  {name: "BOK CHOY", price: 100, unit: "KILOGRAM", category: "imported-vegetables", img: "bok choy"},
  {name: "CELERY", price: 300, unit: "KILOGRAM", category: "imported-vegetables", img: "celery"},
  {name: "RED CABBAGE", price: 70, unit: "KILOGRAM", category: "imported-vegetables", img: "red cabbage"},
  {name: "LEEKS", price: 300, unit: "KILOGRAM", category: "imported-vegetables", img: "leek"},
  {name: "LETTUCE RED", price: 300, unit: "KILOGRAM", category: "imported-vegetables", img: "red lettuce"},
  },
  {name: "CHINESE CABBAGE", price: 140, unit: "KILOGRAM", category: "imported-vegetables", img: "chinese cabbage"},
  {name: "LETTUCE ROMAIN", price: 230, unit: "KILOGRAM", category: "imported-vegetables", img: "romaine lettuce"},
  {name: "KAFFIR LIME LEAVES", price: 70, unit: "KILOGRAM", category: "imported-vegetables", img: "kaffir lime leaves"},
  {name: "ROSEMARY", price: 500, unit: "KILOGRAM", category: "imported-vegetables", img: "rosemary"},
  {name: "LEMONGRASS", price: 220, unit: "KILOGRAM", category: "imported-vegetables", img: "lemongrass"},
  {name: "THYME", price: 400, unit: "KILOGRAM", category: "imported-vegetables", img: "thyme"},
  {name: "SWEET CORN KERNELS", price: 120, unit: "KILOGRAM", category: "imported-vegetables", img: "sweet corn"},
  {name: "GALANGAL/THAI GINGER", price: 300, unit: "KILOGRAM", category: "imported-vegetables", img: "galangal"},
  {name: "ASPARAGUS LOCAL", price: 700, unit: "KILOGRAM", category: "imported-vegetables", img: "asparagus"},
  {name: "MOONG SPROUTS", price: 170, unit: "KILOGRAM", category: "imported-vegetables", img: "moong sprouts"},
  {name: "FRESH BELL PEPPER", price: 480, unit: "KILOGRAM", category: "imported-vegetables", img: "bell pepper"},
  {name: "FRESH LETTUCE ICEBERG (SHREDDED)", price: 170, unit: "KILOGRAM", category: "imported-vegetables", img: "iceberg lettuce"},
];

function renderProducts(filter = "", category = "") {
  const container = document.getElementById("productsContainer");
  container.innerHTML = "";

  products
    .filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(filter.toLowerCase());
      const matchesCategory = category === "" || p.category === category;
      return matchesSearch && matchesCategory;
    })
    .forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.dataset.category = p.category;
      card.dataset.name = p.name;

      const unitText = p.unit === "NUMBER" ? "per pc" : p.unit.toLowerCase();
      const displayUnit = unitText.includes("kilogram") ? "kg" : "pc";

      card.innerHTML = `
        <img src="https://source.unsplash.com/400x400/?${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400?text=${encodeURIComponent(p.name)}'">
        <div class="product-info">
          <div>
            <h3>${p.name}</h3>
            <p class="unit">Unit: ${p.unit}</p>
            <p class="price">₹${p.price}</p>
          </div>
          <div class="quantity-controls">
            <button class="quantity-btn" onclick="updateQty('${p.name.replace(/[^a-zA-Z0-9]/g,'-').toLowerCase()}', -1)">-</button>
            <input type="text" id="${p.name.replace(/[^a-zA-Z0-9]/g,'-').toLowerCase()}-qty" class="quantity-input" value="0" readonly>
            <span class="text-xs text-gray-600">${displayUnit}</span>
            <button class="quantity-btn" onclick="updateQty('${p.name.replace(/[^a-zA-Z0-9]/g,'-').toLowerCase()}', 1)">+</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
}

function updateQty(id, change) {
  const input = document.getElementById(id + "-qty");
  let val = parseInt(input.value) || 0;
  val = Math.max(0, val + change);
  input.value = val;
}

// Search & Filter
document.getElementById("searchInput").addEventListener("input", e => {
  renderProducts(e.target.value, document.getElementById("categoryFilter").value);
});

document.getElementById("categoryFilter").addEventListener("change", e => {
  renderProducts(document.getElementById("searchInput").value, e.target.value);
});

// Add to Cart
function addToCart() {
  const order = {};
  document.querySelectorAll(".quantity-input").forEach(inp => {
    if (parseInt(inp.value) > 0) {
      const name = inp.id.replace(/-qty$/, '').replace(/-/g, ' ').toUpperCase();
      const item = products.find(p => p.name === name);
      if (item) {
        order[inp.id] = { name: item.name, qty: parseInt(inp.value), price: item.price };
      }
    }
  });

  if (Object.keys(order).length === 0) {
    alert("Please select at least one item!");
    return;
  }

  localStorage.setItem("cart", JSON.stringify(order));
  alert("Items added to cart!");
  window.location.href = "cart.html";
}

// Initial render
renderProducts();

// app.js

// --- Global Data and Mock API Functions ---

// Internal Mock Data (Updated to use professional SVG Icons)
const mockCategories = [
    // SVG Icons are simple placeholder shapes with a fill attribute for easy color change on hover.
    { id: 'elec', name: 'Appliance & Electrical Repair', icon: '<svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>' },
    { id: 'plumb', name: 'Plumbing & Leaks', icon: '<svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9V8h2v9zm4-9h-2v9h2V8z"/></svg>' },
    { id: 'clean', name: 'Deep House Cleaning', icon: '<svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 14H7V8h10v8z"/></svg>' },
    { id: 'pest', name: 'Pest Control', icon: '<svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>' },
    { id: 'carp', name: 'Carpentry & Assembly', icon: '<svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 14H8V8h8v8z"/></svg>' },
    { id: 'salon', name: 'Home Salon & Massage', icon: '<svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 14.5c0 .83-.67 1.5-1.5 1.5H9.5c-.83 0-1.5-.67-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v9z"/></svg>' },
    { id: 'ac', name: 'AC Repair & Service', icon: '<svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 14H9v-2h6v2zm0-4H9V8h6v4z"/></svg>' },
    { id: 'paint', name: 'House Painting Services', icon: '<svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4-6h-2v6h2v-6z"/></svg>' },
];
// NOTE: Providers list uses combined categories
const mockProviders = [
    { id: 1, name: 'PowerTech Solutions', categoryId: 'elec', rating: 4.9, price: 550, reviews: 350, bio: 'Certified electricians specializing in residential wiring and fault diagnostics across Mumbai and Pune.' },
    { id: 2, name: 'Jal Kalyan Plumbing', categoryId: 'plumb', rating: 4.7, price: 250, reviews: 78, bio: 'Reliable and affordable plumbing services for all your home and commercial needs — from fixing leaks and clearing clogs to installing new fittings. With 10+ years of experience, we ensure quick response, neat work, and transparent rates. All material costs will be borne by the customer; we only charge for our service.' },
    { id: 3, name: 'Glamour Gadi', categoryId: 'salon', rating: 5.0, price: 350, reviews: 92, bio: 'Modern and classic haircuts for men and women. Home service available in Bangalore.' },
    { id: 4, name: 'Swachh Ghar Services', categoryId: 'clean', rating: 4.5, price: 300, reviews: 512, bio: 'Eco-friendly house cleaning services. Weekly, bi-weekly, or deep cleaning options.' },
    { id: 5, name: 'Keet Niyantran', categoryId: 'pest', rating: 4.8, price: 650, reviews: 145, bio: 'Residential and commercial pest control. Guaranteed removal of all common pests.' },
    { id: 6, name: 'Lakdi Kaam Experts', categoryId: 'carp', rating: 4.6, price: 450, reviews: 210, bio: 'Custom carpentry, repairs, and furniture assembly. Serving Delhi Rohini.' },
    { id: 7, name: 'Aaram Body Spa', categoryId: 'salon', rating: 4.9, price: 800, reviews: 78, bio: 'Certified therapist offering deep tissue and sports massage for pain relief.' },
    { id: 8, name: 'Shanti Mind Services', categoryId: 'salon', rating: 5.0, price: 900, reviews: 44, bio: 'Licensed therapist providing guided meditation and stress relief coaching.' },
    { id: 9, name: 'CoolBreeze AC Experts', categoryId: 'ac', rating: 4.8, price: 600, reviews: 200, bio: 'Specialized AC installation, repair, and maintenance in major cities.' },
    { id: 10, name: 'ColorCraft Painters', categoryId: 'paint', rating: 4.7, price: 500, reviews: 150, bio: 'Professional interior and exterior painting with eco-friendly paints.' },
    { id: 11, name: 'FixIt Appliances', categoryId: 'elec', rating: 4.9, price: 450, reviews: 300, bio: 'Repair of washing machines, refrigerators, and microwaves at home.' },
];
const mockBookings = [
    { id: 101, providerName: 'PowerTech Solutions', serviceName: 'Circuit Breaker Repair', date: '2025-10-25', time: '10:00 AM', status: 'Confirmed', price: 1200, rating: 5 },
    { id: 102, providerName: 'Swachh Ghar Services', serviceName: 'Deep Cleaning', date: '2025-11-05', time: '02:00 PM', status: 'Pending', price: 2500, rating: null },
    { id: 103, providerName: 'Jal Kalyan Plumbing', serviceName: 'Faucet Installation', date: '2025-09-15', time: '09:00 AM', status: 'Completed', price: 850, rating: 4 },
];

// Global State Management
let appState = {
    isLoggedIn: false, // Set to false to enforce login
    currentPage: 'home',
    currentProvider: null,
    authMode: 'login', // 'login' or 'signup'
    currentBooking: {
        providerId: null,
        serviceName: '',
        step: 1,
        date: '',
        time: '',
        location: '',
        instructions: '',
    },
    user: {
        name: "Guest User",
        email: "",
        role: 'customer'
    },
    categoriesCache: mockCategories, 
    providersCache: mockProviders,
};

// Mock Testimonials (Only used for the Testimonials page)
const testimonials = [
    { id: 1, name: 'Ravi Kumar', service: 'Electrical Repair', rating: 5, text: 'PowerTech Solutions fixed our entire home wiring in just one day. Professional and affordable!', location: 'Mumbai', date: '2025-09-10' },
    { id: 2, name: 'Priya Singh', service: 'Deep House Cleaning', rating: 4.5, text: 'Swachh Ghar team was thorough and left everything spotless. Will book again next month.', location: 'Bangalore', date: '2025-08-25' },
    { id: 3, name: 'Amit Patel', service: 'Plumbing & Leaks', rating: 5, text: 'Quick response and leak fixed without any mess. Highly recommend Jal Kalyan.', location: 'Delhi', date: '2025-10-05' },
    { id: 4, name: 'Neha Reddy', service: 'Home Salon (Haircut)', rating: 4.8, text: 'Glamour Gadi stylist came on time and gave a perfect haircut at home. So convenient!', location: 'Chennai', date: '2025-09-20' },
    { id: 5, name: 'Suresh Menon', service: 'Pest Control', rating: 5, text: 'Keet Niyantran eliminated the termites completely. No more worries!', location: 'Pune', date: '2025-07-15' },
    { id: 6, name: 'Lata Desai', service: 'Carpentry & Assembly', rating: 4.7, text: 'Lakdi Kaam assembled our new wardrobe perfectly. Skilled craftsmen.', location: 'Hyderabad', date: '2025-10-12' },
    { id: 7, name: 'Vikram Joshi', service: 'Therapeutic Massage', rating: 5, text: 'Aaram Body Spa therapist was amazing. Felt relaxed after the session.', location: 'Kolkata', date: '2025-08-30' },
    { id: 8, name: 'Meera Nair', service: 'Counselling & Therapy', rating: 5, text: 'Shanti Mind Services helped me manage stress effectively. Grateful!', location: 'Ahmedabad', date: '2025-09-05' },
    { id: 9, name: 'Rajesh Gupta', service: 'AC Repair & Service', rating: 4.9, text: 'CoolBreeze fixed our AC in no time during the heatwave. Great service!', location: 'Jaipur', date: '2025-06-20' },
    { id: 10, name: 'Sunita Bose', service: 'Painting Services', rating: 4.6, text: 'ColorCraft transformed our living room with beautiful colors. Eco-friendly too!', location: 'Lucknow', date: '2025-10-01' },
    { id: 11, name: 'Karan Malhotra', service: 'Appliance Repair', rating: 5, text: 'FixIt repaired our fridge efficiently. Back to normal in hours.', location: 'Indore', date: '2025-07-28' },
    { id: 12, name: 'Anita Sharma', service: 'Home Salon (Waxing)', rating: 4.8, text: 'Comfortable and professional waxing service at home. No salon hassle!', location: 'Coimbatore', date: '2025-09-15' },
];


// Mock MongoDB/API Data Fetching Functions (Placeholders)
async function fetchCategories() { return new Promise(r => setTimeout(() => r(appState.categoriesCache), 10)); }
async function fetchProviders(categoryId = null) { 
    return new Promise(r => setTimeout(() => {
        const providers = categoryId ? mockProviders.filter(p => p.categoryId === categoryId) : mockProviders;
        r(providers);
    }, 10));
}

// --- Utility Functions ---

function getRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < fullStars; i++) { stars += '<span class="text-yellow-400">★</span>'; }
    if (halfStar) { stars += '<span class="text-yellow-400">½</span>'; }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) { stars += '<span class="text-gray-300">★</span>'; }
    return stars;
}

function showModal(title, body, onConfirm, showCancel = false) {
    const modalContainer = document.getElementById('modal-container');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerText = body;
    const confirmBtn = document.getElementById('modal-confirm');
    const cancelBtn = document.getElementById('modal-cancel');
    confirmBtn.onclick = () => {
        if (onConfirm) onConfirm();
        modalContainer.classList.add('hidden');
    };
    if (showCancel) {
        cancelBtn.classList.remove('hidden');
        cancelBtn.onclick = () => modalContainer.classList.add('hidden');
    } else {
        cancelBtn.classList.add('hidden');
    }
    modalContainer.classList.remove('hidden');
}

function toggleReadMore(button) {
    const card = button.closest('.service-card');
    const fullBio = card.querySelector('.full-bio');
    const shortBio = card.querySelector('.short-bio');
    if (fullBio.classList.contains('hidden')) {
        shortBio.classList.add('hidden');
        fullBio.classList.remove('hidden');
        button.textContent = 'Read less';
    } else {
        fullBio.classList.add('hidden');
        shortBio.classList.remove('hidden');
        button.textContent = 'Read more';
    }
}

// Location/Email functions remain untouched
function getVisitorLocation() { /* ... */ }
function sendLocationEmail(position) { /* ... */ }
function showLocationError(error) { /* ... */ }

// --- AUTHENTICATION ENFORCEMENT ---

function checkAuthAndNavigate(page, data = {}) {
    if (page === 'dashboard' || page === 'booking' || page === 'profile') {
        if (!appState.isLoggedIn) {
            appState.authRedirect = { page, data };
            appState.authMode = 'login';
            navigateTo('auth');
            return;
        }
    }
    navigateTo(page, data);
}

function mockLogin() {
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    
    if (email === 'user@test.in' && password === '123456') {
        appState.isLoggedIn = true;
        appState.user.name = "Anjali Sharma";
        appState.user.email = email;
        showModal('Success!', 'Welcome back, Anjali Sharma! Redirecting to your Dashboard.', () => {
            const redirect = appState.authRedirect || { page: 'dashboard' };
            appState.authRedirect = null;
            navigateTo(redirect.page, redirect.data);
        });
    } else {
        showModal('Error', 'Invalid credentials. Use email: user@test.in and password: 123456 for mock login.');
    }
}

function mockSignup() {
    const fullName = document.getElementById('signup-name').value;
    const contactNo = document.getElementById('signup-contact').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const houseNo = document.getElementById('signup-house').value;
    
    if (!fullName || !contactNo || !email || !password || !houseNo) {
         return showModal('Missing Fields', 'Please fill out all required fields for registration.');
    }
    
    appState.isLoggedIn = true;
    appState.user.name = fullName;
    appState.user.email = email;
    showModal('Registration Successful!', `${fullName.split(' ')[0]}, your account is created. Redirecting to home.`, () => {
        navigateTo('home');
    });
}

// --- Page Render Functions ---

function renderAuthPage() {
    const mode = appState.authMode;
    
    const loginForm = `
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Login to One Servc</h2>
        <div class="space-y-4">
            <div>
                <label for="auth-email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="auth-email" value="user@test.in" required class="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
                <label for="auth-password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="auth-password" value="123456" required class="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
            </div>
            <button onclick="mockLogin()" class="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300">Log In</button>
            <p class="text-center text-sm text-gray-600">Don't have an account? 
                <a href="#" onclick="appState.authMode = 'signup'; navigateTo('auth')" class="text-blue-600 hover:underline">Sign Up Now</a>
            </p>
        </div>
    `;
    
    const signupForm = `
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Create Your Account</h2>
        <div class="space-y-4">
            <div>
                <label for="signup-name" class="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="signup-name" required class="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label for="signup-contact" class="block text-sm font-medium text-gray-700">Contact No.</label>
                    <input type="tel" id="signup-contact" required class="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div>
                    <label for="signup-email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="signup-email" required class="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                </div>
            </div>
            <div>
                <label for="signup-password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="signup-password" required class="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="border-t pt-4">
                <h4 class="text-lg font-semibold text-gray-800 mb-2">Address Details</h4>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label for="signup-house" class="block text-xs font-medium text-gray-700">House No./Flat No. *</label>
                        <input type="text" id="signup-house" required class="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    </div>
                    <div>
                        <label for="signup-locality" class="block text-xs font-medium text-gray-700">Locality/Area</label>
                        <input type="text" id="signup-locality" required class="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="signup-city" class="block text-xs font-medium text-gray-700">City</label>
                        <input type="text" id="signup-city" required class="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    </div>
                    <div>
                        <label for="signup-pincode" class="block text-xs font-medium text-gray-700">Pincode</label>
                        <input type="text" id="signup-pincode" required class="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    </div>
                </div>
            </div>
            <button onclick="mockSignup()" class="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition duration-300">Sign Up</button>
            <p class="text-center text-sm text-gray-600">Already have an account? 
                <a href="#" onclick="appState.authMode = 'login'; navigateTo('auth')" class="text-blue-600 hover:underline">Log In</a>
            </p>
        </div>
    `;
    
    return `
        <div class="max-w-md mx-auto py-12">
            <div class="auth-container">
                ${mode === 'login' ? loginForm : signupForm}
            </div>
        </div>
    `;
}

function navigateTo(page, data = {}) {
    appState.currentPage = page;
    if (page !== 'booking') {
        appState.currentBooking = {
            providerId: null,
            serviceName: '',
            step: 1,
            date: '',
            time: '',
            location: '',
            instructions: '',
        };
    }
    const container = document.getElementById('app-container');
    container.innerHTML = '';
    window.scrollTo(0, 0);

    switch (page) {
        case 'home':
            container.innerHTML = renderHomePage();
            break;
        case 'listings':
            container.innerHTML = renderListingsPage(data.categoryId);
            break;
        case 'profile':
            appState.currentProvider = mockProviders.find(p => p.id === data.providerId);
            container.innerHTML = renderProviderProfile(appState.currentProvider);
            break;
        case 'booking':
            if (!appState.isLoggedIn) return checkAuthAndNavigate('booking'); 
            container.innerHTML = renderBookingSystem();
            break;
        case 'dashboard':
            if (!appState.isLoggedIn) return checkAuthAndNavigate('dashboard');
            container.innerHTML = renderCustomerDashboard();
            break;
        case 'auth':
            container.innerHTML = renderAuthPage();
            break;
        case 'about':
            container.innerHTML = renderAboutPage();
            break;
        case 'howitworks':
            container.innerHTML = renderHowItWorksPage();
            break;
        case 'faq':
            container.innerHTML = renderFAQPage();
            break;
        case 'contact':
            container.innerHTML = renderContactPage();
            break;
        case 'testimonials':
            container.innerHTML = renderTestimonialsPage();
            break;
        default:
            container.innerHTML = '<h2>404 Page Not Found</h2>';
    }
}

function renderHomePage() {
    const categories = mockCategories;
    return `
        <section class="hero-banner mb-12">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="mb-4">Your Trusted Partner for Home & Personal Services.</h2>
                <p class="mb-8">Vetted professionals for every need, from plumbing to therapy, across India.</p>
                
                <div class="hero-search-inputs">
                    <input type="text" placeholder="I need a service like 'Plumbing' or 'Haircut'..." class="focus:ring-0" />
                    <input type="text" placeholder="Enter Location / Pincode" class="sm:max-w-xs focus:ring-0" />
                </div>
                <button onclick="navigateTo('listings')" class="mt-6 w-full sm:w-auto px-12 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition duration-300 shadow-xl">
                    Find Service
                </button>
                <p class="text-sm opacity-80 mt-4">Or browse categories below.</p>
            </div>
        </section>
        <section class="mb-12">
            <h3 class="text-3xl font-bold text-gray-800 mb-6">Browse by Popular Category</h3>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                ${categories.map(c => `
                    <div onclick="navigateTo('listings', {categoryId: '${c.id}'})" 
                        class="category-card-hover text-center p-4 md:p-6 h-36 flex flex-col justify-center items-center rounded-xl shadow-lg border border-gray-100 cursor-pointer">
                        
                        <div class="w-8 h-8 mb-2 mx-auto fill-blue-600 category-icon">
                            ${c.icon}
                        </div>
                        <p class="text-sm md:text-base font-medium text-gray-700">${c.name}</p>
                    </div>
                `).join('')}
            </div>
        </section>
        <section class="mb-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div class="bg-white p-8 rounded-xl shadow-lg">
                    <h4 class="text-4xl font-extrabold text-blue-600 mb-2">10,000+</h4>
                    <p class="text-gray-600">Happy Customers</p>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-lg">
                    <h4 class="text-4xl font-extrabold text-blue-600 mb-2">500+</h4>
                    <p class="text-gray-600">Vetted Providers</p>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-lg">
                    <h4 class="text-4xl font-extrabold text-blue-600 mb-2">50+</h4>
                    <p class="text-gray-600">Cities Covered</p>
                </div>
            </div>
        </section>
    `;
}

function renderListingsPage(categoryId) {
    const categories = mockCategories;
    const providers = mockProviders;
    const filteredProviders = categoryId ? providers.filter(p => p.categoryId === categoryId) : providers;
    const categoryName = categoryId ? categories.find(c => c.id === categoryId).name : 'All Services';
    return `
        <h2 class="text-4xl font-bold text-gray-800 mb-8">${categoryName} Services</h2>
        
        <div class="flex flex-col lg:flex-row gap-8">
            
            <aside class="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-6 lg:mb-0">
                <h3 class="text-xl font-semibold mb-4 text-gray-800">Filters</h3>
                
                <div class="space-y-4">
                    <div class="border-b pb-4">
                        <p class="font-medium text-gray-700 mb-2">City</p>
                        <select class="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                            <option>Mumbai, Maharashtra</option>
                            <option>Bangalore, Karnataka</option>
                            <option>Delhi Rohini</option>
                            <option>Chennai, Tamil Nadu</option>
                        </select>
                    </div>
                </div>
            </aside>
            <div class="w-full lg:w-3/4 space-y-6">
                ${filteredProviders.length > 0 ? filteredProviders.map(p => {
                    const category = categories.find(c => c.id === p.categoryId);
                    const shortBio = p.bio.substring(0, 100) + '...';
                    return `
                        <div class="service-card bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">${p.name}</h3>
                            <p class="text-xl font-semibold text-green-600 mb-4">Low as ₹${p.price}/hr</p>
                            <div class="short-bio text-gray-600 mb-4">${shortBio}</div>
                            <div class="full-bio hidden text-gray-600 mb-4">${p.bio}</div>
                            <button onclick="toggleReadMore(this)" class="text-blue-600 hover:underline font-medium mb-4">Read more</button>
                            <button onclick="checkAuthAndNavigate('profile', {providerId: ${p.id}})" class="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">Book Now</button>
                        </div>
                    `;
                }).join('') : `
                    <div class="bg-white p-10 rounded-xl shadow-lg text-center text-gray-500">
                        <p class="text-xl font-semibold">No services found in this category.</p>
                        <button onclick="navigateTo('listings')" class="mt-4 text-blue-600 hover:underline">View All Services</button>
                    </div>
                `}
            </div>
        </div>
    `;
}

function generateMockReviews(providerId, count) {
    const reviewTemplates = [
        'Excellent service! Punctual and fixed the issue quickly.',
        'The professional was very knowledgeable and polite. Highly recommend.',
        'Fair pricing and neat work. Will use again for sure.',
        'Slight delay, but they called ahead to inform me. The work itself was top-notch.',
        'Fixed a major issue that others couldn\'t. Five stars!',
        'Good service, but communication could be a little better.',
        'Quick, efficient, and very professional.',
        'Worth every rupee. Reliable service at home.',
    ];
    const userNames = ['Ravi K.', 'Priya S.', 'Amit P.', 'Neha R.', 'Suresh M.', 'Lata D.', 'Vikram J.', 'Meera N.'];
    const reviews = [];
    for (let i = 1; i <= count; i++) {
        const date = new Date(Date.now() - (i * 86400000 * Math.floor(Math.random() * 5))).toISOString().split('T')[0];
        reviews.push({
            user: userNames[i % userNames.length],
            rating: (Math.random() * (5.0 - 4.0) + 4.0).toFixed(1),
            text: reviewTemplates[i % reviewTemplates.length],
            date: date,
        });
    }
    return reviews;
}

function renderProviderProfile(provider) {
    if (!provider) return '<div class="text-center text-red-500">Provider not found.</div>';
    const category = mockCategories.find(c => c.id === provider.categoryId);

    const providerReviews = generateMockReviews(provider.id, provider.reviews);
    const visibleReviews = providerReviews.slice(0, 3);

    let servicesHtml = '';
    let selectOptionsHtml = '';
    if (provider.id === 2 && provider.categoryId === 'plumb') {
        servicesHtml = `
            <li>**Standard Repair:** ₹250/hr (1-hour minimum)</li>
            <li>**Major Installation:** Custom Quote (Contact us for a fair estimate)</li>
            <li>**Emergency Call-out:** ₹350 flat fee + hourly rate</li>
        `;
        selectOptionsHtml = `
            <option value="Standard Repair - ${provider.price}/hr">Standard Repair - ₹250/hr</option>
            <option value="Emergency Call - 350/flat">Emergency Call - ₹350 Flat + Hourly</option>
        `;
    } else {
        servicesHtml = `
            <li>**Standard Repair:** ₹${provider.price}/hr (1-hour minimum)</li>
            <li>**Major Installation:** Custom Quote (Contact for estimate)</li>
            <li>**Emergency Call-out:** ₹800 flat fee + hourly rate</li>
        `;
        selectOptionsHtml = `
            <option value="Standard Repair - ${provider.price}/hr">Standard Repair - ₹${provider.price}/hr</option>
            <option value="Emergency Call - 800/flat">Emergency Call - ₹800 Flat</option>
        `;
    }

    return `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div class="lg:col-span-2 space-y-8">
                
                <div class="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600">
                    <div class="flex items-center space-x-6">
                        <img src="https://placehold.co/100x100/3b82f6/ffffff?text=${provider.name.charAt(0)}" onerror="this.onerror=null;this.src='https://placehold.co/100x100/3b82f6/ffffff?text=P';" class="w-24 h-24 rounded-full object-cover shadow-md">
                        <div>
                            <h2 class="text-3xl font-bold text-gray-800">${provider.name}</h2>
                            <p class="text-xl font-semibold text-blue-600">${category ? category.name : 'Service'} Specialist</p>
                            <div class="flex items-center mt-2">
                                <span class="text-yellow-400 text-lg mr-1">${getRatingStars(provider.rating)}</span>
                                <span class="text-gray-700 font-medium">(${provider.reviews} reviews)</span>
                                <span class="ml-4 text-sm text-green-600 font-semibold bg-green-100 px-2 py-0.5 rounded-full">✓ Verified</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-lg">
                    <h3 class="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">About the Provider</h3>
                    <p class="text-gray-700 mb-4">${provider.bio} We are committed to punctuality, quality workmanship, and transparent pricing.</p>
                    
                    <h4 class="text-xl font-semibold mt-6 mb-3 text-gray-800">Services & Pricing</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-700">
                        ${servicesHtml}
                    </ul>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-lg">
                    <h3 class="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Customer Reviews (${provider.reviews})</h3>
                    <div class="space-y-4">
                        ${visibleReviews.map(r => `
                            <div class="border-b pb-4 last:border-b-0">
                                <div class="flex justify-between items-center">
                                    <div class="font-bold text-gray-800">${r.user}</div>
                                    <div class="text-sm text-gray-500">${r.date}</div>
                                </div>
                                <div class="text-yellow-400 text-lg mb-2">${getRatingStars(r.rating)}</div>
                                <p class="text-gray-700">${r.text}</p>
                            </div>
                        `).join('')}
                    </div>
                    <button onclick="showModal('All ${provider.reviews} Reviews', 'Displaying all reviews in a modal is not implemented in this mock version, but we have ${provider.reviews} positive reviews for this provider!', () => {}, false)" class="mt-4 text-blue-600 hover:underline font-medium">Read All ${provider.reviews} Reviews</button>
                </div>
            </div>
            <div class="lg:col-span-1">
                <div class="sticky top-24 bg-white p-6 rounded-xl shadow-2xl border border-blue-200">
                    <h3 class="text-3xl font-bold text-blue-800 mb-4">Book ${provider.name}</h3>
                    <p class="text-4xl font-bold text-gray-900 mb-6">From ₹${provider.price}<span class="text-xl font-normal text-gray-500">/hr</span></p>
                    
                    <label for="service-package" class="block text-sm font-medium text-gray-700 mb-2">Select Service Package</label>
                    <select id="service-package" class="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:ring-blue-500 focus:border-blue-500">
                        ${selectOptionsHtml}
                    </select>
                    <button onclick="startBooking(${provider.id}, document.getElementById('service-package').value)" class="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-xl">
                        Proceed to Book
                    </button>
                </div>
            </div>
        </div>
    `;
}

function startBooking(providerId, serviceName) {
    if (!appState.isLoggedIn) {
        appState.authMode = 'login';
        appState.authRedirect = { page: 'booking', data: { providerId: providerId, serviceName: serviceName } };
        return navigateTo('auth');
    }

    appState.currentBooking = {
        providerId: providerId,
        serviceName: serviceName,
        step: 1,
        date: '',
        time: '',
        location: '',
        instructions: '',
    };
    navigateTo('booking');
}

function renderBookingSystem() {
    const step = appState.currentBooking.step;
    const providers = mockProviders;
    const provider = providers.find(p => p.id === appState.currentBooking.providerId);
    const stepTitles = ["Choose Date & Time", "Enter Location & Details", "Review & Payment", "Confirmation"];
    if (!provider) return '<div class="text-center text-red-500">Booking error: Provider not selected.</div>';
    let stepContent = '';
    switch (step) {
        case 1:
            stepContent = `
                <h4 class="text-2xl font-semibold mb-4 text-gray-800">1. Select Date & Time</h4>
                <label for="booking-date" class="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input type="date" id="booking-date" value="${appState.currentBooking.date}" class="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-blue-500 focus:border-blue-500" required/>
                
                <label for="booking-time" class="block text-sm font-medium text-gray-700 mb-1">Time Slot</label>
                <select id="booking-time" class="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:ring-blue-500 focus:border-blue-500" required>
                    <option value="">-- Select a Time Slot --</option>
                    <option value="9:00 AM">9:00 AM - 11:00 AM</option>
                    <option value="1:00 PM">1:00 PM - 3:00 PM</option>
                    <option value="3:00 PM">3:00 PM - 5:00 PM</option>
                </select>
                <button onclick="nextBookingStep()" class="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300">Next: Location</button>
            `;
            break;
        case 2:
            stepContent = `
                <h4 class="text-2xl font-semibold mb-4 text-gray-800">2. Enter Location & Details</h4>
                <label for="booking-location" class="block text-sm font-medium text-gray-700 mb-1">Service Address (Flat No, Society/Area, Pincode)</label>
                <input type="text" id="booking-location" placeholder="A-402, Shiv Shanti Towers, 400001" value="${appState.currentBooking.location}" class="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-blue-500 focus:border-blue-500" required/>
                
                <label for="booking-instructions" class="block text-sm font-medium text-gray-700 mb-1">Special Instructions (e.g., gate code, dog warning)</label>
                <textarea id="booking-instructions" rows="4" class="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:ring-blue-500 focus:border-blue-500">${appState.currentBooking.instructions}</textarea>
                
                <div class="flex space-x-4">
                    <button onclick="prevBookingStep()" class="flex-grow bg-gray-300 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-400 transition duration-300">Back</button>
                    <button onclick="nextBookingStep()" class="flex-grow bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300">Next: Payment</button>
                </div>
            `;
            break;
        case 3:
            const price = appState.currentBooking.serviceName.includes('Flat') ? 800 : provider.price * 3;
            const taxes = price * 0.18;
            const total = price + taxes;
            stepContent = `
                <h4 class="text-2xl font-semibold mb-4 text-gray-800">3. Review & Payment</h4>
                
                <div class="bg-gray-50 p-6 rounded-xl mb-6 border border-gray-200">
                    <h5 class="text-xl font-bold mb-3">Order Summary</h5>
                    <p class="text-lg text-gray-800 mb-1"><strong>Provider:</strong> ${provider.name}</p>
                    <p class="text-lg text-gray-800 mb-1"><strong>Service:</strong> ${appState.currentBooking.serviceName}</p>
                    <p class="text-lg text-gray-800 mb-1"><strong>When:</strong> ${appState.currentBooking.date} at ${appState.currentBooking.time}</p>
                    <p class="text-lg text-gray-800 mb-4"><strong>Where:</strong> ${appState.currentBooking.location}</p>
                    <div class="border-t pt-3 space-y-1">
                        <div class="flex justify-between text-gray-700"><span>Service Charge:</span><span>₹${price.toFixed(2)}</span></div>
                        <div class="flex justify-between text-gray-700"><span>Taxes & GST (18%):</span><span>₹${taxes.toFixed(2)}</span></div>
                        <div class="flex justify-between font-bold text-xl pt-2 border-t mt-2"><span>TOTAL DUE:</span><span class="text-blue-600">₹${total.toFixed(2)}</span></div>
                    </div>
                </div>
                <label for="payment-method" class="block text-sm font-medium text-gray-700 mb-2">Select Payment Method</label>
                <select id="payment-method" class="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-blue-500 focus:border-blue-500" required>
                    <option>Saved Card (UPI/Card)</option>
                    <option>Pay on Completion (COD)</option>
                    <option>New Payment Method</option>
                </select>
                
                <div class="flex items-center mb-6">
                    <input type="checkbox" id="policy-agree" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" required>
                    <label for="policy-agree" class="ml-2 text-sm text-gray-600">I agree to the <a href="#" class="text-blue-600 hover:underline">cancellation policy</a> and terms.</label>
                </div>
                <div class="flex space-x-4">
                    <button onclick="prevBookingStep()" class="flex-grow bg-gray-300 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-400 transition duration-300">Back</button>
                    <button onclick="nextBookingStep()" class="flex-grow bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition duration-300">Confirm & Book</button>
                </div>
            `;
            break;
        case 4:
            const newBooking = {
                id: mockBookings.length + 101,
                providerName: provider.name,
                serviceName: appState.currentBooking.serviceName,
                date: appState.currentBooking.date,
                time: appState.currentBooking.time,
                status: 'Confirmed',
                price: 1500,
                rating: null
            };
            mockBookings.push(newBooking);
            stepContent = `
                <div class="text-center p-8 bg-green-50 rounded-xl border border-green-300">
                    <div class="text-6xl text-green-600 mb-4">🎉</div>
                    <h4 class="text-3xl font-bold text-green-800 mb-4">Booking Confirmed!</h4>
                    <p class="text-gray-700 text-lg mb-6">You will receive an SMS and email confirmation shortly.</p>
                    
                    <p class="text-xl font-semibold mb-2">${newBooking.serviceName} with ${newBooking.providerName}</p>
                    <p class="text-lg text-gray-600 mb-8">${newBooking.date} at ${newBooking.time}</p>
                    <button onclick="navigateTo('dashboard')" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300">Go to Dashboard</button>
                </div>
            `;
            break;
    }
    return `
        <div class="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
            <h2 class="text-4xl font-bold text-gray-800 mb-8">Service Booking</h2>
            
            <div class="flex justify-between items-center mb-8 relative">
                ${stepTitles.map((title, index) => `
                    <div class="flex flex-col items-center z-10">
                        <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${index + 1 <= step ? 'bg-blue-600' : 'bg-gray-300'}">
                            ${index + 1}
                        </div>
                        <span class="text-xs mt-2 text-center hidden sm:block ${index + 1 === step ? 'text-blue-600 font-semibold' : 'text-gray-500'}">${title}</span>
                    </div>
                `).join('')}
                <div class="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-0 mx-8">
                    <div class="h-full bg-blue-600" style="width: ${((step - 1) / (stepTitles.length - 1)) * 100}%"></div>
                </div>
            </div>
            <div class="mt-8">
                ${stepContent}
            </div>
        </div>
    `;
}

function nextBookingStep() {
    const currentStep = appState.currentBooking.step;
    if (currentStep === 1) {
        const date = document.getElementById('booking-date').value;
        const time = document.getElementById('booking-time').value;
        if (!date || !time) return showModal('Input Required', 'Please select a date and time for your booking.');
        appState.currentBooking.date = date;
        appState.currentBooking.time = time;
    } else if (currentStep === 2) {
        const location = document.getElementById('booking-location').value;
        const instructions = document.getElementById('booking-instructions').value;
        if (!location) return showModal('Input Required', 'Please enter the complete service address (including Pincode).');
        appState.currentBooking.location = location;
        appState.currentBooking.instructions = instructions;
    } else if (currentStep === 3) {
        const agreed = document.getElementById('policy-agree').checked;
        if (!agreed) return showModal('Action Required', 'You must agree to the cancellation policy and terms to proceed.');
    }
    appState.currentBooking.step = currentStep + 1;
    navigateTo('booking');
}

function prevBookingStep() {
    appState.currentBooking.step = appState.currentBooking.step - 1;
    navigateTo('booking');
}

function renderCustomerDashboard() {
    if (!appState.isLoggedIn) return renderAuthPage();
    const upcoming = mockBookings.filter(b => b.status === 'Confirmed' || b.status === 'Pending');
    const past = mockBookings.filter(b => b.status === 'Completed');
    const renderBookingCard = (b) => `
        <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div class="flex-grow mb-4 md:mb-0">
                <p class="text-xs font-semibold uppercase ${b.status === 'Confirmed' ? 'text-green-600' : b.status === 'Pending' ? 'text-yellow-600' : 'text-gray-600'} mb-1">${b.status}</p>
                <h4 class="text-xl font-bold text-gray-800 mb-1">${b.serviceName}</h4>
                <p class="text-gray-600 mb-2">with <span class="font-semibold text-blue-600">${b.providerName}</span></p>
                <p class="text-gray-500 text-sm">${b.date} at ${b.time}</p>
            </div>
            <div class="flex flex-col items-start md:items-end space-y-2">
                <p class="text-2xl font-bold text-gray-800">₹${b.price.toFixed(2)}</p>
                ${b.status !== 'Completed' ? `
                    <div class="flex space-x-2">
                        <button onclick="showModal('Cancel Booking', 'Are you sure you want to cancel booking #${b.id}? Cancellation fees (max ₹800) may apply.', () => console.log('Booking Cancelled'), true)" class="text-red-500 hover:text-red-700 text-sm font-medium">Cancel</button>
                        <button onclick="showModal('Reschedule Booking', 'Rescheduling booking #${b.id} requires provider approval.', () => {}, false)" class="text-blue-500 hover:text-blue-700 text-sm font-medium">Reschedule</button>
                    </div>
                ` : (b.rating ? `
                    <div class="flex items-center text-sm text-gray-600">Your Rating: ${getRatingStars(b.rating)}</div>
                ` : `
                    <button onclick="showModal('Rate Service', 'Thank you for your business! Give ${b.providerName} a 5-star rating.', () => console.log('Rated Service'), false)" class="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition duration-300">Rate Service</button>
                `)}
            </div>
        </div>
    `;
    return `
        <h2 class="text-4xl font-bold text-gray-800 mb-8">Hello, ${appState.user.name.split(' ')[0]}!</h2>
        <section class="mb-10">
            <h3 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Upcoming Services (${upcoming.length})</h3>
            <div class="space-y-4">
                ${upcoming.length > 0 ? upcoming.map(renderBookingCard).join('') : '<p class="text-gray-500 p-4 bg-white rounded-xl">You have no upcoming bookings.</p>'}
            </div>
        </section>
        <section class="mb-10">
            <h3 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Past Services (${past.length})</h3>
            <div class="space-y-4">
                ${past.length > 0 ? past.map(renderBookingCard).join('') : '<p class="text-gray-500 p-4 bg-white rounded-xl">No completed services yet.</p>'}
            </div>
        </section>
        <section>
            <h3 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Account Details</h3>
                <div class="bg-white p-6 rounded-xl shadow-md space-y-2">
                    <p class="text-gray-700"><strong>Name:</strong> ${appState.user.name}</p>
                    <p class="text-gray-700"><strong>Email:</strong> ${appState.user.email || 'N/A'}</p>
                    <button onclick="appState.isLoggedIn = false; appState.user.name = 'Guest User'; appState.user.email = ''; navigateTo('home')" class="text-red-500 hover:text-red-700 font-semibold">Log Out</button>
                </div>
        </section>
    `;
}

function renderTestimonialsPage() {
    return `
        <div class="max-w-4xl mx-auto space-y-12">
            <header class="text-center">
                <h2 class="text-5xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
                <p class="text-xl text-gray-600">Real stories from happy customers across India.</p>
            </header>
            <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${testimonials.map(t => `
                    <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <div class="flex items-center mb-4">
                            <span class="text-yellow-400 text-lg mr-2">${getRatingStars(t.rating)}</span>
                            <span class="text-sm text-gray-500 ml-auto">${t.location}</span>
                        </div>
                        <p class="text-gray-700 mb-4 italic">"${t.text}"</p>
                        <div class="flex items-center">
                            <h4 class="font-bold text-gray-800">${t.name}</h4>
                            <p class="text-sm text-gray-500 ml-2">${t.service}</p>
                        </div>
                        <p class="text-xs text-gray-400 mt-2">${t.date}</p>
                    </div>
                `).join('')}
            </section>
            <div class="text-center">
                <button onclick="navigateTo('listings')" class="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-lg">
                    Find Your Service
                </button>
            </div>
        </div>
    `;
}

function renderAboutPage() {
    return `
        <div class="max-w-4xl mx-auto space-y-12">
            <header class="text-center">
                <h2 class="text-5xl font-bold text-gray-800 mb-4">Our Commitment to India</h2>
                <p class="text-xl text-gray-600">Simplifying home and personal services across the nation.</p>
            </header>
            <section class="bg-white p-8 rounded-xl shadow-2xl border-l-4 border-blue-600">
                <h3 class="text-3xl font-bold text-gray-800 mb-4">The One Servc Vision</h3>
                <p class="text-gray-700 leading-relaxed mb-4">
                    We founded One Servc to address the complexity of finding reliable, skilled, and fairly-priced local professionals in India. Our mission is to bridge the trust gap between customers and service providers.
                    From the bustling lanes of **Mumbai** to the tech hubs of **Bangalore** and the heritage cities of **Delhi**, we ensure that high-quality, trustworthy help is just a tap away. We are proud to support local Indian businesses and create opportunities for skilled individuals.
                </p>
                <p class="text-gray-700 leading-relaxed">
                    Our platform is built with the Indian user in mind—supporting regional languages, UPI payments, and hyper-local service matching. Join thousands of satisfied customers who have transformed their homes and lives with One Servc.
                </p>
            </section>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div class="bg-white p-6 rounded-xl shadow-lg border-t-2 border-green-500">
                    <span class="text-4xl block mb-3">🇮🇳</span>
                    <h4 class="font-bold text-xl mb-2">Local Focus</h4>
                    <p class="text-gray-600 text-sm">Dedicated services and fair pricing structured for the Indian economy and local markets.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-lg border-t-2 border-yellow-500">
                    <span class="text-4xl block mb-3">✅</span>
                    <h4 class="font-bold text-xl mb-2">Verified Talent</h4>
                    <p class="text-gray-600 text-sm">Every professional is background-checked, licensed, and performance-rated by customers.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-lg border-t-2 border-red-500">
                    <span class="text-4xl block mb-3">📞</span>
                    <h4 class="font-bold text-xl mb-2">24/7 Support</h4>
                    <p class="text-gray-600 text-sm">Reliable support team available to assist with bookings, conflicts, or emergencies.</p>
                </div>
            </div>
            <section class="bg-gray-50 p-8 rounded-xl">
                <h3 class="text-3xl font-bold text-gray-800 mb-6 text-center">Our Journey</h3>
                <div class="space-y-4">
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                        <div>
                            <h4 class="font-semibold">Launch in 2024</h4>
                            <p class="text-gray-600">Started with core services in major metros.</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                        <div>
                            <h4 class="font-semibold">Expansion 2025</h4>
                            <p class="text-gray-600">Added 50+ cities and new categories like therapy.</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                        <div>
                            <h4 class="font-semibold">Future Ahead</h4>
                            <p class="text-gray-600">AI matching and more personalized services coming soon.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
}

function renderHowItWorksPage() {
    const steps = [
        { icon: '🔎', title: 'Search & Select', detail: 'Enter your service need and Pincode. Browse profiles, check ratings, and select the professional that fits your requirements and budget.' },
        { icon: '📅', title: 'Schedule & Detail', detail: 'Choose your preferred date and time slot. Provide your exact service location and any specific instructions for the professional.' },
        { icon: '✅', title: 'Confirm & Relax', detail: 'Review the total cost (in ₹), choose your payment method (UPI, Card, or COD), and confirm your booking. Your pro will arrive on time!' }
    ];
    return `
        <div class="max-w-4xl mx-auto space-y-10">
            <header class="text-center">
                <h2 class="text-5xl font-bold text-gray-800 mb-4">How One Servc Works</h2>
                <p class="text-xl text-gray-600">Booking home services has never been easier in India.</p>
            </header>
            <div class="relative flex flex-col items-center mb-12">
                <div class="hidden md:block absolute h-full w-1 bg-blue-200 left-1/2 transform -translate-x-1/2 top-0 bottom-0"></div>
                ${steps.map((step, index) => `
                    <div class="w-full md:flex md:justify-center items-center py-6">
                        <div class="md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}">
                            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
                                <h3 class="text-2xl font-bold text-blue-600 mb-2">${step.title}</h3>
                                <p class="text-gray-700">${step.detail}</p>
                            </div>
                        </div>
                        
                        <div class="hidden md:flex md:w-2/12 justify-center">
                            <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-xl border-4 border-white">${index + 1}</div>
                        </div>
                        
                        <div class="md:w-5/12 ${index % 2 === 0 ? 'md:order-3' : ''}">
                            <span class="text-5xl block mb-2 md:hidden">${step.icon}</span>
                            <span class="hidden md:inline-block text-5xl">${step.icon}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            <section class="bg-gray-50 p-8 rounded-xl">
                <h3 class="text-3xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="font-semibold mb-2">What if I need to cancel?</h4>
                        <p class="text-gray-600">Free cancellation up to 24 hours before. After that, a small fee applies.</p>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-2">How do payments work?</h4>
                        <p class="text-gray-600">Secure UPI, card, or COD options. No upfront payment for COD.</p>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-2">Are providers insured?</h4>
                        <p class="text-gray-600">Yes, all our pros carry insurance for your peace of mind.</p>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-2">What cities do you serve?</h4>
                        <p class="text-gray-600">Over 50 cities including metros and Tier-2 towns.</p>
                    </div>
                </div>
            </section>
            <div class="text-center pt-8">
                <button onclick="navigateTo('listings')" class="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition duration-300 shadow-lg">
                    Get Started Now!
                </button>
            </div>
        </div>
    `;
}

function renderFAQPage() {
    const faqs = [
        { question: "How are providers vetted?", answer: "All providers undergo a background check, license verification, and continuous performance review based on customer ratings." },
        { question: "What is the cancellation policy?", answer: "You can cancel free of charge up to 24 hours before the service time. Cancellations within 24 hours may incur a fee of up to ₹800." },
        { question: "Is my payment secure?", answer: "Yes, all payments are processed through a secure, encrypted third-party gateway. We accept UPI, Card, and Netbanking payments for your convenience." },
        { question: "Do I pay GST/Taxes?", answer: "Yes, standard GST is applied to all service charges, and this amount is clearly displayed during the Step 3: Review & Payment stage of the booking process." },
        { question: "What if the service takes longer than expected?", answer: "For hourly services, the provider is obligated to inform you if additional time is required. Any extra payment will be based on the agreed-upon hourly rate shown on their profile." },
        { question: "Can I request a female provider?", answer: "Yes, where available, you can specify preferences like gender during the booking process." },
        { question: "What happens if the provider is late?", answer: "We guarantee on-time arrival or offer a discount. Track your pro in real-time via the app." },
        { question: "How do I rate a service?", answer: "After completion, you'll receive a prompt to rate and review the provider in your dashboard." },
    ];
    
    return `
        <div class="max-w-4xl mx-auto space-y-10">
            <header class="text-center">
                <h2 class="text-5xl font-bold text-gray-800 mb-4">Help Center & FAQs</h2>
                <p class="text-xl text-gray-600">Quick answers to your most common questions.</p>
            </header>
            <div class="space-y-4">
                ${faqs.map((faq, index) => `
                    <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <details class="group cursor-pointer">
                            <summary class="flex justify-between items-center font-bold text-lg text-gray-800 focus:outline-none">
                                <span>${faq.question}</span>
                                <svg class="w-5 h-5 ml-2 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </summary>
                            <p class="pt-4 text-gray-700 border-t mt-4">${faq.answer}</p>
                        </details>
                    </div>
                `).join('')}
            </div>
            <div class="text-center pt-8">
                <p class="text-lg text-gray-700 mb-4">Can't find your answer?</p>
                <button onclick="navigateTo('contact')" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300">
                    Contact Support
                </button>
            </div>
        </div>
    `;
}

function renderContactPage() {
    return `
        <div class="max-w-xl mx-auto space-y-8">
            <header class="text-center">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">Contact Our Support Team</h2>
                <p class="text-gray-600 mb-8">Fill out the form below or email us directly at support@oneservc.in. We're here to help!</p>
            </header>
            <div class="bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
                <form onsubmit="event.preventDefault(); showModal('Message Sent!', 'Thank you for reaching out. We will respond to your query within 24 hours.', () => {});">
                    <div class="mb-4">
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" id="name" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    </div>
                    <div class="mb-4">
                        <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input type="text" id="subject" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea id="message" rows="6" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300">Send Message</button>
                </form>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl text-center">
                <h3 class="text-xl font-semibold mb-4">Other Ways to Reach Us</h3>
                <div class="space-y-2">
                    <p class="text-gray-600">Phone: +91 22-1234-5678 (Mon-Sun, 9AM-9PM)</p>
                    <p class="text-gray-600">WhatsApp: <a href="https://wa.me/919876543210" class="text-blue-600 hover:underline">+91 98765-43210</a></p>
                    <p class="text-gray-600">Live Chat: Available on the app</p>
                </div>
            </div>
        </div>
    `;
}

// --- Event Listeners and Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    document.getElementById('mobile-menu-button').addEventListener('click', toggleMobileMenu);
    // Initial Page Load
    navigateTo('home');
    // Trigger location detection on page load (with permission prompt)
    getVisitorLocation();
});

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

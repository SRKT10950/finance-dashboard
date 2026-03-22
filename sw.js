const CACHE_NAME = 'finance-pwa-v1';
const ASSETS = [
    './FinancialDashboard.html',
    './BudgetDashboard.html',
    './InvestmentDashboard.html',
    './LoanDashboard.html',
    './LenderDashboard.html',
    './RepaymentDashboard.html',
    './manifest.json',
    './icon.svg'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    );
});

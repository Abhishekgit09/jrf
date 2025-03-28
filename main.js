/**
 * JRFAdda PYQ Page - Main JavaScript
 * This file contains all the interactive functionality for the PYQ page
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded. Loading components...');
    
    // Load header and footer directly
    loadComponent('components/header.html', 'header-container');
    loadComponent('components/footer.html', 'footer-container');
    
    // Other initialization will happen after components are loaded
    
    // Mobile menu toggle
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const mainNavLinks = document.getElementById('mainNavLinks');

    if (menuToggleBtn && mainNavLinks) {
        menuToggleBtn.addEventListener('click', function() {
            mainNavLinks.classList.toggle('active');
            const isExpanded = mainNavLinks.classList.contains('active');
            menuToggleBtn.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Expandable content toggle (for Read More functionality)
    const expandBtns = document.querySelectorAll('.expand-btn');
    
    expandBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            if (targetContent) {
                targetContent.classList.toggle('expanded');
                this.textContent = targetContent.classList.contains('expanded') ? 'Read Less' : 'Read More';
            }
        });
    });

    // Dynamic year in footer copyright
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Handle filter buttons scrolling
    const filterNav = document.querySelector('.subject-filter');
    const prevBtn = document.querySelector('.filter-nav-btn.prev');
    const nextBtn = document.querySelector('.filter-nav-btn.next');

    if (filterNav && prevBtn && nextBtn) {
        // Scroll filter nav left
        prevBtn.addEventListener('click', function() {
            filterNav.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        });

        // Scroll filter nav right
        nextBtn.addEventListener('click', function() {
            filterNav.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        });
    }

    // Filter button active state
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Here you would add additional logic to filter the content
            const filter = this.getAttribute('data-filter');
            // Implementation of filtering logic would go here
        });
    });

    // Sticky sidebar adjustment
    function adjustStickyElements() {
        const headerHeight = document.querySelector('#site-header').offsetHeight;
        const sidebarSticky = document.querySelector('.sidebar-sticky');
        
        if (sidebarSticky) {
            sidebarSticky.style.top = `${headerHeight + 20}px`;
            sidebarSticky.style.maxHeight = `calc(100vh - ${headerHeight + 40}px)`;
        }
    }

    // Run on load and resize
    adjustStickyElements();
    window.addEventListener('resize', adjustStickyElements);

    // Simplified component loading function
    function loadComponent(url, targetId) {
        console.log(`Loading ${url} into #${targetId}...`);
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${url}: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                const target = document.getElementById(targetId);
                if (!target) {
                    throw new Error(`Target #${targetId} not found`);
                }
                
                target.innerHTML = html;
                console.log(`Successfully loaded ${url} into #${targetId}`);
                
                // Initialize components after they're loaded
                initializeComponent(targetId);
            })
            .catch(error => {
                console.error(`Error loading component ${url}:`, error);
                const target = document.getElementById(targetId);
                if (target) {
                    target.innerHTML = `<div style="color: red; padding: 20px;">Failed to load component: ${error.message}</div>`;
                }
            });
    }
    
    // Initialize components based on their ID
    function initializeComponent(targetId) {
        if (targetId === 'header-container') {
            initializeHeader();
        } else if (targetId === 'footer-container') {
            initializeFooter();
        }
        
        // Run common initialization that depends on components being loaded
        adjustStickyElements();
    }
    
    // Initialize header-specific functionality
    function initializeHeader() {
        const menuToggleBtn = document.getElementById('menuToggleBtn');
        const mainNavLinks = document.getElementById('mainNavLinks');
        
        if (menuToggleBtn && mainNavLinks) {
            menuToggleBtn.addEventListener('click', function() {
                mainNavLinks.classList.toggle('active');
                menuToggleBtn.setAttribute('aria-expanded', 
                    mainNavLinks.classList.contains('active'));
            });
        }
    }
    
    // Initialize footer-specific functionality
    function initializeFooter() {
        const currentYearSpan = document.getElementById('currentYear');
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    }

    // --- "Read More" Functionality ---
    const descriptions = document.querySelectorAll('.description');

    descriptions.forEach(desc => {
        const readMoreBtn = desc.querySelector('.read-more-btn');
        if (readMoreBtn) {
            readMoreBtn.addEventListener('click', () => {
                desc.classList.toggle('expanded');
            });
        }
    });

    // --- Ensure image aspect ratios are maintained ---
    const cardImages = document.querySelectorAll('.card-image img');
    cardImages.forEach(img => {
        img.addEventListener('load', () => {
            const parent = img.parentElement;
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            
            // Adjust parent height based on aspect ratio
            if (aspectRatio < 1.3) { // Portrait or close to square
                parent.style.paddingTop = '75%'; // 4:3 ratio
            } else {
                parent.style.paddingTop = '62.5%'; // 16:10 ratio
            }
        });
    });

    console.log("JRFAdda Page Script Loaded Successfully.");
}); 
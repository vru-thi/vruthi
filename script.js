// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "The Future of AI in Personal Finance: What You Need to Know",
        excerpt: "Exploring how artificial intelligence is revolutionizing the way we manage money, invest, and plan for the future.",
        category: "AI",
        date: "2024-12-15",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        tags: ["AI", "Finance"],
        content: `
            <p>Artificial Intelligence is transforming every aspect of our lives, and personal finance is no exception. From robo-advisors to predictive analytics, AI is making financial management more accessible, efficient, and personalized than ever before.</p>

            <h2>The Rise of Robo-Advisors</h2>
            <p>Robo-advisors have democratized investment management by providing automated, algorithm-driven financial planning services with minimal human supervision. These platforms can create and manage portfolios based on your risk tolerance, investment goals, and time horizon.</p>

            <h2>Predictive Analytics in Spending</h2>
            <p>AI-powered apps can now analyze your spending patterns and predict future expenses, helping you budget more effectively and avoid overspending. This technology is particularly useful for identifying subscription services you've forgotten about or predicting when you'll need to make major purchases.</p>

            <h2>What's Coming Next</h2>
            <p>The future holds even more exciting possibilities, including AI-powered financial advisors that can provide personalized advice 24/7, fraud detection systems that can identify suspicious transactions in real-time, and investment strategies that adapt to market conditions automatically.</p>
        `
    },
    {
        id: 2,
        title: "Building Wealth in Your 20s: A Comprehensive Guide",
        excerpt: "Essential strategies for young professionals to start building wealth early and secure their financial future.",
        category: "Finance",
        date: "2024-12-10",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
        tags: ["Finance", "Lifestyle"],
        content: `
            <p>Your 20s are the perfect time to start building wealth. With time on your side and the power of compound interest, even small investments can grow into substantial amounts over decades.</p>

            <h2>Start with an Emergency Fund</h2>
            <p>Before investing, make sure you have 3-6 months of expenses saved in a high-yield savings account. This safety net will prevent you from going into debt when unexpected expenses arise.</p>

            <h2>Take Advantage of Employer Benefits</h2>
            <p>If your employer offers a 401(k) match, contribute at least enough to get the full match. This is free money that can significantly boost your retirement savings.</p>
        `
    },
    {
        id: 3,
        title: "The Minimalist Lifestyle: Less Stuff, More Freedom",
        excerpt: "How embracing minimalism can lead to greater happiness, financial freedom, and clarity of purpose.",
        category: "Lifestyle",
        date: "2024-12-05",
        image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=250&fit=crop",
        tags: ["Lifestyle"],
        content: `
            <p>Minimalism isn't about living with nothing—it's about living with intention. By focusing on what truly matters and eliminating excess, we can create more space for experiences, relationships, and personal growth.</p>

            <h2>The Financial Benefits</h2>
            <p>Minimalism naturally leads to spending less on unnecessary items, which means more money for savings, investments, and experiences that truly matter to you.</p>
        `
    },
    {
        id: 4,
        title: "Travel Hacking: How I Traveled to 15 Countries for Free",
        excerpt: "Learn the strategies and credit card techniques that allowed me to travel the world without breaking the bank.",
        category: "Travel",
        date: "2024-11-28",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop",
        tags: ["Travel", "Finance"],
        content: `
            <p>Travel hacking is the art of using credit card rewards, airline miles, and hotel points to travel for significantly less money—or even for free. Over the past two years, I've visited 15 countries using these techniques.</p>

            <h2>Getting Started with Credit Card Rewards</h2>
            <p>The key is to find credit cards with generous sign-up bonuses and use them for your regular expenses, then pay them off in full each month to avoid interest charges.</p>
        `
    },
    {
        id: 5,
        title: "Interview: Sarah Chen on Building a $10M Startup",
        excerpt: "An exclusive conversation with tech entrepreneur Sarah Chen about her journey from idea to successful exit.",
        category: "Interviews",
        date: "2024-11-20",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop",
        tags: ["Interviews", "Business"],
        content: `
            <p>Sarah Chen built her first startup from her college dorm room and sold it for $10 million just three years later. In this exclusive interview, she shares her insights on entrepreneurship, fundraising, and building a successful team.</p>

            <h2>The Early Days</h2>
            <p>"I started with a simple problem I was facing myself," Sarah explains. "I couldn't find a good way to organize study groups with my classmates, so I built a simple app to solve it."</p>
        `
    },
    {
        id: 6,
        title: "The Rise of Decentralized Finance (DeFi)",
        excerpt: "Understanding the revolutionary world of DeFi and its potential to reshape traditional banking.",
        category: "Finance",
        date: "2024-11-15",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
        tags: ["Finance", "AI"],
        content: `
            <p>Decentralized Finance, or DeFi, represents a paradigm shift in how we think about financial services. Built on blockchain technology, DeFi platforms offer traditional financial services without traditional intermediaries.</p>

            <h2>What Makes DeFi Different</h2>
            <p>Unlike traditional banks, DeFi protocols are open-source, permissionless, and operate 24/7. Anyone with an internet connection can access these services without needing approval from a central authority.</p>
        `
    }
];

// DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const blogGrid = document.getElementById('blogGrid');
const searchInput = document.getElementById('searchInput');

// Mobile navigation toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Check if this is a nav link that should open overlay
        if (link.textContent === 'Categories' || link.textContent === 'About Me') {
            e.preventDefault();
            openNavOverlay();
        }
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navigation overlay functionality
function openNavOverlay() {
    document.getElementById('navOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeNavOverlay() {
    document.getElementById('navOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Add hover listeners for navigation overlay
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.textContent === 'Categories' || link.textContent === 'About Me') {
            link.addEventListener('mouseenter', () => {
                setTimeout(() => {
                    if (link.matches(':hover')) {
                        openNavOverlay();
                    }
                }, 300);
            });
        }
    });

    // Close overlay when clicking outside
    document.getElementById('navOverlay').addEventListener('click', (e) => {
        if (e.target.id === 'navOverlay') {
            closeNavOverlay();
        }
    });

    // Close overlay with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeNavOverlay();
        }
    });
});

// Render blog posts
function renderBlogPosts(posts = blogPosts) {
    if (!blogGrid) return;

    blogGrid.innerHTML = posts.map(post => `
        <article class="post-card" style="background-image: url('${post.image}')">
            <div class="play-button-overlay">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            </div>
            <div class="post-content">
                <span class="post-category">${post.category}</span>
                <h3 class="post-title">
                    <a href="post.html?id=${post.id}">${post.title}</a>
                </h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span class="post-date">${post.date}</span>
                    <div class="post-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        </article>
    `).join('');
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Search functionality
function searchPosts() {
    const query = searchInput.value.toLowerCase().trim();

    if (!query) {
        renderBlogPosts(blogPosts);
        return;
    }

    const filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
    );

    renderBlogPosts(filteredPosts);
}

// Search on Enter key
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchPosts();
        }
    });
}

// Get post by ID
function getPostById(id) {
    return blogPosts.find(post => post.id === parseInt(id));
}

// Get posts by category
function getPostsByCategory(category) {
    return blogPosts.filter(post => 
        post.category.toLowerCase() === category.toLowerCase()
    );
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Render blog posts on homepage
    if (blogGrid) {
        renderBlogPosts(blogPosts);
    }

    // Handle individual post page
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const category = urlParams.get('cat');

    if (postId && window.location.pathname.includes('post.html')) {
        renderPostPage(postId);
    }

    if (category && window.location.pathname.includes('category.html')) {
        renderCategoryPage(category);
    }
});

// Render individual post page
function renderPostPage(postId) {
    const post = getPostById(postId);
    if (!post) {
        document.body.innerHTML = '<h1>Post not found</h1>';
        return;
    }

    document.title = `${post.title} - Your Personal Blog`;

    // Update the page content
    const postHeader = document.querySelector('.post-header');
    const postBody = document.querySelector('.post-body');

    if (postHeader) {
        postHeader.innerHTML = `
            <div class="container">
                <div class="post-meta-main">
                    <span class="post-category">${post.category}</span>
                    <span class="post-date">${formatDate(post.date)}</span>
                    <div class="post-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <h1 class="post-title-main">${post.title}</h1>
                <img src="${post.image}" alt="${post.title}" class="post-featured-image">
            </div>
        `;
    }

    if (postBody) {
        postBody.innerHTML = `
            <div class="container">
                <div class="post-content-main">
                    ${post.content}
                </div>
            </div>
        `;
    }
}

// Render category page
function renderCategoryPage(category) {
    const posts = getPostsByCategory(category);
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

    document.title = `${categoryName} - Your Personal Blog`;

    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) {
        pageHeader.innerHTML = `
            <div class="container">
                <h1 class="page-title">${categoryName}</h1>
                <p class="page-subtitle">Explore articles about ${categoryName.toLowerCase()}</p>
            </div>
        `;
    }

    if (blogGrid) {
        renderBlogPosts(posts);
    }
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Simulate form submission
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Export functions for use in other pages
window.blogFunctions = {
    getPostById,
    getPostsByCategory,
    formatDate,
    renderBlogPosts,
    searchPosts
};
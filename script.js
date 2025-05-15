// min and max radius, radius threshold and percentage of filled circles
var radMin = 5,
  radMax = 125,
  filledCircle = 60, //percentage of filled circles
  concentricCircle = 30, //percentage of concentric circles
  radThreshold = 25; //IFF special, over this radius concentric, otherwise filled

//min and max speed to move
var speedMin = 0.3,
  speedMax = 2.5;

//max reachable opacity for every circle and blur effect
var maxOpacity = 0.6;

//default palette choice
var colors = ['52,168,83', '117,95,147', '199,108,23', '194,62,55', '0,172,212', '120,120,120'],
  bgColors = ['52,168,83', '117,95,147', '199,108,23', '194,62,55', '0,172,212', '120,120,120'],
  circleBorder = 10,
  backgroundLine = bgColors[0];
var backgroundMlt = 0.85;

//min distance for links
var linkDist = Math.min(canvas.width, canvas.height) / 2.4,
  lineBorder = 2.5;

//most importantly: number of overall circles and arrays containing them
var maxCircles = 20,
  points = [],
  pointsBack = [];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize canvas elements
    var canvas = document.getElementById('canvas');
    var canvasbg = document.getElementById('canvasbg');

    // Set canvas dimensions to match window size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvasbg.width = window.innerWidth;
        canvasbg.height = window.innerHeight;
    }

    // Call resize on load
    resizeCanvas();

    // Resize canvas when window size changes
    window.addEventListener('resize', resizeCanvas);

    // Initialize background animation
    initBackgroundAnimation();

    // Experience section tabs
    setupExperienceTabs();

    // Smooth scrolling for navigation links
    setupSmoothScrolling();

    // Hide/show navigation bar on scroll
    setupScrollNavigation();

    // Theme toggle
    setupThemeToggle();

    // Make theme toggle draggable
    setupDraggableThemeToggle();

    // Set the current URL as the redirect URL after form submission
    const currentUrl = window.location.href.split('#')[0]; // Remove any hash
    document.querySelector('input[name="_next"]').value = currentUrl + '#contact';

    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('formSuccessMessage');
    const errorMessage = document.getElementById('formErrorMessage');

    // Check if we've been redirected back after submission
    if (window.location.hash === '#contact' && window.history.length > 1) {
        // Show success message if we were redirected back
        successMessage.style.display = 'block';

        // Scroll to the contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Clear the hash to prevent showing the message on page refresh
        setTimeout(() => {
            history.replaceState(null, document.title, window.location.pathname + window.location.search);
        }, 1000);
    }

    contactForm.addEventListener('submit', function(e) {
        // Show loading state
        submitBtn.classList.add('loading');

        // Hide any previous messages
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
    });
});

// Initialize background animation
function initBackgroundAnimation() {
    var canvas = document.getElementById('canvas');
    var canvasbg = document.getElementById('canvasbg');

    // Adjust canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasbg.width = window.innerWidth;
    canvasbg.height = window.innerHeight;

    // Initialize circles
    for (var i = 0; i < maxCircles * 2; i++) points.push(new Circle());
    for (var i = 0; i < maxCircles; i++) pointsBack.push(new Circle(true));

    // Start animation
    window.requestAnimationFrame(draw);
}

//circle class
function Circle(background) {
    var canvas = document.getElementById('canvas');
    //if background, it has different rules
    this.background = (background || false);
    this.x = randRange(-canvas.width / 2, canvas.width / 2);
    this.y = randRange(-canvas.height / 2, canvas.height / 2);
    this.radius = background ? hyperRange(radMin, radMax) * backgroundMlt : hyperRange(radMin, radMax);
    this.filled = this.radius < radThreshold ? (randint(0, 100) > filledCircle ? false : 'full') : (randint(0, 100) > concentricCircle ? false : 'concentric');
    this.color = background ? bgColors[randint(0, bgColors.length - 1)] : colors[randint(0, colors.length - 1)];
    this.borderColor = background ? bgColors[randint(0, bgColors.length - 1)] : colors[randint(0, colors.length - 1)];
    this.opacity = 0.05;
    this.speed = (background ? randRange(speedMin, speedMax) / backgroundMlt : randRange(speedMin, speedMax)); // * (radMin / this.radius);
    this.speedAngle = Math.random() * 2 * Math.PI;
    this.speedx = Math.cos(this.speedAngle) * this.speed;
    this.speedy = Math.sin(this.speedAngle) * this.speed;
    var spacex = Math.abs((this.x - (this.speedx < 0 ? -1 : 1) * (canvas.width / 2 + this.radius)) / this.speedx),
        spacey = Math.abs((this.y - (this.speedy < 0 ? -1 : 1) * (canvas.height / 2 + this.radius)) / this.speedy);
    this.ttl = Math.min(spacex, spacey);
}

Circle.prototype.init = function() {
    Circle.call(this, this.background);
}

//support functions
//generate random int a<=x<=b
function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}
//generate random float
function randRange(a, b) {
    return Math.random() * (b - a) + a;
}
//generate random float more likely to be close to a
function hyperRange(a, b) {
    return Math.random() * Math.random() * Math.random() * (b - a) + a;
}

//rendering function
function drawCircle(ctx, circle) {
    var circleExp = 1;
    var radius = circle.background ? circle.radius *= circleExp : circle.radius /= circleExp;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, radius * circleExp, 0, 2 * Math.PI, false);
    ctx.lineWidth = Math.max(1, circleBorder * (radMin - circle.radius) / (radMin - radMax));
    ctx.strokeStyle = ['rgba(', circle.borderColor, ',', circle.opacity, ')'].join('');
    if (circle.filled == 'full') {
        ctx.fillStyle = ['rgba(', circle.borderColor, ',', circle.background ? circle.opacity * 0.8 : circle.opacity, ')'].join('');
        ctx.fill();
        ctx.lineWidth=0;
        ctx.strokeStyle = ['rgba(', circle.borderColor, ',', 0, ')'].join('');
    }
    ctx.stroke();
    if (circle.filled == 'concentric') {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, radius / 2, 0, 2 * Math.PI, false);
        ctx.lineWidth = Math.max(1, circleBorder * (radMin - circle.radius) / (radMin - radMax));
        ctx.strokeStyle = ['rgba(', circle.color, ',', circle.opacity, ')'].join('');
        ctx.stroke();
    }
    circle.x += circle.speedx;
    circle.y += circle.speedy;
    if (circle.opacity < (circle.background ? maxOpacity : 1)) circle.opacity += 0.01;
    circle.ttl--;
}

//rendering function
function draw() {
    var circleExp = 1;
    var circlePulse = false;

    if (circlePulse) {
        if (circleExp < 0.997 || circleExp > 1.003) circleExpSp *= -1;
        circleExp += circleExpSp;
    }
    var ctxfr = document.getElementById('canvas').getContext('2d');
    var ctxbg = document.getElementById('canvasbg').getContext('2d');

    ctxfr.globalCompositeOperation = 'destination-over';
    ctxfr.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    ctxbg.globalCompositeOperation = 'destination-over';
    ctxbg.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

    ctxfr.save();
    ctxfr.translate(canvas.width / 2, canvas.height / 2);
    ctxbg.save();
    ctxbg.translate(canvas.width / 2, canvas.height / 2);

    //function to render each single circle, its connections and to manage its out of boundaries replacement
    function renderPoints(ctx, arr) {
        for (var i = 0; i < arr.length; i++) {
            var circle = arr[i];
            //checking if out of boundaries
            if (circle.ttl<0) {}
            var xEscape = canvas.width / 2 + circle.radius,
                yEscape = canvas.height / 2 + circle.radius;
            if (circle.ttl < -20) arr[i].init(arr[i].background);
            //if (Math.abs(circle.y) > yEscape || Math.abs(circle.x) > xEscape) arr[i].init(arr[i].background);
            drawCircle(ctx, circle);
        }
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                var deltax = arr[i].x - arr[j].x;
                var deltay = arr[i].y - arr[j].y;
                var dist = Math.pow(Math.pow(deltax, 2) + Math.pow(deltay, 2), 0.5);
                //if the circles are overlapping, no laser connecting them
                if (dist <= arr[i].radius + arr[j].radius) continue;
                //otherwise we connect them only if the dist is < linkDist
                if (dist < linkDist) {
                    var xi = (arr[i].x < arr[j].x ? 1 : -1) * Math.abs(arr[i].radius * deltax / dist);
                    var yi = (arr[i].y < arr[j].y ? 1 : -1) * Math.abs(arr[i].radius * deltay / dist);
                    var xj = (arr[i].x < arr[j].x ? -1 : 1) * Math.abs(arr[j].radius * deltax / dist);
                    var yj = (arr[i].y < arr[j].y ? -1 : 1) * Math.abs(arr[j].radius * deltay / dist);
                    ctx.beginPath();
                    ctx.moveTo(arr[i].x + xi, arr[i].y + yi);
                    ctx.lineTo(arr[j].x + xj, arr[j].y + yj);
                    var samecolor = arr[i].color == arr[j].color;
                    ctx.strokeStyle = ["rgba(", arr[i].borderColor, ",", Math.min(arr[i].opacity, arr[j].opacity) * ((linkDist - dist) / linkDist), ")"].join("");
                    ctx.lineWidth = (arr[i].background ? lineBorder * backgroundMlt : lineBorder) * ((linkDist - dist) / linkDist); //*((linkDist-dist)/linkDist);
                    ctx.stroke();
                }
            }
        }
    }

    var startTime = Date.now();
    renderPoints(ctxfr, points);
    renderPoints(ctxbg, pointsBack);
    var deltaT = Date.now() - startTime;

    ctxfr.restore();
    ctxbg.restore();

    window.requestAnimationFrame(draw);
}

// Function to set up experience tabs
function setupExperienceTabs() {
    const companyButtons = document.querySelectorAll('.company-btn');

    const jobs = document.querySelectorAll('.job');

    companyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and jobs
            companyButtons.forEach(btn => btn.classList.remove('active'));
            jobs.forEach(job => job.classList.remove('active'));

            // Add active class to the clicked button
            button.classList.add('active');

            // Show the corresponding job details
            const company = button.getAttribute('data-company');
            document.getElementById(company).classList.add('active');
        });
    });
}

// Function to set up smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Function to hide/show navigation bar on scroll
function setupScrollNavigation() {
    let lastScroll = 0;
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 50) {
            // Scrolling down and past 50px: hide the navigation bar
            nav.style.top = '-80px';
        } else {
            // Scrolling up: show the navigation bar
            nav.style.top = '0';
        }

        // Add scrolled class when scrolled down
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// Function to set up theme toggle
function setupThemeToggle() {
    const toggleInput = document.querySelector('.toggle input');
    const htmlElement = document.documentElement;

    // Check if dark mode is already active
    const isDarkMode = htmlElement.classList.contains('dark-mode');
    toggleInput.checked = isDarkMode;

    toggleInput.addEventListener('change', () => {
        const isDark = toggleInput.checked;

        // Get toggle position for transition effect
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;

        const toggleElement = document.querySelector('.toggle');

        if (toggleElement) {
            const rect = toggleElement.getBoundingClientRect();
            x = rect.left + rect.width / 2;
            y = rect.top + rect.height / 2;
        }

        // Set transition origin point
        htmlElement.style.setProperty('--x', `${x}px`);
        htmlElement.style.setProperty('--y', `${y}px`);

        // Apply theme change with transition if supported
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                if (isDark) {
                    htmlElement.classList.remove('light-mode');
                    htmlElement.classList.add('dark-mode');
                } else {
                    htmlElement.classList.remove('dark-mode');
                    htmlElement.classList.add('light-mode');
                }
            });
        } else {
            // Fallback for browsers that don't support View Transitions API
            if (isDark) {
                htmlElement.classList.remove('light-mode');
                htmlElement.classList.add('dark-mode');
            } else {
                htmlElement.classList.remove('dark-mode');
                htmlElement.classList.add('light-mode');
            }
        }
    });
}

// Function to make theme toggle draggable
function setupDraggableThemeToggle() {
    const themeToggle = document.querySelector('.toggle');
    let isDragging = false;
    let offsetX, offsetY;

    // Mouse events for desktop
    themeToggle.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);

    // Touch events for mobile
    themeToggle.addEventListener('touchstart', startDragTouch);
    document.addEventListener('touchmove', dragTouch);
    document.addEventListener('touchend', endDrag);

    function startDrag(e) {
        // Only handle left mouse button and don't trigger on the checkbox itself
        if (e.button !== 0 || e.target.tagName === 'INPUT') return;

        isDragging = true;
        offsetX = e.clientX - themeToggle.getBoundingClientRect().left;
        offsetY = e.clientY - themeToggle.getBoundingClientRect().top;
        themeToggle.style.transition = 'none'; // Disable transitions while dragging
        e.preventDefault();
    }

    function startDragTouch(e) {
        // Don't trigger on the checkbox itself
        if (e.target.tagName === 'INPUT') return;

        isDragging = true;
        const touch = e.touches[0];
        offsetX = touch.clientX - themeToggle.getBoundingClientRect().left;
        offsetY = touch.clientY - themeToggle.getBoundingClientRect().top;
        themeToggle.style.transition = 'none'; // Disable transitions while dragging
        e.preventDefault();
    }

    function drag(e) {
        if (!isDragging) return;

        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        // Keep the button within the viewport
        const maxX = window.innerWidth - themeToggle.offsetWidth;
        const maxY = window.innerHeight - themeToggle.offsetHeight;

        const boundedX = Math.max(0, Math.min(x, maxX));
        const boundedY = Math.max(0, Math.min(y, maxY));

        themeToggle.style.right = 'auto';
        themeToggle.style.bottom = 'auto';
        themeToggle.style.left = boundedX + 'px';
        themeToggle.style.top = boundedY + 'px';

        e.preventDefault();
    }

    function dragTouch(e) {
        if (!isDragging) return;

        const touch = e.touches[0];
        const x = touch.clientX - offsetX;
        const y = touch.clientY - offsetY;

        // Keep the button within the viewport
        const maxX = window.innerWidth - themeToggle.offsetWidth;
        const maxY = window.innerHeight - themeToggle.offsetHeight;

        const boundedX = Math.max(0, Math.min(x, maxX));
        const boundedY = Math.max(0, Math.min(y, maxY));

        themeToggle.style.right = 'auto';
        themeToggle.style.bottom = 'auto';
        themeToggle.style.left = boundedX + 'px';
        themeToggle.style.top = boundedY + 'px';

        e.preventDefault();
    }

    function endDrag() {
        isDragging = false;
        themeToggle.style.transition = 'box-shadow 0.3s ease'; // Re-enable transitions
    }
}

// Animation for initial page load
document.addEventListener('DOMContentLoaded', function() {
    // First, animate the navbar items one by one
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('appear');
        }, 300 + (index * 150)); // Start at 300ms, then add 150ms for each item
    });

    // Calculate when navbar animation will finish
    const navbarAnimationDuration = 300 + (navItems.length * 150) + 500; // Add 500ms buffer

    // After navbar animation completes, animate the home section elements sequentially
    setTimeout(() => {
        const homeElements = document.querySelectorAll('#intro .fade-in');
        homeElements.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('appear');
            }, index * 200); // 200ms between each home element
        });
    }, navbarAnimationDuration);

    // Set up Intersection Observer for scroll animations with sequential appearance
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Get all elements that should fade in
                const elements = entry.target.querySelectorAll('.fade-in');

                // Animate them one by one with a delay between each
                elements.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('appear');
                    }, index * 150); // 150ms between each element
                });

                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    // Observe all sections except intro (which is animated after navbar)
    document.querySelectorAll('section:not(#intro)').forEach(section => {
        // Add fade-in class to all major elements in each section
        section.querySelectorAll('h1, h2, p, .recruiter-item, .skill-item, .project-card, .noteworthy-project-card, .contact-form, .company-list, .job-details, .noteworthy-projects-grid').forEach(element => {
            if (!element.classList.contains('fade-in')) {
                element.classList.add('fade-in');
            }
        });
        appearOnScroll.observe(section);
    });
});

// Toggle projects show/hide functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-projects');
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    let showingAll = false;

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            if (!showingAll) {
                // Show all projects
                hiddenProjects.forEach((project, index) => {
                    setTimeout(() => {
                        project.classList.add('show');
                    }, index * 100); // Stagger the animations
                });
                toggleButton.innerHTML = 'Show Less <i class="fas fa-arrow-up"></i>';
                toggleButton.classList.add('showing-all');
            } else {
                // Hide extra projects
                hiddenProjects.forEach(project => {
                    project.classList.remove('show');
                });
                toggleButton.innerHTML = 'Show More <i class="fas fa-arrow-down"></i>';
                toggleButton.classList.remove('showing-all');

                // Scroll back to the projects section if needed
                const projectsSection = document.getElementById('other-projects');
                if (projectsSection) {
                    const rect = projectsSection.getBoundingClientRect();
                    if (rect.top < 0) {
                        projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
            showingAll = !showingAll;
        });
    }
});

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
window.addEventListener('scroll', debounce(handleScroll, 100));
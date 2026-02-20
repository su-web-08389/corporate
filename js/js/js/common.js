function animateCount(element) {
    const target = parseInt(element.getAttribute('date-number'));
    let current = 0;
    const duration =1000;
    const startTime = performance.now();

    function update() {
        const now = performance.now();
        const elapsedTime = now - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        current = Math.floor(progress * target);
        element.textContent = current.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        } else{
                element.textContent = target.toLocaleString();
            }
        }
        
        requestAnimationFrame(update);
    }

    document.addEventListener('DOMContentLoaded',() => {
        const countElements = document.querySelectorAll('span[date-number]')
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    animateCount(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 1.0
        });

        countElements.forEach(element => {
            observer.observe(element);
        });
    });




    document.addEventListener('DOMContentLoaded', () => {
        const fadeInItems = document.querySelectorAll('.fade-up');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold:0.2
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('is-show')

                    observer.unobserve(entry.target);
                }
            });
        },observerOptions);

        fadeInItems.forEach(item => {
            observer.observe(item);
        });
    });
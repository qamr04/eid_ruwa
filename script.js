document.addEventListener('DOMContentLoaded', () => {
    // 1. Datum instellen voor Eid Mubarak (NU!)
    const eidDate = new Date().getTime() - 1000; // 1 seconde in het verleden

    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');
    const countdownMessage = document.getElementById('countdown-message');
    const countdownTimerDiv = document.getElementById('timer');

    function updateCountdown() {
        const currentTime = new Date().getTime();
        const distance = eidDate - currentTime;

        if (distance < 0) {
            clearInterval(countdownInterval);
            if (countdownMessage) {
                countdownMessage.innerHTML = 'Eid Mubarak! May your day be filled with blessings!';
                if (countdownTimerDiv) {
                    countdownTimerDiv.style.display = 'none';
                }
            }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysSpan) daysSpan.innerHTML = String(days).padStart(2, '0');
        if (hoursSpan) hoursSpan.innerHTML = String(hours).padStart(2, '0');
        if (minutesSpan) minutesSpan.innerHTML = String(minutes).padStart(2, '0');
        if (secondsSpan) secondsSpan.innerHTML = String(seconds).padStart(2, '0');
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // 2. Smooth Scrolling voor navigatielinks
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = document.querySelector('.main-header').offsetHeight;
                const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. Scroll-onthulling Animaties
    const animateOnScrollElements = document.querySelectorAll('.animate-slide-up-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });

    // 4. Initiële fade-in animatie voor header en hero-content + "I LOVE YOU SA3FOORA" text fade-in
    const header = document.querySelector('.main-header');
    const heroContent = document.querySelector('.hero-content');
    // Selecteer de 'love-you-text' (nu een gewone paragraaf)
    const loveYouText = document.querySelector('.love-you-text');

    if (header) header.classList.add('is-visible');
    if (heroContent) {
        heroContent.classList.add('is-visible');

        // Eenvoudige fade-in voor "I love you Sa3foora" tekst na een korte vertraging
        if (loveYouText) {
            setTimeout(() => {
                loveYouText.classList.add('is-visible');
            }, 500); // Vertraging voordat de tekst verschijnt
        }
    }

    // 5. "Wishes" functionaliteit (client-side only)
    const submitWishButton = document.getElementById('submitWish');
    const wishTextInput = document.getElementById('wishText');
    const wishOutputDiv = document.getElementById('wishOutput');

    if (submitWishButton && wishTextInput && wishOutputDiv) {
        submitWishButton.addEventListener('click', () => {
            const wishText = wishTextInput.value.trim();

            if (wishText) {
                const wishItem = document.createElement('div');
                wishItem.classList.add('wish-item');
                wishItem.textContent = wishText;
                wishOutputDiv.prepend(wishItem);
                wishTextInput.value = '';
            } else {
                alert('Please write a wish before submitting!');
            }
        });
    }

    // 6. Achtergrond media controle (afbeelding is nu primair) - Gebaseerd op jouw upload
    const backgroundVideo = document.querySelector('.background-video');
    const backgroundImage = document.querySelector('.background-image');

    if (backgroundImage) {
        backgroundImage.style.opacity = '1';
        backgroundImage.style.visibility = 'visible';
    }

    if (backgroundVideo) {
        backgroundVideo.oncanplaythrough = () => {
            if (backgroundImage) {
                backgroundImage.style.opacity = '0';
                backgroundImage.style.visibility = 'hidden';
            }
            backgroundVideo.style.opacity = '1';
            backgroundVideo.style.visibility = 'visible';
            backgroundVideo.play().catch(e => console.error("Video autoplay error:", e));
        };
        backgroundVideo.onerror = () => {
            console.warn("Video failed to load or play, sticking with image background.");
            if (backgroundImage) {
                backgroundImage.style.opacity = '1';
                backgroundImage.style.visibility = 'visible';
            }
        };
        backgroundVideo.load();
    }
});

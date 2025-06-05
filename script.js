/* ======================================= */
/* CSS Variables for Theming - Starry Night Base (from your upload) - 10% Smaller */
/* ======================================= */
:root {
    --primary-color: #FF6F61; /* Vibrant Coral Red (Pinkish) */
    --secondary-color: #6A0572; /* Deep Purple */
    --text-color-light: #FFFAE6; /* Near White (for text on dark elements) */
    --text-color-dark: #3A0000; /* Deep Burgundy (for text on light elements, if any) */
    --accent-color: #FFD700; /* Gold - Festive accent */

    /* Specific color for "Ruwa" and "I love you Sa3foora" */
    --ruwa-light-pink: #FFC0CB; /* Light Pink */

    /* Background and box colors - Adjusted for image background */
    --overlay-color: rgba(50, 0, 70, 0.55); /* Darker, purplish overlay over image background */
    --box-bg-color: rgba(255, 165, 0, 0.18); /* Transparent Orange-Gold for contentboxes */
    --alt-section-bg-color: rgba(255, 100, 100, 0.12); /* Very light transparent red for alternating sections */
    --countdown-box-bg: rgba(255, 165, 0, 0.3); /* Slightly more opaque orange-goud for countdown vakken */
    --wish-item-bg: rgba(255, 165, 0, 0.12); /* Transparent orange-goud for wensitems */

    /* Fonts */
    --font-heading: 'Great Vibes', cursive;
    --font-body: 'Open Sans', sans-serif;

    /* Shadows (Adjusted for more professional look) */
    --shadow-light: 0 5px 15px rgba(0, 0, 0, 0.3);
    --shadow-medium: 0 10px 25px rgba(0, 0, 0, 0.5);
    --shadow-heavy: 0 15px 40px rgba(0, 0, 0, 0.6);
    --text-shadow-light: 1px 1px 3px rgba(0, 0, 0, 0.7);
    --text-shadow-heavy: 2px 2px 8px rgba(0, 0, 0, 0.9);
}

/* ======================================= */
/* Algemene Resets & Basisstijlen */
/* ======================================= */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 90%; /* Basis voor 10% kleinere tekst */
}

body {
    font-family: var(--font-body);
    color: var(--text-color-light); /* Lichttekst op donkere achtergrond (afbeelding) */
    line-height: 1.6;
    overflow-x: hidden; /* Voorkomt horizontale scrollbalken */
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* ======================================= */
/* Achtergrond Media (Video/Afbeelding) - Gebaseerd op jouw upload */
/* ======================================= */
.background-media {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2; /* Ligt achter alles */
    overflow: hidden;
}

.background-video,
.background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
    opacity: 0; /* Standaard onzichtbaar, JS maakt het zichtbaar */
    visibility: hidden;
}

.background-image {
    opacity: 1; /* Afbeelding is standaard zichtbaar, tenzij video laadt */
    visibility: visible;
}

.background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--overlay-color); /* Donkerder, paars-achtig overlay over achtergrond */
    z-index: -1; /* Tussen media en inhoud */
}

/* ======================================= */
/* Hulpprogramma's (Flexbox, Fullscreen) */
/* ======================================= */
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.fullscreen {
    min-height: 100vh;
}

/* ======================================= */
/* Header en Navigatie (DE TOP BALK - Smooth & Afgerond) */
/* ======================================= */
.main-header {
    position: fixed;
    width: calc(100% - 36px); /* 10% kleiner: 40 * 0.9 */
    max-width: 1044px; /* 10% kleiner: 1160 * 0.9 */
    top: 18px; /* 10% kleiner: 20 * 0.9 */
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    background-color: var(--overlay-color);
    padding: 13.5px 27px; /* 10% kleiner: 15 * 0.9, 30 * 0.9 */
    border-radius: 45px; /* 10% kleiner: 50 * 0.9 */
    box-shadow: var(--shadow-medium);
    backdrop-filter: blur(10.8px); /* 10% kleiner: 12 * 0.9 */
    -webkit-backdrop-filter: blur(10.8px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    transition: all 0.3s ease-in-out;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.logo {
    font-family: var(--font-heading);
    font-size: 2.16em; /* 10% kleiner: 2.4 * 0.9 */
    color: var(--accent-color);
    text-shadow: var(--text-shadow-light);
    line-height: 1;
}

.nav-links {
    list-style: none;
    display: flex;
    margin-right: -9px; /* 10% kleiner: -10 * 0.9 */
}

.nav-links li {
    margin-left: 27px; /* 10% kleiner: 30 * 0.9 */
}

.nav-links a {
    color: var(--text-color-light);
    text-decoration: none;
    font-weight: 400;
    font-size: 0.945em; /* 10% kleiner: 1.05 * 0.9 */
    padding: 7.2px 9px; /* 10% kleiner: 8 * 0.9, 10 * 0.9 */
    border-radius: 18px; /* 10% kleiner: 20 * 0.9 */
    transition: all 0.3s ease;
}

.nav-links a:hover,
.nav-links a:focus {
    color: var(--primary-color);
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-0.9px); /* 10% kleiner: -1 * 0.9 */
}

/* ======================================= */
/* Hero Sectie (Home) */
/* ======================================= */
.hero-section {
    padding-top: 135px; /* 10% kleiner: 150 * 0.9 */
    text-align: center;
    min-height: calc(100vh - 135px); /* 10% kleiner: 150 * 0.9 */
    flex-grow: 1;
}

.hero-content {
    background-color: var(--box-bg-color);
    padding: 54px 72px; /* 10% kleiner: 60 * 0.9, 80 * 0.9 */
    border-radius: 18px; /* 10% kleiner: 20 * 0.9 */
    box-shadow: var(--shadow-heavy);
    backdrop-filter: blur(13.5px); /* 10% kleiner: 15 * 0.9 */
    -webkit-backdrop-filter: blur(13.5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-content h1 {
    font-family: var(--font-heading);
    font-size: 7.65em; /* 10% kleiner: 8.5 * 0.9 */
    color: var(--accent-color);
    margin-bottom: 9px; /* 10% kleiner: 10 * 0.9 */
    text-shadow: var(--text-shadow-heavy);
    line-height: 1;
    white-space: nowrap;
}

/* "I love you Sa3foora" text (now static) */
.love-you-text {
    margin-top: 31.5px; /* 10% kleiner: 35 * 0.9 */
    font-family: var(--font-heading);
    font-size: 4.95em; /* 10% kleiner: 5.5 * 0.9 */
    color: var(--ruwa-light-pink); /* Lichtroze */
    text-shadow: 1.8px 1.8px 6.3px rgba(0, 0, 0, 0.8); /* 10% kleiner */
    white-space: nowrap;
    opacity: 0;
    transform: translateY(18px); /* 10% kleiner: 20 * 0.9 */
    transition: opacity 1s ease-out, transform 1s ease-out;
}
.love-you-text.is-visible {
    opacity: 1;
    transform: translateY(0);
}


.hero-content .sub-text {
    font-size: 2.7em; /* 10% kleiner: 3 * 0.9 */
    color: var(--text-color-light);
    margin-bottom: 22.5px; /* 10% kleiner: 25 * 0.9 */
    font-weight: 700;
    letter-spacing: 0.45px; /* 10% kleiner: 0.5 * 0.9 */
}

.hero-content .highlight-name {
    font-family: var(--font-heading);
    font-size: 1.8em; /* 10% kleiner: 2 * 0.9 */
    color: var(--ruwa-light-pink); /* Ruwa now uses light pink */
    text-shadow: var(--text-shadow-light);
}

.separator {
    width: 90px; /* 10% kleiner: 100 * 0.9 */
    height: 3.6px; /* 10% kleiner: 4 * 0.9 */
    background-color: var(--primary-color);
    margin: 27px auto 36px auto; /* 10% kleiner: 30 * 0.9, 40 * 0.9 */
    border-radius: 4.5px; /* 10% kleiner: 5 * 0.9 */
}

.greeting-message {
    font-size: 1.71em; /* 10% kleiner: 1.9 * 0.9 */
    max-width: 630px; /* 10% kleiner: 700 * 0.9 */
    margin: 0 auto 36px auto; /* 10% kleiner: 40 * 0.9 */
    font-weight: 300;
    color: var(--text-color-light);
}

.cta-button {
    display: inline-block;
    background-color: var(--primary-color);
    color: var(--text-color-light);
    padding: 16.2px 31.5px; /* 10% kleiner: 18 * 0.9, 35 * 0.9 */
    border-radius: 45px; /* 10% kleiner: 50 * 0.9 */
    text-decoration: none;
    font-size: 1.17em; /* 10% kleiner: 1.3 * 0.9 */
    font-weight: 700;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    border: none;
    cursor: pointer;
}

.cta-button:hover,
.cta-button:focus {
    background-color: #E65A50; /* Uit jouw geüploade CSS */
    transform: translateY(-3.6px); /* 10% kleiner: -4 * 0.9 */
    box-shadow: 0 10.8px 22.5px rgba(0, 0, 0, 0.5); /* 10% kleiner */
}

/* ======================================= */
/* Algemene Sectie Stijlen */
/* ======================================= */
main {
    flex-grow: 1;
}

.section-container {
    padding: 90px 18px; /* 10% kleiner: 100 * 0.9, 20 * 0.9 */
    text-align: center;
    position: relative;
    z-index: 1;
    min-height: 54vh; /* 10% kleiner: 60 * 0.9 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.section-container:nth-of-type(even) {
    background-color: var(--alt-section-bg-color);
}

.section-content {
    background-color: var(--box-bg-color);
    padding: 45px 54px; /* 10% kleiner: 50 * 0.9, 60 * 0.9 */
    border-radius: 13.5px; /* 10% kleiner: 15 * 0.9 */
    box-shadow: var(--shadow-medium);
    max-width: 855px; /* 10% kleiner: 950 * 0.9 */
    width: 100%;
    backdrop-filter: blur(9px); /* 10% kleiner: 10 * 0.9 */
    -webkit-backdrop-filter: blur(9px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.section-content h2 {
    font-family: var(--font-heading);
    font-size: 3.78em; /* 10% kleiner: 4.2 * 0.9 */
    margin-bottom: 31.5px; /* 10% kleiner: 35 * 0.9 */
    color: var(--accent-color);
    text-shadow: var(--text-shadow-light);
}

/* ======================================= */
/* Countdown Timer Stijlen (verborgen door JS) */
/* = ======================================= */
.countdown-timer {
    display: flex;
    justify-content: center;
    gap: 36px; /* 10% kleiner: 40 * 0.9 */
    margin-top: 45px; /* 10% kleiner: 50 * 0.9 */
    margin-bottom: 36px; /* 10% kleiner: 40 * 0.9 */
    flex-wrap: wrap;
}

.time-box {
    background-color: var(--countdown-box-bg);
    padding: 27px 36px; /* 10% kleiner: 30 * 0.9, 40 * 0.9 */
    border-radius: 10.8px; /* 10% kleiner: 12 * 0.9 */
    box-shadow: var(--shadow-light);
    font-size: 2.7em; /* 10% kleiner: 3 * 0.9 */
    font-weight: 700;
    color: var(--accent-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 126px; /* 10% kleiner: 140 * 0.9 */
    text-shadow: var(--text-shadow-light);
}

.time-box small {
    font-size: 0.36em; /* 10% kleiner: 0.4 * 0.9 */
    font-weight: 400;
    margin-top: 10.8px; /* 10% kleiner: 12 * 0.9 */
    color: var(--text-color-light);
    opacity: 0.8;
}

.message-after-countdown {
    font-size: 1.8em; /* 10% kleiner: 2 * 0.9 */
    color: var(--text-color-light);
    font-weight: 600;
    margin-top: 22.5px; /* 10% kleiner: 25 * 0.9 */
    min-height: 27px; /* 10% kleiner: 30 * 0.9 */
}

/* ======================================= */
/* Bericht Sectie Specifiek */
/* ======================================= */
.long-message {
    font-size: 1.44em; /* 10% kleiner: 1.6 * 0.9 */
    margin-bottom: 31.5px; /* 10% kleiner: 35 * 0.9 */
    line-height: 1.8;
    max-width: 720px; /* 10% kleiner: 800 * 0.9 */
    margin-left: auto;
    margin-right: auto;
    color: var(--text-color-light);
}

.signature {
    font-family: var(--font-heading);
    font-size: 2.52em; /* 10% kleiner: 2.8 * 0.9 */
    margin-top: 45px; /* 10% kleiner: 50 * 0.9 */
    color: var(--primary-color);
}

.signature-name {
    font-size: 1.62em; /* 10% kleiner: 1.8 * 0.9 */
    font-weight: 600;
    margin-top: 13.5px; /* 10% kleiner: 15 * 0.9 */
    color: var(--accent-color);
}

/* ======================================= */
/* Wensen Sectie */
/* ======================================= */
.wish-input-group {
    display: flex;
    flex-direction: column;
    gap: 18px; /* 10% kleiner: 20 * 0.9 */
    margin-top: 36px; /* 10% kleiner: 40 * 0.9 */
    max-width: 630px; /* 10% kleiner: 700 * 0.9 */
    margin-left: auto;
    margin-right: auto;
}

#wishText {
    width: 100%;
    padding: 16.2px; /* 10% kleiner: 18 * 0.9 */
    border-radius: 9px; /* 10% kleiner: 10 * 0.9 */
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(0, 0, 0, 0.4);
    color: var(--text-color-light);
    font-family: var(--font-body);
    font-size: 1.08em; /* 10% kleiner: 1.2 * 0.9 */
    resize: vertical;
}

#wishText::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

#submitWish {
    align-self: flex-end;
}

.wish-output {
    margin-top: 45px; /* 10% kleiner: 50 * 0.9 */
    border-top: 1px dashed rgba(255, 255, 255, 0.2);
    padding-top: 22.5px; /* 10% kleiner: 25 * 0.9 */
    text-align: left;
    max-height: 315px; /* 10% kleiner: 350 * 0.9 */
    overflow-y: auto;
    padding-right: 13.5px; /* 10% kleiner: 15 * 0.9 */
}

.wish-item {
    background-color: var(--wish-item-bg);
    padding: 16.2px; /* 10% kleiner: 18 * 0.9 */
    border-radius: 9px; /* 10% kleiner: 10 * 0.9 */
    margin-bottom: 16.2px; /* 10% kleiner: 18 * 0.9 */
    box-shadow: 0 2.7px 9px rgba(0, 0, 0, 0.3); /* 10% kleiner */
    border-left: 4.5px solid var(--primary-color); /* 10% kleiner: 5 * 0.9 */
    font-size: 1.17em; /* 10% kleiner: 1.3 * 0.9 */
    word-wrap: break-word;
    color: var(--text-color-light);
}

.note {
    font-size: 0.99em; /* 10% kleiner: 1.1 * 0.9 */
    color: rgba(255, 255, 255, 0.6);
    margin-top: 22.5px; /* 10% kleiner: 25 * 0.9 */
}

/* ======================================= */
/* Footer */
/* ======================================= */
.main-footer {
    background-color: var(--overlay-color);
    color: var(--text-color-light);
    text-align: center;
    padding: 36px 18px; /* 10% kleiner: 40 * 0.9, 20 * 0.9 */
    font-size: 0.945em; /* 10% kleiner: 1.05 * 0.9 */
    margin-top: auto;
    backdrop-filter: blur(7.2px); /* 10% kleiner: 8 * 0.9 */
    -webkit-backdrop-filter: blur(7.2px);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.main-footer p {
    margin-bottom: 18px; /* 10% kleiner: 20 * 0.9 */
}

.social-links a {
    color: var(--text-color-light);
    font-size: 1.8em; /* 10% kleiner: 2 * 0.9 */
    margin: 0 10.8px; /* 10% kleiner: 12 * 0.9 */
    transition: color 0.3s ease, transform 0.3s ease;
}

.social-links a:hover {
    color: var(--primary-color);
    transform: translateY(-1.8px); /* 10% kleiner: -2 * 0.9 */
}

/* ======================================= */
/* Animation Classes (for JS) */
/* ======================================= */
.animate-fade-in {
    opacity: 0;
    transform: translateY(-18px); /* 10% kleiner */
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.animate-fade-in.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.animate-slide-up {
    opacity: 0;
    transform: translateY(45px); /* 10% kleiner */
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.animate-slide-up.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.animate-slide-up-on-scroll {
    opacity: 0;
    transform: translateY(72px); /* 10% kleiner */
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.animate-slide-up-on-scroll.is-visible {
    opacity: 1;
    transform: translateY(0);
}

/* ======================================= */
/* Media Queries for Responsiveness (Aangepast met 10% schaal) */
/* ======================================= */
@media (max-width: 1000px) {
    .main-header {
        max-width: calc(100% - 54px); /* 10% kleiner: 60 * 0.9 */
        padding: 10.8px 22.5px; /* 10% kleiner: 12 * 0.9, 25 * 0.9 */
    }
    .hero-content h1 {
        font-size: 5.85em; /* 10% kleiner: 6.5 * 0.9 */
    }
    .love-you-text {
        font-size: 4.05em; /* 10% kleiner: 4.5 * 0.9 */
    }
}

@media (max-width: 768px) {
    .main-header {
        width: calc(100% - 27px); /* 10% kleiner: 30 * 0.9 */
        left: 50%;
        transform: translateX(-50%);
        border-radius: 27px; /* 10% kleiner: 30 * 0.9 */
        padding: 10.8px 18px; /* 10% kleiner: 12 * 0.9, 20 * 0.9 */
    }
    .navbar {
        flex-direction: column;
        align-items: center;
    }
    .nav-links {
        margin-top: 9px; /* 10% kleiner: 10 * 0.9 */
        flex-wrap: wrap;
        justify-content: center;
        margin-right: 0;
    }
    .nav-links li {
        margin: 4.5px 9px; /* 10% kleiner: 5 * 0.9, 10 * 0.9 */
    }
    .hero-content {
        padding: 36px 45px; /* 10% kleiner: 40 * 0.9, 50 * 0.9 */
    }
    .hero-content h1 {
        font-size: 4.05em; /* 10% kleiner: 4.5 * 0.9 */
    }
    .love-you-text {
        font-size: 3.15em; /* 10% kleiner: 3.5 * 0.9 */
    }
    .hero-content .sub-text {
        font-size: 1.98em; /* 10% kleiner: 2.2 * 0.9 */
    }
    .hero-content .highlight-name {
        font-size: 1.44em; /* 10% kleiner: 1.6 * 0.9 */
    }
    .greeting-message {
        font-size: 1.35em; /* 10% kleiner: 1.5 * 0.9 */
    }
    .section-content {
        padding: 36px 36px; /* 10% kleiner: 40 * 0.9 */
    }
    .section-content h2 {
        font-size: 3.15em; /* 10% kleiner: 3.5 * 0.9 */
    }
    .countdown-timer {
        gap: 22.5px; /* 10% kleiner: 25 * 0.9 */
    }
    .time-box {
        padding: 18px 27px; /* 10% kleiner: 20 * 0.9, 30 * 0.9 */
        font-size: 2.25em; /* 10% kleiner: 2.5 * 0.9 */
        min-width: 99px; /* 10% kleiner: 110 * 0.9 */
    }
}

@media (max-width: 480px) {
    .main-header {
        padding: 9px 13.5px; /* 10% kleiner */
        top: 9px; /* 10% kleiner */
    }
    .logo {
        font-size: 1.8em; /* 10% kleiner */
    }
    .nav-links {
        font-size: 0.81em; /* 10% kleiner */
    }
    .nav-links li {
        margin: 2.7px 7.2px; /* 10% kleiner */
    }
    .hero-content {
        padding: 27px 22.5px; /* 10% kleiner */
    }
    .hero-content h1 {
        font-size: 2.88em; /* 10% kleiner */
    }
    .love-you-text {
        font-size: 2.25em; /* 10% kleiner */
    }
    .hero-content .sub-text {
        font-size: 1.62em; /* 10% kleiner */
    }
    .hero-content .highlight-name {
        font-size: 1.26em; /* 10% kleiner */
    }
    .greeting-message {
        font-size: 1.08em; /* 10% kleiner */
    }
    .cta-button {
        padding: 12.6px 25.2px; /* 10% kleiner */
        font-size: 0.99em; /* 10% kleiner */
    }
    .section-container {
        padding: 54px 13.5px; /* 10% kleiner */
    }
    .section-content {
        padding: 27px 22.5px; /* 10% kleiner */
    }
    .section-content h2 {
        font-size: 2.52em; /* 10% kleiner */
    }
    .countdown-timer {
        gap: 13.5px; /* 10% kleiner */
    }
    .time-box {
        padding: 13.5px 18px; /* 10% kleiner */
        font-size: 1.8em; /* 10% kleiner */
        min-width: 81px; /* 10% kleiner */
    }
    .long-message {
        font-size: 1.08em; /* 10% kleiner */
    }
    .signature {
        font-size: 1.8em; /* 10% kleiner */
    }
    .signature-name {
        font-size: 1.35em; /* 10% kleiner */
    }
    .wish-input-group {
        gap: 9px; /* 10% kleiner */
    }
    #wishText {
        padding: 10.8px; /* 10% kleiner */
        font-size: 0.9em; /* 10% kleiner */
    }
    .wish-item {
        padding: 13.5px; /* 10% kleiner */
        font-size: 0.99em; /* 10% kleiner */
    }
    .note {
        font-size: 0.81em; /* 10% kleiner */
    }
    .main-footer {
        padding: 27px 13.5px; /* 10% kleiner */
        font-size: 0.855em; /* 10% kleiner */
    }
    .social-links a {
        font-size: 1.44em; /* 10% kleiner */
    }
}

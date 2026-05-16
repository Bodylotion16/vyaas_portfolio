// 1. Typewriter Effect voor je tagline
// Gebaseerd op de tekst in je index.html
const taglineText = "20 jaar, gedreven door de precisie van datacenters en de passie van muziek. Vanuit Paramaribo verbind ik complexe netwerken met creatievere ritmes, altijd op zoek naar groei.";
let index = 0;

function typeWriter() {
    const element = document.getElementById("animate-tagline");
    if (element && index < taglineText.length) {
        // We vullen het element letter voor letter
        element.innerHTML += taglineText.charAt(index);
        index++;
        setTimeout(typeWriter, 40); // Snelheid van het typen
    }
}

// 2. Live Klok voor Paramaribo
function updateTime() {
    const timeElement = document.getElementById('live-time');
    if (timeElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
        timeElement.textContent = "Lokale tijd: " + timeString;
    }
}

// 3. Start acties zodra de pagina geladen is
window.onload = () => {
    // Maak eerst de tagline leeg in de HTML voor het effect
    const tagline = document.getElementById("animate-tagline");
    if (tagline) tagline.innerHTML = ""; 
    
    typeWriter();
    setInterval(updateTime, 1000);
    updateTime();
};
function updateTime() {
    const timeElement = document.getElementById('live-time');
    if (timeElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('nl-NL', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        timeElement.textContent = timeString;
    }
}
// js/script.js

// Jaartal in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll animatie
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
});
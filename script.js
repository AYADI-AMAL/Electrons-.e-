// script.js - Chatbot + Nav Toggle + Interactive Content

(function() {
    'use strict';

    // ================================================================
    //  MOBILE NAV TOGGLE
    // ================================================================
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });
    }

    // ================================================================
    //  CHATBOT FUNCTIONALITY
    // ================================================================
    const chatWindow = document.getElementById('chatWindow');
    const chatToggle = document.getElementById('chatToggleBtn');
    const closeBtn = document.getElementById('closeChatBtn');
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendChatBtn');
    const messages = document.getElementById('chatMessages');

    // --- Vérifier que tous les éléments existent ---
    if (!chatWindow || !chatToggle || !closeBtn || !chatInput || !sendBtn || !messages) {
        console.warn('Chatbot elements not found. Check your HTML IDs.');
        return; // Sortir si les éléments manquent
    }

    // --- Réponses du bot ---
    function botReply(userMsg) {
        const lower = userMsg.toLowerCase();
        
        if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('bonjour')) {
            return 'Hello! 👋 How can I help you today?';
        } 
        else if (lower.includes('course') || lower.includes('learn') || lower.includes('study') || lower.includes('formation')) {
            return 'We offer Embedded Systems and Full‑Stack Development courses, plus hands-on Workshops. Check the nav above!';
        } 
        else if (lower.includes('workshop') || lower.includes('project')) {
            return 'The Workshops page has 12 hands-on projects — 6 Embedded, 6 Full-Stack — from beginner to advanced.';
        }
        else if (lower.includes('embedded') || lower.includes('micro') || lower.includes('stm32') || lower.includes('système embarqué')) {
            return 'Embedded Systems covers C, STM32, RTOS, sensors, and IoT. Ask for details!';
        } 
        else if (lower.includes('full') || lower.includes('stack') || lower.includes('frontend') || lower.includes('backend')) {
            return 'Full‑Stack: HTML, CSS, JS, Node.js, React, and databases. Stay tuned!';
        } 
        else if (lower.includes('thanks') || lower.includes('thank') || lower.includes('merci')) {
            return 'You\'re welcome! 😊 Anything else?';
        } 
        else if (lower.includes('bye') || lower.includes('goodbye') || lower.includes('au revoir')) {
            return 'Goodbye! See you soon at Electrons .e- Academy.';
        } 
        else if (lower.includes('price') || lower.includes('cost') || lower.includes('prix') || lower.includes('tarif')) {
            return 'Please contact us directly for pricing information. We offer flexible options!';
        }
        else if (lower.includes('who') || lower.includes('founder') || lower.includes('créateur') || lower.includes('ayadi')) {
            return 'Electrons .e- Academy was founded by Ing. Ayadi Amal, an expert in embedded systems.';
        }
        else {
            return 'Great question! I\'m still learning. Please contact our team for more info.';
        }
    }

    // --- Ajouter un message dans le chat ---
    function addMessage(text, sender) {
        const div = document.createElement('div');
        div.className = 'msg ' + sender;
        div.textContent = text;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    // --- Envoyer un message ---
    function handleSend() {
        const raw = chatInput.value.trim();
        if (!raw) return;
        
        addMessage(raw, 'user');
        chatInput.value = '';

        // Simuler un délai de réponse du bot
        setTimeout(() => {
            const reply = botReply(raw);
            addMessage(reply, 'bot');
        }, 300);
    }

    // --- Événements ---
    sendBtn.addEventListener('click', handleSend);
    
    chatInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSend();
        }
    });

    // --- Ouvrir/Fermer le chat ---
    chatToggle.addEventListener('click', function() {
        chatWindow.classList.toggle('open');
    });

    closeBtn.addEventListener('click', function() {
        chatWindow.classList.remove('open');
    });

    // --- Message de bienvenue supplémentaire ---
    setTimeout(function() {
        if (messages.children.length === 1) {
            const extra = document.createElement('div');
            extra.className = 'msg bot';
            extra.textContent = '💡 Try asking: "Tell me about embedded" or "courses"';
            messages.appendChild(extra);
        }
    }, 800);

    console.log('✅ Chatbot initialized successfully!');

})();

document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
    initThemeSystem();
    initLightbox();
    initRelaySimulator();
    initGlobalSearchShortcut();
});

/* 1. SISTEMA DE ACORDEONES */
function initAccordion() {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel) {
                if (panel.style.display === 'block') {
                    panel.style.display = 'none';
                } else {
                    panel.style.display = 'block';
                }
            }
        });
    });
}

function openSection(id) {
    const targetPanel = document.getElementById(id);
    if (targetPanel) {
        targetPanel.style.display = 'block';
        const accHeader = targetPanel.previousElementSibling;
        if (accHeader && accHeader.classList.contains('accordion')) {
            accHeader.classList.add('active');
        }
        targetPanel.scrollIntoView({ behavior: 'smooth' });
    }
}

/* 2. SISTEMA DE TEMAS (DARK/LIGHT MODE) */
function initThemeSystem() {
    const savedTheme = localStorage.getItem('tracklink-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const nav = document.querySelector('header nav');
    if (nav && !document.getElementById('theme-toggle-btn')) {
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'theme-toggle-btn';
        toggleBtn.className = 'theme-toggle-btn';
        toggleBtn.innerHTML = savedTheme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
        toggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('tracklink-theme', newTheme);
            toggleBtn.innerHTML = newTheme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
        });
        nav.appendChild(toggleBtn);
    }
}

/* 3. VISOR DE IMÁGENES LIGHTBOX CON ZOOM */
function initLightbox() {
    let lightbox = document.getElementById('lightbox-modal');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox-modal';
        lightbox.className = 'lightbox-modal';
        lightbox.innerHTML = '<img id="lightbox-img" src="" alt="Zoom">';
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }

    const images = document.querySelectorAll('.panel img, .text-block img');
    images.forEach(img => {
        if (!img.classList.contains('warning-icon')) {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                const lbImg = document.getElementById('lightbox-img');
                lbImg.src = img.src;
                lightbox.classList.add('active');
            });
        }
    });
}

/* 4. SIMULADOR INTERACTIVO DE RELÉ DE 5 PINES Y CORTE DE IGNICIÓN */
function initRelaySimulator() {
    const simContainer = document.getElementById('relay-simulator-mount');
    if (!simContainer) return;

    simContainer.innerHTML = `
        <div class="simulator-box">
            <h3 style="margin-top:0; color:var(--primary-color);">⚡ Simulador Interactivo de Corte de Ignición (Relé de 5 Pines)</h3>
            <p>Seleccione la posición de la llave de encendido y envíe comandos desde el GPS para observar el estado del motor y del circuito en tiempo real:</p>

            <div class="simulator-controls">
                <div>
                    <strong>Llave de Encendido:</strong><br>
                    <button class="sim-btn active" id="sim-key-off" onclick="setSimKey('OFF')">🔑 Switch OFF (0V)</button>
                    <button class="sim-btn" id="sim-key-ign" onclick="setSimKey('IGN')">⚡ Switch IGN (+12V)</button>
                </div>
                <div style="margin-left: auto;">
                    <strong>Comando GPS:</strong><br>
                    <button class="sim-btn active" id="sim-gps-norm" onclick="setSimGps('NORMAL')">🟢 Normal (Sin Corte)</button>
                    <button class="sim-btn" id="sim-gps-cut" onclick="setSimGps('CUT')">🔴 Comando Bloqueo Motor</button>
                </div>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin-top:20px; background:var(--bg-card); padding:16px; border-radius:8px; border:1px solid var(--border-color);">
                <div><strong>Pin 30 (Entrada):</strong> <span id="sim-p30">0V</span></div>
                <div><strong>Pin 87a (Salida NC):</strong> <span id="sim-p87a">0V</span></div>
                <div><strong>Bobina (85/86):</strong> <span id="sim-bobina">Desactivada</span></div>
                <div><strong>Estado Relé:</strong> <span id="sim-relay-status" class="relay-status-badge off">Reposo (NC cerrado)</span></div>
                <div style="grid-column: 1 / -1; font-size:1.1rem; font-weight:bold; color:var(--text-primary); text-align:center; padding-top:10px; border-top:1px solid var(--border-color);">
                    Estado del Motor: <span id="sim-engine-status" style="color:#ef4444;">🔴 APAGADO</span>
                </div>
            </div>
        </div>
    `;

    window.simState = { key: 'OFF', gps: 'NORMAL' };
    updateSimulatorUI();
}

window.setSimKey = function(keyPos) {
    window.simState.key = keyPos;
    document.getElementById('sim-key-off').classList.toggle('active', keyPos === 'OFF');
    document.getElementById('sim-key-ign').classList.toggle('active', keyPos === 'IGN');
    updateSimulatorUI();
};

window.setSimGps = function(gpsCmd) {
    window.simState.gps = gpsCmd;
    document.getElementById('sim-gps-norm').classList.toggle('active', gpsCmd === 'NORMAL');
    document.getElementById('sim-gps-cut').classList.toggle('active', gpsCmd === 'CUT');
    updateSimulatorUI();
};

function updateSimulatorUI() {
    const p30 = document.getElementById('sim-p30');
    const p87a = document.getElementById('sim-p87a');
    const bobina = document.getElementById('sim-bobina');
    const relayStatus = document.getElementById('sim-relay-status');
    const engineStatus = document.getElementById('sim-engine-status');

    if (!p30) return;

    const isIgn = window.simState.key === 'IGN';
    const isCut = window.simState.gps === 'CUT';

    if (isIgn) {
        p30.textContent = '+12.4V (Llavín IGN)';
        p30.style.color = '#10b981';
    } else {
        p30.textContent = '0V (Switch Apagado)';
        p30.style.color = 'var(--text-secondary)';
    }

    if (isCut) {
        bobina.textContent = '⚡ Energizada (GPS Pulso -)';
        bobina.style.color = '#ef4444';
        relayStatus.textContent = 'ACTIVADO (Relé Abierto)';
        relayStatus.className = 'relay-status-badge off';
        p87a.textContent = '0V (Circuito Abierto)';
        p87a.style.color = '#ef4444';
        engineStatus.textContent = '🔴 MOTOR BLOQUEADO / APAGADO';
        engineStatus.style.color = '#ef4444';
    } else {
        bobina.textContent = 'Desactivada (Tierra abierta)';
        bobina.style.color = 'var(--text-secondary)';
        relayStatus.textContent = 'Reposo (Contacto NC Cerrado)';
        relayStatus.className = 'relay-status-badge on';

        if (isIgn) {
            p87a.textContent = '+12.4V (Hacia Ignición)';
            p87a.style.color = '#10b981';
            engineStatus.textContent = '🟢 MOTOR ENCENDIDO / OPERATIVO';
            engineStatus.style.color = '#10b981';
        } else {
            p87a.textContent = '0V';
            p87a.style.color = 'var(--text-secondary)';
            engineStatus.textContent = '⚪ MOTOR APAGADO (Esperando Ignición)';
            engineStatus.style.color = 'var(--text-secondary)';
        }
    }
}

/* 5. ATAJO GLOBAL CTRL+K PARA BUSCADOR */
function initGlobalSearchShortcut() {
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            const searchInput = document.getElementById('module-search');
            if (searchInput) {
                e.preventDefault();
                searchInput.focus();
                searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
}

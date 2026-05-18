(function () {
  'use strict';

  // ── SEARCH INDEX ─────────────────────────────────────────────
  var INDEX = [
    // Pages
    { title: 'Accueil',                       desc: 'Votre tableau de bord quotidien et aperçu spirituel',     cat: 'Pages',      url: 'index.html',                   emoji: '🏠' },
    { title: 'Mon Parcours',                  desc: 'Suivez vos étapes et débloquez des dons divins',          cat: 'Pages',      url: 'journey.html',                 emoji: '✨' },
    { title: 'Mon Journal',                   desc: 'Écrivez vos réflexions et entrées de gratitude',          cat: 'Pages',      url: 'journal.html',                 emoji: '📖' },
    { title: 'Cercle d\'Abondance',          desc: 'Prières quotidiennes et connexion communautaire',         cat: 'Pages',      url: 'community.html',               emoji: '👥' },
    { title: 'Script Divin',                  desc: 'Votre script divin personnalisé et vos déclarations',     cat: 'Pages',      url: 'divine-script.html',           emoji: '📜' },
    { title: 'Assistance',                    desc: 'Obtenez de l\'aide et contactez l\'équipe',             cat: 'Pages',      url: 'support.html',                 emoji: '💬' },

    // Today's Practice
    { title: 'Focus Quotidien',               desc: 'Votre focus spirituel quotidien et intention',            cat: "Pratique du Jour", url: 'player-daily-focus.html',    emoji: '🎯' },
    { title: 'Vérité Divine',                 desc: 'Écriture quotidienne et méditation de vérité divine',    cat: "Pratique du Jour", url: 'player-divine-truth.html',   emoji: '✝️' },
    { title: "Sagesse de Salomon",            desc: 'Sagesse quotidienne du livre des Proverbes',              cat: "Pratique du Jour", url: 'player-solomons-wisdom.html',emoji: '👑' },
    { title: 'Décret Quotidien',              desc: 'Prononcez des décrets divins sur votre vie aujourd\'hui',cat: "Pratique du Jour", url: 'player-daily-decree.html',   emoji: '📜' },

    // My Products
    { title: 'Découvrez Votre Ange Gardien', desc: 'Découvrez quel ange veille sur vous et votre chemin',      cat: 'Mes Produits', url: 'https://quizangel.vercel.app/', emoji: '👼', external: true },
    { title: 'Prières Puissantes à l\'Archange Michel', desc: 'Connectez-vous à la protection divine par des prières puissantes', cat: 'Mes Produits', url: 'player.html', emoji: '⚔️' },
    { title: 'Le Chant Sacré de l\'Archange Michel', desc: 'Voyage transformateur vers la protection et la purification divines', cat: 'Mes Produits', url: 'player-sacred-chant.html', emoji: '🎵' },
    { title: 'Les 7 Fréquences de l\'Accélération Divine', desc: 'Activez les sept fréquences sacrées de votre voie divine', cat: 'Mes Produits', url: 'player-7frequencies.html', emoji: '🔮' },
    { title: "Les Secrets Cachés de la Prospérité du Roi Salomon", desc: 'Déverrouillez la sagesse ancienne et les principes sacrés de la richesse', cat: 'Mes Produits', url: 'player-solomon.html', emoji: '💎' },
    { title: 'Défi de Manifestation de 21 Jours',desc: 'Transformez votre vie en 21 jours par une intention divine concentrée', cat: 'Mes Produits', url: 'player-21-days.html', emoji: '🌟' },

    // Expand Your Journey
    { title: 'Nombres Puissants — Fréquence Divine', desc: 'Explorez la géométrie sacrée des nombres et les fréquences divines', cat: 'Élargissez Votre Parcours', url: 'player-powerful-numbers.html', emoji: '🔢' },
    { title: 'Académie du Tableau de Vision', desc: 'Créez des tableaux de vision qui accélèrent votre manifestation', cat: 'Élargissez Votre Parcours', url: 'player-vision-board.html', emoji: '🖼️' },
    { title: 'Journal des Rêves',             desc: 'Enregistrez et décodez les messages dans vos rêves',       cat: 'Élargissez Votre Parcours', url: 'player-dream-journal.html', emoji: '🌙' },
    { title: 'Secret de Puissance',           desc: 'Déverrouillez les secrets cachés du pouvoir spirituel',    cat: 'Élargissez Votre Parcours', url: 'player-secret-of-power.html', emoji: '⚡' },
    { title: 'Réinitialisation de l\'État d\'Esprit', desc: 'Brisez les croyances limitantes et reprogrammez votre état d\'esprit d\'abondance', cat: 'Élargissez Votre Parcours', url: 'player-mindset-reset.html', emoji: '🧠' },
    { title: 'Murmure de Foi',                desc: 'Approfondissez votre connexion par le murmure de foi',     cat: 'Élargissez Votre Parcours', url: 'player-whisper-faith.html', emoji: '🕊️' },
    { title: 'L\'Ère de l\'Abondance',      desc: 'L\'expérience complète de l\'Ère de l\'Abondance',     cat: 'Élargissez Votre Parcours', url: 'player-age-of-abundance.html', emoji: '✨' },

    // Journey Gifts
    { title: 'Le Rouleau d\'Or',             desc: 'Don étape Jour 3 — rouleau sacré de sagesse',             cat: 'Dons du Parcours', url: 'gift-golden-scroll.html',   emoji: '📜' },
    { title: 'Carte de la Richesse de Salomon', desc: 'Don étape Jour 7 — carte de richesse du Roi Salomon', cat: 'Dons du Parcours', url: 'gift-solomon-wealth-map.html', emoji: '🗺️' },
    { title: 'La Clé Cachée du 444',          desc: 'Don étape Jour 15 — la clé angélique de l\'abondance', cat: 'Dons du Parcours', url: 'gift-hidden-key-444.html',  emoji: '🔑' },
    { title: 'Le Nouveau Nom',                desc: 'Don étape Jour 21 — recevez votre nom divin',            cat: 'Dons du Parcours', url: 'gift-new-name.html',        emoji: '✨' },
    { title: 'La Mission Sacrée',             desc: 'Don étape Jour 40 — votre mission divine révélée',       cat: 'Dons du Parcours', url: 'gift-sacred-mission.html',  emoji: '🎯' },
  ];

  // ── CSS ──────────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = `
    #_srch_overlay {
      display: none; position: fixed; inset: 0; z-index: 10000;
      background: rgba(0,0,0,0.82); backdrop-filter: blur(6px);
      flex-direction: column; align-items: stretch;
      padding: env(safe-area-inset-top, 0) 0 0;
    }
    #_srch_overlay.open { display: flex; }

    #_srch_bar {
      display: flex; align-items: center; gap: 10px;
      padding: 14px 16px;
      background: #0e0e12;
      border-bottom: 1px solid rgba(201,168,76,0.15);
    }
    #_srch_input {
      flex: 1; background: rgba(255,255,255,0.06);
      border: 1px solid rgba(201,168,76,0.2);
      border-radius: 10px; padding: 10px 14px;
      font-family: 'Crimson Pro', Georgia, serif; font-size: 1rem;
      color: #f5e6b8; outline: none;
      transition: border-color 0.2s;
    }
    #_srch_input::placeholder { color: rgba(200,184,152,0.4); }
    #_srch_input:focus { border-color: rgba(201,168,76,0.5); }
    #_srch_cancel {
      background: none; border: none; color: rgba(200,184,152,0.6);
      font-family: 'Cinzel', serif; font-size: 0.78rem; letter-spacing: 0.04em;
      cursor: pointer; white-space: nowrap; padding: 6px 2px;
      transition: color 0.2s;
    }
    #_srch_cancel:hover { color: #f5e6b8; }

    #_srch_results {
      flex: 1; overflow-y: auto; padding: 8px 0 80px;
    }

    ._srch_cat_label {
      font-family: 'Cinzel', serif; font-size: 0.62rem; font-weight: 700;
      letter-spacing: 0.1em; color: rgba(201,168,76,0.6);
      padding: 14px 16px 6px; text-transform: uppercase;
    }

    ._srch_item {
      display: flex; align-items: center; gap: 12px;
      padding: 12px 16px; cursor: pointer;
      transition: background 0.15s; text-decoration: none;
      border: none; background: none; width: 100%; text-align: left;
    }
    ._srch_item:hover, ._srch_item:active { background: rgba(201,168,76,0.07); }

    ._srch_item_icon {
      width: 38px; height: 38px; border-radius: 9px; flex-shrink: 0;
      background: linear-gradient(135deg,#1e1830,#2d2048);
      border: 1px solid rgba(201,168,76,0.18);
      display: flex; align-items: center; justify-content: center;
      font-size: 17px;
    }
    ._srch_item_body { flex: 1; min-width: 0; text-align: left; }
    ._srch_item_title {
      font-family: 'Cinzel', serif; font-size: 0.8rem; font-weight: 700;
      color: #f5e6b8; margin-bottom: 2px;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    ._srch_item_desc {
      font-family: 'Crimson Pro', Georgia, serif; font-size: 0.85rem;
      color: rgba(200,184,152,0.6); line-height: 1.3;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    ._srch_item_arrow {
      color: rgba(200,184,152,0.3); font-size: 0.9rem; flex-shrink: 0;
    }

    ._srch_empty {
      text-align: center; padding: 48px 24px;
      font-family: 'Crimson Pro', Georgia, serif; font-size: 1rem;
      color: rgba(200,184,152,0.4);
    }
    ._srch_empty_icon { font-size: 2rem; margin-bottom: 10px; }

    ._srch_hint {
      text-align: center; padding: 32px 24px 8px;
      font-family: 'Crimson Pro', Georgia, serif; font-size: 0.9rem;
      color: rgba(200,184,152,0.35);
    }
  `;
  document.head.appendChild(style);

  // ── HTML ─────────────────────────────────────────────────────
  var overlay = document.createElement('div');
  overlay.id = '_srch_overlay';
  overlay.innerHTML =
    '<div id="_srch_bar">' +
      '<input id="_srch_input" type="search" placeholder="Rechercher du contenu…" autocomplete="off" autocorrect="off" spellcheck="false"/>' +
      '<button id="_srch_cancel">Annuler</button>' +
    '</div>' +
    '<div id="_srch_results"></div>';

  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(overlay);

    // Wire all 🔍 buttons on this page
    document.querySelectorAll('button.nav-icon-btn').forEach(function (btn) {
      if (btn.textContent.trim() === '🔍') {
        btn.addEventListener('click', openSearch);
      }
    });

    document.getElementById('_srch_cancel').addEventListener('click', closeSearch);
    document.getElementById('_srch_input').addEventListener('input', onInput);

    // Close on overlay backdrop click (outside bar)
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeSearch();
    });
  });

  // ── OPEN / CLOSE ─────────────────────────────────────────────
  function openSearch() {
    overlay.classList.add('open');
    var input = document.getElementById('_srch_input');
    input.value = '';
    renderResults('');
    setTimeout(function () { input.focus(); }, 80);
  }

  function closeSearch() {
    overlay.classList.remove('open');
    document.getElementById('_srch_input').blur();
  }

  // ── SEARCH ───────────────────────────────────────────────────
  function onInput() {
    renderResults(this.value);
  }

  function score(item, q) {
    var t = (item.title + ' ' + item.desc + ' ' + item.cat).toLowerCase();
    return t.includes(q) ? (item.title.toLowerCase().includes(q) ? 2 : 1) : 0;
  }

  function renderResults(raw) {
    var container = document.getElementById('_srch_results');
    var q = raw.trim().toLowerCase();

    if (!q) {
      container.innerHTML = '<div class="_srch_hint">Tapez pour rechercher des modules, lecteurs et pages…</div>';
      return;
    }

    var hits = INDEX.filter(function (item) { return score(item, q) > 0; })
                    .sort(function (a, b) { return score(b, q) - score(a, q); });

    if (!hits.length) {
      container.innerHTML =
        '<div class="_srch_empty">' +
          '<div class="_srch_empty_icon">🔍</div>' +
          'Aucun résultat pour <strong style="color:#c9a84c">"' + escHtml(raw) + '"</strong>' +
        '</div>';
      return;
    }

    // Group by category
    var cats = [];
    var bycat = {};
    hits.forEach(function (item) {
      if (!bycat[item.cat]) { bycat[item.cat] = []; cats.push(item.cat); }
      bycat[item.cat].push(item);
    });

    var html = '';
    cats.forEach(function (cat) {
      html += '<div class="_srch_cat_label">' + escHtml(cat) + '</div>';
      bycat[cat].forEach(function (item) {
        var isExternal = item.external;
        html +=
          '<button class="_srch_item" onclick="_srchNavigate(\'' + escAttr(item.url) + '\',' + (isExternal ? 'true' : 'false') + ')">' +
            '<div class="_srch_item_icon">' + item.emoji + '</div>' +
            '<div class="_srch_item_body">' +
              '<div class="_srch_item_title">' + escHtml(item.title) + '</div>' +
              '<div class="_srch_item_desc">' + escHtml(item.desc) + '</div>' +
            '</div>' +
            '<span class="_srch_item_arrow">›</span>' +
          '</button>';
      });
    });

    container.innerHTML = html;
  }

  // ── NAVIGATE ─────────────────────────────────────────────────
  window._srchNavigate = function (url, external) {
    closeSearch();
    if (external) {
      window.open(url, '_blank');
      return;
    }
    // Use page fade if available, else direct
    if (typeof navigateTo === 'function') {
      var fakeEvent = { preventDefault: function () {} };
      navigateTo(fakeEvent, url);
    } else {
      document.body.style.opacity = '0';
      setTimeout(function () { window.location.href = url; }, 280);
    }
  };

  // ── UTILS ────────────────────────────────────────────────────
  function escHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function escAttr(s) {
    return String(s == null ? '' : s).replace(/'/g, "\\'");
  }

})();

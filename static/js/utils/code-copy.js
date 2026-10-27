// Adds a language label and a "Copy" button to each code block.
document.querySelectorAll('.highlight, pre:not(.highlight pre)').forEach(function (box) {
  var code = box.querySelector('.lntd:last-child code') || box.querySelector('code') || box;
  var tools = document.createElement('div'), lang = (code.getAttribute('data-lang') || '').replace(/^(fallback|plaintext|text)$/, '');
  if (box.tagName === 'PRE') { var wrap = document.createElement('div'); wrap.className = 'code-wrap'; box.before(wrap); wrap.append(box); box = wrap; }
  tools.className = 'code-tools';
  if (lang) { var l = document.createElement('span'); l.className = 'code-lang'; l.textContent = lang; tools.append(l); }
  var b = document.createElement('button'); b.type = 'button'; b.className = 'copy-btn'; b.textContent = 'Copy'; b.setAttribute('aria-live', 'polite');
  b.addEventListener('click', function () {
    var text = code.textContent.replace(/\n$/, ''), done = function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy'; }, 1500); };
    var fallback = function () { var t = document.createElement('textarea'); t.value = text; t.style.position = 'fixed'; t.style.opacity = '0'; document.body.append(t); t.select(); try { document.execCommand('copy'); done(); } catch (e) {} t.remove(); };
    navigator.clipboard && window.isSecureContext ? navigator.clipboard.writeText(text).then(done, fallback) : fallback();
  });
  tools.append(b); box.classList.add('has-tools'); box.append(tools);
});

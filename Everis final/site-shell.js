(function(){
  var page = (document.body && document.body.dataset && document.body.dataset.sitePage) || '';
  if(!page){ return; }

  var brandHref = 'index.html';
  var playbooksHref = 'https://moeessah.github.io/everis/';

  var pages = {
    everis: { href: 'index.html' },
    nolt: { href: 'nolt-playbook.html' },
    simpleAnalytics: { href: 'simple-analytics-playbook.html' },
    france: { href: 'france-landing-page.html' },
    germany: { href: 'germany-landing-page.html' }
  };

  function currentClass(target){
    return page === target ? ' is-current' : '';
  }

  var headerHtml =
    '<div id="nav" class="site-shell-header">' +
      '<div class="site-shell-bar">' +
        '<a class="site-shell-brand" href="' + playbooksHref + '" aria-label="Playbooks home">' +
          '<span class="site-shell-brand-mark" aria-hidden="true"></span>' +
          '<span class="site-shell-brand-text">' +
            '<span class="site-shell-brand-label">DIRECTORY</span>' +
          '</span>' +
        '</a>' +
        '<div class="site-shell-main-nav" role="navigation" aria-label="Global">' +
          '<a class="site-shell-link' + currentClass('everis') + '" href="' + brandHref + '">Everis</a>' +
          '<a class="site-shell-link' + currentClass('nolt') + '" href="' + encodeURI(pages.nolt.href) + '">Nolt</a>' +
          '<a class="site-shell-link' + currentClass('simple-analytics') + '" href="' + encodeURI(pages.simpleAnalytics.href) + '">Simple Analytics</a>' +
          '<a class="site-shell-link' + currentClass('france') + '" href="' + encodeURI(pages.france.href) + '">Landing Page FR</a>' +
          '<a class="site-shell-link' + currentClass('germany') + '" href="' + encodeURI(pages.germany.href) + '">Landing Page DE</a>' +
        '</div>' +
      '</div>' +
    '</div>';

  var footerHtml =
    '<div class="site-shell-footer" role="contentinfo">' +
      '<div class="site-shell-footer-bottom">' +
        '<div class="site-shell-footer-credit">essah marketing</div>' +
      '</div>' +
    '</div>';

  document.body.insertAdjacentHTML('afterbegin', headerHtml);
  document.body.insertAdjacentHTML('beforeend', footerHtml);

  var header = document.getElementById('nav');
  if(header){
    var syncHeader = function(){
      header.classList.toggle('scrolled', window.scrollY > 10);
    };
    syncHeader();
    window.addEventListener('scroll', syncHeader, { passive: true });
  }
})();
/**
 * --------------------------------------------------------------------
 * Breadcrumbs
 * --------------------------------------------------------------------
 */

(function highlightActiveMenuItem() {
  var breadcrumbLabels = [...document.querySelectorAll('.breadcrumb__link')].map((link) => link.innerText),
      mainNavLinks = [...document.querySelectorAll('.nav-bar__link')],
      mainNavActiveLink = mainNavLinks.find((item) => breadcrumbLabels.includes(item.innerText));
  if (mainNavActiveLink) {
    mainNavActiveLink.classList.add('nav-bar__link--active');
  }
}());

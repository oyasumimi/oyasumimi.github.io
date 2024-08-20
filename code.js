function openInNewTab(url) {
  window.open(url, '_blank');
}
document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    if (links[i].href && !links[i].href.startsWith(window.location.origin)) {
      links[i].addEventListener('click', function(event) {
        openInNewTab(this.href);
        event.preventDefault();
      });
    }
  }
});

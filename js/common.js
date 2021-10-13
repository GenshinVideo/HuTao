var elems = document.querySelector('.sidenav');
var options = {
  draggable: false
};
var instance = M.Sidenav.init(elems, options);
[].slice.call(document.querySelectorAll('.sidenav a[href]')).forEach(function (i) {
  i.addEventListener('click', function () {
    document.querySelector('.progress').style.display = '';
    document.body.lastElementChild.remove();
    var ifr = document.createElement('iframe');
    ifr.src = this.dataset.link;
    ifr.className = 'notice-main';
    ifr.onload = function () {
      document.querySelector('.progress').style.display = 'none';
    }
    document.body.appendChild(ifr);
    var active = document.querySelector('.sidenav .now');
    active && active.classList.remove('now','active');
    this.parentNode.classList.add('now','active','actived');
    instance.close();
  });
});
document.querySelector('.sidenav-trigger').click();

// Collapsible https://materializecss.com/collapsible.html
document.addEventListener('DOMContentLoaded', function() {
// collapsible collapsible-accordion
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, options);
// collapsible expandable
  var elem = document.querySelector('.collapsible.expandable');
  var instance = M.Collapsible.init(elem, {accordion: false});
});
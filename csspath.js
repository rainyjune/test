function getCssPath(element) {
  var arr = [];
  var id = element.getAttribute('id');
  var tag = element.tagName.toLowerCase();
  if (id) {
    return '#' + id;
  }
  arr.push(tag);
  while (element.parentNode) {
    arr.unshift(element.parentNode.tagName.toLowerCase());
  }
  return arr.join(' > ');
}


// 增加了参数 ignoreID，设置为 true 则忽略id
function getCssPath(element, ignoreID) {
  var names = [];
  while (element.parentNode) {
    if (element.id && !ignoreID) {
      names.unshift('#'+element.id);
      break;
    } else {
      if (element === document.body) {
        names.unshift('body');
        break;
      } else {
        // #4
        for (var c = 1, e = element;
          previousElementSibling(e);
          e = previousElementSibling(e), c++);
        names.unshift(element.tagName.toLowerCase()
          + ":nth-child(" + c + ")");
      }
      element = element.parentNode;
    }
  }
  return names.join(" > ");
}

function previousElementSibling(el) {
  if (el.previousElementSibling) {
    return el.previousElementSibling;
  } else {
    while (el = el.previousSibling) {
      if( el.nodeType === 1 ) return el;
    }
  }
}


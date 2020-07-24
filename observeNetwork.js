function perf_observer(list, observer) {
  var requests = getNetworkRequests(list.getEntriesByType('resource'));
  printRequest(requests);
}
// 监测网络变化
var observer = new PerformanceObserver(perf_observer);
observer.observe({entryTypes: ["resource"]});

// 得到满足条件的网络请求
function getNetworkRequests(
  entries = performance.getEntriesByType('resource'),
  type = ['img', 'xmlhttprequest']) {
  return entries.filter(entry => {
    return type.indexOf(entry.initiatorType) > -1;
  })
}

function printRequest(requests) {
  var logDiv = document.getElementById('myLogDiv');
  if (!logDiv) {
    logDiv = document.createElement('div');
    logDiv.id = "myLogDiv";
    logDiv.style.cssText = `position: fixed;
      right: 0;
      top: 0;
      width: 200px;
      height: 200px;
      border: 1px solid black;
      z-index: 9999999;
      background-color: white;
      overflow: auto;`;
    document.body.appendChild(logDiv);
  }
  
  logDiv.innerHTML += requests.map(request => "<p><span style='background-color: gray; color: green; padding: 3px;'>" + request.initiatorType + '</span>: ' + request.name + "</p>").join("");
  logDiv.scrollTop = logDiv.scrollHeight; // 自动滚动到最新的日志
}

function perf_observer(list, observer) {
  console.log(getNetworkRequests(list.getEntriesByType('resource')));
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

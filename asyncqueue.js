function Queue() {
  var taskList = [];
  var isRunning = false;
  
  this.enqueue = function(task) {
    taskList.push(task);
  };
  this.run = function() {
    if (taskList.length === 0 || isRunning) return ;
    var task = taskList.shift();
    isRunning = true;
    task(function() {
      isRunning = false;
      debugger;
      this.run();
    });
  };
  this.getTaskList = function() {
    return taskList;
  };
  this.getIsRunning = function() {
    return isRunning;
  };
  this.empty = function() {
    taskList.length = 0;
    isRunning = false;
  };
};

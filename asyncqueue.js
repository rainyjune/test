function Queue(options) {
  var taskList = [];
  var isRunning = false;
  var autoStart = true;
  if (typeof options === "object") {
    if (options.hasOwnProperty("autoStart")) {
      autoStart = !!options.autoStart;
    }
  }
  
  this.enqueue = function(task) {
    taskList.push(task);
    if (autoStart) {
      this.run();
    }
  };
  this.run = function() {
    if (taskList.length === 0 || isRunning) return ;
    var task = taskList.shift();
    isRunning = true;
    var that = this;
    task(function() {
      isRunning = false;
      that.run();
    });
  };
  this.getTaskList = function() {
    return taskList;
  };
  this.getIsRunning = function() {
    return isRunning;
  };
  this.getAutoStart = function() {
    return autoStart;
  };
  this.empty = function() {
    taskList.length = 0;
    isRunning = false;
  };
};


/* A simplified version*/
/*
function Queue(options) {
  var taskList = [];
  var isRunning = false;
  
  this.enqueue = function(task) {
    taskList.push(task);
    run();
  };
  function run() {
    if (taskList.length === 0 || isRunning) return ;
    var task = taskList.shift();
    isRunning = true;
    task(function() {
      isRunning = false;
      run();
    });
  }
}
*/

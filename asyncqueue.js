var queue = function() {
  var taskList = [];
  var isRunning = false;
  
  return {
    enqueue: function(task) {
      taskList.push(task);
    },
    run: function() {
      if (taskList.length === 0 || isRunning) return ;
      var task = taskList.shift();
      task();
    },
    inspect: function() {
      console.log('taskList:', taskList, ' isRunning:', isRunning);
    },
    empty: function() {
      taskList.length = 0;
      isRunning = false;
    }
  };
};

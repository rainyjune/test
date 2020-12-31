```javascript
      if (typeof vtrackdata.element_content === 'undefined') {
        vtrackdata.element_content = sensorsDataAnalytic201505._.getEleInfo({target: target_ele}).$element_content;
      }
      var element_position_defined = sensorsDataAnalytic201505._.DOM.getElementPosition(target_ele, vtrackdata.element_path, sensorsDataAnalytic201505.para.heatmap && sensorsDataAnalytic201505.para.heatmap.element_selector === 'not_use_id');
      if (typeof vtrackdata.element_position === 'undefined' && sensorsDataAnalytic201505._.isNumber(element_position_defined)) {
        vtrackdata.element_position  = element_position_defined;
      }
```


```
v-define-mode: {  "eventList": [    {      "id": 13,      "elementSelector": "#footer > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(8) > a:nth-of-type(1)"    },    {      "id": 25,      "elementSelector": "#header > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(4) > a:nth-of-type(1)",      "element_path": "header#header > div > div > div > nav > ul > li > a",      "element_position": "3",      "element_content": "Program"    },    {      "id": 37,      "elementSelector": "#header > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > nav:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)",      "element_path": "header#header > div > div > div > nav > ul > li > a"    },    {      "id": 38,      "elementSelector": "#ts-intro > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(1) > a:nth-of-type(1)",      "element_path": "section#ts-intro > div > div > div > div > ul > li > a"    },    {      "id": 39,      "elementSelector": "#news > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(2) > a:nth-of-type(1)",      "element_path": "section#news > div > div > div > div > div > p > a",      "element_content": "Feedback form"    },    {      "id": 40,      "elementSelector": "#footer > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > ul:nth-of-type(1) > li:nth-of-type(9) > a:nth-of-type(1)",      "element_path": "footer#footer > div > div > div > div > div > ul > li > a",      "element_position": "8"    }  ],  "isHighLight": true}

```


```
v-limit-condition: {  "elementSelector": "#facts > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)",  "element_path": "section#facts > div > div > div > div > div"}

 v-limit-condition: {  "elementSelector": "#facts > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)",  "element_path": "section#facts > div > div > div > div > div",  "element_content": "57 Speakers"}
```

```
v-limit-condition: {  "elementSelector": "#footer > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)",  "element_path": "footer#footer > div > div > div > div > div > ul > li > a"}

上面是取消的


v-limit-condition: {  "elementSelector": "#footer > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > ul:nth-of-type(1) > li:nth-of-type(3) > a:nth-of-type(1)",  "element_path": "footer#footer > div > div > div > div > div > ul > li > a",  "element_position": 2}

上面是再次点击的
```

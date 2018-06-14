$(function () {
  var screenState = false;
  $('._btn-one').on('click',function(){
    $('._signature-box').removeClass('hid')
    init.signatureRender()
  })
  var init = {
    signatureRender: function () {
      init.detectOrient();
      screenState = true;      
      $("#signature").jSignature('init', {
        width: '90vh',
        height: '70vw',
        UndoButton: true,
        // width:'100vh',
        // height: _height,
        'background-color': '#f5f5f5',
        color: 'red'
      });


    },
    detectOrient: function () {
      var self = this;
      var detectOrient = function () {
        var width = document.documentElement.clientWidth,
          height = document.documentElement.clientHeight,
          $wrapper = $('body'),
          style = "";
        if (screenState) { // 横屏
          style += "width:" + width + "px;";  // 注意旋转后的宽高切换
          style += "height:" + height + "px;";
          style += "-webkit-transform: rotate(0); transform: rotate(0);";
          style += "-webkit-transform-origin: 0 0;";
          style += "transform-origin: 0 0;";
        }
        else { // 竖屏
          style += "width:" + height + "px;";
          style += "height:" + width + "px;";
          style += "-webkit-transform: rotate(90deg); transform: rotate(90deg);";
          // 注意旋转中点的处理
          style += "-webkit-transform-origin: " + width / 2 + "px " + width / 2 + "px;";
          style += "transform-origin: " + width / 2 + "px " + width / 2 + "px;";
        }
        $wrapper.attr('style', style)
      }
      window.onresize = detectOrient;
      detectOrient()
    }
  }
})
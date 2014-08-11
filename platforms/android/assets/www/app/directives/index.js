angular.module('unlisted.directives', [
])

.directive('ripple', function() {
  return function(scope, element, attr) {
    function clean() {
      element.find('svg').remove();
    }

    function calcWidth() {
      return Math.sqrt(Math.pow(element.outerWidth(), 2) + Math.pow(element.outerHeight(), 2)).toFixed(2);
    }

    function hexToRgb(hex, opacity) {
      var bigint = parseInt(hex, 16);
      var r = (bigint >> 16) & 255;
      var g = (bigint >> 8) & 255;
      var b = bigint & 255;

      return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
    }

    var color = attr.color || 'ff3d00';
    var opacity = attr.opacity || 0.4
    var absolute = attr.absolute || true;
    element.on('click', function(e) {
      clean()
      var x = e.pageX;
      var y = e.pageY;

      var clickY = y - element.offset().top;
      var clickX = x - element.offset().left;

      var setX = parseInt(clickX);
      var setY = parseInt(clickY);

      if (absolute === 'false') {
        element.append('<svg><circle cx="'+setX+'" cy="'+setY+'" r="0"></circle></svg>');
      } else {
        element.append('<svg style="position: absolute;"><circle cx="'+setX+'" cy="'+setY+'" r="0"></circle></svg>');
      }
      var circle = element.find('circle');
      circle.css({fill: hexToRgb(color, opacity)});
      circle.velocity({r: calcWidth()}, 'easeOutQuad', 500, clean);

    });
  };
});

angular.module('unlisted.directives', [
])

.directive('tapToClick', function() {
  return function(scope, el, attr) {
    el.on('mousedown', function(e) {
      console.log(e);
      console.log('touch');
      el.trigger('mousedown', e);
    });

    el.on('touchend', function(e) {
      console.log('end touch');
    });

  };
});

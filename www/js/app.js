var ipescam = angular.module('IPESCam', []).directive('liJqMobile', function() {
    return function($scope, el) {
        console.log('liJqMobile');
        $(el).hide();
        setTimeout(function() {
            $scope.$on('$viewContentLoaded', el.parent().listview('refresh'))
        }, 1);
        $(el).show();
    }
}).directive('selectMenuRefresh', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var unbindWatcher = scope.$watch(attrs.ngModel, function(newValue, oldValue) {
                if (newValue && oldValue === undefined) {
                    element.selectmenu('refresh');
                    unbindWatcher();
                }
            });
        }
    };
}).directive('jqmCollapsibleRepeat', function () {
  return function (scope, element, attrs) {
    if (scope.$last) {
        $(element).parent().trigger("create");
    }
  };
}).directive('scroll', [function() {
  return {
    link: function(scope, element, attrs) {
      // ng-repeat delays the actual width of the element.
      // this listens for the change and updates the scroll bar
      function widthListener() {
        if (anchor.width() != lastWidth)
          updateScroll();
      }

      function updateScroll() {
        // for whatever reason this gradually takes away 1 pixel when it sets the width.
        $div2.width(anchor.width() + 1);

        // make the scroll bars the same width
        $div1.width($div2.width());

        // sync the real scrollbar with the virtual one.
        $wrapper1.scroll(function(){
          $wrapper2.scrollLeft($wrapper1.scrollLeft());
        });

        // sync the virtual scrollbar with the real one.
        $wrapper2.scroll(function(){
          $wrapper1.scrollLeft($wrapper2.scrollLeft());
        });
      }

      var anchor = element.find('[data-anchor]'),
          lastWidth = anchor.width(),
          listener;

      // so that when you go to a new link it stops listening
      element.on('remove', function() {
        clearInterval(listener);
      });

      // creates the top virtual scrollbar
      element.wrapInner("<div class='div2' />");
      element.wrapInner("<div class='wrapper2' />");

      // contains the element with a real scrollbar
      element.prepend("<div class='wrapper1'><div class='div1'></div></div>");

      var $wrapper1 = element.find('.wrapper1'),
          $div1 = element.find('.div1'),
          $wrapper2 = element.find('.wrapper2'),
          $div2 = element.find('.div2')

      // force our virtual scrollbar to work the way we want.
      $wrapper1.css({
        width: "100%",
        border: "none 0px rgba(0, 0, 0, 0)",
        overflowX: "scroll",
        overflowY: "hidden",
        height: "20px",
      });

      $div1.css({
        height: "20px",
      });

      $wrapper2.css({
        width: "100%",
        overflowX: "scroll",
      });

      listener = setInterval(function() {
        widthListener();
      }, 650);

      updateScroll();
    }
  }
}]);



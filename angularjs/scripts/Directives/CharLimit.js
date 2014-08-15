angular

  .module('YSF.Directives', [])

  .directive('charLimit', function() {

      return {

        link: function($scope, $element, $attributes) {

          var limit = $attributes.charLimit;
          
          $element.bind('keydown', function(event) {
            $element.toggleClass('text-warning', $element.val().length >= limit / 2);
            $element.toggleClass('text-error', $element.val().length >= limit);
          });

          $element.bind('keypress', function(event) {
            if ( $element.val().length >= limit && event.which != 8 ) {
              event.preventDefault();
            }
          });
        }
      };
  });
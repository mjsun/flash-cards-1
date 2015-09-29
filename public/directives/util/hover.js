app.directive('hoverHighlight', function(){
   return {
       restrict: 'A',
       link: function(scope, elem, attr){
            elem.on('mouseenter', function(){
                angular.element(elem).addClass('shadow');
            });

           elem.on('mouseleave', function(){
               angular.element(elem).removeClass('shadow');
           });
       }
   };
});
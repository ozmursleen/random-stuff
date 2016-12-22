(function () {
    'use strict';
    function YepNopeDirective() {
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                scope.$watch(attrs.check, function (val) {
                    var words = val ? 'Yep' : 'Nope';
                    console.log('yepnope', words);
                    element.text(words);
                });
            }
        };
    }
    module.exports = YepNopeDirective;
}());
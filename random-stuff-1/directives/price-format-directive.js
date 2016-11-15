/**
 * Created by oz on 9/18/2016.
 */

define(['app'], function (app) {

    app.directive("priceFormat", function ($filter) {
        return {
            require: "ngModel",
            restrict: "A",
            link: function (scope, elem, attrs, ngModel) {
                var unit = "$";

                ngModel.$formatters.unshift(function (a) {
                    return unit + $filter("number")(ngModel.$modelValue)
                });

                ngModel.$parsers.unshift(function (viewValue) {
                    var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
                    elem.val(unit + $filter('number')(plainNumber));
                    return plainNumber;
                });
            }
        }
    });
});

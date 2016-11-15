/**
 * Created by oz on 9/18/2016.
 */

define(['app'], function (app) {

    app.directive("numberFormat", function () {
        return {
            require: "ngModel",
            restrict: "A",
            link: function (scope, elem, attrs, ngModel) {
                elem.on('keypress', function() {
                    var input = elem.val();
                    input = input.replace(/\D/g, '');
                    input = input.substring(0, 10);

                    var size = input.length;
                    if (size < 4) {
                        input = '(' + input;
                    } else if (size < 7) {
                        input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6);
                    } else {
                        input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6) + ' - ' + input.substring(6, 10);
                    }
                    elem.val(input);
                });
            }
        }
    });
});

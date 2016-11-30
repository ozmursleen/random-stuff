/**
 * Created by oz on 11/26/2016.
 */

define(['app'], function (app) {

    app.directive('adLoading', function($interval, $timeout){
        return {
            restrict: "E",
            replace: true,
            template: '<ul class="my-loading-list"><li><img src="img/listen.png"></li><li><img src="img/listen.png"></li><li><img src="img/listen.png"></li></ul>',
            link: function (scope, element, attrs) {
                var $list = $(element),
                    $imgs = $list.find('li'),
                    animateImages = function () {
                        var active = 0;
                        $interval(function () {
                            if (active > $imgs.length) {
                                active = 0;
                            } else {
                                active++;
                            }
                            $imgs.eq(active).addClass('img-opacity');
                        }, 250);
                        $interval(function () {
                            $imgs.removeClass('img-opacity');
                        }, 350);
                    };

                $timeout(animateImages);
            }
        }
    });
});

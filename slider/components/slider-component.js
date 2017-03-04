/**
 * Created by oz on 03/04/2017.
 */

define(['app'], function (app) {

    app.component('sliderComponent', {
            bindings: {
                sliderItems: '=',
                sliderOptions: '='
            },
            templateUrl: 'slider-template.html',
            controller: function ($timeout, $attrs, $element) {
                var that = this;
                that.defaultOptions = {
                    margin: 10,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 3
                        }
                    },
                    navText: ["<div class='side-by-side-nav left'><i class='fa fa-arrow-left'></i></div>", "<div class='side-by-side-nav right'><i class='fa fa-arrow-right'></i></div>"]
                };
                that.$onInit = function () {
                    if (that.sliderOptions) {
                        angular.extend(that.defaultOptions, that.sliderOptions);
                    }
                };
                $timeout(function () {
                    $element.find('.owl-carousel').owlCarousel(that.defaultOptions);
                });
            }
    })
    .filter('cmToInches', function() {
        return function (input) {
            var inches = (parseInt(input) * 0.393700787).toFixed(0);
            var feet = Math.floor(inches / 12);
            inches %= 12;
            return feet + "' " + inches + '"';
        };
    });
});
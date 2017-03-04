/**
 * Created by oz on 03/04/2017.
 */

define(['app'], function (app) {

    app.controller('indexController', function($scope){
        $scope.items = [
            {
                name: 'sheldon li',
                size: 'extra small',
                measurement: '155',
                description: 'Usually wears an extra small in T-shirts Wearing a extra small in the Shorts',
                src: 'styles/images/SizeGuide3@2x.jpg'
            },
            {
                name: 'julian chang',
                size: 'small',
                measurement: '168',
                description: 'Usually wears a small in tops Wearing a small in the Shorts',
                src: 'styles/images/SizeGuide2@2x.jpg'
            },
            {
                name: 'dave read',
                size: 'medium',
                measurement: '188',
                description: 'Usually wears a medium in tops Wearing a small in the Shorts',
                src: 'styles/images/SizeGuide1@2x.jpg'
            },
            {
                name: 'sheldon li',
                size: 'extra small',
                measurement: '155',
                description: 'Usually wears an extra small in T-shirts Wearing a extra small in the Shorts',
                src: 'styles/images/SizeGuide3@2x.jpg'
            },
            {
                name: 'julian chang',
                size: 'small',
                measurement: '168',
                description: 'Usually wears a small in tops Wearing a small in the Shorts',
                src: 'styles/images/SizeGuide2@2x.jpg'
            },
            {
                name: 'dave read',
                size: 'medium',
                measurement: '188',
                description: 'Usually wears a medium in tops Wearing a small in the Shorts',
                src: 'styles/images/SizeGuide1@2x.jpg'
            }
        ];
        $scope.options = {
            nav: true,
            loop: true
        };
    });
});
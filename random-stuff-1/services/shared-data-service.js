/**
 * Created by oz on 9/19/2016.
 */

define(['app'], function (app) {

    app.service("sharedDataService", function () {
        this.sharingObject = {};
        this.setSharingObject = function(data){
            this.sharingObject = data;
        };
        this.getSharingObject = function(){
            return this.sharingObject;
        };
    });
});
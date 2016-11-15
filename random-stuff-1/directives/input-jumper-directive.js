/**
 * Created by oz on 9/18/2016.
 */

define(['app'], function (app) {

    app.directive("inputJumper", function ($filter) {
        return {
            restrict: "A",
            link: function (scope, elem, attrs) {
                elem.on("keypress keydown", function(e){
                   var $this = $(this),
                       keyCode = e.which || e.keyCode;
                    
                    if($this.val() && $this.val().length >= 4){
                        if(attrs.next){
                            $("#"+attrs.next).focus();
                        }
                    }
                    
                    //backspace logic
                    if(keyCode === 8){
                        if(!$this.val()){
                            $("#"+attrs.prev).focus();
                        }
                    }
                });
            }
        }
    });
});

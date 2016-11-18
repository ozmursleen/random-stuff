/**
 * Created by oz on 11/18/2015.
 */

if (typeof Object.create !== 'function') {
    Object.create = function (obj) {
        function F() { };
        F.prototype = obj;
        return new F();
    };
}

//==========================================
/* Calculator JS Model*/
var Calculator = {
    init: function(){
        var that = this;
        that.operators = ["+", "-", "*", "/"];
        that.isDecimal = false;
        that.isEqualPressed = false;
        that.cachePageDOMElements();
        that.calculatorInit();
        return that;
    },

    cachePageDOMElements: function(){
        var that = this;

        that.$btns = $("#tblButtons a");
        that.$txtInput = $("#txtInput");
    },

    calculatorInit: function(){
        var that = this;

        that.$btns.on("click", function(e){
            e.preventDefault();

            var $this = $(this),
                text = $this.text(),
                currentValue = that.$txtInput.val();

            //in case of operators clicked do following
            if(that.operators.indexOf(text) > -1){
                that.getTextFromInput(text);
                that.isDecimal = false;
            }else{
                switch(text){
                    case "del": //on delete
                        if(that.isEqualPressed){
                            that.$txtInput.val("");
                            that.isEqualPressed = false;
                        }else if(currentValue){
                            currentValue = currentValue.substring(0, currentValue.length-1);
                            that.$txtInput.val(currentValue);
                        }
                        break;
                    case "=":
                        var endDigit = currentValue[currentValue.length - 1];

                        if(that.operators.indexOf(endDigit) > -1 || endDigit == '.')
                            currentValue = currentValue.replace(/.$/, '');

                        that.isEqualPressed = true;
                        that.$txtInput.val(eval(currentValue));
                        break;
                    case "CE":
                        that.$txtInput.val("");
                        that.isEqualPressed = true;
                        break;
                    case ".":
                        if(!that.isDecimal){
                            that.getTextFromInput(text);
                            that.isDecimal = true;
                        }
                        break;
                    case "^":
                        var endDigit = currentValue[currentValue.length - 1];
                        if(that.operators.indexOf(endDigit) > -1){
                            alert("Invalid exponential equation");
                        }else{
                            var equate = eval(currentValue);
                            if(equate && equate != NaN){
                                that.$txtInput.val(Math.exp(equate).toPrecision(3));
                                that.isEqualPressed = true;
                            }
                        }
                        break;
                    default: //default add whatever the button is clicked other than operators and equal etc
                        that.getTextFromInput(text);
                        break;
                }
            }
        });
    },

    getTextFromInput: function(text){
        var that = this,
            inputVal = (!that.$txtInput.val() || that.$txtInput.val() == '0') ? "" : that.$txtInput.val();

        if((inputVal.length == 0 && text == "-") || text){
            inputVal += text;
        }

        that.$txtInput.val(inputVal);
    }
};
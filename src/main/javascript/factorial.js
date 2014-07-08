var Factorial = (function($) {

    var Factorial = {

        "calc" : function(n) {
            return (n === 0) ? 1 : n * Factorial.calc(n - 1);
        },

        "process" : function() {
            var input = Factorial.view.input();
            var result = Factorial.calc(input);
            Factorial.view.update(input, result);
        }

    };

    Factorial.view = {
            
        "init" : function() {
            $("#evaluate").click(Factorial.process);
        },
        
        "input" : function() {
            return $("#fact").val();
        },
        
        "update" : function(number, result) {
            $("#result").html("The factorial of " + number + " is " + result + ".");
        }
        
    };

    return Factorial;

})(jQuery);

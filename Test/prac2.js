//this does not depend on where you are
//it depends on how function is call

function x() {
    console.log(this);
    function y() {
        console.log(this);
        function z(){
            console.log(this);
        }
        z();
    }
    y();
}
x();


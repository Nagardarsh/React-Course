console.log(this);
const obj = {
    fn: function () {
        console.log(this);
    },
    fn2 : () => {
        console.log(this);
    }
}
obj.fn();  //obj-fn
obj.fn2(); //window because arrow fn works differently
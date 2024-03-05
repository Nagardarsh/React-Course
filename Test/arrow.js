const obj ={
    firstname: "Akshay",
    printNames: () => {
        console.log(this.firstname);
    },
    printName2:function () {
        console.log(this.firstname);
    },
};

obj.printNames();
obj.printName2();
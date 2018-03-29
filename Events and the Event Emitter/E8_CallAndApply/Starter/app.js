var obj = {
    name: 'john doe',
    greet: function(param) {
        console.log(`hello ${this.name}, ${param}`);
    }
}

var param = "bye"

obj.greet();
obj.greet.call({name: 'jane doe'}, param);

obj.greet.apply({name:'aj doe'}, [param])
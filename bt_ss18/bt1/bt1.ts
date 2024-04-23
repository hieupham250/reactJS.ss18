function decorator (target:any, propertKey:string,desciptor:PropertyDescriptor){
    console.log(target);
    console.log(propertKey);
    console.log(desciptor);
    desciptor.value = function (a: number, b:number) {
        return (a+b)*2
    }
}

class Sum {
    @decorator 
    sum(a:number, b:number) {
        return a + b
    }
}

let sum = new Sum();
console.log(sum.sum(1,2));
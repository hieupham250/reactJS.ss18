function checkType(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(n: number) {
        if (typeof n !== "number" || isNaN(n)) {
            console.log("Không phải số");
        } else {
            return originalMethod.apply(this, arguments);
        }
    };

    return descriptor;
}

class Example {
    @checkType
    exampleMethod(n: number) {
        console.log(`Số đầu vào là: ${n}`);
    }
}

const example = new Example();

example.exampleMethod(123);  // Số đầu vào là: 123
example.exampleMethod("abc");  // Không phải số

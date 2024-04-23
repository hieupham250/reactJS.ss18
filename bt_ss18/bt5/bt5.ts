function chainFunctions(...functions: Function[]): MethodDecorator {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]) {
            let result: any = originalMethod.apply(this, args);

            for (const func of functions) {
                result = func(result);
            }
            return result;
        };
        return descriptor;
    };
}

class Example {
    @chainFunctions(
        (x: number) => x + 1,
        (x: number) => x * 2,
        (x: number) => x - 3
    )
    calculate(value: number): number {
        return value;
    }
}

const example = new Example();

console.log(example.calculate(5)); // ra 9

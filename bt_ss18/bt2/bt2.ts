function timingDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const start = performance.now();
  const end = performance.now();
  const executionTime = end - start;

  console.log(executionTime);
}

class Sum {
  @timingDecorator
  sum(a: number, b: number) {
    return a + b;
  }
}

let sumInstance = new Sum();
console.log(sumInstance.sum(1, 2));

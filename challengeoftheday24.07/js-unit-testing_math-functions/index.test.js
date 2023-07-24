import { add, divide, subtract } from "./index.js";
import { multiply } from "./index.js";


test("add() returns a+b ", () => {
  const result = add(2,3);
  expect(result).toBe(5);
});

test("multyply() returns 8 if i multiply 2 by 4",() => {
    const result = multiply(2,4);
    expect(result).toBe(8)
});

test("subtract() returns a negative value if the second argument is greater",()=>{
    const a = 5;
    const b = 10;
    
    const result = subtract(a,b);
    if (b > a){
        expect(result).toBeLessThan(0);
    }
})

test("divice()returns “You should not do this!” if called with 0 as second argument",()=>{
    const a = 3;
    const result = divide(a,0)
    expect(result).toBe('You should not do this!');
})

import Square from './../src/square.js';

describe('Square', ()=>  {

  test('this should return the values of the sides', () => {
    const square = new Square(3, 3, 3, 3);
    expect(square.side1).toEqual(3);
    expect(square.side2).toEqual(3);
    expect(square.side3).toEqual(3);
    expect(square.side4).toEqual(3);
  });

  test('this should check the shape input and if all sides are equal, return square', ()=> {
    const isSquare = new Square(3, 3, 3, 3);
    expect(isSquare.checkType()).toEqual('square');
  })

  test('this should check the users input and if all sides are not equal, return not square', ()=> {
    const isSquare = new Square(3, 4, 3, 3);
    expect(isSquare.checkType()).toEqual('not square');
  })

  test('should determine if sides create a rectangle', () => {
    const shape = new Square(3, 4, 3, 4);
    expect(shape.checkType()).toEqual('rectangle');
  })

  test('should determine and return area of square', () => {
    const square = new Square(3, 3, 3, 3);
    expect(square.squareArea()).toEqual(9);
  })
});

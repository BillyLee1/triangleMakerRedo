import Triangle from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    const triangle = new Triangle(2,4,5,0);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
    expect(triangle.side4).toEqual(0);
  });

  test('should correctly determine whether three lengths are not a triangle', () => {
    const notTriangle = new Triangle(3,9,22,0);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  test('should correctly determine whether three lengths make an equilateral triangle', () => {
    const equiTriangle = new Triangle(5,5,5,0);
    expect(equiTriangle.checkType()).toEqual("equilateral triangle");
  });

  test('should test if shape is 3 sided or 4 sided', () => {
    const isTriangle = new Triangle(5,5,5,5);
    expect(isTriangle.checkType()).toEqual("");
  })
});

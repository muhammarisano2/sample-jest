const method = require('./method');

describe('method.js', ()=>{
  it('adds 1 + 2 to equal 3', () => {
    expect(method.sum(1, 2)).toBe(3);
  });

  it('adds 1 + 2 to not equal 4', () => {
    expect(method.sum(1, 2)).not.toBe(4);
  });
  it('sample function check', () => {
    expect(method.checkValue('risano')).toBe('risano')
  })

  it('should return object true', () => {
    expect(method.returnObject()).toEqual({ name: 'risano', email: 'risanoakbar@gmail.com' })
  })
  it('is not null', ()=>{
    const data = 'risano'
    expect(data).not.toBeNull();
    expect(data).toBeDefined();
    expect(data).not.toBeUndefined();
  })
  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
  it('test function asinc', () => {
    return method.fetchUser().then(data => {
      expect(data).toEqual({
        userId: 1,
        id: 1,
        title: "quidem molestiae enim"
      });
    });
  })
})

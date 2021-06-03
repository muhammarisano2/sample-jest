const funReverse = require('./funReverse')

describe('reverse.js', () => {
  // const data = 'risano'
  // console.log(funReverse(data));
  it('reverse funtion exist', ()=>{
    expect(funReverse('risano')).toBeDefined()
  })
  it('string reverses', () => {
    expect(funReverse('risano')).toBe('onasir')
  })
  it('validasi jika function parameter tidak di isi', ()=>{
    expect(funReverse()).toBe('parameter harus di isi')
  })

})
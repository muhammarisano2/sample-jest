const funcReverse= (world) =>{
  if(!world) return 'parameter harus di isi'
  return world.split("").reverse().join("")
}

module.exports = funcReverse
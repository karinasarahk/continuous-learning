export function halo() {
    console.log("halo");
  }
  
  function haloNew() {
    console.log("Halo new");
  }
  
  exports.Halo = () => {};
  
  // ----------------COMMON-------------
  module.exports = {
    halo: halo,
    tesName: haloNew,
  };
  
  module.exports.halo = halo;
  
  // ----------------COMMON--------------
  
  // export default Halo
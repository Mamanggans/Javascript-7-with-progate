//1 

//2  callback function 
const printKen = () => {
    console.log("Ninja Ken");
  };
  
  // Tambahkan parameter callback ke function call
  const call = (callback) => { // callback function 
    console.log("Memanggil function callback."); // print 
    callback();// Panggil callback function
  };
  
  call(printKen); // meggantikan callback dengan argumen baru yaitu printken 
  
  // 3 function 

  const printKen = () => {
    console.log("Ninja Ken");
  };
  
  const call = (callback) => {
    console.log("Memanggil callback function.");
    callback();
  };
  
  call(printKen);
  
  // Deklarasikan function didalam argument dan teruskan
  call(() => {
    console.log("Guru Domba"); // masukin ini di atas tuh yg tulisan callback 
  });
  // 4 argumen callback function  
  const call = (callback) => {
    callback("Ninja Ken", 14);
  };
  
  // Tambahkan sebuah function yang menerima dua argument didalam argument call
  call((name,age) => {
    console.log(`${name} berusia ${age} tahun.`);
  });
  
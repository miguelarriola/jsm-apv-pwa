if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('../sw.js')
    .then((registrado) =>
      console.log('Se instalo correctamente.... ', registrado)
    )
    .catch((error) => console.log('Fallo la instalacion', error));
} else {
  console.log('Service Workers no soportados');
}

// if (navigator.serviceWorker) {
//   navigator.serviceWorker
//     .register('./sw.js')
//     .then((registered) => console.log('Successfully installed', registered))
//     .catch(console.error);
// } else {
//   console.log('Service Worker not supported');
// }

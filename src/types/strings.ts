(() => {
  //forma implicita
  let myString = 'hola';

  myString = 'hola changed';
  console.log('mi string', myString);

  // forma explicita
  const myString2: string = 'bla bla';

  // uso de backtick
  const summary = `
    title: ${myString},
    description: ${myString2}
  `;

  console.log(summary);

  //Evitar
  //const myString3: String = 'hola'

})();

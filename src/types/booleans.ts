(() => {
  //forma implicita
  let enable = true;

  enable = false;

  // forma explicita
  let isNew: boolean = false;
  console.log('is new', isNew);

  const random = Math.random();
  console.log('random', random);

  // tambien infiere en lo return
  isNew = random >= 0.5 ? true : false
  console.log('random wit is new', isNew);

  // Evitar
  //const myBoolean: Boolean = true;

})();

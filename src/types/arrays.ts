(() => {
  // forma implicita
  const prices = [1,2,3,4,5,6];
  prices.push(6);

  let arraysWithTYpes = [12,34, 'hola', true];
  arraysWithTYpes.push(0);

  // forma explicita
  let mixed: (number | string | boolean )[] = ['hola', true];
  mixed.push('h');
  mixed.push(12);
})();

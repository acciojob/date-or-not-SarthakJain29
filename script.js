function isDate(input) {
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  if (typeof input === 'string') {
    const parsed = Date.parse(input);
    return !isNaN(parsed);
  }

  return false;
}

// Do not change the code below.
//const input = prompt("Enter Date.");
//alert(isDate(input));

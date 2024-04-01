let number = -3;

switch (number) {
  case 1:
    console.log("Yanvar");
    break;

  case 2:
    console.log("Fevral");

    break;
  case 3:
    console.log("Mart");

    break;
  case 4:
    console.log("Aprel");

    break;
  case 5:
    console.log("May");
    break;

  default:
    if (number < 0) {
      console.log("menfi ay olmur");
    } else {
      console.log("12 den boyuk ay yoxdur");
    }

    break;
}

let money = 50;

switch(money){
  case 50:
    console.log("* Prince for Basic Room --> 50€");
    break;
  case 80:
    console.log("* Price for Junior Suite Room --> 80€");
    break;
  case 100:
    console.log("* Price for Master Suite  --> 100€");
    break;
  default:
    console.log(
      "We don't have any room according your money. We have just in these prices 80€, 100€"
    );
    break;
}
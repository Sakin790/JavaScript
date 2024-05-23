{
  const Marvel = ["THOR", "IRON MAN", "LOKI", "CAPTAIN"];
  const DC = ["SUPERMAN", "BATMAN", "FLASH"];
  console.log(Marvel.concat(DC));
  Marvel + DC;
  (
    pop //remove last Element
  ) => console.log(Marvel[1]); //index 1 a ki element ache ta janar jonno
  Marvel.length();
  Marvel.push("HAWKEYE"); // last a element push korar jonno
}
{
  const myArr = [1, 2, 3, 4, 5];
  myArr.slice(1, 2);
  console.log("a ", myArr); // major kono change abbe na
  const newArr = [1, 2, 3, 4, 5];
  newArr.splice(1, 3); // index no 1 to 3 moddhe sob badh jabe
  console.log("B", newArr);
}
{
  //ARRAR_LECTURE_2_Arrary_conact_korar_jonno;
  const marvelHero = [" SPIDERMAN ", "IRONMAN", "CAPTAIN AMERICA"];
  const Dchero = [" SUPERMAN", "CATWEMAN"];
  marvelHero.push(Dchero);
  console.log(marvelHero);
  const allHero = [...marvelHero, ...Dchero]; //Sprede oparator***
  // 2 ta array combined korte use hoi
  console.log(allHero);
}
{
  //Array_within_array_solve;
  const jilapi_Array = [1, 2, 3, [1, 2, 3], [5, 6, [5, 9, [true]]]];
  const EasyArray = jilapi_Array.flat(Infinity);
  console.log(EasyArray); // flat korar por sob oparaiton korte parbo
}
{
  //combined_Two_Array;
  const boys = [" Rafi ", "Sakin"];
  const girls = ["Samiya"];
  const newA = [...boys, ...girls];
  console.log(newA);
}
{
  //most_improtant_in_Array;
  console.log(Array.isArray("SAKIN")); // is this  in array?
  console.log(Array.from("SAKIN")); // Obj to array
  Array.from("Sakin", "abir", " Santiyago");

  // String to Array
  let score1 = 100;
  let score2 = 200;
  let score3 = 300;
  const allArray = Array.of(score1, score2, score3);
  console.log(allArray);
  ///////////////////////////////
  let name1 = "sakin";
  let name2 = "Thor ";
  const allName = Array.of(name1, name2);
  console.log(allName);
}

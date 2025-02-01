const data = {
  names: ["John", "Jane", "Jim"],
  ages: [30, 25, 35],
  cities: ["New York", "Los Angeles", "Chicago"],
};

data.occupations = ["Engineer", "Doctor", "Artist"]; //adding new array

//ForEach 0Index 1Index 2Index, JotoKhon elemet exist korbe totokhon colbe
data.names.forEach((name, index) => {
  console.log(
    `${name} is ${data.ages[index]} years old and lives in ${data.cities[index]} also a ${data.occupations[index]}.`
  );
});

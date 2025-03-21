var sortPeople = function(names, heights) {
    const peopleMap = new Map();
    for (let i = 0; i < names.length; i++) {
        peopleMap.set(names[i], heights[i]);
    }
  }
//Live Work

function calcDroneMinEnergy(routes) {
  // your code goes here
  let elevations = [];
  routes.forEach( route => {
   elevations.push(route[2]);
  });

  let fuelDemand = 0;
  let fuelReserve = 0;

  for(let i = 1; i < elevations.length; i++) {

    fuelDemand = (elevations[i - 1] - elevations[i]);
    if (fuelDemand < 0) {
      fuelReserve += fuelDemand;

    } else if (fuelDemand < 0 && fuelDemand - fuelReserve < 0) {
      fuelReserve += (fuelReserve - fuelDemand);

    } else {
      fuelReserve += fuelDemand;
    }
  }

  console.log(fuelReserve);
}

//Elegant
const calcDroneElegant = (routes) => {
  const altitudes = routes.map( route => route[2] );
  const startHeight = altitudes[0];
  let maxHeight = altitudes.reduce( (a,b) => { return Math.max(a, b);});
  return maxHeight - startHeight;
};


calcDroneMinEnergy([ [0,   2, 10],
                  [3,   5,  0],
                  [9,  20,  6],
                  [10, 12, 15],
                  [10, 10,  8] ]);

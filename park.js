const Park = function(name, admission_fee, dinosaur_collection){
  this.name = name;
  this.admission_fee = admission_fee;
  this.dinosaur_collection = dinosaur_collection;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaur_collection.push(dinosaur)

};

Park.prototype.removeDinosaur = function () {
  this.dinosaur_collection.shift()
};

// Park.prototype.mostVisitors = function () {
//
//
//   }


// Park.prototype.sameSpecies = function (rSpecies) {
//   speciesFound = []
//   for (dino in this.dinosaur_collection){
//     if(dino.species == rSpecies){
//       speciesFound.push(dino)
//     }
//   }
//   return speciesFound
// };

Park.prototype.visitorsPerDay = function () {
  let total = 0
  for (dinosaur in this.dinosaur_collection){
    total += dinosaur.admission_fee
  }
  return total
};



module.exports = Park

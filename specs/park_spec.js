const assert = require('assert')
const Park = require('../park.js')
const Dinosaur = require('../dinosaur.js')

describe ('Park', function(){
  let park;

  beforeEach (function(){
    dinosaur1 = new Dinosaur("T-Rex", "carnivore", 150)
    dinosaur2 = new Dinosaur("Diplidocus", "herbivore", 90)
    dinosaur3 = new Dinosaur("polotomus", "carnivore", 25)
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3]
    park = new Park("Wally's World", 10, dinosaurs)
  })

it ('park has a name', function(){
  const actual = park.name;
  assert.strictEqual(actual, "Wally's World")
})
it ('park has an admission fee', function(){
  const actual = park.admission_fee;
  assert.strictEqual(actual, 10)
})
it ('park has a collection of dinosaurs', function(){
  const actual = park.dinosaur_collection;
  assert.deepStrictEqual(actual, dinosaurs)
})
it ('Add a dinosaur to its collection of dinosaurs', function(){
  let dinosaur4 = new Dinosaur("Stegosaurus", "herbivore", 85 );

   park.addDinosaur(dinosaur4);
   const actual = park.dinosaur_collection.length;
  assert.strictEqual(actual, 4)

})
it ('remove a dinosaur from its collection of dinosaurs', function(){
  park.removeDinosaur();
  const actual = park.dinosaur_collection.length;
  assert.strictEqual(actual, 2)
})
// it('find the dinosaur that attracts the most visitors', function(){
//   dinoArray = park.dinosaur_collection;
//   actual = park.mostVisitors()
//   assert.strictEqual(actual, dinosaur1)
// })
// it ('finds all dinosaurs of same species', function(){
//   let dinosaur4 = new Dinosaur("T-Rex", "carnivore", 85 );
//   park.addDinosaur(dinosaur4);
//   const actual = park.sameSpecies("T-Rex")
//   assert.strictEqual(actual, [dinosaur1, dinosaur4])
// })

it ('finds park visitors per day', function(){
  const actual = park.visitorsPerDay()
  assert.strictEqual(actual, 265)
})

})

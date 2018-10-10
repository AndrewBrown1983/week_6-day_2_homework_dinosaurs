const assert = require('assert')
const Dinosaur = require('../dinosaur.js')

describe ('Dinosaur', function(){
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;

  beforeEach(function(){
    dinosaur1 = new Dinosaur("T-Rex", "carnivore", 500)
    dinosaur2 = new Dinosaur("Diplidocus", "herbivore", 390)
    dinosaur3 = new Dinosaur("polotomus", "carnivore", 125)
    dinosaur4 = new Dinosaur("Stegosaurus", "herbivore", 285 )
    dinosaur5 = new Dinosaur("Stegosaurus", "herbivore", 150 )
  })
  it('should have a species', function(){
    const actual = dinosaur1.species;
    assert.strictEqual(actual, "T-Rex");
  });

  it ('should have a diet', function(){
    const actual = dinosaur1.diet;
    assert.strictEqual(actual, "carnivore")
  })

  it('should have an average visitors per day', function(){
    const actual = dinosaur1.average_visitors_per_day;
    assert.strictEqual(actual, 500)
  })

  

})

// eslint-disable-next-line strict
'use strick';
//part one
const log = console.log;

const loaf = {
  flour : 300 ,
  water : 210 ,
  hydration() {
    return loaf.flour / loaf.water * 100 ;
  }
};

log(`${loaf.flour} ${loaf.water}`);

log(loaf.hydration());

//part 2
const obj = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4,
  spam: 5
};

const giai = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4,
  spam: 5
};

function call(rev){
  for(let i in rev){
    log(`${i}: ${rev[i]}`);
  }
}

call(giai);

//part 3
const meals = {
  food : ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

log(meals.food[3]);

//part 4

const arrO = [
  {
    name: 'Mike B.',
    jobTitle: 'twitter shitposter'  
  },
  {
    name : 'Gage M.',
    jobTitle : 'laborer'
  },
  {
    name : 'Jack M.',
    jobTitle : 'Manager' 
  }
];

function jobs(ar){
  for(let i in ar) {
    log(`${ar[i].name} job is ${ar[i].jobTitle}`);
  }
}

jobs(arrO);

//part 5

const arrB = [
  {
    name: 'Mike B.',
    jobTitle: 'Owner',
  },
  {
    name : 'Gage M.',
    jobTitle : 'Manager',
    boss: 'Mike B.'
  },
  {
    name : 'Jack M.',
    jobTitle : 'Analyst',
    boss: 'Gage M.'
  }
];
  
function reportTo(ar) {
  for(let i in ar) {
    if('boss' in arrB[i]) {
      log(`${ar[i].jobTitle} ${ar[i].name} reports to ${ar[i].boss}`);
    // eslint-disable-next-line no-empty
    }else{
      log(`${ar[i].jobTitle} ${ar[i].name} doesn't report to anybody.`);
    }
  }
}
  
reportTo(arrB);
//part6 


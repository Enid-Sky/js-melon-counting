// Our customers are going to buy lots of melons!

melonsToAdd = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                 'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                 'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                 'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                 'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                 'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                 'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                 'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                 'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                 'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                 'Watermelon', 'Santa Claus', 'Casaba']

// input melon_list (array)
// output: return melon_counts (dictionary of number of melons by type)

// create a function called countMelons, given an array
// create an empty dictionary, called melon_counts
// iterate over the list and if the current melon is in the dictionary increment by 1

//else add the melon with a value of 1


function countMelons(array){
    
    const melonCounts = {};
    
    for (const melon in array) {
        if (melonCounts[melon]) {
            melonounts[melon] += 1
        } else {
            melonCounts[melon] = 1
        }      
    }
    return melonCounts
}


console.log(countMelons(melonsToAdd));


// Using Reduce

const melonCounts = melonsToAdd.reduce((mCounts, melon) => {
    if (mCounts[melon]) {
      mCounts[melon] += 1;
    } else {
      mCounts[melon] = 1;
    }
  
    return mCounts;
  });
  
  console.log(melonCounts);


  
// Short Circuit Evaluation to set countMelons
const melonCounts = melonsToAdd.reduce((mCounts, melon) => {
    mCounts[melon] = (mCounts[melon] || 0) + 1;
  
    return mCounts;
  });
  
  console.log(melonCounts);
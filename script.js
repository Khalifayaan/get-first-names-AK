

function getFirstNames(names) {
    let firstNames = [];
  
    for (let i = 0; i < names.length; i++) {
      let firstName = names[i][0];
      firstNames[i] = firstName;
    }
  
    return firstNames;
  }

  console.log(getFirstNames([["Ahmed","Aisha","Amina"],["Jaamac","Khadijah","Layla"],["Mohamed","Ali"]]));

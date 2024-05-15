Question4.js

//Filter_list ([1,2, 'a', 'b']) -> [1,2]
//Filter_list ([1, 'a', 'b', 0,15]) -> [1,0,15]
//Filter_list ([1,2, 'aasf', '3', '124', 123]) -> [1,2,123]

function filtre_liste(l) {
  var filtré = [];
  for (var i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number') {
      filtré.push(l[i]);
    }
  }
  return filtré;
}
Question2.js

//maskify('4556364607935616') -> '############5616'
//maskify('1') -> '1'
//maskify('11111') -> '#1111'

function maskify(cc) {
    if (cc.length <= 4) {
        return cc;
    }
    var visible = cc.slice(-4);  
    var masqué = "#".repeat(cc.length - 4);
    return masqué + visible;
}

var input = prompt("Veuillez entrer votre numéro de carte :");
var InputMasqué = maskify(input);
console.log(InputMasqué);

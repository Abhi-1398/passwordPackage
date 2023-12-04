let RegularExpression = /^.*[A-Z]+.*$/; 

function isFirstCharacterCapitale(string){

    if(RegularExpression.test(string)){
        console.log('Condition is true');
        return true;
    }else{
        console.log('Condition is false');
        return false; 
    }
    
}

module.exports = isFirstCharacterCapitale;
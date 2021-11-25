function findIngredients(fridgeContent) {
const ingredients = [];
    for (i=0; i<5; i+=1){
       if (fridgeContent[i].saladIngredient===true){
        ingredients.push(fridgeContent[i].name) ;
        }
    }


   return ingredients ;
}

module.exports = findIngredients;
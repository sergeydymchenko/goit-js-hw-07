
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsEl = document.querySelector('ul#ingredients');


const createListIngrediens = ingredients => {
  return  ingredients.map(ingredient => {
          const itemEl = document.createElement('li');
          itemEl.textContent = ingredient;
    
      return itemEl;
    });
}

const items = createListIngrediens(ingredients);
ingredientsEl.append(...items);

console.log(items);


// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//     const ingredient = ingredients[i];
//     const itemEl = document.createElement('li');
//     itemEl.textContent = ingredient;

//     elements.push(itemEl);
// }

// console.log(elements);

// ingredientsEl.append(...elements);



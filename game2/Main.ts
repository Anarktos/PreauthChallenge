import { itemFactory } from './ItemFactory';


let item1 = itemFactory.newItem('aged brie');
let item2 = itemFactory.newItem('backstage pass');
let item3 = itemFactory.newItem('normal');
let item4 = itemFactory.newItem('sulfuras');
let item5 = itemFactory.newItem('conjured');

let items = [item1, item2, item3, item4, item5];

console.table(items);
for (let i = 0; i <= 16; i++) {
    item1.qualityUpdate();
    item2.qualityUpdate();
    item3.qualityUpdate();
    item4.qualityUpdate();
    item5.qualityUpdate();
}
console.table(items)

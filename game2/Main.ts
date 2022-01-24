import { GuildedRose } from "./GuildedRose";
import { Item } from "./Item";


const gilded = new GuildedRose();

let item1 = new Item('aged brie', 15, 30);
let item2 = new Item('backstage', 15, 30);
let item3 = new Item('conjured', 15, 30);
let item4 = new Item('normal', 15, 30);
let item5 = new Item('sulfuras', 100, 80);


gilded.items.push(item1);
gilded.items.push(item2);
gilded.items.push(item3);
gilded.items.push(item4);
gilded.items.push(item5);

console.table(gilded.items);
for (let i = 0; i < 20; i++){
    gilded.updateQuality();
}
console.table(gilded.items);



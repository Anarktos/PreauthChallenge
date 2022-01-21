import { GuildedRose } from "./GuildedRose";
import { Item } from "./Item";



const item1 = new Item('aged brie', 15, 30);
const item2 = new Item('backstage', 15, 30);
const item3 = new Item('conjured', 15, 50);
const item4 = new Item('normal', 10, 30);
const item5 = new Item('sulfuras', 100, 80);

const guildedRose = new GuildedRose();

guildedRose.items.push(item1);
guildedRose.items.push(item2);
guildedRose.items.push(item3);
guildedRose.items.push(item4);
guildedRose.items.push(item5);

console.table(guildedRose.items);

for (let i = 0; i < 16; i++){
    guildedRose.updateQuality();
}

console.table(guildedRose.items);

import { Item } from "./Item";
import { ModifyItems } from "./modifyItems";
import { ItemUpdater } from "./updateItems";

export class GuildedRose {
    items : Array<Item>;

    constructor (items = [] as Array<Item>){
        this.items = items;
    }

    updateQuality(){
        const modifyItem = new ModifyItems()
        const itemUpdater = new ItemUpdater();
        this.items.forEach(i =>{
            if (i.name != 'sulfuras'){
                itemUpdater.updateItem(i);
                modifyItem.updateSellIn(i); 
            }
        })
        return this.items;
    }
}
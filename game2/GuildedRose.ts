import { Item } from "./Item";
import { TypeAge, TypeBack, TypeConjured, TypeNormal } from "./itemUpdate";

export class GuildedRose {
    items : Array<Item>;

    constructor (items = [] as Array<Item>){
        this.items = items;
    }

    updateQuality(){
        this.items.forEach(i =>{
            if (i.name == 'aged brie') TypeAge.updateItem(i);
            if (i.name == 'backstage') TypeBack.updateItem(i);
            if (i.name == 'conjured') TypeConjured.updateItem(i);
            if (i.name == 'normal') TypeNormal.updateItem(i);
        })
        return this.items;
    }
}

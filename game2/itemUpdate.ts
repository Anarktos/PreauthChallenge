import { Item } from "./Item";

export abstract class ItemUpdater{
    updateItem(item: Item) : void{
    }
}

export class TypeAge extends ItemUpdater {

    static updateItem(item: Item): void {
        if (item.sellIn == 0 && item.quality < 50) item.quality++;
        if (item.quality < 50) item.quality++;
        if (item.sellIn > 0) item.sellIn--;
    }
}

export class TypeBack extends ItemUpdater {

    static updateItem(item: Item) {
        if (item.quality < 50) item.quality++;
        if (item.sellIn <= 10 && item.quality < 50) item.quality++;
        if (item.sellIn <= 5 && item.quality < 50) item.quality++;
        if (item.sellIn > 0) item.sellIn--;
        if (item.sellIn <= 0) item.quality = 0;
    }
}

export class TypeConjured extends ItemUpdater {

    static updateItem(item: Item) {
        if (item.quality > 0) item.quality -= 2;
        if (item.sellIn <= 0 && item.quality > 0) item.quality -= 2;
        if (item.sellIn > 0) item.sellIn--;
    }
}

export class TypeNormal extends ItemUpdater {

    static updateItem(item: Item) {
        if (item.quality > 0) item.quality--;
        if (item.sellIn <= 0 && item.quality > 0) item.quality--;
        if (item.sellIn > 0) item.sellIn--;
    }
}




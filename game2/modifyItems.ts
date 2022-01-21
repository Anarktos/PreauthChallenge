import { Item } from "./Item";

export interface ModifyItems {

    increaseQuality(item: Item): void;
    decreaseQuality(item: Item): void;
    updateSellIn(item: Item): void;
}

export class ModifyItems implements ModifyItems {
    constructor() {
    }

    increaseQuality(item: Item): void {
        if (item.quality < 50) item.quality++;
    }

    decreaseQuality(item: Item): void {
        if (item.quality > 0) item.quality--;
    }

    updateSellIn(item: Item): void {
        item.sellIn--;
    }
}



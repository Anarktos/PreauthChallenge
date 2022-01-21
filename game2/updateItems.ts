import { Item } from "./Item";
import { ModifyItems } from "./modifyItems";

export interface ItemUpdater {
    updateItem(item: Item)
}

export class ItemUpdater implements ItemUpdater {
    constructor() {
    }
    updateItem(item: Item): void {
        const modifyItems = new ModifyItems();

        switch (item.name) {

            case 'aged brie':
                if (item.sellIn <= 0) modifyItems.increaseQuality(item);
                modifyItems.increaseQuality(item);
                break;

            case 'backstage':
                modifyItems.increaseQuality(item);
                if (item.sellIn <= 10) modifyItems.increaseQuality(item);
                if (item.sellIn <= 5) modifyItems.increaseQuality(item);
                if (item.sellIn <= 0) item.quality = item.quality - item.quality;
                break;

            case 'conjured':
                modifyItems.decreaseQuality(item);
                modifyItems.decreaseQuality(item);
                if (item.sellIn <= 0) {
                    modifyItems.decreaseQuality(item);
                    modifyItems.decreaseQuality(item);
                }
                break;

            case 'normal':
                modifyItems.decreaseQuality(item);
                if (item.sellIn <= 0) {
                    modifyItems.decreaseQuality(item);
                }
                break;
        }
    }
}
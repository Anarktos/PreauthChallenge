import { Item } from "../Item";


export class AgedBrie extends Item {
    qualityUpdate(): void {
        if (this.quality < 50) this.quality++;
        if (this.sellIn <= 0 && this.quality < 50) this.quality++;
        this.sellIn--;
    }
}
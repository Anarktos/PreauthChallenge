import { Item } from "../Item";

export class Conjured extends Item {
    qualityUpdate(): void {
        if (this.quality > 0) this.quality -= 2;
        if (this.sellIn <= 0 && this.quality > 0) this.quality -= 4
        this.sellIn--;
    }
}
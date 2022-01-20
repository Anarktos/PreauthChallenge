import { Item } from "../Item";


export class Normal extends Item {
    qualityUpdate(): void {
        if (this.quality > 0) this.quality--;
        if (this.sellIn <= 0 && this.quality > 0) this.quality - 2;
        this.sellIn--;
    }
}
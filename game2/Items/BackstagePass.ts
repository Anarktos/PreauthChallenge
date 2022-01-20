import { Item } from "../Item";


export class BackstagePass extends Item {
    qualityUpdate(): void {
        if (this.quality < 50) this.quality++;
        if (this.sellIn <= 10 && this.quality < 50) this.quality++;
        if (this.sellIn <= 5 && this.quality < 50) this.quality++;
        if (this.sellIn <= 0) this.quality = 0;
        this.sellIn--;
    }
}
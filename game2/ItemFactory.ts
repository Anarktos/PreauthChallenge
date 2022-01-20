import { AgedBrie } from "./Items/AgedBrie";
import { BackstagePass } from "./Items/BackstagePass";
import { Conjured } from "./Items/Conjured";
import { Item } from "./Item";
import { Normal } from "./Items/Normal";
import { Sulfuras } from "./Items/Sulfuras";

export class itemFactory {
    static newItem(name: string): Item {
        switch (name) {
            case 'aged brie':
                return new AgedBrie('Aged Brie', 10, 30);
                break;
            case 'backstage pass':
                return new BackstagePass('Backstage Pass', 10, 30);
                break;
            case 'conjured':
                return new Conjured('Conjured', 15, 50);
                break;
            case 'normal':
                return new Normal('Normal', 5, 20);
                break;
            case 'sulfuras':
                return new Sulfuras('Sulfuras', 100, 80);
                break;
            default:
                console.log(`cannot find ${name}`);
        }
    }
}
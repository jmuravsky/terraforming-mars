import { Tags } from "../Tags";
import { Player } from "../../Player";
import { PreludeCard } from "./PreludeCard";
import { IProjectCard } from "../IProjectCard";

export class MetalsCompany extends PreludeCard implements IProjectCard {
    public tags: Array<Tags> = [];
    public name: string = "Metals Company";
    public play(player: Player) {     
        player.megaCreditProduction++;
        player.titaniumProduction++;
        player.steelProduction++;			
        return undefined;
    }
}


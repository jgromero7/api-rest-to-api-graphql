import { checkRound } from './../lib/utils';
import { F1 } from './data-source';
import { checkSeason } from '../lib/utils';

export class RacesData extends F1 {
    constructor() {
        super();
    }

    async getSeason(season: string) {
        season = checkSeason(season);
        return await this.get(`${season}.json?`, {
            cacheOption: {ttl: 60}
        });
    }

    async getSeasonRound(season: string, round: number) {
        season = checkSeason(season);
        round = checkRound(round);
        return await this.get(`${season}/${round}.json?`, {
            cacheOption: {ttl: 60}
        });
    }
}
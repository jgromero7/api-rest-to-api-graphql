import { F1 } from './data-source';
import { checkSeason, checkRound, paginationOptions} from '../lib/utils';
export class DriversData extends F1 {
    constructor() {
        super();
    }

    async getDrivers(limit: number = -1, offset: number = 1) {
        const filter = paginationOptions(limit, offset);

        return await this.get(`drivers.json?${filter}`, {
            cacheOption: {ttl: 60}
        });
    }

    async getDriverBySeason(season: string) {
        season = checkSeason(season);
        return await this.get(`${season}/drivers.json?`, {
            cacheOption: {ttl: 60}
        });
    }

    async getDriversBySeasonRound(season: string, round: number) {
        season = checkSeason(season);
        round = checkRound(round);

        return await this.get(`${season}/${round}/drivers.json?`, {
            cacheOption: {ttl: 60}
        });
    }

    async getDriversById(id: string) {
        return await this.get(`drivers/${id}.json`, {
            cacheOption: {ttl: 60}
        });
    }

    async getDriverStandings(season: string) {
        season = checkSeason(season);

        return await this.get(`${season}/driverStandings.json`, {
            cacheOption: {ttl: 60}
        });
    }
}
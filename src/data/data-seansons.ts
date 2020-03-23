import { F1 } from './data-source';

export class SeasonsData extends F1 {
    constructor() {
        super();
    }

    async getSeansons() {
        return await this.get('seasons.json?limit=80', {
            cacheOption: {ttl: 60}
        });
    }
}
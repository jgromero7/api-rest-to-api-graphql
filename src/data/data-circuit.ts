import { F1 } from './data-source';
import { paginationOptions } from './../lib/utils';

export class CircuitData extends F1 {
    constructor() {
        super();
    } 

    async getCircuits(limit: number = -1, offset: number = 1) {
        const filter = paginationOptions(limit, offset);

        return await this.get(`circuits.json?${filter}`, {
            cacheOption: {ttl: 60}
        });
    }

    async getCircuitById(id: string) {
        return await this.get(`circuits/${id}.json`, {
            cacheOption: {ttl: 60}
        });
    }
}
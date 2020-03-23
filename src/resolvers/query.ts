import { IResolvers } from "graphql-tools";

const resolvers: IResolvers = {
    Query: {
        async seasonsList(_: void, __: any, { dataSources }) {
            return await dataSources.seasons.getSeansons()
                .then((data: any) => data.MRData.SeasonTable.Seasons);
        },
        async reacesBySeason(_: void, {season}, {dataSources}) {
            return await  dataSources.races.getSeason(season)
                .then((data: any) => data.MRData.RaceTable.Races);
        },
        async reaceBySeasonRound(_: void, {season, round}, {dataSources}) {
            return await  dataSources.races.getSeasonRound(season, round)
                .then((data: any) => data.MRData.RaceTable.Races[0]);
        },
        async driversList(_: void, {limit, offset}, {dataSources}) {
            return await  dataSources.drivers.getDrivers(limit, offset)
                .then((data: any) => data.MRData.DriverTable.Drivers);
        },
        async driversBySeason(_: void, {season}, {dataSources}) {
            return await  dataSources.drivers.getDriverBySeason(season)
                .then((data: any) => data.MRData.DriverTable.Drivers);
        },
        async driversBySeasonRound(_: void, {season, round}, {dataSources}) {
            return await  dataSources.drivers.getDriversBySeasonRound(season, round)
                .then((data: any) => data.MRData.DriverTable.Drivers);
        },
        async driversById(_: void, {id}, {dataSources}) {
            return await  dataSources.drivers.getDriversById(id)
                .then((data: any) => data.MRData.DriverTable.Drivers[0]);
        },
        async driverStandings(_: void, {season}, {dataSources}) {
            return await  dataSources.drivers.getDriverStandings(season)
                .then((data: any) => data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
        },
        async circuitList(_: void, {limit, offset}, {dataSources}) {
            return await  dataSources.circuits.getCircuits(limit, offset)
                .then((data: any) => data.MRData.CircuitTable.Circuits);
        },
        async circuitById(_: void, {id}, {dataSources}) {
            return await  dataSources.circuits.getCircuitById(id)
                .then((data: any) => data.MRData.CircuitTable.Circuits[0]);
        }
    }
}

export default resolvers;
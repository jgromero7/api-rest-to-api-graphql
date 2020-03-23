import { IResolvers } from "graphql-tools";
import { getWikipediaMobileUrl } from './../lib/utils';

const type: IResolvers = {
    Season: {
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Race: {
        name: parent => parent.raceName,
        urlMobile: parent => getWikipediaMobileUrl(parent.url),
        circuit: parent => parent.Circuit
    },
    Circuit: {
        id: parent => parent.circuitId,
        name: parent => parent.circuitName,
        urlMobile: parent => getWikipediaMobileUrl(parent.url),
        location: parent => parent.Location
    },
    Driver: {
        id: parent => parent.driverId,
        name: parent => parent.givenName.concat(' ').concat(parent.familyName),
        urlMobile: parent => getWikipediaMobileUrl(parent.url),
    },
    DriverStanding: {
        driver: parent => parent.Driver,
        constructors: parent => parent.Constructors
    },
    Constructor: {
        id: parent => parent.constructorId,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    }
}

export default type;
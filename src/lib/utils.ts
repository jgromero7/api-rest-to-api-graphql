export const getWikipediaMobileUrl = (url: any) => {
    return (url !== undefined) ? url.replace('wikipedia', 'm.wikipedia') : '';
}

export const checkSeason = (season: string) => {
    const currentYear = new Date().getFullYear();
    return (isNaN(+season) || +season < 1950 || +season > currentYear) ? String(currentYear) : season;
}

export const checkRound = (round: number) => {
    return (round >= 100) ? 1 : round;
}

export const paginationOptions = (limit: number = -1, offset: number = 1) => {
    if (limit === -1) limit = 1000;

    const axuOffset = (offset - 1) * limit;
    const auxLimit = limit;
    const filter = `limit=${auxLimit}&offset=${axuOffset}`;

    return filter;
}
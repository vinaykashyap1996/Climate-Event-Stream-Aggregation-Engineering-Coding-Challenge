import { Candlestick } from "../models/model";
// In-memory storage for demo purposes
const candlestickStore: Record<string, Record<string, Candlestick>> = {};

export class CandlestickService {
    static addEvent(city: string, timestamp: string, temperature: number) {
        // Group by city and hour
        const hour = new Date(timestamp);
        hour.setMinutes(0, 0, 0);
        const hourKey = hour.toISOString();

        if (!candlestickStore[city]) candlestickStore[city] = {};
        const cityStorage = candlestickStore[city];

        const candlestick = cityStorage[hourKey];

        if (!candlestick) {
            cityStorage[hourKey] = {
                city,
                hour: hourKey,
                open: temperature,
                close: temperature,
                min: temperature,
                max: temperature,
            };
        } else {
            candlestick.close = temperature;
            candlestick.min = Math.min(candlestick.min, temperature);
            candlestick.max = Math.max(candlestick.max, temperature);
        }
    }

    static getCandlesticks(city: string, from?: string, to?: string): Candlestick[] {
        const cityStore = candlestickStore[city];
        if (!cityStore) return [];
        let items = Object.values(cityStore);

        if (from) {
            items = items.filter(cs => cs.hour >= from);
        }
        if (to) {
            items = items.filter(cs => cs.hour <= to);
        }
        return items.sort((a, b) => a.hour.localeCompare(b.hour));
    }
}
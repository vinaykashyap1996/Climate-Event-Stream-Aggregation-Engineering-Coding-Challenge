export interface Candlestick {
    city: string;
    hour: string; // ISO string
    open: number;
    close: number;
    min: number;
    max: number;
}
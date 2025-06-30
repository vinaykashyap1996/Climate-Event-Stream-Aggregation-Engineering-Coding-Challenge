import { CandlestickService } from "../business/service";

export const candlestickResolvers = {
    Query: {
        candlesticks: (
            _: unknown,
            args: { city: string; from?: string; to?: string },
            context: any
        ) => {
            // Add AuthZ checks here if needed
            return CandlestickService.getCandlesticks(args.city, args.from, args.to);
        }
    }
};
import WebSocket from "ws";
import { CandlestickService } from "../../business/candlestick/business/service";

const WS_URL = process.env.WS_URL || "ws://localhost:8765";

export class WSClientService {
    static ws: WebSocket | null = null;

    static start() {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) return;

        this.ws = new WebSocket(WS_URL);

        this.ws.on("open", () => {
            console.log(`[WS] Connected to event stream at ${WS_URL}`);
        });

        this.ws.on("message", (data: WebSocket.Data) => {
            try {
                const event = JSON.parse(data.toString());
                if (
                    typeof event.city === "string" &&
                    typeof event.timestamp === "string" &&
                    typeof event.temperature === "number"
                ) {
                    CandlestickService.addEvent(event.city, event.timestamp, event.temperature);
                }
            } catch (err) {
                console.error("[WS] Malformed event:", err);
            }
        });

        this.ws.on("close", () => {
            console.warn("[WS] Connection closed, will attempt reconnect in 5s");
            setTimeout(() => WSClientService.start(), 5000);
        });

        this.ws.on("error", (err) => {
            console.error("[WS] Error:", err);
        });
    }
}
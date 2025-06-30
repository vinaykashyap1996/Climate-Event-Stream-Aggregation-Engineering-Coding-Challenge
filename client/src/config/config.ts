
type Env = "localdev";

interface Config {
    apiUrl: string;
    debug: boolean;
}

const ENV = (process.env.REACT_APP_ENV as Env) || "localdev";

const configs: Record<Env, Config> = {
    localdev: {
        apiUrl: process.env.CLIMATE_AGGREGATION_LOCALDEV_BACKEND_URL || "http://localhost:4000/graphql",
        debug: true,
    },
};

const config = configs[ENV];

export default config;
import "dotenv/config";

export const EnviromentVariables = {
  get TMDB_READ_ACCESS_TOKEN() {
    return this.getEnvVariable("TMDB_READ_ACCESS_TOKEN");
  },

  get DATABASE_URL() {
    return this.getEnvVariable("DATABASE_URL");
  },

  get DATABASE_AUTH_TOKEN() {
    return this.getEnvVariable("DATABASE_AUTH_TOKEN");
  },

  getEnvVariable(key: string) {
    const value = process.env[key];

    if (!value) throw Error(`${key} is not defined`);

    return value;
  },
};

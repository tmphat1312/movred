export const EnviromentVariables = {
  get TMDB_READ_ACCESS_TOKEN() {
    return this.getEnvVariable("TMDB_READ_ACCESS_TOKEN");
  },

  getEnvVariable(key: string) {
    const value = process.env[key];

    if (!value) throw Error(`${key} is not defined`);

    return value;
  },
};

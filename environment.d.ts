declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTH0_CLIENT_ID: string,
      AUTH0_CLIENT_SECRET: string,
      AUTH0_DOMAIN: string,
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }
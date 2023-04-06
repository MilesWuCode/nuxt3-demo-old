module.exports = {
  apps: [
    {
      name: 'App',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}

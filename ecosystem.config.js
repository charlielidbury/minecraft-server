module.exports = {
  apps: [
    {
      name: "minecraft-server",
      cwd: ".",
      script: "java",
      args: [
        "-Xmx512M",
        "-Xms512M",
        "-jar",
        "forge-1.15.2-31.2.0.jar",
        "nogui",
      ],
      watch: true,
      ignore_watch: ["world", "logs"],
      env_hook: {
        command: "git pull && pm2 restart minecraft-server",
        cwd: ".",
      },
    },
  ],
};

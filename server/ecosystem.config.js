module.exports = {
    apps : [
    {
      name: 'Server commiets',
      script: "index.js",
      args:"start",
      instances: 1,
      autorestart: true,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '64M',
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
    },
  ]
  };
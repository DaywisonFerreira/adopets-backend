const { createLogger, format, transports, config } = require('winston');
const path = require('path');

export const loggerInfo = createLogger({
  level: 'info',
  transports: [
    new transports.File({
      json: true,
      filename: path.resolve(__dirname, '..', 'logs', 'info.log'),
      format: format.combine(format.timestamp(), format.json()),
    }),
  ]
})

export const loggerError = createLogger({
  level: 'error',
  transports: [
    new transports.File({
      json: true,
      filename: path.resolve(__dirname, '..', 'logs', 'error.log'),
      format: format.combine(format.timestamp(), format.json()),
    }),
  ]
})


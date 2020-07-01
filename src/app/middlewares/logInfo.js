import {loggerInfo} from '../../utils/logger';

export default (req, res, next) => {
  loggerInfo.info(`user:${req.userId || ''} - ${req.method} - ${req.originalUrl} - ip:${req.ip}`);
  return next();
};
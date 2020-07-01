import {loggerError} from '../../utils/logger';
import AppError from '../../errors/AppError';


export default (err, req, res, next) => {
  if(err instanceof AppError) {
    loggerError.error(`user:${req.userId || ''} - ${req.method} - ${req.originalUrl} - ip:${req.ip} - ${err.message}`);
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  } else {
    loggerError.error(err.message);
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    })
  }
};
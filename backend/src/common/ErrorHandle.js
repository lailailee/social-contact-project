export default (ctx, next) => {
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    } else {
      ctx.status = err.status || 500
      ctx.body = Object.assign({
        code: 500,
        msg: err.message
      }, process.NODE_ENV === 'development' ? { stack: err.stack } : {})
    }
  });
}
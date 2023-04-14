module.exports = {
 mongodburl : 'mongodb://0.0.0.0:27017/cmsdb',
 PORT : process.env.PORT || 3000,
  globalVariables: (req, res, next) => {
        res.locals.success_message = req.flash('success-message');
        res.locals.error_message = req.flash('error-message');        
        
        next();
    }
};

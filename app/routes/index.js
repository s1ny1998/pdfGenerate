'use strict';

const pdfRouter = require('./pdf.js');

module.exports = (app) => {
  app.use('/api/generate', pdfRouter);
};

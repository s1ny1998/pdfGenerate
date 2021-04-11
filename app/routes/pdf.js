'use strict';

const express = require('express');

const pdfCtrl = require('../controllers/pdfGenerator');


const router = express.Router();

router.route('/')

    // Create PDF
    .post(pdfCtrl.generatePdf);


module.exports = router;
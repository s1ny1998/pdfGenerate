'use strict';

// const User = require('../../models/user');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const generatePdf = async (req, res, next) => {
    try {
        var input = req.body;
        console.log(input);
        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream('output.pdf'));
        input.forEach(element => {
            doc
                .fontSize(25)
                .text(`Name: ${element.name}`)
                .moveDown(0.5);

            doc
                .fontSize(25)
                .text(`Date Of Birth: ${element.dob}`)
                .moveDown(0.5);

            doc
                .fontSize(25)
                .text(`Location: ${element.location}`)
                .moveDown(0.5);

            doc
                .fontSize(25)
                .text(`==============================`)
                .moveDown(0.5);


            doc.moveDown();

        });

        doc.end();

        console.log(req.body);
        res.json({ done: true });
    } catch (error) {
        next(error);
    }
};



module.exports = {
    generatePdf
};
"use strict"

import fs from 'fs'

export default class CSVReader {

    constructor(filePath) {
        this.delimeter = ","
        this.currentLineIndex = 0
        this.rawData = "cat"

        this.filePath = filePath

        // Read file
        fs.readFile(this.filePath, function (err, data) {
            if (err) {
                return console.error(err)
            }

            this.rawData = data
        });



        // Split into lines
        this.lines = this.rawData.replace(/\r\n/g, "\r").replace(/\n/g, "\r").split(/\r/)

        console.log(this.rawData)
        console.log(">>>>>>>>>>>>>>")
        console.log(this.lines)
    }
}
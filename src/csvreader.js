"use strict"

import fs from 'fs'

export default class CSVReader {

    constructor(filePath) {
        this.delimeter = ","

        this.filePath = filePath
    }

    print() {
        fs.readFile(this.filePath, function (err, data) {
            if (err) {
                return console.error(err)
            }
            console.log(data.toString())
        });
    }
}
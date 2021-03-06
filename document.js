const fs = require("fs")

class RustDocument {
    constructor(name, path, connection) {
        this.name = name
        this.path = path
        this.connection = connection

        if (fs.existsSync(name)) throw new Error("Document already exists.")
        fs.writeFileSync(path, "[]")
    }

    Add = (data) => {
        try {
            let res = this.connection.ReadDocument(this.name)
            res.push(data)

            fs.writeFileSync(this.path, JSON.stringify(res), "utf-8")
        } catch (err) {
            throw err
        }
    }

    Delete = (data) => {

    }

    Query = (data) => {

    }
}

module.exports = RustDocument
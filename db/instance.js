const { randomUUID } = require('crypto');
const asyncFS = require('fs/promises')
const notes = require('./db.json');

class JsonDataBase {
    constructor(json = "db.json") {
        this.json = json;
        this.options = {
            charset: 'UTF-8',
        }
        this.data = () => asyncFS.readFile(`${__dirname}/${this.json}`, this.options,)
    }

    async readData() {
        const data = await this.data()
        console.table(data)
        return data ? data : new Error('Data could not be read')
    }

    async writeData(note = {}) {
        console.info('writing data to db.json ... standby')
        const data = await this.data()
        if (data) {
            console.table(data)
            note.id = randomUUID()
            try {
                return await asyncFS.writeFile(`${__dirname}/${this.json}`, JSON.stringify(note))
            } catch (error) {
                console.error(error)
            }
            finally {
                console.info('finally block will always run error or no error')
            }

        }
    }

}


const testDb = new JsonDataBase()
console.log(testDb.readData())

class Note {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }
}
const myNote = new Note('Sports', 'I play basketball')
const myNote2 = new Note('Programming', 'Is hard')

testDb.writeData(myNote2);

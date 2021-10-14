const fs = require('fs');

class Carrito {

    array = [];
    
    constructor (nameBackup) {
        this.nameBackup = nameBackup;
        this.backupPath = `./backup/${ nameBackup }.json`;

        this.leerBackup();
    };

    get dataBackup () {
        return this.array;
    };

    addNewItem( data = '' ) {

        this.array.push( data );
        this.grabarBackup();
        console.log(`Backup ${ this.nameBackup } grabado con exito`);

    };

    grabarBackup() {

        fs.writeFileSync( this.backupPath, JSON.stringify( this.array ) );
        
    };

    leerBackup() {

        if ( !fs.existsSync( this.backupPath ) ) {
            return null;
        }

        const info = fs.readFileSync(this.backupPath, { encoding: 'utf-8' });
        const data = JSON.parse( info );
        this.array = data;

    };
}

module.exports = Carrito
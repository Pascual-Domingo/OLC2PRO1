

function Error(tipo, descripcion, linea, columna){
    return {
        tipo: tipo,
        descripcion: descripcion,
        linea: linea,
        columna: columna
    }
}

export class TE{
    tblErrores = [];

    add(tipo, descripcion, linea, columna){
        const result = Error(tipo, descripcion, linea, columna);
        this.tblErrores.push(result);
    }

    print(){
        let allErrores = "";
        this.tblErrores.forEach(element => {
            allErrores += "[error][ linea: "+element.linea+" columna: "+element.columna+" ] "+element.descripcion+"\n";
        });
        return allErrores;
    }

    get(){
        return this.tblErrores;
    }
}


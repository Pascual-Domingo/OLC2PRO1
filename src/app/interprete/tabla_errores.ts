export let errorSem = [];
export let errorSin = [];
export let errorLex = [];


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
    semantico = [];
    lexico = [];
    
   
    add(tipo, descripcion, linea, columna){
        const result = Error(tipo, descripcion, linea, columna);
        this.tblErrores.push(result);
        errorSem.push(result);
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

export class SINTACTOCO {
    constructor(tipo, descripcion, linea, columna){
        const result = Error(tipo, descripcion, linea, columna);
        errorSin.push(result);
    }

}

export class ERLEXICO {
    constructor(tipo, descripcion, linea, columna){
        const result = Error(tipo, descripcion, linea, columna);
        errorLex.push(result);
    }

}

export function resetTE(){
    errorSem = [];
    errorSin = [];
    errorLex = [];
}
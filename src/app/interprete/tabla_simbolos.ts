export let tablSim = [];
export let estado_tblsym = [];

// Constantes para los tipos de datos.
const tIPO_DATO = {
    NUMERO: 'NUMERO',
    STRING: 'STRING',
    BOOLEANO: 'BOOLEAN',
    IDENTIFICADOR: 'IDENTIFICADOR',
    VOID:           'VOID'

}


/**
 * Función que crea objetos de tipo Símbolo.
 * @param {*} id 
 * @param {*} tipo 
 * @param {*} valor 
 */
function crearSimbolo(tipo_decla, id, tipo, valor, ambito, linea, columna, parametro) {
  // if(tipo !== undefined) tipo = tipo.valor;  //si existe tipo de dato
   
    return {
        tipo_declaracion: tipo_decla,
        id: id,
        tipo: tipo,
        valor: valor,
        ambito: ambito,
        linea: linea,
        columna: columna,
        parametro: parametro
    }
}

function idenRepetidos(variables, id){
    let flag = false;
    for (let index = 0; index < variables.length; index++) {
        if(id === variables[index].id){
            flag = true;
            break;
        }
        
    }
    return flag;
}

/**
 * Clase que representa una Tabla de Símbolos.
 */
class TS {

    /**
     * El costructor recibe como parámetro los simbolos de la tabla padre.
     * @param {*} simbolos 
     */
    _simbolos;
    _nuevoSimbolo;
    Terrores;
    constructor(simbolos, tblError) {
        this._simbolos = simbolos;
        this._nuevoSimbolo = [];
        this.Terrores = tblError;
    }

    /**
     * Función para gregar un nuevo símbolo.
     * Esta función se usa en la sentencia de Declaración.
     * @param {*} id 
     * @param {*} tipo 
     */
    agregar(tipo_decla, id, tipo, valor, ambito, linea, columna, parametro) {
        if(!idenRepetidos(this._nuevoSimbolo, id)){
            const nuevoSimbolo = crearSimbolo(tipo_decla, id, tipo, valor, ambito, linea, columna, parametro);
        this._simbolos.push(nuevoSimbolo);
        this._nuevoSimbolo.push(nuevoSimbolo);
        tablSim.push(nuevoSimbolo);
        }else{
            this.Terrores.add("semantico", 'la variable -- '+id+' -- ya exixte', linea, columna);
        }
        
    }

    /**
     * Función para actualizar el valor de un símbolo existente.
     * Esta función se usa en la sentencia de Asignación.
     * @param {*} id 
     * @param {*} valor 
     */
    actualizar(id, valor, linea, columna) { //AQUI VAMOS A VALIDAR TIPOS

        const simbolo = this._simbolos.filter(simbolo => simbolo.id === id)[0];
        if (simbolo) {
            if (simbolo.tipo_declaracion === "const" && simbolo.valor !== undefined) {
                this.Terrores.add("semantico", 'una variable constante no se puede actualizar', linea, columna);
                return;
            }
            if (simbolo.tipo === undefined) {
                if (valor.tipo === TIPO_DATO.NUMERO) {
                    if (valor.valor instanceof String) { //para que no hayan clavos, convertimos si es necesario
                        simbolo.valor = parseInt(valor.valor, 10);
                    } else {
                        simbolo.valor = valor.valor;
                    }
                    simbolo.tipo = valor.tipo;
                } else {
                    if (valor.valor instanceof Number) { //para que no hayan clavos, convertimos si es necesario
                        simbolo.valor = valor.valor.toString();
                    } else {
                        simbolo.valor = valor.valor;
                    }
                    simbolo.tipo = valor.tipo;
                }
            } else if (simbolo.tipo === valor.tipo) {
                if (simbolo.tipo === TIPO_DATO.NUMERO) {
                    if (valor.valor instanceof String) { //para que no hayan clavos, convertimos si es necesario
                        simbolo.valor = parseInt(valor.valor, 10);
                    } else {
                        simbolo.valor = valor.valor;
                    }
                } else {
                    if (valor.valor instanceof Number) { //para que no hayan clavos, convertimos si es necesario
                        simbolo.valor = valor.valor.toString();
                    } else {
                        simbolo.valor = valor.valor;
                    }
                }

            } else {
                this.Terrores.add("semantico", 'la variable: -- ' + id + ' -- tiene tipo: ' + simbolo.tipo + ' y el valor a asignar es de tipo: ' + valor.tipo, linea, columna);
            }
        }
        else {
            this.Terrores.add("semantico", 'la variable: -- ' + id + ' -- no ha sido definida ', linea, columna);
        }
    }

    /**
     * Función para obtener el valor de un símbolo existente.
     * @param {*} id 
     */
    obtener(id, linea, columna) {
        const simbolo = this._simbolos.filter(simbolo => simbolo.id === id)[0];

        if (simbolo) return simbolo; //aqui devolvemos el simbolo completo
        else this.Terrores.add("semantico", 'la variable: -- ' + id + ' -- no ha sido definida ', linea, columna);
    }

    /**
     * Función getter para obtener los símbolos.
     */
    get simbolos() {
        return this._simbolos;
    }

    /** 
     * imprimir tabla de simbolos
    */

    print() {
        this._simbolos.forEach(element => {
            console.log(element);
            estado_tblsym.push(element);
        });
    }
}

// Exportamos las constantes y la clase.
export const TIPO_DATO = tIPO_DATO;
export { TS }
export function resetTS(){
    tablSim = [];
    estado_tblsym = [];
}




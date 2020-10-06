
import { TIPO_OPERACION, TIPO_VALOR, TIPO_INSTRUCCION, instruccionesAPI, TIPO_OPCION_SWITCH } from './instrucciones';
import { TIPO_DATO, TS } from './tabla_simbolos';
import { TE } from './tabla_errores';
import { TRANSFERENCIA } from './transferencia';

export let graficarTS;
export let exportAST;

let tsGlobal: TS;
let Terrores: TE;
let transferir = new TRANSFERENCIA(false);
let salidaConsola = "";
let _ambito;

function _main(AST) {
  exportAST = AST;
  graficarTS = [];
  _ambito = "global";
  console.log(AST);
  Terrores = new TE();
  tsGlobal = new TS([], Terrores);
  salidaConsola = "";
  primerRecorrido(AST);
  segundoRecorrido(AST);
  //tsGlobal.print();
  return Terrores.print() + salidaConsola;
}

function primerRecorrido(instrucciones: any) { //guarda funciones
  if (instrucciones.tipo === TIPO_INSTRUCCION.FUNCION) {
    procesarDeclaracion(instrucciones, tsGlobal);
  }
  try {
    primerRecorrido(instrucciones.izquierda);
    primerRecorrido(instrucciones.derecha);
  } catch (error) {

  }

}

function segundoRecorrido(instruccion) { //recopila variables globales y ejecucion
  if (instruccion.tipo === 'INSTRUCCIONES') {
    listaInstruccion(instruccion.instruccion, tsGlobal, transferir);
  }
  try {
    segundoRecorrido(instruccion.izquierda);
    segundoRecorrido(instruccion.derecha);
  } catch (error) {

  }
}

function listaInstruccion(instruccion, tablaDeSimbolos, miTransferencia) {
  for (let i = 0; i < instruccion.length; i++) {
    if (instruccion[i].tipo === TIPO_INSTRUCCION.IMPRIMIR) {
      try { imprimir(instruccion[i], tablaDeSimbolos); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.VARIABLE) {
      try { procesarVariables(instruccion[i], tablaDeSimbolos); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.LLAMADA) {
      try { procesarfuncion(instruccion[i], tablaDeSimbolos); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.TRANSFERIR) {
      try { procesarTransferencia(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.IF) {
      try { procesarIf(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.IF_ELSE) {
      try { procesarIf_else(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.ELSEIF) {
      try { procesarElseIf(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.MASMAS) {
      try { masMas(instruccion[i], tablaDeSimbolos); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.MENOSMENOS) {
      try { menosMenos(instruccion[i], tablaDeSimbolos); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.SWITCH) {
      try { procesarSwitch(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.INS_WHILE) {
      try { procesarwHILE(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.INS_DOWHILE) {
      try { procesarDOwHILE(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.INS_FOR) {
      try { procesarFor(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.SET_VEC) { //setear vector/array
      try { modificarArray(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.IMPRIMIR_ARRAY) { //setear vector/array
      try { printArrayConsole(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.GRAFICARTS) { //setear vector/array
      try { graficar_ts(tablaDeSimbolos); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.MIPUSH) { //setear vector/array
      try { procesarPush(instruccion[i], tablaDeSimbolos); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.MIPOP) { //setear vector/array
      try { procesarPop(instruccion[i], tablaDeSimbolos); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.FOROF) { //setear vector/array
      try { procesarforOf(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.FORIN) { //setear vector/array
      try { procesarforIN(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    } else if (instruccion[i].tipo === TIPO_INSTRUCCION.MITYPE) { //setear vector/array
      try { procesarType(instruccion[i], tablaDeSimbolos, miTransferencia); } catch (error) { }
    }



    if (miTransferencia.flagContinue || miTransferencia.flagBreak || miTransferencia.flagReturn) break;

  }

}

function mistype(identificador, tablaDeSimbolos){
    for (let index = 0; index < (tablaDeSimbolos.simbolos).length; index++) {
      const element = (tablaDeSimbolos.simbolos)[index];
      if(identificador === element.id){
          return element;
      }
    }
    return 'null';
}

function saveObj(instruccion, tablaDeSimbolos) {
  let nodo = [];
  //console.log(instruccion);
  (instruccion.expresion).forEach(element => {
    //console.log(element);
    let mitipo = element.expresion.valor;
    let mivalor = element.expresion.valor;
    let _iden = mistype(element.identificador[0], tablaDeSimbolos);
    if( _iden !== 'null'){
      mitipo = _iden.tipo;
      if(mitipo === TIPO_DATO.NUMERO){
        mivalor = parseInt(_iden.valor);
      }else{
        mivalor = _iden.valor;
      }
      
    }
   
    if (element.expresion.tipo == TIPO_VALOR.BOOLEANO || element.expresion.tipo == TIPO_VALOR.NUMERO || element.expresion.tipo == TIPO_VALOR.CADENA) {
      mitipo = procesarcadena(element.expresion, tablaDeSimbolos).tipo;
      mivalor = procesarcadena(element.expresion, tablaDeSimbolos).valor;

    }
    let obj = {
      identificador: element.identificador[0],
      tipo: mitipo,
      valor: mivalor
    }
    nodo.push(obj);
  });
  return nodo;
}

function procesarType(instruccion, tablaDeSimbolos, miTransferencia) {
  //console.log(instruccion);
  let nodo = saveObj(instruccion, tablaDeSimbolos);
  //console.log(nodo);
  /* guardar el bojeto (type) en la tabla de simbolo */
  tablaDeSimbolos.agregar(
    "type",
    instruccion.identificador[0],
    instruccion.identificador[0],    //tipo varriable
    nodo,                         // valor de la variable
    _ambito,
    instruccion.linea,
    instruccion.columna,
    instruccion.parametro
  );

  // tablaDeSimbolos.print();
}

function procesarforIN(instruccion, tablaDeSimbolos, miTransferencia) {
  //console.log(instruccion);
  const result = getIdentificador(instruccion, tablaDeSimbolos);
  //tablaDeSimbolos.obtener(instruccion.identificador, 0, 0);
  //console.log(result);
  const elemento = (result.valor);
  for (let index = 0; index < elemento.length; index++) {
    const element = elemento[index];
    const trans_forOf = new TRANSFERENCIA(miTransferencia.flagFuncion);
    trans_forOf.flagCiclo = true;
    const tsforOF = new TS(copiar(tablaDeSimbolos.simbolos), trans_forOf);
    tsforOF.agregar(
      "let",
      instruccion.id_var,
      result.tipo,
      index,
      "local",
      instruccion.linea,
      instruccion.columna,
      undefined
    );

    listaInstruccion(instruccion.instruccion, tsforOF, trans_forOf);
    if (trans_forOf.flagBreak || trans_forOf.flagReturn) {
      miTransferencia.expresion = trans_forOf.expresion;
      break;
    }
  }
}

function procesarforOf(instruccion, tablaDeSimbolos, miTransferencia) {
  //console.log(instruccion);
  const result = getIdentificador(instruccion, tablaDeSimbolos);
  //tablaDeSimbolos.obtener(instruccion.identificador, 0, 0);
  //console.log(result);
  const elemento = (result.valor);
  for (let index = 0; index < elemento.length; index++) {
    const element = elemento[index];
    const trans_forOf = new TRANSFERENCIA(miTransferencia.flagFuncion);
    trans_forOf.flagCiclo = true;
    const tsforOF = new TS(copiar(tablaDeSimbolos.simbolos), trans_forOf);
    tsforOF.agregar(
      "let",
      instruccion.id_var,
      result.tipo,
      element,
      "local",
      instruccion.linea,
      instruccion.columna,
      undefined
    );

    listaInstruccion(instruccion.instruccion, tsforOF, trans_forOf);
    if (trans_forOf.flagBreak || trans_forOf.flagReturn) {
      miTransferencia.expresion = trans_forOf.expresion;
      break;
    }
  }
}

function procesarPop(instruccion, tablaDeSimbolos) {
  const result = getIdentificador(instruccion, tablaDeSimbolos);
  //tablaDeSimbolos.obtener(instruccion.identificador, 0, 0);
  const retornar = result.valor.pop();
  const valor = { valor: result.valor, tipo: result.tipo }
  tablaDeSimbolos.actualizar(result.id, valor, instruccion.linea, instruccion.columna);
  return { valor: retornar, tipo: result.tipo };
}

function procesarPush(instruccion, tablaDeSimbolos) {
  const result = getIdentificador(instruccion, tablaDeSimbolos);
  //tablaDeSimbolos.obtener(instruccion.identificador, 0, 0);
  const res = procesarcadena(instruccion.expresion, tablaDeSimbolos);
  if (res.tipo === result.tipo) {
    result.valor.push(res.valor);
    const valor = { valor: result.valor, tipo: result.tipo }
    tablaDeSimbolos.actualizar(result.id, valor, instruccion.linea, instruccion.columna);
  } else {
    Terrores.add("semantico", 'se intenta insertar elemnto de tipo ' + res.tipo + ' en el array de tipo ' + result.tipo, instruccion.linea, instruccion.columna);
  }
}

function graficar_ts(tablaDeSimbolos) {
  const x = [];
  (tablaDeSimbolos.simbolos).forEach(element => {
    const y = {
      tipo_declaracion: element.tipo_declaracion,
      id: element.id,
      tipo: element.tipo,
      valor: element.valor,
      ambito: element.ambito,
      linea: element.linea,
      columna: element.columna,
      parametro: element.parametro
    }
    x.push(y);
  });
  graficarTS.push(x);
}

function printArrayConsole(instruccion, tablaDeSimbolos, miTransferencia) {
  const cadena = procesarcadena(instruccion.expresion, tablaDeSimbolos); //cadena entrada
  const miArray = procesarcadena(instruccion.identificador, tablaDeSimbolos);
  salidaConsola += cadena.valor + "  [ ";
  for (let index = 0; index < (miArray.valor).length; index++) {
    const element = (miArray.valor)[index];
    if (index == (miArray.valor).length - 1) {
      salidaConsola += element + " ]";
      break;
    }
    salidaConsola += element + ", ";
  }

  salidaConsola += "\n";

}

function modificarArray(instruccion, tablaDeSimbolos, miTransferencia) {

  const getVec = procesarcadena(instruccion.getVector, tablaDeSimbolos);
  const setVec = getIdentificador(instruccion.setVector, tablaDeSimbolos);
  //tablaDeSimbolos.obtener(instruccion.setVector.identificador, 0, 0);
  const posicion = expAritmetica(instruccion.setVector.expresion, tablaDeSimbolos);

  if (posicion.tipo === TIPO_DATO.NUMERO) {
    if (getVec.tipo === setVec.tipo) {
      setVec.valor[posicion.valor] = getVec.valor;
      const new_valor = { valor: setVec.valor, tipo: setVec.tipo }
      tablaDeSimbolos.actualizar(setVec.id, new_valor, instruccion.linea, instruccion.columna);
    } else {
      Terrores.add("error semantico", ' el array es de tipo ' + setVec.tipo + ' y el valor a asignar es de tipo ' + getVec.tipo, setVec.linea, setVec.columna);
    }
  } else {
    Terrores.add("error semantico", ' solo se acepta NUMERO en las posiciones de arrays, esta intentado usar ' + setVec.tipo, setVec.linea, setVec.columna);
  }
}

function procesarOpTernario(instruccion, tablaDeSimbolos) {
  const valorCondicion = expLogica(instruccion.expresionLogico, tablaDeSimbolos);
  if (valorCondicion) {
    return procesarcadena(instruccion.instruccionVerdadero, tablaDeSimbolos);
  } else {
    return procesarcadena(instruccion.instruccionFalso, tablaDeSimbolos);
  }
}


function procesarFor(instruccion, tablaDeSimbolos, miTransferencia) {
  const tsFor = new TS(copiar(tablaDeSimbolos.simbolos), Terrores);
  if (instruccion.variable.tipo !== TIPO_VALOR.IDENTIFICADOR) {
    //valor = procesarcadena(instruccion.variable, tablaDeSimbolos); //aqui quiero que retorne: tipo y valor
    procesarVariables(instruccion.variable, tsFor);
  }

  const valor = getIdentificador(instruccion.aumento, tsFor);
  //tsFor.obtener(instruccion.aumento.identificador, instruccion.aumento.linea, instruccion.aumento.columna);

  //const valor = procesarExpresionCadena(instruccion.valorVariable, tablaDeSimbolos); //aqui quiero que retorne: tipo y valor
  //tablaDeSimbolos.actualizar(instruccion.variable, valor);
  if (valor.tipo_declaracion === "let") {
    for (let i = valor.valor; expLogica(instruccion.expresionlogica, tsFor); listaInstruccion([instruccion.aumento], tsFor, miTransferencia)) {
      const trans_for = new TRANSFERENCIA(miTransferencia.flagFuncion);
      trans_for.flagCiclo = true;
      const tsPara = new TS(copiar(tsFor.simbolos), trans_for);
      listaInstruccion(instruccion.instruccion, tsPara, trans_for);

      if (trans_for.flagBreak || trans_for.flagReturn) {
        miTransferencia.expresion = trans_for.expresion;
        break;
      }
    }
  } else {
    //error semantico
  }


}

function procesarDOwHILE(instruccion, tablaDeSimbolos, miTransferencia) {
  do {
    const tsMientras = new TS(copiar(tablaDeSimbolos.simbolos), tablaDeSimbolos);
    const trans_while = new TRANSFERENCIA(miTransferencia.flagFuncion);
    trans_while.flagCiclo = true;
    listaInstruccion(instruccion.instruccion, tsMientras, trans_while);

    if (trans_while.flagBreak || trans_while.flagReturn) {
      miTransferencia.expresion = trans_while.expresion;
      break;
    }

  } while (expLogica(instruccion.expresion, tablaDeSimbolos));
}

function procesarwHILE(instruccion, tablaDeSimbolos, miTransferencia) {
  while (expLogica(instruccion.expresion, tablaDeSimbolos)) {
    const tsMientras = new TS(copiar(tablaDeSimbolos.simbolos), tablaDeSimbolos);
    const trans_while = new TRANSFERENCIA(miTransferencia.flagFuncion);
    trans_while.flagCiclo = true;
    listaInstruccion(instruccion.instruccion, tsMientras, trans_while);

    if (trans_while.flagBreak || trans_while.flagReturn) {
      miTransferencia.expresion = trans_while.expresion;
      break;
    }
  }
}

function procesarSwitch(instruccion, tablaDeSimbolos, miTransferencia) {
  var evaluar = true;
  const valorExpresion = procesarcadena(instruccion.expresion, tablaDeSimbolos);
  const tsSwitch = new TS(copiar(tablaDeSimbolos.simbolos), Terrores);
  const trans_switch = new TRANSFERENCIA(miTransferencia.flagFuncion);
  trans_switch.flagSwitch = true;
  const lscasos = instruccion.casos;
  for (let index = 0; index < lscasos.length; index++) {
    if (lscasos[index].tipo === TIPO_OPCION_SWITCH.CASO) {
      const valorExpCase = procesarcadena(lscasos[index].expresion, tsSwitch);
      if (valorExpCase.valor == valorExpresion.valor) {
        listaInstruccion(lscasos[index].instrucciones, tsSwitch, trans_switch);
        evaluar = false;
        if (trans_switch.flagReturn || trans_switch.flagBreak) break;
      }
    } else {
      if (evaluar)
        listaInstruccion(lscasos[index].instrucciones, tsSwitch, trans_switch);
      if (trans_switch.flagReturn || trans_switch.flagBreak) break;
    }
  }

  if (trans_switch.flagReturn) {
    miTransferencia.expresion = trans_switch.expresion;
    miTransferencia.flagReturn = trans_switch.flagReturn;
  }


  /*
  instruccion.casos.forEach(caso => {
    if (caso.tipo == TIPO_OPCION_SWITCH.CASO) {
      const valorExpCase = procesarcadena(caso.expresion, tsSwitch);

      if (valorExpCase.valor == valorExpresion.valor) {
        listaInstruccion(caso.instrucciones, tsSwitch, trans_switch);
        evaluar = false;
        if (trans_switch.flagReturn) break;
      }
    }
    else {
      if (evaluar)
        listaInstruccion(caso.instrucciones, tsSwitch, trans_switch);
    }
  });

  */


}

function procesarIf(instruccion, tablaDeSimbolos, miTransferencia) {
  const valorCondicion = expLogica(instruccion.expresion, tablaDeSimbolos);
  //console.log(valorCondicion);
  if (valorCondicion) {
    const tsIf = new TS(copiar(tablaDeSimbolos.simbolos), Terrores);
    //console.log(instruccion.instrucciones);
    listaInstruccion(instruccion.instrucciones, tsIf, miTransferencia);
  }
  return valorCondicion;
}

function procesarIf_else(instruccion, tablaDeSimbolos, miTransferencia) {
  const valorCondicion = procesarIf(instruccion.instruccionIf, tablaDeSimbolos, miTransferencia);
  if (!valorCondicion) {
    const tsElse = new TS(copiar(tablaDeSimbolos.simbolos), Terrores);
    listaInstruccion(instruccion.instruccionElse, tsElse, miTransferencia);
  }
}

function procesarElseIf(instruccion, tablaDeSimbolos, miTransferencia) {
  const condicionIf = procesarIf(instruccion.instruccionIf, tablaDeSimbolos, miTransferencia);
  let condicionElseIf = false;
  if (!condicionIf) { //entra en las sentencias else if(){}
    const element = instruccion.instruccionElseIf;
    for (let index = 0; index < element.length; index++) { //recorre cada else if
      condicionElseIf = procesarIf(element[index], tablaDeSimbolos, miTransferencia);
      if (condicionElseIf) break; //si lagun else if es verdadero sale del ciclo
    }
  }

  if (instruccion.instruccionElse !== undefined) {
    if (!condicionElseIf) {
      const tsElse = new TS(copiar(tablaDeSimbolos.simbolos), Terrores);
      listaInstruccion(instruccion.instruccionElse, tsElse, miTransferencia);
    }
  }
}

function procesarTransferencia(instruccion, tablaDeSimbolos, miTransferencia) {
  //console.log(instruccion);
  if (instruccion.valor === "break" && (miTransferencia.flagSwitch || miTransferencia.flagCiclo)) {
    miTransferencia.flagBreak = true;
  } else if (instruccion.valor === "return" && instruccion.expresion !== undefined && miTransferencia.flagFuncion) {
    miTransferencia.expresion = procesarcadena(instruccion.expresion, tablaDeSimbolos);
    miTransferencia.flagReturn = true;
  } else if (instruccion.valor === "return" && instruccion.expresion === undefined && miTransferencia.flagFuncion) {
    console.log('funcion sin retorno');
    miTransferencia.flagReturn = true;
  } else {
    let msj = '';
    if (!miTransferencia.flagFuncion) msj = 'una funcion'; else
      if (!miTransferencia.flagCiclo) msj = 'un ciclo'; else
        if (!miTransferencia.flagSwitch) msj = 'un switch-case';
    Terrores.add("semantico", ' la sentencia ' + instruccion.valor + ' debe estar dentro de ' + msj, instruccion.linea, instruccion.columna);
    miTransferencia.flagReturn = true;
  }
}

function procesarfuncion(instruccion, tablaDeSimbolos) {
  _ambito = "local";
  const mifuncion = getIdentificador(instruccion, tablaDeSimbolos);
  const tsFun = new TS(copiar(tsGlobal.simbolos), Terrores);
  const transferenciaFuncion = new TRANSFERENCIA(true);
  let flag: boolean = false;
  if (instruccion.parametro === undefined && mifuncion.parametro === undefined) {
    flag = true;
  } else if (instruccion.parametro !== undefined && mifuncion.parametro !== undefined) {
    if (instruccion.parametro.length === mifuncion.parametro.length) {
      procesarParametro(mifuncion.parametro, instruccion.parametro, tsFun, tablaDeSimbolos);
      flag = true;
    } else {
      Terrores.add("semantico", ' parametro fuera de rango en la funcion ' + mifuncion.id + '() ', mifuncion.linea, mifuncion.columna);
    }
  } else {
    Terrores.add("semantico", ' parametro fuera de rango en la funcion ' + mifuncion.id + '() ', mifuncion.linea, mifuncion.columna);
  }

  if (flag) {
    transferenciaFuncion.flagFuncion = true;
    listaInstruccion(mifuncion.valor, tsFun, transferenciaFuncion);
    if (mifuncion.tipo === transferenciaFuncion.expresion.tipo) return transferenciaFuncion.expresion;
    if (mifuncion.tipo === TIPO_DATO.VOID && transferenciaFuncion.expresion !== undefined) {
      Terrores.add("semantico", ' funcion no retornable ' + mifuncion.id + '() ', mifuncion.linea, mifuncion.columna);
    } else if (mifuncion.tipo === undefined) {
      return transferenciaFuncion.expresion;
    } else {
      Terrores.add("semantico", ' funcion no retornable ' + mifuncion.id + '() ', mifuncion.linea, mifuncion.columna);
    }
  }
}


function procesarParametro(parametro, llamada, tablaDeSimbolos, simboloanterior) {

  for (let i = 0; i < parametro.length; i++) {
    /* crea objeto tipo variable */
    const result = instruccionesAPI.nuevoDeclaracionAsignacion(
      parametro[i].identificador,
      parametro[i].tipo,
      llamada[i],
      parametro[i].linea,
      parametro[i].columna
    );

    result.tipo_declaracion = "let";
    procesarDeclaracion(result, tablaDeSimbolos)
    const valor = procesarcadena(result.expresion, simboloanterior); //aqui quiero que retorne: tipo y valor

    if (valor.tipo == "null") {
      valor.tipo = parametro[i].tipo;
    }
    tablaDeSimbolos.actualizar(result.identificador[0], valor, result.linea, result.columna);
    /*
    if(result.identificador.length == 1){ //si solo es una variable
      tablaDeSimbolos.actualizar(result.identificador[0], valor, result.linea, result.columna);
    }else{//si es variable.variable

    }*/

    //procesar_asiganacionDeclarado(result, tablaDeSimbolos)
  }

}


function masMas(instruccion, tablaDeSimbolos) {
  const sym = getIdentificador(instruccion, tablaDeSimbolos);
  //console.log(sym);
  const valor = { valor: sym.valor + 1, tipo: sym.tipo }
  tablaDeSimbolos.actualizar(sym.id, valor, sym.linea, sym.columna);
  valor.valor = valor.valor - 1;
  return valor;
}

function procesarArray(instruccion, tablaDeSimbolos) {
  let array: any[] = [];
  //console.log(instruccion);
  const elementos = instruccion.expresion.expresion;
  const sym = getIdentificador(instruccion, tablaDeSimbolos);
  //tablaDeSimbolos.obtener(instruccion.identificador, instruccion.linea, instruccion.columna);
  //console.log(sym);
  if (elementos === undefined) {
    const new_valor = { valor: array, tipo: sym.tipo }
    tablaDeSimbolos.actualizar(sym.id, new_valor, instruccion.linea, instruccion.columna);
  }
  for (let index = 0; index < elementos.length; index++) {
    const element = elementos[index];
    const valor = procesarcadena(element, tablaDeSimbolos);
    //console.log(valor);
    if (valor.tipo === sym.tipo) {
      array.push(valor.valor); //gurada elementos del array
    } else {
      Terrores.add("semantico", 'elemento ' + valor.tipo + ' no valido, el array es de tipo ' + sym.tipo, instruccion.linea, instruccion.columna);
    }
  }

  const new_valor = { valor: array, tipo: sym.tipo }
  tablaDeSimbolos.actualizar(sym.id, new_valor, instruccion.linea, instruccion.columna);

}

function menosMenos(instruccion, tablaDeSimbolos) {
  const sym = getIdentificador(instruccion, tablaDeSimbolos);
  const valor = { valor: sym.valor - 1, tipo: sym.tipo }
  tablaDeSimbolos.actualizar(sym.id, valor, sym.linea, sym.columna);
  valor.valor = valor.valor + 1;
  return valor;
}

function procesarAsignacion(instruccion, tablaDeSimbolos) {
  if (instruccion.expresion.tipo === TIPO_INSTRUCCION.ASIGNACON_VEC || instruccion.expresion === undefined) {
    procesarArray(instruccion, tablaDeSimbolos);
  } else {
    //console.log(instruccion);
    const valor = procesarcadena(instruccion.expresion, tablaDeSimbolos); //aqui quiero que retorne: tipo y valor
    if (instruccion.expresion.tipo === TIPO_INSTRUCCION.STRUCT) {
      let val = getIdentificador(instruccion, tablaDeSimbolos);
      valor.tipo = val.tipo;
    }

    if (instruccion.identificador.length == 1) {
      //console.log(instruccion);
      tablaDeSimbolos.actualizar(instruccion.identificador[0], valor, instruccion.linea, instruccion.columna);
    } else {
      let sym = tablaDeSimbolos.obtener(instruccion.identificador[0], 0, 0);
      //console.log(instruccion);
      let result = getElemetObj(instruccion.identificador, sym.valor, tablaDeSimbolos, 1);
      //console.log(result);
      //console.log(valor);
      if (result.tipo === valor.tipo) {
        result.valor = valor.valor;
      } else if (result.tipo == "null") {
        result.valor = valor.valor;
        result.tipo = valor.tipo;
      } else {
        Terrores.add("semantico", 'se esperaban expresiones de tipo ' + result.tipo, instruccion.linea, instruccion.columna);
      }

    }

  }
  //tablaDeSimbolos.print();
}

function procesarDeclaracion(instruccion, tablaDeSimbolos) { //aqui cambiamos para que acepte el tipo_dato de la declaracion
  //console.log(instruccion);
  tablaDeSimbolos.agregar(
    instruccion.tipo_declaracion,
    instruccion.identificador[0],
    instruccion.tipo_variable,
    instruccion.valor,
    _ambito,
    instruccion.linea,
    instruccion.columna,
    instruccion.parametro
  );


}

function procesar_asiganacionDeclarado(instruccion, tablaDeSimbolos) {
  //console.log(instruccion);
  procesarDeclaracion(instruccion, tablaDeSimbolos);
  procesarAsignacion(instruccion, tablaDeSimbolos);
}

function procesarVariables(variables, tablaDeSimbolos) {
  (variables.lsID).forEach(element => {
    element.tipo_declaracion = variables.tipo_declaracion;
    try {
      if (element.tipo === TIPO_INSTRUCCION.DECLARACION) {
        procesarDeclaracion(element, tablaDeSimbolos);
      } else if (element.tipo === TIPO_INSTRUCCION.ASIGNACION_DECLARADA) {
        procesar_asiganacionDeclarado(element, tablaDeSimbolos);
      } else if (element.tipo === TIPO_INSTRUCCION.ASIGNACION) {
        procesarAsignacion(element, tablaDeSimbolos);
      }
    } catch (error) {

    }
  });
}

function imprimir(instruccion, tablaDeSimbolos) {
  const cadena = procesarcadena(instruccion.expresion, tablaDeSimbolos).valor;
  salidaConsola += cadena + '\n';

}

function procesarcadena(instruccion, tablaDeSimbolos) {
  const result = expLogica(instruccion, tablaDeSimbolos);

  if (typeof result === 'boolean') {
    if (result) {
      return { valor: "true", tipo: TIPO_DATO.BOOLEANO }
    }
    return { valor: "false", tipo: TIPO_DATO.BOOLEANO }
  }

  return result;

  /*
  if (expresion.tipo === TIPO_OPERACION.SUMA) {
      // Es una operación de concatenación.
      // En este caso necesitamos procesar los operandos antes de realizar la concatenación.
      // Para esto invocamos (recursivamente) esta función para resolver los valores de los operandos.
      const cadIzq = procesarcadena(expresion.operandoIzq, tablaDeSimbolos).valor;      // resolvemos el operando izquierdo.
      const cadDer = procesarcadena(expresion.operandoDer, tablaDeSimbolos).valor;      // resolvemos el operando derecho.
      // Retornamos el resultado de la operación de concatenación.
      const res=cadIzq + cadDer;
      return {valor: res, tipo: TIPO_DATO.STRING};   

  } else if (expresion.tipo === TIPO_VALOR.CADENA) {
      // Es una cadena.
      // En este caso únicamente retornamos el valor obtenido por el parser directamente.
      return {valor: expresion.valor, tipo: TIPO_DATO.STRING };
  } else {
      // Es una epresión numérica.
      // En este caso invocamos la función que se encarga de procesar las expresiones numéricas
      // y retornamos su valor en cadena.
      return expLogica(expresion, tablaDeSimbolos);
  }

  */
}

function expLogica(expresion, tablaDeSimbolos) {

  if (expresion.tipo === TIPO_OPERACION.AND) {
    // En este caso necesitamos procesar los operandos para &&.
    const valorIzq = expLogica(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
    const valorDer = expLogica(expresion.operandoDer, tablaDeSimbolos);      // resolvemos el operando derecho.
    if (typeof valorIzq === 'boolean' && typeof valorDer === 'boolean') return valorIzq && valorDer;
    Terrores.add("semantico", 'se esperaban expresiones booleanas para ejecutar la: ' + expresion.tipo, expresion.linea, expresion.columna);
    return;
  }
  if (expresion.tipo === TIPO_OPERACION.OR) {
    // En este caso necesitamos procesar los operandos para ||.
    const valorIzq = expLogica(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
    const valorDer = expLogica(expresion.operandoDer, tablaDeSimbolos);      // resolvemos el operando derecho.
    if (typeof valorIzq === 'boolean' && typeof valorDer === 'boolean') return valorIzq || valorDer;
    Terrores.add("semantico", 'se esperaban expresiones booleanas para ejecutar la: ' + expresion.tipo, expresion.linea, expresion.columna);
    return;
  }
  if (expresion.tipo === TIPO_OPERACION.NOT) {
    //console.log(expresion);
    // En este caso necesitamos procesar solamente un operando para !.
    const valor = expLogica(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
    //console.log(valor);
    if (typeof valor === 'boolean') return !valor;
    Terrores.add("semantico", 'se esperaban expresiones booleanas para ejecutar la: ' + expresion.tipo, expresion.linea, expresion.columna);
    return;
  }
  return exprRelacional(expresion, tablaDeSimbolos);
}

function exprRelacional(expresion, tablaDeSimbolos) {

  if (expresion.tipo === TIPO_OPERACION.MAYOR_QUE ||
    expresion.tipo === TIPO_OPERACION.MENOR_QUE ||
    expresion.tipo === TIPO_OPERACION.MAYOR_IGUAL ||
    expresion.tipo === TIPO_OPERACION.MENOR_IGUAL) {
    // En este caso necesitamos procesar los operandos antes de realizar la comparación.
    let valorIzq = expAritmetica(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
    let valorDer = expAritmetica(expresion.operandoDer, tablaDeSimbolos);      // resolvemos el operando derecho.

    if (valorIzq.tipo !== TIPO_DATO.NUMERO || valorDer.tipo !== TIPO_DATO.NUMERO) {
      Terrores.add("semantico", 'se esperaban expresiones numericas para ejecutar la: ' + expresion.tipo, expresion.linea, expresion.columna);
    } else {
      valorIzq = valorIzq.valor;
      valorDer = valorDer.valor;
    }
    if (expresion.tipo === TIPO_OPERACION.MAYOR_QUE) return valorIzq > valorDer;
    if (expresion.tipo === TIPO_OPERACION.MENOR_QUE) return valorIzq < valorDer;
    if (expresion.tipo === TIPO_OPERACION.MAYOR_IGUAL) return valorIzq >= valorDer;
    if (expresion.tipo === TIPO_OPERACION.MENOR_IGUAL) return valorIzq <= valorDer;


  } else if (expresion.tipo === TIPO_OPERACION.DOBLE_IGUAL || expresion.tipo === TIPO_OPERACION.NO_IGUAL) {
    let valorIzq = expAritmetica(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
    let valorDer = expAritmetica(expresion.operandoDer, tablaDeSimbolos);      // resolvemos el operando derecho.

    if (expresion.tipo === TIPO_OPERACION.DOBLE_IGUAL) {
      if (typeof valorIzq === 'boolean' && typeof valorDer === 'boolean') return valorIzq === valorDer;
      return valorIzq.valor === valorDer.valor;
    }
    if (expresion.tipo === TIPO_OPERACION.NO_IGUAL) {
      if (typeof valorIzq === 'boolean' && typeof valorDer === 'boolean') return valorIzq !== valorDer;
      return valorIzq.valor !== valorDer.valor;
    }
  }

  return expAritmetica(expresion, tablaDeSimbolos);


}


function expAritmetica(expresultion: any, tablaDeSimbolos) {

  if (expresultion.tipo === TIPO_INSTRUCCION.STRUCT) {
    //console.log(expresultion);
    let _valor = saveObj(expresultion, tablaDeSimbolos);
    return { tipo: undefined, valor: _valor }
  }
  if (expresultion.tipo === TIPO_INSTRUCCION.MIPOP) {
    return procesarPop(expresultion, tablaDeSimbolos);
  }
  if (expresultion.tipo === TIPO_OPERACION.MILENGTH) {
    let new_expresion = {
      tipo: TIPO_VALOR.IDENTIFICADOR,
      valor: expresultion.valor,
      linea: expresultion.linea,
      columna: expresultion.columna
    }
    const result = expAritmetica(new_expresion, tablaDeSimbolos);
    return { valor: result.valor.length, tipo: TIPO_DATO.NUMERO }
  }

  if (expresultion.tipo === TIPO_INSTRUCCION.ACCESO_VEC) {
    //console.log(expresultion);
    const sym = getIdentificador(expresultion, tablaDeSimbolos);
    //tablaDeSimbolos.obtener(expresultion.identificador, 0, 0);
    const posicion = expAritmetica(expresultion.expresion, tablaDeSimbolos);
    //console.log(posicion);
    if (posicion.tipo === TIPO_DATO.NUMERO) {
      const result = { valor: sym.valor[posicion.valor], tipo: sym.tipo };
      return result;
    } else {
      Terrores.add("semantico", 'se esperaban expresiones numericas para acceder al array: ' + expresultion.identificador, expresultion.linea, expresultion.columna);
    }

  }

  if (expresultion.tipo === TIPO_INSTRUCCION.TERNARIO) {
    return procesarOpTernario(expresultion, tablaDeSimbolos);
  }
  if (expresultion.tipo === TIPO_INSTRUCCION.MASMAS) {
    return masMas(expresultion, tablaDeSimbolos);
  }
  if (expresultion.tipo === TIPO_INSTRUCCION.MENOSMENOS) {
    return menosMenos(expresultion, tablaDeSimbolos);
  }
  if (expresultion.tipo === TIPO_INSTRUCCION.LLAMADA) {
    return procesarfuncion(expresultion, tablaDeSimbolos);
  }
  if (expresultion.tipo === TIPO_OPERACION.NEGATIVO) {
    // Es un valor negado.
    // En este caso necesitamos procesar el valor del operando para poder negar su valor.
    // Para esto invocamos (recursivamente) esta función para sesolver el valor del operando.
    const valor = expAritmetica(expresultion.operandoIzq, tablaDeSimbolos).valor;     // resultolvemos el operando
    const result = valor * -1;  // Retornamos el valor negado.

    return { valor: result, tipo: TIPO_DATO.NUMERO };
  } else
    if (expresultion.tipo == TIPO_OPERACION.SUMA
      || expresultion.tipo === TIPO_OPERACION.RESTA
      || expresultion.tipo === TIPO_OPERACION.MULTIPLICACION
      || expresultion.tipo === TIPO_OPERACION.DIVISION
      || expresultion.tipo === TIPO_OPERACION.EXPONENTE
      || expresultion.tipo === TIPO_OPERACION.MODULAR) {

      let valorIzq = expAritmetica(expresultion.operandoIzq, tablaDeSimbolos);      // resultolvemos el operando izquierdo.
      let valorDer = expAritmetica(expresultion.operandoDer, tablaDeSimbolos);      // resultolvemos el operando derecho.

      if (valorIzq.tipo !== TIPO_DATO.NUMERO || valorDer.tipo !== TIPO_DATO.NUMERO) {
        if (expresultion.tipo === TIPO_OPERACION.SUMA) {
          const result = valorIzq.valor + valorDer.valor;
          return { valor: result, tipo: TIPO_DATO.STRING }
        }
        Terrores.add("semantico", 'se esperaban expresiones numericas para ejecutar la: ' + expresultion.tipo, expresultion.linea, expresultion.columna);
      } else {
        valorIzq = valorIzq.valor;
        valorDer = valorDer.valor;
      }

      /* operar la expresultion aritmetica*/
      if (expresultion.tipo == TIPO_OPERACION.SUMA) {
        const result = valorIzq + valorDer;
        return { valor: result, tipo: TIPO_DATO.NUMERO };
      }
      if (expresultion.tipo === TIPO_OPERACION.RESTA) {
        const result = valorIzq - valorDer;
        return { valor: result, tipo: TIPO_DATO.NUMERO };
      }
      if (expresultion.tipo === TIPO_OPERACION.MULTIPLICACION) {
        const result = valorIzq * valorDer;
        return { valor: result, tipo: TIPO_DATO.NUMERO };
      }
      if (expresultion.tipo === TIPO_OPERACION.MODULAR) {
        const result = valorIzq % valorDer;
        return { valor: result, tipo: TIPO_DATO.NUMERO };
      }
      if (expresultion.tipo === TIPO_OPERACION.DIVISION) {
        if (valorDer === 0) {
          Terrores.add("semantico", 'la division entre 0 da como resultultado: ' + valorIzq / valorDer, expresultion.linea, expresultion.columna);
        } else {
          const result = valorIzq / valorDer;
          return { valor: result, tipo: TIPO_DATO.NUMERO };
        }
      }
      if (expresultion.tipo === TIPO_OPERACION.EXPONENTE) {
        const resultult = Math.pow(valorIzq, valorDer);
        return { valor: resultult, tipo: TIPO_DATO.NUMERO };
      }

      /* aqui termina las operaciones aritmeticas basicas */

    } else if (expresultion.tipo === TIPO_VALOR.CADENA) { //si es cadena o string
      return { valor: expresultion.valor, tipo: TIPO_DATO.STRING }
    }
    else if (expresultion.tipo == TIPO_VALOR.NUMERO) {
      // Es un valor numérico.
      // En este caso únicamente retornamos el valor obtenido por el parser directamente.
      return { valor: expresultion.valor, tipo: TIPO_DATO.NUMERO }
    } else if (expresultion.tipo === TIPO_VALOR.IDENTIFICADOR) {
      if (expresultion.valor[0] === "null") {
        return { valor: "null", tipo: TIPO_DATO.STRING };
      }
      // Obtenemos el valor de la tabla de simbolos
      let sym = tablaDeSimbolos.obtener(expresultion.valor[0], expresultion.linea, expresultion.columna);
      if (expresultion.valor.length > 1) {//obtener valor de objetos
        sym = getElemetObj(expresultion.valor, sym.valor, tablaDeSimbolos, 1);//2 pos ids
        
      }
      if (sym.tipo === TIPO_DATO.BOOLEANO) {
        if (sym.valor === "true") {
          return true;//{ valor: true, tipo: TIPO_DATO.BOOLEANO }
        }
        return false;//{ valor: false, tipo: TIPO_DATO.BOOLEANO }
      }

      return { valor: sym.valor, tipo: sym.tipo };

    } else if (expresultion.tipo === TIPO_VALOR.BOOLEANO) {
      if (expresultion.valor === "true") {
        return true;//{ valor: true, tipo: TIPO_DATO.BOOLEANO }
      }
      return false;//{ valor: false, tipo: TIPO_DATO.BOOLEANO }
    }
    else {
      Terrores.add("semantico", 'expresion no valida ' + expresultion.tipo + ': ' + expresultion.valor, expresultion.linea, expresultion.columna);
    }
}

function getElemetObj(ids, instruccion, tablaDeSimbolos, cont) {
  //console.log(ids);
  //console.log(instruccion);
  let element;
  for (let index = 0; index < instruccion.length; index++) {
    element = instruccion[index];
    
    if(element.identificador == ids[cont]){
      //console.log('length id: '+ids.length+'  cont: '+ (cont+1) );
      if(cont+1 == ids.length){
        //console.log(element.identificador );
        return element;
      }
      break;
    }
    
  }
  return getElemetObj(ids, element.valor, tablaDeSimbolos, cont+1 );
  /*
  if (instruccion.length == cont) {
    console.log("entro uraa");
    return instruccion[0];
  }
  */

}

function getIdentificador(instruccion, tablaDeSimbolos) {
  const tamId = instruccion.identificador.length;
  let sym;
  if (tamId == 1) {
    sym = tablaDeSimbolos.obtener(instruccion.identificador[0], instruccion.linea, instruccion.columna);
  }

  return sym;
}



function copiar(simbolos) {
  let copia = [];
  simbolos.forEach(element => {
    copia.push(element);
  });

  return copia;
}


export const ejecutar = _main;

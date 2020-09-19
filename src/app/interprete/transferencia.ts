
export class TRANSFERENCIA {


    flagContinue = false;
    flagBreak = false;
    flagReturn = false;

    flagFuncion = false;
    flagCiclo = false;
    flagSwitch = false;

    expresion: any;

    constructor(banderaFuncion){
        this.flagContinue = banderaFuncion;
    }

}
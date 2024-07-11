export default class CL_procesar{
    constructor(){
        this.menor = 999;
        this.contper = 0;
        this.acuming = 0.0;
    }
    procesarpersona(per){
        this.contper++;
        this.acuming+=per.ingreso;
        if(per.ingreso<this.menor)
            this.menor=per.ingreso;
    }
    devolvermenor(){
        return this.menor;
    }
    promedio(){
        return this.acuming/this.contper;
    }
}
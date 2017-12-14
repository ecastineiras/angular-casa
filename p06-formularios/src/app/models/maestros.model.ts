export interface PrintersModel{
    id: number|string;
    nombre: string;
}

export interface DepartamentosModel{
    id: number|string;
    nombre: string;
}

export class Printer implements PrintersModel {
    id: number|string;
    nombre: string;

    constructor (id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}

// En TypeScript suele usarse una versión más reducida de lo anterior
export class Departamento implements DepartamentosModel {
    constructor (
        public id: string,
        public nombre: string
    ) {}
}
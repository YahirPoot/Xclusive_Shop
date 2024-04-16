export interface IUsuario {
    nombreUsuario: string;
    contraseña: string;
    tipoUsuario: string;
    idRol: number;
}

export interface ICliente {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    correoElectronico: string;
    idUsuarioNavigation: IUsuario;
}

export interface User {
    idUsuario: number;
    idRol: number;
    nombreUsuario: string;
    contraseña: string;
    tipoUsuario: string;
    rol: null;
}
export interface Login {
    correoElectronico: string;
    contraseña: string;
}
// api.ts
export interface Product {
    session: string | null | undefined;
    idProducto: React.Key;
    idCategoria: number;
    nombreProd:string
    descripcion:string
    precioUnitario:number
    stock:number
    tamaño:string
    talla:string
    color:string
    material:string
    images: string[] | undefined
    title: string
  }

export interface cliente {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    idUsuarioNavigation: {
        nombreUsuario: string;
        contraseña: string;
        correoElectronico: string;
        idRol: number;
    }
}


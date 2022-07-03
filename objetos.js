let persona = {
    nombre: "Manuel",
    apellido: "Turlan",
    edad: 21,
    altura: 1.76,
    eresDesarrollador: true,
}

let myAge = persona.edad;

let myData = [{...persona}, {nombre: "Juan", apellido:"Gomez", edad: 30, altura: 1.80, eresDesarrollador: true}, {nombre: "Lionel", apellido:"Antonio", edad: 23, altura: 1.74, eresDesarrollador: false}];

let orderAge = myData.sort((a, b) => {
    if (a.edad > b.edad) {
        return -1
    } else if (a.edad < b.edad) {
        return +1
    }
})
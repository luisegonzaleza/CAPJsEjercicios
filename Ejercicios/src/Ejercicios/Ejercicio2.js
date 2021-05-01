// Ejercicio 2

{
    const directory=[
    {
    "id": "1",
    "email": "ricardo.jimenez@axity.com"
    },
    {
    "id": "2",
    "email": "jesus.avila@axity.com"
    },
    {
    "id": "3",
    "email": "rocio.esteban@axity.com"
    },
    {
    "id": "4",
    "email": "laura.perez@axity.com"
    },
    {
    "id": "5",
    "email": "francisco.hernandez@axity.com"
    },
    {
    "id": "6",
    "email": "carlos.juarez@axity.com"
    },
    {
    "id": "7",
    "email": "javier.hernandez@axity.com"
    },{
    "id": "8",
    "email": "elizabeth.contreras@axity.com"
    }
    ];
    
    const users = [
    {
    "id": "1",
    "name": "Ricardo",
    "lastName": "Jimenez",
    "email": "ricardo.jimenez@axity.com",
    "yearBirth": "1988",
    "monthBirth": "03",
    "dayBirth": "05",
    "status": "active"
    },
    {
    "id": "2",
    "name": "Jesus",
    "lastName": "Avila",
    "email": "jesus.avila@axity.com",
    "yearBirth": "1989",
    "monthBirth": "02",
    "dayBirth": "04",
    "status": "active"
    },
    {
    "id": "3",
    "name": "Rocio",
    "lastName": "Esteban",
    "email": "rocio.esteban@axity.com",
    "yearBirth": "1987",
    "monthBirth": "01",
    "dayBirth": "03",
    "status": "active"
    },
    {
    "id": "4",
    "name": "Laura",
    "lastName": "Perez",
    "email": "laura.perez@axity.com",
    "yearBirth": "1990",
    "monthBirth": "01",
    "dayBirth": "23",
    "status": "active"
    },
    {
    "id": "5",
    "name": "Francisco",
    "lastName": "Hernadez",
    "email": "francisco.hernandez@axity.com",
    "yearBirth": "1963",
    "monthBirth": "04",
    "dayBirth": "04",
    "status": "active"
    },
    {
    "id": "6",
    "name": "Carlos",
    "lastName": "Juarez",
    "email": "carlos.juarez@axity.com",
    "yearBirth": "1992",
    "monthBirth": "10",
    "dayBirth": "29",
    "status": "active"
    },
    {
    "id": "7",
    "name": "Javier",
    "lastName": "Hernandez",
    "email": "javier.hernandez@axity.com",
    "yearBirth": "1985",
    "monthBirth": "05",
    "dayBirth": "19",
    "status": "false"
    },{
    "id": "8",
    "name": "Elizabeth",
    "lastName": "Contreras",
    "email": "elizabeth.contreras@axity.com",
    "yearBirth": "1984",
    "monthBirth": "10",
    "dayBirth": "29",
    "status": "active"
    }
    ];
    
    // Crear una clase llamada User que implemente una interface llamada IUser con una funcion que devuelva un objeto usuario.
    
    // La funcion debe tener las siguientes consideraciones.
    // * Recibir como parametro un correo.
    // * Buscar en la constante directory el correo y devolver el id.
    // * Con el id que se haya obtenido de la constante directory. Buscar en la constante users el usurio con ese mismo id.
    // * El objeto user debe contener los siguienres atributos
    // - id
    // - name. name + lastName
    // - dateBirth. en formato dd/mm/yyyy
    // - yearsOld. Calcular a partir de la fecha, del día, del mes y del año de nacimiento
    
        function buscarPersona(correoUsuario){
            let busqueda = directory.find(correo => correo.email == correoUsuario);
            const {id} = busqueda
            buscandoUser(`${id}`);
        }
    
        function buscandoUser(id){
            const dia = new Date();
            let busqueda = users.filter(ide => ide.id === id)
            busqueda.forEach(e => {
            console.log(`Id: ${e.id}, Nombre: ${e.name} ${e.lastName}, Fecha nacimiento: ${e.dayBirth}/${e.monthBirth}/${e.yearBirth}, Edad: ${(dia.getFullYear() - e.yearBirth)}`);
            });
        }
    
        buscarPersona('elizabeth.contreras@axity.com');
    }
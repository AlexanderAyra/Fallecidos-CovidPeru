const convertVariableOne = (termino, consulta) => {

    let regex = null;

    switch (termino) {
        case 'FECHA_FALLECIMIENTO':
        case 'FECHA_CORTE':
            regex = consulta
            break
        case 'EDAD_DECLARADA':
        case 'UBIGEO':
            regex = consulta
            break
        default:
            regex = new RegExp(consulta.toUpperCase(), 'i');
            break
    }

    return regex

}

const addConsultas = (parms, count) => {
    const listCons = [];
    let consList = Object.entries(parms);
    let addtwo = true;

    for (i = 0; i < count; i++) {
        let add = true;
        for (e = 0; e < 2; e++) {
            if (consList[i][e].toUpperCase() == "FECHA_CORTE") {
                listCons.push(consList[i][1]);
                const fechaBusqueda = new Date(
                    `${consList[i + 1][e]}T00:00:00.000+00:00`
                );
                listCons.push(fechaBusqueda);
                add = false;
                addtwo = false;
                break;
            } else if (consList[i][e].toUpperCase() == "FECHA_FALLECIMIENTO") {
                listCons.push(consList[i][1]);
                const fechaBusqueda = new Date(
                    `${consList[i + 1][e]}T00:00:00.000+00:00`
                );
                listCons.push(fechaBusqueda);
                add = false;
                addtwo = false;
                break;
            } else if (consList[i][e].toUpperCase() == "EDAD_DECLARADA") {
                listCons.push(consList[i][1]);
                const fechaBusqueda = Number(consList[i + 1][e]);
                listCons.push(fechaBusqueda);
                add = false;
                addtwo = false;
                break;
            } else if (consList[i][e].toUpperCase() == "UBIGEO") {
                listCons.push(consList[i][1]);
                const fechaBusqueda = Number(consList[i + 1][e]);
                listCons.push(fechaBusqueda);
                add = false;
                addtwo = false;
                break;
            } else if (
                consList[i][e].toUpperCase() == "EDAD_DECLARADA" ||
                consList[i][e].toUpperCase() == "SEXO" ||
                consList[i][e].toUpperCase() == "CLASIFICACION_DEF" ||
                consList[i][e].toUpperCase() == "DEPARTAMENTO" ||
                consList[i][e].toUpperCase() == "PROVINCIA" ||
                consList[i][e].toUpperCase() == "DISTRITO"
            ) {
                addtwo = true;
            }
        }
        if (add && addtwo) {
            listCons.push(consList[i][1]);
        }
    }

    return listCons;
};


module.exports = {
    convertVariableOne,
    addConsultas
};

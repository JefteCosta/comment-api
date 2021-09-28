module.exports = app => {
    const yesterday = () =>{
        const dt = new Date();
        let dia = dt.getDate() - 1;
        let mes = (dt.getMonth()+1).toString() //+1 pois no getMonth Janeiro começa com zero.
        
        let diaF = (dia.length == 1) ? '0'+dia : dia;
        
        let mesF = (mes.length == 1) ? '0'+mes : mes;
        let anoF = dt.getFullYear();

        const rt = []
            rt.data= `${anoF}-${mesF}-${diaF}`;
            rt.dataFormatada= `${diaF}/${mesF}/${anoF}`;
        //console.log(rt)

    return rt


    }
    return{
        yesterday,
    }
}
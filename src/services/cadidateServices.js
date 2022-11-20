const candidatos =
[
     {"id":1
     , "name":"Torres Bocanegra Gisela"
     ,"estudios":"Derecho - USAT" 
     ,"antecedentes":"Sin antecedentes"   
     ,"acusaciones":"Sin acusaciones"   
   }
    ,{"id":2,"name":"Moreno Alva Carmen"
    ,"antecedentes":"Peculado"
    ,"acusaciones":"Sin acusaciones"   
    ,"estudios":"Arquitectura - UNI"}
    ,{"id":3,"name":"Ruiz Soriano Emma"
    ,"antecedentes":"Estafa"
    ,"acusaciones":"Sin acusaciones"   
    ,"estudios":"Ingeniería sistemas - UNPRG"}
    ,{"id":4,"name":"Cordaba Mondragón Juan"
    ,"antecedentes":"Sin antecedentes"
    ,"acusaciones":"Sin acusaciones"   
    ,"estudios":"Administración - UPC"}
    ,{"id":5,"name":"Villegas Villegas Maria"
    ,"antecedentes":"Sin antecedentes"
    ,"acusaciones":"Sin acusaciones"   
    ,"estudios":"Psicología - UDCH"}
    ,{"id":6,"name":"Romero Lima German"
    ,"antecedentes":"Sin antecedentes"
    ,"acusaciones":"Sin acusaciones"   
    ,"estudios":"Contabilidad - USAT"}
    ,{"id":7,"name":"Santos Sanchez Juana"
    ,"antecedentes":"Sin antecedentes"
    ,"acusaciones":"Sin acusaciones"   
    ,"estudios":"Psicología - USS"}
];

const comentarios =
[
     {"candidateId":1, "name":"Buen profesional"}
    ,{"candidateId":1,"name":"Cumple lo que promete"}
    ,{"candidateId":2,"name":"Se nota confiable"}
    ,{"candidateId":2,"name":"Lo conozco y es buena persona"}
    ,{"candidateId":3,"name":"No cumple lo que promete"}
    ,{"candidateId":3,"name":"Es muy cuestionado"}
    ,{"candidateId":3,"name":"No confío"}
];



const candidateServices = {  

     getAll : function(){
        return candidatos;
     },
     getById : function(id){
        return candidatos.find(item => item.id == id);
     },
     getCommentsById : function(id){
        return comentarios.filter(item => item.candidateId == id);
     }
}


export default candidateServices;
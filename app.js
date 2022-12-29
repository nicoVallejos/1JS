const NUMERO = [1,2,3,4,5,6,7,8,9,10]
for (let i=0;i<=9;i++) {
    if (NUMERO[i]<6) {
        console.log("Tu Nota es un "+NUMERO[i]+"."+"\n"+"DESAPROBADO")
    } else if (NUMERO[i]>5&&NUMERO[i]<10) {
        console.log("Tu Nota es un "+NUMERO[i]+"."+"\n"+"APROBADO")
    } else {
        console.log("Tu Nota es un "+NUMERO[i]+"."+"\n"+"Sobresaliente, APROBADO")
    }
}
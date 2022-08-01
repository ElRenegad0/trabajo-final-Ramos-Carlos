let Saludo = prompt("¿Quieres aprender fonetia, gramatica, escritura o vocabulario?");
switch (Saludo) {
    case "fonetica" :
        alert("Perfecto, tenemos un plan para que mejores tu fonetica!");
        break;


        case "gramatica":
        alert("Genial, al aumentar tu gramatica, podras expresarte mejor!.");
        break;

        case "escritura":
        alert("Vamos adelante! al expresarte correctamente, podras lograr tus metas.");
        break;

        case "vocabulario":
        alert("No hay nada mas bello que poder darse a entender en otro idioma al tener mas vocabulario lo haras");
        break;

        default:
            alert("Escribe que quieres aprender");
}
let semana = "segunda";

switch (semana) {
    case "segunda":
        console.log("Hoje tem aula no Senai");
        break;
    case "terça":
        console.log("Hoje tem aula no Senai");
        break;
    case "quarta":
    case "quinta":
    case "sexta":
        console.log("Hoje tem aula no Sesi");
        break;
    default:
        console.log("Hoje nao tem aula");
        break;
}
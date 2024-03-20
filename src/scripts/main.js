
AOS.init();

const dataDoEvento = new Date("Mar 09, 2025 13:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval( function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOevento = timeStampDoEvento - timeStampAtual;

    const diasAteEvento = Math.floor(distanciaAteOevento / (1000 * 60 * 60 * 24));
    const horasAteEvento = Math.floor(distanciaAteOevento % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutosAteEvento = Math.floor(distanciaAteOevento % (1000 * 60 * 60)/(1000 * 60));
    const segundosAteEvento = Math.floor((distanciaAteOevento % (1000*60))/1000);

    if(distanciaAteOevento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `Evento experido`;
    }else{

        console.log("Faltam: " + diasAteEvento + " dias "+horasAteEvento+" horas "+minutosAteEvento+" minutos "+ segundosAteEvento+ " segundos " );
        document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;
    }

},1000)

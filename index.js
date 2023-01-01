(function () {
    const dias = document.querySelector('.dias');
    const horas = document.querySelector('.horas');
    const minutos = document.querySelector('.minutos');
    const segundos = document.querySelector('.segundos');

	let fecha, fechaRestante, currentTime, duracion, intervalo, limpiarTiempo;

	intervalo = 1000; // 1 segundo

  // get time element
  fecha = document.querySelector("fecha");
	fechaRestante = moment.tz(`${moment().format('YYYY')}-12-31T23:59:59`, "America/Bogota");
    
	currentTime = moment();
	// get duracion between two times
	duracion = moment.duration(fechaRestante.diff(currentTime));
	// loop  1 second
	setInterval(function() {
		// get updated duracion
		duracion = moment.duration(duracion - intervalo, 'milliseconds');

		// if duracion is >= 0
		if (duracion.asSeconds() <= 0) {
			clearInterval(limpiarTiempo);
			// hide the countdown element
			fecha.classList.add("hidden");
		} else {
            dias.innerHTML = `${duracion.days()}`
            horas.innerHTML = `${duracion.hours()}`
            minutos.innerHTML = `${duracion.minutes()}`
            segundos.innerHTML = `${duracion.seconds()}`
			// otherwise, show the updated countdown
		}
	}, intervalo);


    

const snowFall = () => {
    const bg = document.querySelector(".bg");
    for (let i = 0; i < 300; i++) {
      const snow = document.createElement("span");
      snow.classList.add("snow");
      if (i % 4 === 0) {
        snow.classList.add("snowAnimation1");
      } else if (i % 4 === 1) {
        snow.classList.add("snowAnimation2");
      } else if (i % 4 === 2) {
        snow.classList.add("snowAnimation3");
      } else {
        snow.classList.add("snowAnimation4");
      }
      const aNumber = -50 + randomNumber(150);
      const timeDelay = randomNumber(10);
      const animDuration = 5 + randomNumber(10) + Math.random() + 0.2;
      const snowOpacity = randomNumber(10) * 0.1;
      const heightWidth = randomNumber(11) + 5;
      snow.style.width = `${heightWidth}px`;
      snow.style.height = `${heightWidth}px`;
      snow.style.left = `${aNumber}%`;
      snow.style.animationDelay = `${timeDelay}s`;
      snow.style.animationDuration = `${animDuration}s`;
      snow.style.opacity = `${snowOpacity}`;
      bg.appendChild(snow);
    }
  };
  
  const randomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
  };
  
  snowFall();
  
  const textShadowColor = [  
    "#1fd224",
    "#ffaa01",
    "#ff00aa",
    "#aa00ff",
    "#e4333a",
    "#00aaff",
    "#91d400",
    "#03e6ff",
    "#ff0000",
    "#ffffff",
    "#ffea00",];
  
  let count = 1;
  
  const newYear = document.querySelector(".new-year");
  const year = document.querySelector(".year");
  const dias2 = document.querySelector(".dias");
  const horas2 = document.querySelector(".horas");
  const minutos2 = document.querySelector(".minutos");
  const segundos2 = document.querySelector(".segundos");
  const copos = document.querySelector(".snow");
  setInterval(() => {
  
    if (count !==0) {
      if(count ===textShadowColor.length){
        count =0;
      }
      count++;
      newYear.style.textShadow = `0 0 40px ${textShadowColor[count]}, 0 0 50px ${textShadowColor[count]}, 0 0 100px ${textShadowColor[count]}`;
      year.style.textShadow = `0 0 25px ${textShadowColor[count]}, 0 0 50px ${textShadowColor[count]}, 0 0 100px ${textShadowColor[count]}`;
      dias2.style.textShadow = `0 0 25px ${textShadowColor[count]}, 0 0 50px ${textShadowColor[count]}, 0 0 100px ${textShadowColor[count]}`;
      horas2.style.textShadow = `0 0 25px ${textShadowColor[count]}, 0 0 50px ${textShadowColor[count]}, 0 0 100px ${textShadowColor[count]}`;
      minutos2.style.textShadow = `0 0 25px ${textShadowColor[count]}, 0 0 50px ${textShadowColor[count]}, 0 0 100px ${textShadowColor[count]}`;
      segundos2.style.textShadow = `0 0 25px ${textShadowColor[count]}, 0 0 50px ${textShadowColor[count]}, 0 0 100px ${textShadowColor[count]}`;
      // horas2.style.backgroundColor = `${textShadowColor[count]} `;
      // minutos2.style.backgroundColor = `${textShadowColor[count]} `;
      // segundos2.style.backgroundColor = `${textShadowColor[count]} `;
      // segundos2.style.backgroundColor = `${textShadowColor[count]} `;
      
      copos.classList.add('fondo');
    }}, 1000);
  
  
      
  
  
     
  
}());
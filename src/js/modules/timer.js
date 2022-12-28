const timer = (id, deadline) => {
  //подставляем ноль спереди
  const addZero = (num) => {
    if (num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  };
  const getTimeRemaining = (endTime) => {
    //разница между двумя временнфми промежутками
    const t = Date.parse(endTime) - Date.parse(new Date());
    //кол-во минут внутри t вернётся хвостик, который будет уменьшатся на секунду
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor((t / (1000 * 60 * 60 * 24)));

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  const setClock = (selector, endTime) => {
    const timer = document.querySelector(selector);

    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    //чтоб остановить таймер
    const timeInterval = setInterval(updateClock, 1000);

    const updateClock = () => {
      //определяет сколько времени до дедлайна, возвращает объект
      const t = getTimeRemaining(endTime);
      //значение из getTimeRemaining
      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      //остановить интервал
      if (t.total <= 0) {
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

        clearInterval(timeInterval);
      }
    };
  };

  setClock(id, deadline);
};

export default timer;

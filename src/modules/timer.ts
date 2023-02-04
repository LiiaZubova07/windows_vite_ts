const timer = (id: string, deadline: string) => {
  //подставляем ноль спереди
  const addZero = (num: number): string => (num <= 9 ? `0${num}` : String(num));

  interface ITimer {
    total: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
  }

  const getTimeRemaining = (endtime: string): ITimer => {
    //разница между двумя временнфми промежутками
    const total: number = Date.parse(endtime) - Date.parse(String(new Date()));
    //кол-во минут внутри t вернётся хвостик, который будет уменьшатся на секунду
    const seconds: number = Math.floor((total / 1000) % 60);
    const minutes: number = Math.floor((total / 1000 / 60) % 60);
    const hours: number = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days: number = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  };

  const setClock = (selector: string, endtime: string) => {
    const timer: any = document.querySelector(selector);
    const days: any = timer.querySelector('#days');
    const hours: any = timer.querySelector('#hours');
    const minutes: any = timer.querySelector('#minutes');
    const seconds: any = timer.querySelector('#seconds');

    const updateClock = () => {
      //определяет сколько времени до дедлайна, возвращает объект
      const total = getTimeRemaining(endtime);
      //значение из getTimeRemaining
      days.textContent = addZero(total.days);
      hours.textContent = addZero(total.hours);
      minutes.textContent = addZero(total.minutes);
      seconds.textContent = addZero(total.seconds);

      //остановить интервал
      if (total.total <= 0) {
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

        clearInterval(timeInterval);
      }
    };
    //чтоб остановить таймер
    const timeInterval = setInterval(updateClock, 1000);
    updateClock();
  };

  setClock(id, deadline);
};

export default timer;

const EventEmitter = require('events');

/**
 * Превращает дату вида 'ss-mm-hh-dd-MM-yyyy' '59-51-23-17-11-2021' в обьект Date
 * @param {string} rawDate 
 * @returns {Date}
 */
 const buildDate = (rawDate) => {
  const dateNumbers = rawDate.split('-').map(x => Number(x)).reverse()
  return new Date(
    dateNumbers[0],
    dateNumbers[1] - 1, //баг с месяцем
    dateNumbers[2],
    dateNumbers[3],
    dateNumbers[4],
    dateNumbers[5]);
}

/**
 * Создает и запускает таймер до определенной даты
 * @param {Date} endDate
 */
 const buildTimer = (endDate) => {
  const timerId = setInterval(() => {
    if (endDate > new Date())
      emitterObject.emit(EventType.tick, timerId, endDate);
    else
      emitterObject.emit(EventType.expired, timerId);
  }, 1000);
}

const EventType = {
  tick: 'tick',
  expired: 'expired',
};

class Handler {
  static stopTimer(timerId) {
    console.log(`Timer#${timerId} has stopped`);
    clearInterval(timerId)
  }
  static tick(timerId, endDate) {
    const secondsLeft = Math.ceil((endDate.getTime() - Date.now()) / 1000)
    console.log(`Timer#${timerId} tick. Seconds left ${secondsLeft}`);
  }
}

const emitterObject = new EventEmitter();
emitterObject.on(EventType.expired, Handler.stopTimer);
emitterObject.on(EventType.tick, Handler.tick);

const rawEndDates = process.argv.slice(2)//['20-08-23-17-11-2021', '20-08-23-17-12-2021',]//Number(process.argv.slice(2))
const endDates = rawEndDates.map(buildDate)
endDates.forEach(buildTimer)


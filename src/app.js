import { Notifier } from './Notifier.js';
import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js';

const notify = Notifier.notify({
  title: "11:00",
  body: "Conteúdo da notificação"
})


const App = {
  async start() {
    try {
      await Notifier.init()

      Emitter.on('countdown-start', notify)
      Emitter.on('countdown-end', Timer.init)

      const time = 25 * 60
      Timer.init(time);


    } catch (err) {
      console.log(err.message)
    }
  }
}

export { App }
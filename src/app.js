import { Notifier } from './Notifier.js';
import { Timer } from './Timer.js';

const App = {
  async start() {
    try {
      const time = 25 * 60
      Timer.init(time);
      // await Notifier.init()
      // Notifier.notify({
      //   title: "11:00",
      //   body: "Conteúdo da notificação"
      // })
    } catch (err) {
      console.log(err.message)
    }
  }
}

export { App }
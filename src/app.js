import { Notifier } from './Notifier.js';

const App = {
  async start() {
    try {
      await Notifier.init()
      Notifier.notify({
        title: "11:00",
        body: "Conteúdo da notificação"
      })
    } catch (err) {
      console.log(err.message)
    }
  }
}

export { App }
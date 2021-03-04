const View = {
  render({ minutes, seconds }) {
    document.getElementById("timer").innerHTML = `
    <p>Notifica.me</p>
    <span>${minutes}:${seconds}</span>
    `;
  }
}

export { View }
function run() {
  fetch('https://api.adviceslip.com/advice')
    .then(data => data.json())
    .then(json => {
      document.querySelector('#advice').textContent = `"${json.slip.advice}"`;
      document.querySelector('#number').textContent = `advice #${json.slip.id}`;
    })
}

run();

document.querySelector('#random').addEventListener('click', () => {
  run()
  document.querySelector('#random').disabled = true
  setTimeout(() => {
    document.querySelector('#random').disabled = false
  },2000)
});
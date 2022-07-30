const workBtn = document.getElementById('work-btn');
const normalBtn = document.getElementById('btn');
const output = document.getElementById('output');
const random = document.getElementById('random');

workBtn.addEventListener('click', heavyWork);
normalBtn.addEventListener('click', normalWork);

function heavyWork() {
  console.log('heavyWork start');
  const heavyWorker = new Worker('worker.js');
  heavyWorker.postMessage('Do work!');
  heavyWorker.onmessage = (e) => {
    output.innerHTML = e.data;
    console.log('heavyWork end');
  };
}

function normalWork() {
  random.innerHTML = Math.random();
}

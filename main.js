var num_one, num_two, answer, calculateBtn;

num_one = document.querySelector('#num_one');
num_two = document.querySelector('#num_two');
answer = document.querySelector('#answer');
calculateBtn = document.querySelector('#calculateBtn');

function calculateMe() {
 return (Number(num_one.value) + Number(num_two.value));
}

function answerMe() {
  answer.textContent = calculateMe();
}


calculateBtn.addEventListener('click', answerMe);

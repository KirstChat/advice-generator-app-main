const card = document.querySelector('.card');
const adviceID = document.querySelector('.advice__id');
const adviceText = document.querySelector('.advice__text');
const btn = document.querySelector('.btn');

const getAdvice = async () => {
  const res = await fetch('https://api.adviceslip.com/advice');
  const advice = await res.json();

  return advice;
};

const updateUI = () => {
  getAdvice().then(advice => {
    adviceID.innerHTML = `Advice #${advice.slip.id}`;
    adviceText.textContent = `"${advice.slip.advice}"`;
  });
};

const disableBtn = () => {
  btn.disabled = true;
  setTimeout(() => (btn.disabled = false), 3000);
};

btn.addEventListener('click', () => {
  updateUI();
  disableBtn();
  gsap.fromTo(adviceText, { opacity: 0 }, { opacity: 1, duration: 2 });
});

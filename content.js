let progressBars = document.getElementsByClassName('progress-bar bg-success');

for (let bar of progressBars) {
  const value = parseInt(bar.textContent);
  bar.title = bar.textContent;
  if (value >= 100) {
    stars = '★'.repeat(Math.round((value - 100) / 10) + 1);
    bar.style.setProperty('background-color', '#88FF88', 'important');
    bar.style.setProperty('color', 'black');
    content = value > 100 ? ` ${value}% ` : 'Perfect';
    bar.innerHTML = `${stars}${content}${stars}`;
  }
}

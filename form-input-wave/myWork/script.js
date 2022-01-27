const labels = document.querySelectorAll('label');

labels.forEach(function(label){
  label.innerHTML = label.innerText
    .split('')
    .map((letter)=>`<span>${letter}</span>`)
    .join('');
});
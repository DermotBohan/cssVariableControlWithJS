


const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

for(i = 0; i < inputs.length; i++) {
  inputs[i] = inputs[i].addEventListener('change', handleUpdate);
  inputs[i] = inputs[i].addEventListener('mousemove', handleUpdate);
}

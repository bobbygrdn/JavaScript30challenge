const inputs = document.querySelectorAll('.controls input');
    
const handleUpdate = (e) => {
    const suffix = e.target.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix)

    const spacingValue = document.querySelector('#spacing-value');
    const blurValue = document.querySelector('#blur-value');
    const borderRadiusValue = document.querySelector('#border-radius-value');
    const rotateValue = document.querySelector('#rotate-value');

    const spacing = document.querySelector('#spacing');
    const blur = document.querySelector('#blur');
    const radius = document.querySelector('#border-radius');
    const rotate = document.querySelector('#rotate');

    spacingValue.textContent = spacing.value + spacing.dataset.sizing;
    borderRadiusValue.textContent = radius.value + radius.dataset.sizing;
    rotateValue.textContent = rotate.value + rotate.dataset.sizing;
    blurValue.textContent = blur.value + blur.dataset.sizing;
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))

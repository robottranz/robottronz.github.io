document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.querySelector('.animated-name');
    let direction = 1;
    let position = 0;

    const animateName = () => {
        position += direction;
        nameElement.style.transform = `translateX(${position}px)`;

        if (position > 20 || position < -20) {
            direction *= -1;
        }

        requestAnimationFrame(animateName);
    };

    animateName();
});
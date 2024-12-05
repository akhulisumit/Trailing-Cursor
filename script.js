const trails = document.querySelectorAll('.cursor-trail');

document.addEventListener('mousemove', function(e) {
    const x = e.pageX;
    const y = e.pageY;

    trails.forEach((trail, index) => {
        setTimeout(() => {
            trail.style.transform = `translate(${x}px, ${y}px)`;
        }, index * 25); // Reduced delay for a smoother and tighter trail
    });
});

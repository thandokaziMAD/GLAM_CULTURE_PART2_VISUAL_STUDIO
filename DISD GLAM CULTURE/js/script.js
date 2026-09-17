const b =
    document.querySelector('.menu-btn'),
    n = document.querySelector('.nav-links');
if (b && n)
    b.addEventListener('click',
        () => {
            const o = n.classList.toggle('open');
            b.setAttribute('aria-expanded', o)
        }); const ob = new IntersectionObserver(es => es.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible')
        }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(e => ob.observe(e));
const f = document.querySelector('#contactForm');
if (f) f.addEventListener('submit', e =>
{
    e.preventDefault();
    document.querySelector('#formStatus').textContent = 'Thank you! Your message has been prepared for Glam Culture.';
    f.reset()
});
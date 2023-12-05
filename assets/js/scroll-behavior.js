document.addEventListener('DOMContentLoaded', function () {
    //SCROLL TO THE SECTIONS
    const scrollToTargetAdjusted = target => {
        const headerHeight = 100;
        const { offsetTop } = target;
        const offsetPosition = offsetTop - headerHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                scrollToTargetAdjusted(target);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileSidebar = document.querySelector('.mobile-sidebar');
    
    mobileToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileSidebar.classList.toggle('active');
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function() {
        mobileSidebar.classList.remove('active');
    });
    
    // Prevent sidebar from closing when clicking inside
    mobileSidebar.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Floating images animation (existing code)
    // const container = document.querySelector('.valsidebar');
    // if (container) {
    //     const images = document.querySelectorAll('.image');
    //     const bounds = {
    //         width: container.clientWidth,
    //         height: container.clientHeight
    //     };
        
    //     const balls = Array.from(images).map(img => {
    //         return {
    //             el: img,
    //             x: 60 + Math.random() * (bounds.width - 150),
    //             y: 60 + Math.random() * (bounds.height - 150),
    //             dx: (Math.random() - 0.5) * 2,
    //             dy: (Math.random() - 0.5) * 2,
    //             radius: 30
    //         };
    //     });
        
    //     // Click handling
    //     balls.forEach(b => {
    //         b.el.addEventListener('click', () => {
    //             b.el.style.visibility = 'hidden';
    //             setTimeout(() => {
    //                 b.el.style.visibility = 'visible';
    //             }, 10000);
    //         });
    //     });
        
    //     // Animation loop
    //     function move() {
    //         for (let i = 0; i < balls.length; i++) {
    //             const b = balls[i];
    //             if (b.el.style.visibility === 'hidden') continue;
                
    //             b.x += b.dx;
    //             b.y += b.dy;
                
    //             if (b.x <= 0 || b.x + 60 >= bounds.width) b.dx *= -1;
    //             if (b.y <= 0 || b.y + 60 >= bounds.height) b.dy *= -1;
                
    //             b.el.style.transform = `translate(${b.x}px, ${b.y}px)`;
    //         }
    //         requestAnimationFrame(move);
    //     }
        
    //     move();
    // }
});
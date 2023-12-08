document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        document.querySelectorAll('.gallery-item').forEach(item => {
            if (item.getAttribute('data-tags').includes(filter) || filter === 'all') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

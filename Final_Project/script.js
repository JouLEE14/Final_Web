function toggleMenu(id) {
    const menus = document.querySelectorAll('.submenu');
    menus.forEach(menu => {
        if (menu.id === id) {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        } else {
            menu.style.display = 'none';
        }
    });
}


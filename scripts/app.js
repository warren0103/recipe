window.onload = init();

function init() {
    let sidebar_btn = document.querySelector('.menu-btn');
    let sidebar = document.querySelector('.sidebar');
    sidebar_btn.addEventListener('click', ()=> {
        if(sidebar.classList.contains('show-sidebar')) {
            sidebar.classList.remove('show-sidebar');
        } else {
            sidebar.classList.add('show-sidebar')
        }
        
    })
    
    console.log('loaded')
}
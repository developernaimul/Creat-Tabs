// Get Element

const tab = document.querySelectorAll('.rz-tabs .tabs-menu ul li a');

const tab_pane_all = document.querySelectorAll('.tab-pane')
// console.log(tab);

tab.forEach(item => {
    item.addEventListener('click' ,function (e) {
        e.preventDefault(e)

        tab.forEach(item => {
            item.classList.remove('active');
            
        });

        item.classList.add('active');

        // console.log(e.target);
        const tab_pane = document.querySelector(this.getAttribute('href'));
        
        
        
    tab_pane_all.forEach(item => {
        item.classList.remove('active');
        
    })
    tab_pane.classList.add('active');
    // tab_pane.classList.add('active');

 
    
  






});
   
    
});
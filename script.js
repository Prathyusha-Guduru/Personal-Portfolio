let navItems = document.getElementsByClassName('nav-link')

for(let i=0;i<navItems.length;i++){
	navItems[i].addEventListener('mouseover',()=>{
		navItems[i].style.color = 'rgb(0,255,0)'
	})
	navItems[i].addEventListener('mouseout',()=>{
		navItems[i].style.color = 'rgb(255,255,255)'
	})
}
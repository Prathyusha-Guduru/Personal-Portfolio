let navItems = document.getElementsByClassName('nav-link')
let date = new Date()
currentYear = date.getFullYear(); 

let footer = document.getElementsByTagName('footer')
footer[0].innerHTML += `<p class = 'copyrights'>Copyright &copy;  ${currentYear} <a class='github-link' href="https://github.com/Prathyusha-Guduru">Prathyusha Guduru</a> | All Rights Reserved</p>`


for(let i=0;i<navItems.length;i++){
	navItems[i].addEventListener('mouseover',()=>{
		navItems[i].style.color = 'rgb(137, 243, 137)'
	})
	navItems[i].addEventListener('mouseout',()=>{
		navItems[i].style.color = 'rgb(255,255,255)'
	})
}



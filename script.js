const titleEl = document.querySelector('title')
titleEl.textContent = "DOM Menu"

// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
]


const mainEl = document.querySelector('main')
const h1 = document.createElement('h1')
const text = document.createTextNode("SEI Rocks!")
const topMenuEl = document.querySelector('#top-menu')


mainEl.style.backgroundColor = 'var(--main-bg)'
h1.append(text)
mainEl.append(h1)
mainEl.classList.add('flex-ctr')
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')

for(let x of menuLinks) {
    let a = document.createElement('a')
    a.setAttribute('href', x.href)
    a.textContent = x.text
    topMenuEl.append(a)
}
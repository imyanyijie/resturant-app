import pic1 from '../img-asset/cake1.jpg'

function menuPage() {
    const content = document.querySelector('#content');
    const text = document.createElement('div');
    text.classList.add("text-content");

    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = "Menu123"

    const desc = document.createElement('p');
    desc.classList.add('description');
    desc.textContent = "menu sdklfdksiel dkslkadfukl sdfas."

    text.appendChild(title);
    text.appendChild(desc);
    content.appendChild(text);

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuCard1 = document.createElement('div');
    menuCard1.classList.add('menu-card');

    const foodPic1 = new Image();
    foodPic1.src = pic1;

    const name = document.createElement('h2');
    name.textContent = 'test item';

    const price = document.createElement('h2');
    price.textContent = '3$';

    
    menuCard1.appendChild(foodPic1);
    menuCard1.appendChild(name);
    menuCard1.appendChild(price);
    menu.appendChild(menuCard1);
    content.appendChild(menu);

}

export { menuPage };
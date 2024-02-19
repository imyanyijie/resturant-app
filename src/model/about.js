function aboutPage(){
    const content = document.querySelector('#content');
    const text = document.createElement('div');
    text.classList.add("text-content");

    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = "About 123"

    const desc = document.createElement('p');
    desc.classList.add('description');
    desc.textContent = "sadf sdklfdksiel dkslkadfukl sdfas."

    text.appendChild(title);
    text.appendChild(desc);

    content.appendChild(text);
}
export{aboutPage};
document.addEventListener('DOMContentLoaded', ()=>{
    let albumContainer = document.querySelector('#album-container');

    console.log(albumContainer);

    let li = document.createElement('li');

    let h4 = document.createElement('h4');
    let img = document.createElement('img');
    let p = document.createElement('p');

    li.textContent='Sasha Fierce'
    //h4.textContent = "Sasha Fierce";
    img.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Beyonc%C3%A9_-_4.png/220px-Beyonc%C3%A9_-_4.png';
    p.textContent = "Artist: Beyonce";
    //img.style.width = '300px';
    //img.style.textAlign ='center';
    //h2.style.textAlign = 'center';
    //p.style.textAlign = 'center';

    //li.appendChild(h4);
    li.appendChild(img);
    li.appendChild(p);
    img.className = 'card-image';

    li.className = 'card';

    albumContainer.appendChild(li);
})

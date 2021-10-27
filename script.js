document.addEventListener('DOMContentLoaded', ()=>{
    let albumContainer = document.querySelector('#album-container');
    let editorsChoice = document.querySelector('#editors-choice');
    let heading = document.querySelector('.heading');

    editorsChoice.addEventListener('click',()=>{
        albumContainer.innerHTML = "";
        heading.textContent = "Editor's Choice";

        const editorsAlbums=[
            {
                album:'CTRL',
                artist: 'SZA',
                url:'https://upload.wikimedia.org/wikipedia/en/b/bf/SZA_-_Ctrl_cover.png'
            },
            {
                album:'Thank Me Later',
                artist: 'Drake',
                url:'https://upload.wikimedia.org/wikipedia/en/9/9c/Drake_-_Thank_Me_Later_cover.jpg'
            },
            {
                album:'Freudian',
                artist: 'Daniel Caesar',
                url: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Freudian_by_Daniel_Caesar.jpg'
            },
            {
                album:'H.E.R.',
                artist: 'HER',
                url: 'https://upload.wikimedia.org/wikipedia/en/4/4f/H.E.R._%282017%29_album_cover.jpg'
            },
            {
                album:'Positions',
                artist: 'Ariana Grande',
                url: 'https://i.pinimg.com/originals/2f/60/0d/2f600dcdcdf907a363da3e22fb21a4ad.jpg'
            }
        ]

        for(const album of editorsAlbums){
            let li = document.createElement('li');
            let img = document.createElement('img');
            let faveBtn = document.createElement('BUTTON');
            
        
            img.src = album.url;
            faveBtn.textContent = 'Favorite';
        
            li.appendChild(img); 
            li.appendChild(faveBtn);
        
            faveBtn.className = 'fave-button';
            img.className = 'card-image';
        
            li.className = 'card';
        
            albumContainer.appendChild(li);
        
            faveBtn.addEventListener('click',()=>{
                if(faveBtn.textContent == 'Favorite'){
                    faveBtn.textContent = 'Favorited!'
                    faveBtn.style.color = 'pink';
                    faveBtn.style.background = 'black';
                }
                else{
                    faveBtn.textContent = 'Favorite'
                    faveBtn.style.color = 'rgb(194, 0, 58)';
                    faveBtn.style.background = '#fa9ffa';
                }
            })
            img.addEventListener('click',()=>{
                alert(`This is ${album.artist}'s album ${album.album}`);    
            }); 
        }
  
    });


    //Create each card (will make function later and replace Beyonce stuff w API stuff)
   // function createElement(obj){
        let li = document.createElement('li');
        let img = document.createElement('img');
        let faveBtn = document.createElement('BUTTON');
        
        

        img.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Beyonc%C3%A9_-_4.png/220px-Beyonc%C3%A9_-_4.png';
        faveBtn.textContent = 'Favorite';
        
        
        
        li.appendChild(img); 
        li.appendChild(faveBtn);

        faveBtn.className = 'fave-button';
        img.className = 'card-image';

        li.className = 'card';

        albumContainer.appendChild(li);

        faveBtn.addEventListener('click',()=>{
            if(faveBtn.textContent == 'Favorite'){
                faveBtn.textContent = 'Favorited!'
                faveBtn.style.color = 'pink';
                faveBtn.style.background = 'black';
            }
            else{
                faveBtn.textContent = 'Favorite'
                faveBtn.style.color = 'rgb(194, 0, 58)';
                faveBtn.style.background = '#fa9ffa';
            }
        })

        img.addEventListener('click',()=>{
            alert("This is Beyonce's album Sasha Fierce");    
        });

  //  }

    
})

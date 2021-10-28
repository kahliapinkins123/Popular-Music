document.addEventListener('DOMContentLoaded', ()=>{
    let albumContainer = document.querySelector('#album-container');
    let form = document.querySelector('form');
    let fullList = document.querySelector('#full-list');
    let editorsChoice = document.querySelector('#editors-choice');
    let favorites = document.querySelector('#favorites');
    let heading = document.querySelector('.heading');
    let formTitle = document.querySelector('#form-title');
    let favoritesArray = [];

    fetchAlbums();

    function fetchAlbums(){
        fetch("https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0", 
        {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": "fe5de63a7bmsh41edb2a1c5603c6p15680fjsnf74c951202ad"
        }}).then(resp => resp.json())
        .then(obj=>{
            tracks = obj['tracks']
            console.log(tracks);
            createCards(tracks);
        })
    }

    function createCards(albums){
        for(const album of albums){
            let li = document.createElement('li');
            let img = document.createElement('img');
            let faveBtn = document.createElement('BUTTON');
            let a = document.createElement('a');
            let link = document.createTextNode('Listen');
            let linkBtn = document.createElement('BUTTON');
            
            img.src = album['images']['coverart'];
            faveBtn.textContent = 'Favorite';
            a.appendChild(link);
            a.href = album['url'];

            linkBtn.appendChild(a);
             
            li.appendChild(img); 
            li.appendChild(faveBtn);
            li.appendChild(linkBtn);


            faveBtn.className = 'fave-button';
            linkBtn.className = 'link-button';
            img.className = 'card-image';
            li.className = 'card';
            

            albumContainer.appendChild(li);

            faveBtn.addEventListener('click',()=>{
                if(faveBtn.textContent == 'Favorite'){
                    faveBtn.textContent = 'Favorited!'
                    faveBtn.style.color = 'pink';
                    faveBtn.style.background = 'black';
                                 
                    favoritesArray.push(album);
                    console.log(favoritesArray);
                } else{
                    faveBtn.textContent = 'Favorite'
                    faveBtn.style.color = 'rgb(194, 0, 58)';
                    faveBtn.style.background = '#fa9ffa';
                }
            })

            img.addEventListener('click',()=>{
                alert(`${album['title']} by ${album['subtitle']}`);    
            });
        }
    }
    
    fullList.addEventListener('click',()=>{ 
        heading.textContent = "Song List";
        formTitle.textContent = "Don't see your fave song? Add one here!"
        albumContainer.innerHTML = "";

        fetchAlbums();
    });

    editorsChoice.addEventListener('click',()=>{
        albumContainer.innerHTML = "";
        heading.textContent = "Album List";
        formTitle.textContent = "Don't see your fave album? Add one here!"

        const editorsAlbums=[
                {
                    title: 'Dirty Computer',
                    subtitle: 'Janelle Monae',
                    images: {
                        coverart: 'https://www.udiscovermusic.com/wp-content/uploads/2015/10/Janelle-Mona%CC%81e-Dirty-Computer-.jpg'
                    },
                    url: 'https://www.youtube.com/watch?v=oFK6k-pvXmI&list=PLyHrVINJvbPY_HmRBmXnnWMGZTV4mYUYc'
                },
                {
                    title: 'Xscape',
                    subtitle:'Michael Jackson',
                    images: {
                        coverart: 'http://images6.fanpop.com/image/photos/37100000/new-album-mj-michael-jackson-37108862-1200-1200.jpg'
                    },
                    url:'https://www.youtube.com/watch?v=TTzD6gWV16s&list=PLs0odKA07LBY8gO6GTwiXcCsqDdpoMIwR'

                },
                {
                    title:'Legends Never Die',
                    subtitle: 'Juice WRLD',
                    images: {
                        coverart: 'https://cdn.vox-cdn.com/thumbor/qLSkOK78QQ9hON7SXwshppfC_Lc=/0x0:1600x1600/1400x1050/filters:focal(665x592:921x848):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67039782/Juice_WRLD.0.jpg'
                    },
                    url:'https://www.youtube.com/watch?v=SqWSGUWzlxk'
                }, 
                {
                    title:'CTRL',
                    subtitle: 'SZA',
                    images: {
                        coverart:'https://upload.wikimedia.org/wikipedia/en/b/bf/SZA_-_Ctrl_cover.png'
                    },
                    url:'https://www.youtube.com/watch?v=oUzIlVuGdtE'
                    
                },
                {
                    title:'Positions',
                    subtitle: 'Ariana Grande',
                    images: {
                        coverart: 'https://i.pinimg.com/originals/2f/60/0d/2f600dcdcdf907a363da3e22fb21a4ad.jpg'
                    },
                    url:'https://www.youtube.com/watch?v=9MogWz-LHXI&list=PLT5kE8dBKiP5Bg6aW98Bx52GInI7iJL_h'
                }           
        ]
        createCards(editorsAlbums);  
    });

    favorites.addEventListener('click',()=>{
        heading.textContent = "My Favorites";
        albumContainer.innerHTML = "";
        formTitle.textContent = "Don't see your fave song or album? Add them here!"

        if(favoritesArray.length === 0){
            let li = document.createElement('li');

            li.textContent = "You haven't favorited anything yet!"
            li.style.color = 'rgb(240, 42, 101)';

            albumContainer.appendChild(li);
        } else{
            createCards(favoritesArray);
        }
    });

    form.addEventListener('submit', function(e){
        e.preventDefault();
        
        const title = document.querySelector('#album-name');
        const subtitle = document.querySelector('#artist-name');
        const coverUrl = document.querySelector('#cover-url');
        const songUrl = document.querySelector('#song-url');

        const newAlbum = [{
            title: `${title.value}`,
            subtitle: `${subtitle.value}`,
            images:{
                coverart: `${coverUrl.value}`
            },
            url: `${songUrl.value}` 
        }]
        createCards(newAlbum);
        title.value ='';
        subtitle.value ='';
        coverUrl.value =''; 
        songUrl.value='';
    })   
})

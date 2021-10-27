document.addEventListener('DOMContentLoaded', ()=>{
    let albumContainer = document.querySelector('#album-container');
    let form = document.querySelector('form');
    let fullList = document.querySelector('#full-list');
    let editorsChoice = document.querySelector('#editors-choice');
    let favorites = document.querySelector('#favorites');
    let searchBtn = document.querySelector('#search-button');
    let heading = document.querySelector('.heading');
    let input = document.querySelector('#search-input');

    fetch("https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0", 
    {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "shazam.p.rapidapi.com",
		"x-rapidapi-key": "fe5de63a7bmsh41edb2a1c5603c6p15680fjsnf74c951202ad"
	}}).then(resp => resp.json())
    .then(obj=>{
        tracks = obj['tracks']//[0]['images']['coverart']);
        console.log(tracks)
        createCards(tracks);
    })

    editorsChoice.addEventListener('click',()=>{
        albumContainer.innerHTML = "";
        heading.textContent = "Editor's Choice";

        const editorsAlbums=[
                {
                    title:'CTRL',
                    subtitle: 'SZA',
                    images: {
                        coverart:'https://upload.wikimedia.org/wikipedia/en/b/bf/SZA_-_Ctrl_cover.png'
                    }
                    
                },
                {
                    title:'Thank Me Later',
                    subtitle: 'Drake',
                    images: {
                        coverart: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Drake_-_Thank_Me_Later_cover.jpg'
                    }
                },
                {
                    title:'Freudian',
                    subtitle: 'Daniel Caesar',
                    images: {
                        coverart: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Freudian_by_Daniel_Caesar.jpg'
                    }
                    
                },
                {
                    title:'H.E.R.',
                    subtitle: 'HER',
                    images: {
                        coverart: 'https://upload.wikimedia.org/wikipedia/en/4/4f/H.E.R._%282017%29_album_cover.jpg'
                    }
                },
                {
                    title:'Positions',
                    subtitle: 'Ariana Grande',
                    images: {
                        coverart: 'https://i.pinimg.com/originals/2f/60/0d/2f600dcdcdf907a363da3e22fb21a4ad.jpg'
                    }
                }
            
        ]

        createCards(editorsAlbums);
  
    });

    testObjArray = [
        {
            title: 'Dirty Computer',
            subtitle: 'Janelle Monae',
            images: {
                coverart: 'https://www.udiscovermusic.com/wp-content/uploads/2015/10/Janelle-Mona%CC%81e-Dirty-Computer-.jpg'
            }
        },
        {
            title: 'Xscape',
            subtitle:'Michael Jackson',
            images: {
                coverart: 'http://images6.fanpop.com/image/photos/37100000/new-album-mj-michael-jackson-37108862-1200-1200.jpg'
            }
        },
        {
            title:'Legends Never Die',
            subtitle: 'Juice WRLD',
            images: {
                coverart: 'https://cdn.vox-cdn.com/thumbor/qLSkOK78QQ9hON7SXwshppfC_Lc=/0x0:1600x1600/1400x1050/filters:focal(665x592:921x848):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67039782/Juice_WRLD.0.jpg'
            }
        }   
    ]

    

    //Create each card (will pass an object and replace Beyonce stuff w API stuff)
    function createCards(albums=testObjArray){
        for(const album of albums){
            let li = document.createElement('li');
            let img = document.createElement('img');
            let faveBtn = document.createElement('BUTTON');
            
            

            img.src = album['images']['coverart'];
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
                    
                    //patch onto list of faves
                }
                else{
                    faveBtn.textContent = 'Favorite'
                    faveBtn.style.color = 'rgb(194, 0, 58)';
                    faveBtn.style.background = '#fa9ffa';
                    //delete from list of faves
                }
            })

            img.addEventListener('click',()=>{
                alert(`This is ${album['title']} by ${album['subtitle']}.`);    
            });
        }

    }


    createCards();

    fullList.addEventListener('click',()=>{ 
        heading.textContent = "Full List";
        albumContainer.innerHTML = "";

        createCards();
    });

    favorites.addEventListener('click',()=>{
        heading.textContent = "My Favorites";
        albumContainer.innerHTML = "";
        //display patched list of faves
        //create new array of albums
        //if status is favorited, push onto array of albums
        //display array of albums
    });

    form.addEventListener('submit', function(e){
        e.preventDefault();
        
        const title = document.querySelector('#album-name');
        const subtitle = document.querySelector('#artist-name');
        const coverUrl = document.querySelector('#cover-url');

        const newAlbum = [{
            title: `${title.value}`,
            subtitle: `${artist.value}`,
            images:{
                coverart: `${coverUrl.value}`
            } 
        }]

        createCards(newAlbum);
        title.value ='';
        subtitle.value ='';
        coverUrl.value ='';
        
    })

    searchBtn.addEventListener('click',e=>{
        const input = document.querySelector('#search-input');
        console.log(input.value);
    });

    
})

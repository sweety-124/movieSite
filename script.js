const APILINK='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=843524b4f72f856c8adff0e361b7c7e2&page=1';
const IMG_PATH='https://image.tmdb.org/t/p/w1280';
const SEARCHAPI='https://api.themoviedb.org/3/search/movie?api_key=843524b4f72f856c8adff0e361b7c7e2&query=';

const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');
getMovies(APILINK)
function getMovies(url){
  fetch(url).then(res => res.json()).then(function(data){
    console.log(data.results);
    data.results.forEach(element=>{
      const div = document.createElement('div');
      const div_card = document.createElement('div');
      div_card.setAttribute('class','card')
      const div_row = document.createElement('div');
      div_row.setAttribute('class','row')
      const div_column = document.createElement('div');
      div_card.setAttribute('class','column')
      const image = document.createElement('img');
      image.setAttribute('class','thumbnail')
      image.setAttribute('id','image')
      const title = document.createElement('h3');
      title.setAttribute('id','title')
      
      const center = document.createElement('center');

      title.innerHTML = `${element.title}`;
      image.src=IMG_PATH+element.poster_path;

      center.appendChild(image);
      div_card.appendChild(center);
       div_card.appendChild(title);
      div_column.appendChild(div_card);
      div_row.appendChild(div_column);
       main.appendChild(div_row);
    });
  });
}

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  main.innerHTML='';
  const searchItem=search.value;
  console.log('serachh item',searchItem)
  if(searchItem)
  {
    getMovies(SEARCHAPI + searchItem);
    search.value="";
  }
})
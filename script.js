const jokeApi = {};

jokeApi.apiUrl =  `http://api.icndb.com/jokes/random`

jokeApi.data = [];
jokeApi.pics = [
   `./images/chuck2.jpg`,
   `./images/chuck3.webp`,
   `./images/chuck4.jpg`,
   `./images/chuck5.jpg`,
   `./images/chuck6.jpg`,
   `./images/chuck7.jpg`,
   `./images/chuck8.jpg`,

]

jokeApi.getApiData = () => {
   $.ajax({
      url: jokeApi.apiUrl,
      method: 'GET',
      dataType: 'json',
   }).then((results)=> {
      jokeApi.data.push(results.value)
      // console.log('it worked', jokeApi.data[0].joke)

   })
}


// console.log(jokeApi.pics)

jokeApi.getRandom = () => {
   let pics = jokeApi.pics[Math.floor(Math.random() * jokeApi.pics.length)]
   $('.newPicz').html(`
   <div class="imgBox">
      <img src="${pics}" alt="chuck norris">
   </div> 
   `)
   console.log(pics)
}

$('.newJoke').on('click', function(){
   for (let i=0; i < jokeApi.data.length; i++) {
      $('.funnyJoke').html(`${jokeApi.data[i].joke}`);
   }
   jokeApi.getApiData()
   jokeApi.getRandom()
})

$(function() {
   jokeApi.getApiData();
});
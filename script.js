const jokeApi = {};

jokeApi.apiUrl =  `http://api.icndb.com/jokes/random`

jokeApi.data = [];

jokeApi.getApiData = () => {
   $.ajax({
      url: jokeApi.apiUrl,
      method: 'GET',
      dataType: 'json',
   }).then((results)=> {
      jokeApi.data.push(results.value)
      console.log('it worked', jokeApi.data[0].joke)
      // console.log(jokeApi.data)

      // jokeApi.getRandom()
   })
   
}

$('.newJoke').on('click', function(){
   for (let i=0; i < jokeApi.data.length; i++) {
      $('.funnyJoke').html(`${jokeApi.data[i].joke}`);
   }
   jokeApi.getApiData()
})

$(function() {
   jokeApi.getApiData();
});
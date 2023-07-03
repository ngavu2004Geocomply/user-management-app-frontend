import axios from 'axios';

const Pokemon = () => {
    const getData = (url, succeedMessage, failedMessage) => {
        axios.get(url)
        .then((res) => {
            // console.log(res);
            return succeedMessage;
        })
        .catch((err) => {
            // console.log(err);
            return failedMessage;
        })
    }
    
    // case 1
    const case1 = async () => {
        const getHeroesData = async () => { getData("https://superhero-search.p.rapidapi.com/api/heroes", "Success heroes data", "Heroes not fetched") }
        const data = await getHeroesData();
        return 1;
    }
    
    console.log(case1());
    // case 2

    const getHeroesandPokemonData = async () => {
      const [cocktail, pokemon] = await Promise.any([
        getData(
          "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
          "This is your cocktail",
          "failed cocktail"
        ),
        getData(
          "https://pokeapi.co/api/v2/pokemon/ditto",
          "this is your pokemon",
          "fail pokemon"
        ),
      ]);
      return { cocktail, pokemon };
    };
      
    (async () => {
      const { cocktail, pokemon } = await getHeroesandPokemonData();
      console.log(cocktail);
      console.log(pokemon);
    })();


    return ( 
        <h1>Pokemon API result</h1>
        
     );
}
 
export default Pokemon;
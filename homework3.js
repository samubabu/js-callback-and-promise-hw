// Excercise 1

function createAdder(x){
    function add(y){
        return x+y
    }
    return add
}

const addEight = createAdder(8);
console.log(addEight(10)); // 18
console.log(addEight(17)); // 25
console.log(addEight(50)); // 58
console.log(addEight(100)); // 108
console.log(addEight(92)); // 100
console.log('==========')


const addThree = createAdder(3);
console.log(addThree(10)); // 13
console.log(addThree(17)); // 20
console.log(addThree(50)); // 53
console.log(addThree(100)); // 103
console.log(addThree(92))

//Excercise 2


function getMovieInfo(movieName){
    return new Promise((resolve, reject)=>{
        if (movieName.length >5){
            let movie = {
                id: 123,
                title: movieName,
                director:'Christopher Spielberg',
                runtime: 157,
                description:'Good vs Evil'
            }
            resolve(movie)
        } else {
            reject(`${movieName} cannot be accessed it is too short.`)
        }
    })
}

async function printMovieInfo(movieName){
    try{
        let movie = await getMovieInfo(movieName);
        console.log(`${movie.title} directed by ${movie.director}, portraying ${movie.description} in ${movie.runtime} minutes`)
    }catch (err){
        console.warn(err);
    }
};

printMovieInfo('Indiana Jones and the Dark Knight')

printMovieInfo('ET')
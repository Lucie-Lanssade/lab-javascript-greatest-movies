// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const directors = movies.map((movie) => movie.director);

  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const moviesDirectedBySpielberg = movies.filter((movie) => {
    return (
      movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
    );
  });
  return moviesDirectedBySpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  }
  const totalScore = movies.reduce((acc, current) => {
    if (!current.score) {
      return acc;
    } else {
      return acc + current.score;
    }
  }, 0);
  let average = totalScore / movies.length;

  return +average.toFixed(2);
  String(56);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  const totalDramas = movies.filter((movie) => {
    return movie.genre.includes('Drama');
  });

  if (totalDramas.length === 0) {
    return 0;
  }

  const totalDramaScore = totalDramas.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);

  let average = totalDramaScore / totalDramas.length;

  return +average.toFixed(2);
}

function orderByYear(movies) {
  const moviesCopy = structuredClone(movies);

  moviesCopy.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      if (a.title < b.title) {
        return -1;
      } else {
        return 1;
      }
    }
  });

  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const moviesCopy = structuredClone(movies);

  const moviesTitles = moviesCopy.map((movie) => movie.title);

  const titlesSorted = moviesTitles.sort();

  if (titlesSorted.length < 20) {
    return titlesSorted;
  } else if (titlesSorted.length > 20) {
    return titlesSorted.splice(0, 20);
  }
}

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const returnArray = [];

  for (let i = 0; i < movies.length; i++) {
    const stringDuration = movies[i].duration;
    const splitHour = stringDuration.split('h');
    const splitMinutes = splitHour[1].split('min');
    const numberOfHours = splitHour[0];
    const numberOfMinutes = splitMinutes[0];

    const totalMinutes = Number(numberOfHours) * 60 + Number(numberOfMinutes);

    // movies[i].duration = totalMinutes;

    /// returnArray.push(movies[i]);
    returnArray.push({ ...movies[i], duration: totalMinutes });
  }
  console.log(returnArray);
  return returnArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(movies) {
  no;
  const bestYearAvg = [];

  const years = movies.year;
  console.log(years[i]);
}

bestYearAvg(movies);

//For the last iteration, I tried to log several things to test the logic I wanted to implement but nothing logs in the SpecRunner console anymore. Here are 2 examples:
// Example 1: console.log(movies)
// -'ReferenceError: movies is not defined' in the terminal console (I think I'm in the right folder "Lucie@DESKTOP-B52IUH0 MINGW64 ~/Desktop/IronHack/module-1/week-1/day-5/lab-javascript-greatest-movies/src (master)")

// - It doesn't log in the specRunner console

// Example 2: console.log('hello');
// logs in the terminal console but not in the specRunner console.

//
//
// let GorodFirst = process.env.GOROD_ONE;
// let GorodSecond = process.env.GOROD_TWO;
//
// let RandomMin = process.env.RANDOM_MIN;
// let RandomMax = process.env.RANDOM_MAX;
//
// let PopulationFirst = process.env.POPULATION_ONE;
// let  PopulationSecond = process.env.POPULATION_TWO;
//
// let SquareFirstCity = process.env.SQUARE_ONE
// let SquareSecondCity = process.env.SQUARE_TWO
//
// //города
// function GorodOne(data) {
//     if (data === "MOSCOW") {
//         let Town = 'Москва'
//         return Town
//     }
// }
// function GorodTwoTrans(word){
//     var answer = '';
//     var converter = {
//         'a': 'а',    'b': 'б',    'v': 'в',    'g': 'г',    'd': 'д',
//         'e': 'е',    'e': 'е',    'zh': 'ж',   'z': 'з',    'i': 'и',
//         'y': 'й',    'k': 'к',    'l': 'л',    'm': 'м',    'n': 'н',
//         'o': 'о',    'p': 'п',    'r': 'р',    's': 'с',    't': 'т',
//         'u': 'ю',    'f': 'ф',    'h': 'х',    'c': 'ц',    'ch': 'ч',
//         'sh': 'ш',   'sch': 'щ',  '': 'ь',     'y': 'ы',    '': 'ъ',
//         'e': 'э',    'yu': 'ю',   'ya': 'я',
//
//         'A': 'А',    'B': 'Б',    'V': 'В',    'G': 'Г',    'D': 'Д',
//         'E': 'Е',    'E': 'Ё',    'Zh': 'Ж',   'Z': 'З',    'I': 'И',
//         'Y': 'Й',    'K': 'К',    'L': 'Л',    'M': 'М',    'N': 'Н',
//         'O': 'О',    'P': 'П',    'R': 'Р',    'S': 'С',    'T': 'Т',
//         'U': 'Ю',    'F': 'Ф',    'H': 'Х',    'C': 'Ц',    'Ch': 'Ч',
//         'Sh': 'Ш',   'Sch': 'Щ',  '': 'ь',     'Y': 'Ы',    '': 'Ъ',
//         'E': 'Э',    'Yu': 'Ю',   'Ya': 'Я'
//     };
//
//     for (var i = 0; i < word.length; ++i ) {
//         if (converter[word[i]] == undefined){
//             answer += word[i];
//         } else {
//             answer += converter[word[i]];
//         }
//     }
//     return answer;
// }
//
// // популяция
// function randomInteger(Min, Max) {
//     // получить случайное число от (min-0.5) до (max+0.5)
//     let rand = Min - 0.5 + Math.random() * (Max - Min + 1);
//     return Math.round(rand);
// }
// function PopulationFirstTown(){ // население москвы
//     let  PopFirst = randomInteger(RandomMin, RandomMax) * PopulationSecond
//     return  'население города' + ' ' + GorodOne(GorodFirst) + ' ' + 'составляет:' + PopFirst
// }
// function PopulationSecondTown(){ // население москвы
//     let  PopFirst = randomInteger(RandomMin, RandomMax) * PopulationFirst
//     return  'население города' + ' ' + GorodTwoTrans(GorodSecond) + ' ' + 'составляет:' + PopFirst
// }
//
// //   население площадь
// function SquarePopulationFirst(){
//     let popOne = randomInteger(RandomMin, RandomMax) * PopulationSecond
//     return popOne/SquareFirstCity
// }
// function SquarePopulationSecond(){
//     let popOne = randomInteger(RandomMin, RandomMax) * PopulationFirst
//     return popOne/SquareSecondCity
// }
//
// let Towns = {} //  объекты города
// let GorodOneCap = GorodOne(GorodFirst)
// let GorodTwoDis = GorodTwoTrans(GorodSecond)
// Towns.Town1 = GorodOneCap
// Towns.Town2 = GorodTwoDis
//
// let Population = {}
// let PopulationFirstCap = PopulationFirstTown()
// let PopulationSecondTows = PopulationSecondTown()
// Population.Population1 = PopulationFirstCap
// Population.Population2 = PopulationSecondTows
//
// let SquarePopulation = {}
// let SquarePopulationFirstTown = SquarePopulationFirst()
// let SquarePopulationSecondTown = SquarePopulationSecond()
// SquarePopulation.PopulationOne = SquarePopulationFirstTown
// SquarePopulation.PopulationTwo = SquarePopulationSecondTown

console.log(process.env.VAR)
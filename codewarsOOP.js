let santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

let notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
    // no distributeGifts() and no goDownTheChimney()
};

function isSantaClausable(obj){
    let count = 0
    for(let metod in obj){
      if(metod == 'sayHoHoHo' && typeof obj[metod]=='function'){
        count++
      }
      if(metod == 'distributeGifts' && typeof obj[metod]=='function'){
        count++
      }
      if(metod == 'goDownTheChimney'&& typeof obj[metod]=='function'){
        count++
      }
       console.log(metod);
    }
    if(count == 3){
        return true
    }else{
        return false
    }
}

// class Animal{
//     constructor(name,type){
//       this.name = name
//       this.type = type
//     }
//     toString(){
//        return `${this.name} is a ${this.type}`
//     }
// }

class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  function extractNameFromTemplate( value ) {
    let arr = value.split(' ')
    return `${arr[1]} ${arr[2].replace('!',"")}`
  }

  function getFirstChar( value ) {
    return value[0]
  }
  function removeLeadingAndTrailingWhitespaces( value ) {
    return value.trim()
  }
  function repeatString( value, count ) {
    let answer = ""
    for(let i = 0;i<count;i++){
      answer+=value
    }
    return answer
  }

  function removeFirstOccurrences( str, value ) {
    return str.replace(value,"")
  }

  function unbracketTag( str ) {
    let first = str.replace('<',"")
    let second = first.replace('>',"")
    return second
  }

  function getRectangleString( width, height ) {
    let rect = ''
    let answer = ''
    for(let i = 0; i<height ; i+=1){
     for(let j = 0; j<width ; j+=1){
      if(i==0){
        if(j==0){
          answer += '┌'
        }else if(j==width-1){
          answer += '┐'
        }else{
          answer += '─'
        }
      }else if(i==height-1){
        if(j==0){
          answer += '└'
        }else if(j==width-1){
          answer += '┘'
        }else{
          answer += '─'
        }
      }else{
        if(j == 0 || j == width-1){
          answer += '|'
        }else{
          answer += ' '
        }
      }
      
     }
     rect += answer+'\n'
     answer = ''
    }
    console.log(rect);
  }
  // getRectangleString(2,2)

  function encodeToRot13( str ) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabet1 = 'abcdefghijklm';
  const alphabet2 = 'nopqrstuvwxyz';
  const arr = str.split('');
  let newArr = []
  for (let i = 0; i < arr.length; i += 1) {
    if (alphabet1.indexOf(arr[i].toLowerCase()) != -1) {
      const newStr = alphabet1.indexOf(arr[i].toLowerCase());
      if (arr[i].toLowerCase() == arr[i]) {
        newArr.push( alphabet2[newStr])
      } else {
        newArr.push( alphabet2[newStr].toUpperCase())
      }
    }
    if (alphabet2.indexOf(arr[i].toLowerCase()) != -1) {
      const newStr = alphabet2.indexOf(arr[i].toLowerCase());
      if (arr[i].toLowerCase() == arr[i]) {
        newArr.push( alphabet1[newStr])
      } else {
        newArr.push( alphabet1[newStr].toUpperCase())
      }
    }
    if(alphabet.indexOf(arr[i].toLowerCase()) == -1) {
      newArr.push(arr[i])
    }
  }
  return newArr.join("");
  }
  // encodeToRot13('Why the chicken cross the road?')

  function isString( value ) {
    if(typeof value == 'string'){
      return true
    }else if(value == new String('test')){
      return true
    }else{
      return false
    }
  }

  function getCardId( value ) {
    let arr = ['A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
    'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
    'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
    'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'];
    let ID = 0
     arr.forEach((item,i) => {
      if(item === value){
        ID = i
      }
     })
     return ID
  }

  function getAngleBetweenVectors( x1, y1, x2, y2 ) {
    let scalar = ( x1 * x2 ) + ( y1 * y2)
    let cosinus = scalar / Math.sqrt( x1 ** 2 + x2 ** 2 ) * Math.sqrt( y1 ** 2 + y2 ** 2 )
    console.log(cosinus);
    console.log(Math.acos(cosinus));
    return Math.acos(cosinus)
  }
  // getAngleBetweenVectors(1,0,0,1)

  function getLastDigit( value ) {
    return value % 10;
  }

  function parseNumberFromString( value ) {
    return parseFloat( value );
  }

  function roundToPowerOfTen(num, pow) {
    const ten = 10 ** pow;
    const round = Math.round(num / ten);
    return round * ten;
  }

  function isPrime( n ) {
    let count = 1
    for(let i = 1; i<=n; i+=1){
      if(n % i == 0 ){
        count+=1
      }
    }
    if(count === 2){
      return true
    }else{
      return false
    }
    
  }

  function toNumber( value, def ) {
    if( !isNaN(parseFloat(value)) || value instanceof Number){

      return parseFloat(value)
    }else{
      return def
    }
  }

  function findElement( arr, value ) {
    return arr.indexOf(value)
  }

  function generateOdds( len ) {
    let arr = new Array(len).fill(1)
    let cur = 0
    let newArr = arr.map((item,i,array)=>{
      if(item == 1){
        item= item+cur
      }
      cur += 2
      return item
    })
    return newArr
  }
  generateOdds(5)
  function doubleArray( arr ) {
    let newArr = [...arr, ...arr]
    return newArr
  }

  function removeFalsyValues(arr) {
    const newArr = arr.filter((item) => item && true);
    return newArr;
  }

  function insertItem(arr, item, index) {
    const newArr = [...arr];
    newArr.splice(index, 0, item);
    return newArr
  }

  function getHead( arr, n ) {
    let newArr = arr.filter((item,i)=> i<n)
    return newArr
  }

  function getTail(arr, n) {
    const newArr = arr.reverse().filter((item, i) => i < n);
    return newArr.reverse();
  }

  function getMovingSum( arr ) {
    let sum = 0
    const Newarr = arr.map((item) => {
        sum+=item
        return sum
    });
    return Newarr;
  }

  function propagateItemsByPositionIndex( arr ) {
    let newArr = arr.map((item,i)=>{
      let a = new Array(i+1).fill(item)
      return a
    })
    let answer = newArr.reduce( (accum,elem)=>{
      elem.map(item=>accum.push(item))
      return accum
    },[])
    return answer
  }


  function get3TopItems( arr ) {
    const newArr = [...arr];
    let count = 0;
    let topArr = newArr.map(() => {
      count += 1;
      if (count <= 3) {
        const max1 = Math.max.apply(null, arr);
        arr.splice(newArr.indexOf(max1), 1);
        return max1;
      }
      return undefined;
    });
    topArr = topArr.filter((item) => item !== undefined);
    console.log(topArr);
    return topArr;
  }

  function getPositivesCount(arr) {
    const Newarr = arr.filter((item) => {if(typeof item === 'number' && item > 0){
      
      return item
    }});
    console.log(Newarr);
    return Newarr.length;
  }

  function getItemsSum( arr ) {
    let answer = arr.reduce((accum,item)=>item+accum)
    console.log(answer);
  }

  function toStringList( arr ) {
    let string = arr.reduce((accum,item)=>{
      console.log(item);
      console.log(accum);
     accum+=`${item},`
     return accum
    },"")
    return string
  }
  console.log(toStringList([0, false, 'cat', NaN, true, '']));
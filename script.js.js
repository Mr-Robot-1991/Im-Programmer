 /*

 // * Создали массив с числами и строками 

 let arr = [1,2,3,4,5,6,19,7,121, 8,9,33,54,7676,87,43,2,'Javascript' , 'HTML' , 'CSS' , 'VueJS', 'ReactJS'];

/* возвращает новый массив нечетных чисел, если таковые имеются в переданном массиве,
 иначе функция вернет массив со строкой "Нечетные числа отсутствуют" 


function chekNumberAndString () {
  let notEvenNumber = [];
  let string = [];

  for (i = 0; i < arr.length; i++){ 
     if (arr[i] % 2 == ! 0){
     notEvenNumber.push(arr[i])
      } else if (arr[i] % 2 != 0){
       string.push(arr[i])
      }
  }

   if (notEvenNumber.length  > 0){
    return notEvenNumber
   }else {
    return string
   }

 }

console.log(chekNumberAndString ());
*/


import {franc, francAll} from 'franc';
import  colors  from 'colors';
import  langs  from 'langs';

var input = process.argv[2];


const langCode = franc(input.toString());

if(langCode == 'und') {
  const errorString = "Entered input is not a existing language , Try Again !!!!" ;
  console.log(errorString.red)
} else {

  const langArr = langs.where("3", langCode);
  console.log(`Our best guess is : ${langArr.name.green}`)
  
}





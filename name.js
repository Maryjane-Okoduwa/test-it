function printName(name,height,country){
  return name + '<br/> ' + height + '<br/> '+ country;
}

document.querySelector('#showName').innerHTML = printName('Maryjane','5.7ft','Nigeria')
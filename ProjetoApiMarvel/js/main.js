var animacao = anime({
    //targets são os alvos a serem modificados
    targets: 'div.caixas.primeira',
    //tranlate é para onde a div vai e o quanto ela vai 
    translateX:[
        {value:1000,duration:1000}
    ],
    background: "#fafafa",
    width: "650px",
    marginBottom: '15px',
    autoplay:false,
    delay:function(el,i,totalTarget){return i * 1000}
});
var animacao2 = anime({
    //targets são os alvos a serem modificados
    targets: 'div.caixas.segunda',
    //tranlate é para onde a div vai e o quanto ela vai 
    translateX:[
        {value:1010,duration:1000}
    ],
    background: "#fafafa",
    marginBottom: '15px',
    width: "650px",
    autoplay:false,
    delay:function(el,i,totalTarget){return i * 1000}
});

var animacao3 = anime({
    //targets são os alvos a serem modificados
    targets: 'div.caixas.terceira',
    //tranlate é para onde a div vai e o quanto ela vai 
    translateX:[
        {value:1020,duration:1000}
    ],
    background: "#fafafa",
    marginBottom: '15px',
    width: "650px",
    autoplay:false,
    delay:function(el,i,totalTarget){return i * 1000}
});

var animacao4 = anime({
    //targets são os alvos a serem modificados
    targets: 'div.caixas.quarta',
    //tranlate é para onde a div vai e o quanto ela vai 
    translateX:[
        {value:1030,duration:1000}
    ],
    background: "#fafafa",
    marginBottom: '15px',
    width: "650px",
    autoplay:false,
    delay:function(el,i,totalTarget){return i * 1000}
});

const show = function(){
    $(this).stop(true, true).animate({opacity : 0})
  }



chamaFuncs = () => {
    animacao.play();
    animacao2.play();
    animacao3.play();
    animacao4.play();
    mostraDiv.play();
}

var mostraDiv =  anime({
    targets:'div#spinner',
    opacity : '1',
    autoplay:false,
    
    
});

var escondeDiv = anime({
    targets: 'div#spinner',
    background:'#000',
    autoplay:false,
    loop:false
})


 


//essa linha chamara  uma função que ativara todas as animações
const $botao = document.getElementById('button-addon2').onclick =()=>chamaFuncs();
const $loader = document.getElementById('spinner');

setTimeout(function(){ escondeDiv.play(),1000});


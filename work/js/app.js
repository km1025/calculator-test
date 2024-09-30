document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById("display");
  let expression = "";

  // ボタンクリックで関数処理
  document.getElementById('calculator').addEventListener('click', (e) => {
    const target = e.target;

  // 数字クリックで数字を表示
  if(target.classList.contains('number')){
    expression+=target.dataset.number;
    display.value=expression;

    //演算子の表示
  }else if(target.classList.contains('operator')){
    expression+=target.dataset.operator;
    display.value=expression;

  // クリアボタン
  }else if(target.classList.contains('clear')){
    expression='';
    display.value=expression;
  }else if(target.classList.contains('equals')){
    
    //数式を表示・イコール
    try{
      display.value=eval(expression);
      expression=display.value
    }catch{
      display.value='error';
      expression= '';
    }
  }
  });
});
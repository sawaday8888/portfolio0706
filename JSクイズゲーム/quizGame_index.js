//一番初めに一問だけでテストした時
//const question = 'ゲーム市場、最も売れたゲームは何でしょう？';
//const answers = ['スーファミ','プレステ2','任天堂スイッチ','任天堂DS'];
//const correct = '任天堂DS';

//3問続けて行う為、配列を使う。配列の中に配列を記入。変数は : 区切りは , になる。
const quiz = [
  {question: 'ゲーム市場、最も売れたゲームは何でしょう？',
   answers: ['スーファミ','プレステ2','ニンテンドーSwitch','ニンテンドーDS'],
   correct: '任天堂DS'
  },

  {question:'糸井重里が携わった看板ゲームのタイトルと言えば何でしょう？',
  answers: ['MOTHER2','ドンキーコング','スーパーマリオブラザーズ','星のカービィ'],
  correct: 'MOTHER2'
  },

  {question:'FFⅣの主人公は誰でしょう？',
  answers:['フリオニール','クラウド','ティーダ','セシル'],
  correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

console.log();
document.getElementById('js-question').textContent = quiz[quizIndex].question;

//定数の文字列をHTMLに反映させる
const $button = document.getElementsByTagName('button');

// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];
//↓リファクタリング
const setupQuiz = () => {
 let buttonIndex = 0;
 let buttonLength = $button.length;
 while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
 }
}
setupQuiz();

//ぼたんクリックしたら正誤判定
// $button[0].addEventListener('click',()=>{
//   if(correct === $button[0].textContent){
//     window.alert('正解！');
//   }
//   else{
//     window.alert('不正解！');
//   }
// });

// $button[1].addEventListener('click',()=>{
//   if(correct === $button[1].textContent){
//     window.alert('正解！');
//   }
//   else{
//     window.alert('不正解！');
//   }
// });

// $button[2].addEventListener('click',()=>{
//   if(correct === $button[2].textContent){
//     window.alert('正解！');
//   }
//   else{
//     window.alert('不正解！');
//   }
// });

// $button[3].addEventListener('click',()=>{
//   if(correct === $button[3].textContent){
//     window.alert('正解！');
//   }
//   else{
//     window.alert('不正解！');
//   }
// });

// $button[0].addEventListener('click',()=>{
//   if(correct === $button[0].textContent){
//     window.alert('正解！');
//   }
//   else{
//     window.alert('不正解！');
//   }
// });
//↓リファクタリング

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }
  else{
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }
  else{
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }

}

// $button[0].addEventListener('click',(e)=>{
//   clickHandler(e);
// });
// $button[1].addEventListener('click',(e)=>{
//   clickHandler(e);
// });
// $button[2].addEventListener('click',(e)=>{
//   clickHandler(e);
// });
// $button[3].addEventListener('click',(e)=>{
//   clickHandler(e);
// });
//↓リファクタリング

let handlerIndex = 0;
const buttonLength = $button.length;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e)=>{
    clickHandler(e);
  });
  handlerIndex++;
}

// document.getElementsByTagName('button')[0].addEventListener('click',()=>{
//   //命令を書く
//   window.alert('正解');
// }

// document.getElementsByTagName('button')[1].addEventListener('click',()=>{
//   //命令を書く
//   window.alert('不正解');
// }

// document.getElementsByTagName('button')[0].addEventListener('click',()=>{
//   //命令を書く
//   window.alert('不正解');
// }

// document.getElementsByTagName('button')[0].addEventListener('click',()=>{
//   //命令を書く
//   window.alert('不正解');
// }

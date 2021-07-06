//一番初めに3問続けて問題と答えを宣言。
//配列を使う。配列の中に配列を記入。変数は : 区切りは , になる。
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

//定数の文字列をHTMLに反映させる
const $button = document.getElementsByTagName('button');

const setupQuiz = () => {
 
  document.getElementById('js-question').textContent = quiz[quizIndex].question;

 let buttonIndex = 0;
 let buttonLength = $button.length;
 while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
 }
}
setupQuiz();

//ボタンクリックしたら正誤判定
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

//ボタン判定
let handlerIndex = 0;
const buttonLength = $button.length;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e)=>{
    clickHandler(e);
  });
  handlerIndex++;
}
setTimeout(function () {
    $('#mainimg').vegas({
        slides: [
            { src: './images/1.jpg' },	//1枚目の写真指定
            { src: './images/2.jpg' },	//2枚目の写真指定
            { src: './images/3.jpg' },	//3枚目の写真指定
        ],
		transition: 'slideLeft',		//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		//animation: 'kenburns',	//https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
		delay: 5000,			//次の画像を表示するまでの時間
		animationDuration: 20000,	//アニメーション間の引き継ぎタイミング。
    });
}, 0);	//0秒遅れてスライドショーがスタート

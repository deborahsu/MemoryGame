$(document).ready(function () {
    var game = {
        start: function () {                                                             
            game.shuffleCards();
            game.assignCard();

        },
        selectCard: function () {

        },
        cards: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],

        shuffleCards: function () {
            var randomIndex = 0;
            var temporaryIndex = 0;
            for (i = 0; i < game.cards.length; i++) {
                temporaryIndex = game.cards[i];
                randomIndex = Math.round(Math.random() * i);
                game.cards[i] = game.cards[randomIndex];
                game.cards[randomIndex] = temporaryIndex;

            }
            console.log(game.cards);
        },
        assignCard: function () {
            $(".card").each(function (index) {
                $(this).attr('data-card-value', game.cards[index]);
            });
            game.selectCard();

        },

        selectCard: function () {   
            
          
            $('.card').on("click", function () {
                if($('.selected').length<2){
                $(this).html('<img src=./images/' + $(this).data('cardValue') + '.jpeg>');
                $(this).addClass("selected");
                console.log($('.selected').length);
                game.checkMatch();
                }    
            });

        },
    

        checkMatch: function () {
            if ($('.selected').length == 2) {
                if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
                    $('.selected').each(function () {
                        $(this).animate({ opacity: 0 }).removeClass('selected unflipped');
                        console.log("unflipped remaining: " + $('.unflipped').length);
                        game.checkWin();
                    
                    });
                } else {
                    setTimeout(function(){
                        $(".selected").each(function(){
                            $(this).html('').removeClass('selected');
                            console.log("cards flipped");
                            });
                        },1000);
                }
        
            }
        },
     
    checkWin: function(){
        if ($('.unflipped').length===0){
            $('.container').html('<h1>You win!</h1>');
            console.log('you win');
            $('body').append('<div></div>').addClass("winpic");
        }

    }


    }
    game.start();

    $("button").on('click',()=>{
        location.reload();
        game.start();
    });
});





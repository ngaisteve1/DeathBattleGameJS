const getAttackDamage = () => {
    return Math.floor(Math.random() * 3);
};

const playGame = () => {
    init();

    // recurssive is used instead of while loop for the setTimeout to work
    fight();
};

function fight() {
    setTimeout(function() {
        $("#heroBatman").removeClass("attacked");
        $("#heroSuperman").removeClass("attacked");
        // while both still alive, figth each other.

        // recurssive is used instead of while loop for the setTimeout to work
        //while (superman.isAlive && batman.isAlive) {

        var whoAttack = Math.floor(Math.random() * 2);
        if (whoAttack === 0) {
            // superman attack batman

            // Random attack will be generated from 0-2
            // if attack is zero, enemy avoided attack.
            superman.attack = getAttackDamage();
            if (superman.attack === 0) {
                $("#gameResult").text("Superman attacked Batman but Batman avoided.");
            } else {
                batman.life = batman.life - superman.attack;
                $("#gameResult").text("Superman punched Batman.");
                $("#heroBatman").addClass("attacked");
            }

            updateLife(batman);
            showHeroLife();
        } else {
            // batman attack superman

            // Random attack will be generated from 0-2
            // if attack is zero, enemy avoided attack.
            batman.attack = getAttackDamage();
            if (batman.attack === 0) {
                $("#gameResult").text("Superman dodged from Batmans trap.");
            } else {
                //superman.life = superman.life - 1;
                superman.life = superman.life - batman.attack;
                $("#gameResult").text(
                    "Batman uses remote activated guns that fire and expels Kryptonite mist at Superman."
                );
                $("#heroSuperman").addClass("attacked");
            }

            updateLife(superman);
            showHeroLife();
        }

        checkEndGame();
        //}

        // recurssive is used instead of while loop for the setTimeout to work
        if (superman.isAlive && batman.isAlive) fight();
    }, 1500);
}

const showHeroLife = () => {
    $("#supermanLife").text(superman.life);
    $("#batmanLife").text(batman.life);
};

const checkEndGame = () => {
    if (superman.isAlive === false || batman.isAlive === false) {
        console.log("Game Over");

        if (superman.isAlive) {
            $("#gameResult").text("Superman killed Batman with X-Ray laser vision.");
            console.log("Superman win");
            $("#heroBatman").fadeTo(1000, 0.2); // fadeOut
        } else {
            $("#gameResult").text("Batman killed Superman with Kryptonite spear.");
            console.log("Batman win");
            $("#heroSuperman").fadeTo(1000, 0.2); // fadeOut
        }
    }
};

const updateLife = (hero) => {
    if (hero.life <= 0) {
        hero.life = 0;
        hero.isAlive = false;
    }
}

function Hero(name, life) {
    this.name = name;
    this.life = 10;
    this.isAlive = true;
    this.attack = 0;
}

const init = () => {
    batman = new Hero('Bruce Banner');
    superman = new Hero('Clark Kent');
    debugger;
    $("#gameResult").text("");
    $("#heroSuperman").fadeTo(2000, 1);
    $("#heroBatman").fadeTo(2000, 1);
    debugger;
    showHeroLife();
};
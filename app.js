var superman = {
  life: 10,
  isAlive: true,
  attack: 0
  // attack() {
  //   return getAttackDamage();
  // }
};

var batman = {
  life: 10,
  isAlive: true,
  attack: 0
  // attack() {
  //   return getAttackDamage();
  // }
};

const getAttackDamage = () => {
  return Math.floor(Math.random() * 3);
};

const playGame = () => {
  init();

  // recurssive is used instead of while loop for the setTimeout to work
  fight();

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

        if (batman.life <= 0) {
          batman.life = 0;
          batman.isAlive = false;
        }

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

        if (superman.life <= 0) {
          superman.life = 0;
          superman.isAlive = false;
        }

        showHeroLife();
      }

      checkEndGame();
      //}

      // recurssive is used instead of while loop for the setTimeout to work
      if (superman.isAlive && batman.isAlive) fight();
    }, 1500);
  }
};

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

const init = () => {
  $("#gameResult").text("");

  superman.life = 10;
  superman.isAlive = true;
  $("#heroSuperman").fadeTo(2000, 1);

  batman.life = 10;
  batman.isAlive = true;
  $("#heroBatman").fadeTo(2000, 1);

  showHeroLife();
};

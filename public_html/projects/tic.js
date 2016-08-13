var one = "";
var two = "";
var three = "";
var four = "";
var five = "";
var six = "";
var seven = "";
var eight = "";
var nine = "";
var user = "";
var userplays = [];
var comp = "";
var compplays = [];
var moves = 0;
var lastplay = "";
var lastmove = "";
var reb;

$("#b1").on("click", function() {
  if (one === "") {
    lastplay = "one";
    moves++;
    one = "user";
    $("#bone").html(user);
    userplays.push("one");
    check();
    corner();
    check2();
  }
});
$("#b2").on("click", function() {
  if (two === "") {
    lastplay = "two";
    moves++;
    two = "user";
    $("#btwo").html(user);
    userplays.push("two");
    check();
    corner();
    check2();
  }
});
$("#b3").on("click", function() {
  if (three === "") {
    lastplay = "three";
    moves++;
    three = "user";
    $("#bthree").html(user);
    userplays.push("three");
    check();
    corner();
    check2();
  }
});
$("#b4").on("click", function() {
  if (four === "") {
    lastplay = "four";
    moves++;
    four = "user";
    $("#bfour").html(user);
    userplays.push("four");
    check();
    corner();
    check2();
  }
});
$("#b5").on("click", function() {
  if (five === "") {
    lastplay = "five";
    moves++;
    five = "user";
    $("#bfive").html(user);
    userplays.push("five");
    check();
    corner();
    check2();
  }
});
$("#b6").on("click", function() {
  if (six === "") {
    lastplay = "six";
    moves++;
    six = "user";
    $("#bsix").html(user);
    userplays.push("six");
    check();
    corner();
    check2();
  }
});
$("#b7").on("click", function() {
  if (seven === "") {
    lastplay = "seven";
    moves++;
    seven = "user";
    $("#bseven").html(user);
    userplays.push("seven");
    check();
    corner();
    check2();
  }
});
$("#b8").on("click", function() {
  if (eight === "") {
    lastplay = "eight";
    moves++;
    eight = "user";
    $("#beight").html(user);
    userplays.push("eight");
    check();
    corner();
    check2();
  }
});
$("#b9").on("click", function() {
  if (nine === "") {
    lastplay = "nine";
    moves++;
    nine = "user";
    $("#bnine").html(user);
    userplays.push("nine");
    check();
    corner();
    check2();
  }
});

$("#clear").on("click", clean);

function clean() {
  $("#bone").html("");
  $("#btwo").html("");
  $("#bthree").html("");
  $("#bfour").html("");
  $("#bfive").html("");
  $("#bsix").html("");
  $("#bseven").html("");
  $("#beight").html("");
  $("#bnine").html("");
  one = "";
  two = "";
  three = "";
  four = "";
  five = "";
  six = "";
  seven = "";
  eight = "";
  nine = "";
  moves = 0;
  userplays = [];
}

function check() {
  if (one == "user" && two == "user" && three == "user" || four == "user" && five == "user" && six == "user" || seven == "user" && eight == "user" && nine == "user" || one == "user" && four == "user" && seven == "user" || two == "user" && five == "user" && eight == "user" || three == "user" && six == "user" && nine == "user" || one == "user" && five == "user" && nine == "user" || three == "user" && five == "user" && seven == "user") {
    alert("You win!");
    clean();
  }
}

function check2() {
  if (one == "comp" && two == "comp" && three == "comp" || four == "comp" && five == "comp" && six == "comp" || seven == "comp" && eight == "comp" && nine == "comp" || one == "comp" && four == "comp" && seven == "comp" || two == "comp" && five == "comp" && eight == "comp" || three == "comp" && six == "comp" && nine == "comp" || one == "comp" && five == "comp" && nine == "comp" || three == "comp" && five == "comp" && seven == "comp") {
    alert("You lose!");
    clean();
  } else if (one != "" && two != "" && three != "" && four != "" && five != "" && six != "" && seven != "" && eight != "" && nine != "") {
    alert("Cats!");
    clean();

  }
}

function rebuttle() {
  if (five == "user" || five == "") {
    if (one == "") {
      one = "comp";
      $("#bone").html(comp);
      lastplay = "";
    } else if (three == "") {
      three = "comp";
      $("#bthree").html(comp);
      lastplay = "";
    } else if (seven == "") {
      seven = "comp";
      $("#bseven").html(comp);
      lastplay = "";
    } else if (nine == "") {
      nine = "comp";
      $("#bnine").html(comp);
      lastplay = "";
    } else if (two == "") {
      two = "comp";
      $("#btwo").html(comp);
      lastplay = "";
    } else if (four == "") {
      four = "comp";
      $("#bfour").html(comp);
      lastplay = "";
    } else if (six == "") {
      six = "comp";
      $("#bsix").html(comp);
      lastplay = "";
    } else if (eight == "") {
      eight = "comp";
      $("#beight").html(comp);
      lastplay = "";
    } else if (nine == "") {
      nine = "comp";
      $("#nine").html(comp);
      lastplay = "";
    }
  }

  if (five == "comp") {
    if (two == "") {
      two = "comp";
      $("#btwo").html(comp);
      lastplay = "";
    } else if (four == "") {
      four = "comp";
      $("#bfour").html(comp);
      lastplay = "";
    } else if (six == "") {
      six = "comp";
      $("#bsix").html(comp);
      lastplay = "";
    } else if (eight == "") {
      eight = "comp";
      $("#beight").html(comp);
      lastplay = "";
    } else if (one == "") {
      one = "comp";
      $("#bone").html(comp);
      lastplay = "";
    } else if (three == "") {
      three = "comp";
      $("#bthree").html(comp);
      lastplay = "";
    } else if (seven == "") {
      seven = "comp";
      $("#bseven").html(comp);
      lastplay = "";
    } else if (nine == "") {
      nine = "comp";
      $("#bnine").html(comp);
      lastplay = "";
    }
  }
}

//userplays[0] == "two" || userplays[0] == "four" || userplays[0] == "six" || userplays[0] == "eight"

function corner() {
  if (moves == 1) {
    if (five == "") {
      five = "comp";
      $("#bfive").html(comp);
      lastplay = "";
    } else rebuttle();
  } else if (five == "") {

    if (userplays[userplays.length - 1] == "one" && nine == "user") {
      five = "comp";
      $("#bfive").html(comp);
      lastplay = "";
    } else if (userplays[userplays.length - 1] == "two" && eight == "user") {
      five = "comp";
      $("#bfive").html(comp);
      lastplay = "";
    } else if (userplays[userplays.length - 1] == "three" && seven == "user") {
      five = "comp";
      $("#bfive").html(comp);
      lastplay = "";
    } else if (userplays[userplays.length - 1] == "six" && four == "user") {
      five = "comp";
      $("#bfive").html(comp);
      lastplay = "";
    } else if (userplays[userplays.length - 1] == "nine" && one == "user") {
      five = "comp";
      $("#bfive").html(comp);
      lastplay = "";
    } else if (userplays[userplays.length - 1] == "eight" && two == "user") {
      five = "comp";
      $("#bfive").html(comp);
      lastplay = "";
    } else if (userplays[userplays.length - 1] == "seven" && three == "user") {
      five = "comp";
      $("#bfive").html(comp);
      lastplay = "";
    } else if (userplays[userplays.length - 1] == "four" && six == "user") {
      five = "comp";
      $("#bfive").html(comp);
      lastplay = "";
    }

  } else if (five == "user") {
    if (lastplay == "five") {
      rebuttle();
    } else switch (userplays[userplays.length - 1]) {

      case "three":
        if (seven == "") {
          seven = "comp";
          $("#bseven").html(comp);
          lastplay = "";
        } else rebuttle();
        break;
      case "two":
        if (eight == "") {
          eight = "comp";
          $("#beight").html(comp);
          lastplay = "";
        } else rebuttle();
        break;
      case "four":
        if (six == "") {
          six = "comp";
          $("#bsix").html(comp);
          lastplay = "";
        } else rebuttle();
        break;
      case "six":
        if (four == "") {
          four = "comp";
          $("#bfour").html(comp);
          lastplay = "";
        } else rebuttle();
        break;
      case "seven":
        if (three == "") {
          three = "comp";
          $("#bthree").html(comp);
          lastplay = "";
        } else rebuttle();
        break;
      case "eight":
        if (two == "") {
          two = "comp";
          $("#btwo").html(comp);
          lastplay = "";
        } else rebuttle();
        break;
      case "nine":
        if (three == "") {
          three = "comp";
          $("#bthree").html(comp);
          lastplay = "";
        } else rebuttle();
    }

  } else if (five == "comp" || five == "") {
    if (userplays[userplays.length - 1] == "one") {
      if (two == "user") {
        if (three == "") {
          three = "comp";
          $("#bthree").html(comp);
          lastplay = "";
        } else rebuttle();
      } else if (three == "user") {
        if (two == "") {
          two = "comp";
          $("#btwo").html(comp);
          lastplay = "";
        } else rebuttle();
      } else if (four == "user") {
        if (seven == "") {
          seven = "comp";
          $("#bseven").html(comp);
          lastplay = "";
        } else rebuttle();
      } else if (seven == "user") {
        if (four == "") {
          four = "comp";
          $("#bfour").html(comp);
          lastplay = "";
        } else rebuttle();
      } else rebuttle();
    } else if (userplays[userplays.length - 1] == "three") {
      if (one == "user") {
        if (two == "") {
          two = "comp";
          $("#btwo").html(comp);
          lastplay = "";
        } else rebuttle();
      } else if (two == "user") {
        if (one == "") {
          one = "comp";
          $("#bone").html(comp);
          lastplay = "";
        } else rebuttle();
      } else if (six == "user") {
        if (nine == "") {
          nine = "comp";
          $("#bnine").html(comp);
          lastplay = "";
        } else rebuttle();
      } else if (nine == "user") {
        if (six == "") {
          six = "comp";
          $("#bsix").html(comp);
          lastplay = "";
        } else rebuttle();

      } else rebuttle();
    } else if (userplays[userplays.length - 1] == "seven") {
      if (one == "user") {
        if (four == "") {
          four = "comp";
          $("#bfour").html(comp);
          lastplay = "";
        } else rebuttle();
      } else if (four == "user") {
        if (one == "") {
          one = "comp";
          $("#bone").html(comp);
          lastplay = "";
        } else rebuttle();
      } else if (eight == "user") {
        if (nine == "") {
          nine = "comp";
          $("#bnine").html(comp);
          lastplay = "";
        } else rebuttle();
      } else if (nine == "user") {
        if (eight == "") {
          eight = "comp";
          $("#beight").html(comp);
          lastplay = "";
        } else rebuttle();
      } else rebuttle();
    } else if (userplays[userplays.length - 1] == "nine") {
      if (three == "user") {
        if (six == "") {
          six = "comp";
          $("#bsix").html(comp);
          lastplay = "";
        } else rebuttle();
      } else if (six == "user") {
        if (three == "") {
          three = "comp";
          $("#bthree").html(comp);
          lastplay = "";
        } else rebuttle();
      } else if (seven == "user") {
        if (eight == "") {
          eight = "comp";
          $("#beight").html(comp);
          lastplay = "";
        } else rebuttle();
      } else if (eight == "user") {
        if (seven == "") {
          seven = "comp";
          $("#bseven").html(comp);
          lastplay = "";
        } else rebuttle();
      } else rebuttle();
    } else if (userplays[userplays.length - 1] == "two") {
      if (one == "user") {
        if (three == "") {
          three = "comp";
          $("#bthree").html(comp);
          lastplay = "";
        } else rebuttle();
      } else if (three == "user") {
        if (one == "") {
          one = "comp";
          $("#bone").html(comp);
          lastplay = "";
        } else rebuttle();
      } else rebuttle();
    } else if (userplays[userplays.length - 1] == "four") {
      if (one == "user") {
        if (seven == "") {
          seven = "comp";
          $("#bseven").html(comp);
          lastplay = "";
        } else rebuttle();
      } else if (seven == "user") {
        if (one == "") {
          one = "comp";
          $("#bone").html(comp);
          lastplay = "";
        } else rebuttle();
      } else rebuttle();
    } else if (userplays[userplays.length - 1] == "six") {
      if (three == "user") {
        if (nine == "") {
          nine = "comp";
          $("#bnine").html(comp);
          lastplay = "";
        } else rebuttle();
      } else if (nine == "user") {
        if (three == "") {
          three = "comp";
          $("#bthree").html(comp);
          lastplay = "";
        } else rebuttle();
      } else rebuttle();
    } else if (userplays[userplays.length - 1] == "eight") {
      if (seven == "user") {
        if (nine == "") {
          nine = "comp";
          $("#bnine").html(comp);
          lastplay = "";
        } else rebuttle();
      } else if (nine == "user") {
        if (seven == "") {
          seven = "comp";
          $("#bseven").html(comp);
          lastplay = "";
        } else rebuttle();
      } else rebuttle();
    } else rebuttle();
  }

  console.log(moves);
  console.log(userplays[userplays.length - 1]);

}

function stay() {
  $('#confirm').dialog({
    position: {
      my: 'left top',
      at: 'left top',
      of: $('#board'),
      collision: "none"
    }
  });
}

$(function conf() {
  var x;
  $("#confirm").dialog({
    modal: true,
    width: 310,
    height: 205,
     position: {
      my: 'left top',
      at: 'left top',
      of: $('#board'),
      collision: "none"
    },
    buttons: 
      {
        
      "X": function() {
        id: "taco";
        user = "<h1>X</h1>";
        comp = "<h1>O</h1>";
        x = "X!";
        $(this).dialog("close");
      },
      "O": function() {
        comp = "<h1>X</h1>";
        user = "<h1>O</h1>";
        x = "O!";
        $(this).dialog("close");
      }
    },
  });
});

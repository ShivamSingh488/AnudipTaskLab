   let value = true;
    let winner = false;
    document.body.querySelector(".showTurn").innerHTML = "👉 It is X's Turn";
    document.body.querySelectorAll(".box").forEach((box) => {
        box.addEventListener("click", () => {
            if (winner == false) {
                if (box.innerHTML == "") {
                    box.innerHTML = value ? "X" : "O";
                    if (value == true) {
                        document.body.querySelector(".showTurn").innerHTML = "👉 It is O's Turn";
                    }
                    else {
                        document.body.querySelector(".showTurn").innerHTML = "👉 It is X's Turn";

                    }
                    if (value == false) {
                        value = true;
                    }
                    else {
                        value = false;
                    }
                }
                count++;
                result();
            }
        })
    })

    document.body.querySelector(".firstContainerChildSecond").addEventListener("click", () => {
        document.querySelectorAll(".box").forEach((box) => {
            box.innerHTML = "";
        })
        document.querySelector(".showTurn").innerHTML = "👉 It is X's turn";
        document.querySelector(".showResult").innerHTML = ""
        winner = false;
        count = 0;
    }

    )
    let count = 0;

    function result() {
        if (document.querySelector(".box1").innerHTML === "X" && document.querySelector(".box2").innerHTML === "X" &&
            document.querySelector(".box3").innerHTML === "X") {
            document.body.querySelector(".showResult").innerHTML = "X  is a winner 🏆 "
            winner = true;
            document.body.querySelector(".showTurn").innerHTML = "";

        }
        else if (document.querySelector(".box4").innerHTML === "X" && document.querySelector(".box5").innerHTML === "X" &&
            document.querySelector(".box6").innerHTML === "X") {
            document.body.querySelector(".showResult").innerHTML = "X  is a winner 🏆"; winner = true;
            document.body.querySelector(".showTurn").innerHTML = "";
        }
        else if (document.querySelector(".box7").innerHTML === "X" && document.querySelector(".box8").innerHTML === "X" &&
            document.querySelector(".box9").innerHTML === "X") {
            document.body.querySelector(".showResult").innerHTML = "X  is a winner 🏆"; winner = true;
            document.body.querySelector(".showTurn").innerHTML = "";
        }
        else if (document.querySelector(".box1").innerHTML === "X" && document.querySelector(".box5").innerHTML === "X" &&
            document.querySelector(".box9").innerHTML === "X") {
            document.body.querySelector(".showResult").innerHTML = "X  is a winner 🏆"; winner = true;
            document.body.querySelector(".showTurn").innerHTML = "";
        }
        else if (document.querySelector(".box3").innerHTML === "X" && document.querySelector(".box5").innerHTML === "X" &&
            document.querySelector(".box7").innerHTML === "X") {
            document.body.querySelector(".showResult").innerHTML = "X  is a winner 🏆"; winner = true;
            document.body.querySelector(".showTurn").innerHTML = "";
        }
        else if (document.querySelector(".box1").innerHTML === "X" && document.querySelector(".box4").innerHTML === "X" &&
            document.querySelector(".box7").innerHTML === "X") {
            document.body.querySelector(".showResult").innerHTML = "X  is a winner 🏆"; winner = true;
            document.body.querySelector(".showTurn").innerHTML = "";
        }
        else if (document.querySelector(".box2").innerHTML === "X" && document.querySelector(".box5").innerHTML === "X" &&
            document.querySelector(".box8").innerHTML === "X") {
            document.body.querySelector(".showResult").innerHTML = "X  is a winner 🏆"; winner = true;
            document.body.querySelector(".showTurn").innerHTML = "";
        }
        else if (document.querySelector(".box3").innerHTML === "X" && document.querySelector(".box6").innerHTML === "X" &&
            document.querySelector(".box9").innerHTML === "X") {
            document.body.querySelector(".showResult").innerHTML = "X  is a winner 🏆"; winner = true;
            document.body.querySelector(".showTurn").innerHTML = "";
        }
        else if (document.querySelector(".box1").innerHTML === "O" && document.querySelector(".box2").innerHTML === "O" &&
            document.querySelector(".box3").innerHTML === "O") {
            document.body.querySelector(".showResult").innerHTML = "O  is a winner 🏆"; winner = true;
            document.body.querySelector(".showTurn").innerHTML = "";
        }
        else if (document.querySelector(".box4").innerHTML === "O" && document.querySelector(".box5").innerHTML === "O" &&
            document.querySelector(".box6").innerHTML === "O") {
            document.body.querySelector(".showResult").innerHTML = "O  is a winner 🏆"; winner = true;
            document.body.querySelector(".showTurn").innerHTML = "";
        }
        else if (document.querySelector(".box7").innerHTML === "O" && document.querySelector(".box8").innerHTML === "O" &&
            document.querySelector(".box9").innerHTML === "O") {
            document.body.querySelector(".showResult").innerHTML = "O  is a winner 🏆"; winner = true;
            document.body.querySelector(".showTurn").innerHTML = "";
        }
        else if (document.querySelector(".box1").innerHTML === "O" && document.querySelector(".box5").innerHTML === "O" &&
            document.querySelector(".box9").innerHTML === "O") {
            document.body.querySelector(".showResult").innerHTML = "O  is a winner 🏆"; winner = true;
            document.body.querySelector(".showTurn").innerHTML = "";
        }
        else if (document.querySelector(".box3").innerHTML === "O" && document.querySelector(".box5").innerHTML === "O" &&
            document.querySelector(".box7").innerHTML === "O") {
            document.body.querySelector(".showResult").innerHTML = "O  is a winner 🏆"; winner = true;
            document.body.querySelector(".showTurn").innerHTML = "";

        }
        else if (document.querySelector(".box1").innerHTML === "O" && document.querySelector(".box4").innerHTML === "O" &&
            document.querySelector(".box7").innerHTML === "O") {
            document.body.querySelector(".showResult").innerHTML = "O  is a winner 🏆"; winner = true;
            document.body.querySelector(".showTurn").innerHTML = "";

        }
        else if (document.querySelector(".box2").innerHTML === "O" && document.querySelector(".box5").innerHTML === "O" &&
            document.querySelector(".box8").innerHTML === "O") {
            document.body.querySelector(".showResult").innerHTML = "O  is a winner 🏆"; winner = true;
            document.body.querySelector(".showTurn").innerHTML = "";

        }
        else if (document.querySelector(".box3").innerHTML === "O" && document.querySelector(".box6").innerHTML === "O" &&
            document.querySelector(".box9").innerHTML === "O") {
            document.body.querySelector(".showResult").innerHTML = "O  is a winner 🏆"; winner = true;

            document.body.querySelector(".showTurn").innerHTML = "";
        }
        else if (count == 9) {
            document.body.querySelector(".showResult").innerHTML = "👉 Draw"; winner = true;

            document.body.querySelector(".showTurn").innerHTML = "";
        }
        console.log(count)

    }
import { useState, useEffect, useRef } from "react";
import "./style.css";
import Square from "./Square";

function Board() {
    let last_played = useRef("");
    const [val1, setVal1] = useState("");
    const [won, setWon] = useState("");

    function change_val1() {
        if (val1 === "" && won === "") {
            if (last_played.current === "" || last_played.current === "O") {
                setVal1("X");
                last_played.current = "X";
            } else {
                setVal1("O");
                last_played.current = "O";
            }
        }
    }

    const [val2, setVal2] = useState("");

    function change_val2() {
        if (val2 === "" && won === "") {
            if (last_played.current === "" || last_played.current === "O") {
                setVal2("X");
                last_played.current = "X";
            } else {
                setVal2("O");
                last_played.current = "O";
            }
        }
    }

    const [val3, setVal3] = useState("");

    function change_val3() {
        if (val3 === "" && won === "") {
            if (last_played.current === "" || last_played.current === "O") {
                setVal3("X");
                last_played.current = "X";
            } else {
                setVal3("O");
                last_played.current = "O";
            }
        }
    }

    const [val4, setVal4] = useState("");

    function change_val4() {
        if (val4 === "" && won === "") {
            if (last_played.current === "" || last_played.current === "O") {
                setVal4("X");
                last_played.current = "X";
            } else {
                setVal4("O");
                last_played.current = "O";
            }
        }
    }

    const [val5, setVal5] = useState("");

    function change_val5() {
        if (val5 === "" && won === "") {
            if (last_played.current === "" || last_played.current === "O") {
                setVal5("X");
                last_played.current = "X";
            } else {
                setVal5("O");
                last_played.current = "O";
            }
        }
    }

    const [val6, setVal6] = useState("");

    function change_val6() {
        if (val6 === "" && won === "") {
            if (last_played.current === "" || last_played.current === "O") {
                setVal6("X");
                last_played.current = "X";
            } else {
                setVal6("O");
                last_played.current = "O";
            }
        }
    }

    const [val7, setVal7] = useState("");

    function change_val7() {
        if (val7 === "" && won === "") {
            if (last_played.current === "" || last_played.current === "O") {
                setVal7("X");
                last_played.current = "X";
            } else {
                setVal7("O");
                last_played.current = "O";
            }
        }
    }

    const [val8, setVal8] = useState("");

    function change_val8() {
        if (val8 === "" && won === "") {
            if (last_played.current === "" || last_played.current === "O") {
                setVal8("X");
                last_played.current = "X";
            } else {
                setVal8("O");
                last_played.current = "O";
            }
        }
    }

    const [val9, setVal9] = useState("");

    function change_val9() {
        if (val9 === "" && won === "") {
            if (last_played.current === "" || last_played.current === "O") {
                setVal9("X");
                last_played.current = "X";
            } else {
                setVal9("O");
                last_played.current = "O";
            }
        }
    }

    useEffect(() => {
        const win_con1 = val1 === val2 && val2 === val3;
        const win_con2 = val1 === val4 && val4 === val7;
        const win_con3 = val1 === val5 && val5 === val9;
        const win_con4 = val3 === val6 && val6 === val9;
        const win_con5 = val3 === val5 && val5 === val7;
        const win_con6 = val7 === val8 && val8 === val9;
        const win_con7 = val2 === val5 && val5 === val8;

        if (
            (win_con1 && val1 != "") ||
            (win_con2 && val1 != "") ||
            (win_con3 && val1 != "")
        ) {
            if (val1 === "X") {
                setWon("X");
            } else {
                setWon("O");
            }
        } else if ((win_con4 && val3 != "") || (win_con5 && val3 != "")) {
            if (val3 === "X") {
                setWon("X");
            } else {
                setWon("O");
            }
        } else if (win_con6 && val9 != "") {
            if (val9 === "X") {
                setWon("X");
            } else {
                setWon("O");
            }
        } else if (win_con7 && val2 != "") {
            if (val2 === "X") {
                setWon("X");
            } else {
                setWon("O");
            }
        }
    }, [val1, val2, val3, val4, val5, val6, val7, val8, val9]);

    const displayWon = () => {
        if (won === "X") {
            return <h2>X Won!</h2>;
        } else if (won === "O") {
            return <h2>O Won!</h2>;
        } else if (
            won === "" &&
            val1 != "" &&
            val2 != "" &&
            val3 != "" &&
            val4 != "" &&
            val5 != "" &&
            val6 != "" &&
            val7 != "" &&
            val8 != "" &&
            val9 != ""
        ) {
            return <h2>Draw!</h2>;
        } else {
            return null;
        }
    };

    function reset() {
        last_played.current = "";
        setVal1("");
        setVal2("");
        setVal3("");
        setVal4("");
        setVal5("");
        setVal6("");
        setVal7("");
        setVal8("");
        setVal9("");
        setWon("");
    }

    return (
        <>
            <div className="board_container">
                <div className="item-1">
                    <Square value={val1} change={change_val1} />
                </div>
                <div className="item-2">
                    <Square value={val2} change={change_val2} />
                </div>
                <div className="item-3">
                    <Square value={val3} change={change_val3} />
                </div>
                <div className="item-4">
                    <Square value={val4} change={change_val4} />
                </div>
                <div className="item-5">
                    <Square value={val5} change={change_val5} />
                </div>
                <div className="item-6">
                    <Square value={val6} change={change_val6} />
                </div>
                <div className="item-7">
                    <Square value={val7} change={change_val7} />
                </div>
                <div className="item-8">
                    <Square value={val8} change={change_val8} />
                </div>
                <div className="item-9">
                    <Square value={val9} change={change_val9} />
                </div>
            </div>

            <button
                className="btn btn-secondary"
                style={{ width: "100px", marginBottom: "10px" }}
                onClick={reset}
            >
                Reset
            </button>

            {displayWon()}
        </>
    );
}

export default Board;

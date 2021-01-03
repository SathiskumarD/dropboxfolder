// try {
//     document.write("Welcome Guest!");
//     document.write(Null);
//     console.log("No error");
// } catch (err) {
//     console.log(err.message);
// }

function isEven() {
    var a;
    a = document.getElementById("num").value;

    try {
        if ((a % 2) == 0) {
            console.log("The entered number is even");
        } else {
            throw "Odd number";
        }

    } catch (msg) {
        console.log("The enetered value is " + msg);

    } finally {
        console.log("I get executed regardless of try/catch error method")
    }
}
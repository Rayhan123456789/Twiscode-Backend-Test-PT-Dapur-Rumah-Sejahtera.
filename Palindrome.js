function suka() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("aku suka makan nasi")
            resolve();
        }, 3000);
        
    })
}

function rumah() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("di rumah saya ada kasur rusak")
            resolve();
        }, 2000);
        
    })
}

function abjad() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("bcde edcbza")
            resolve()
        }, 1000);
        
    })
}

console.log("aku suka")
console.log("kasur rusak")
console.log("bcde edcb")

// input “aku suka makan nasi” output “aku suka”
// Input “di rumah saya ada kasur rusak” output “kasur rusak”
// Input “abcde edcbza” output “bcde edcb”

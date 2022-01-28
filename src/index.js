const smartHost = "Hospedaje inteligente";
const animationElement = document.getElementById("animation");

function stringToArray( str ){
    return  str.split('');
}

function arrayLength( arr ){
    return arr.length;
}

function insertLetters ({ arr, index, htmlElement }) {
    htmlElement.innerHTML += arr[index];
}

function printLetters( str ){
    const arr = stringToArray( str );
    const iterations = arrayLength( arr );
    let currentIteration = 0;

    const animate = setInterval(() => {
        if(iterations > currentIteration){
            const elements = {
                arr: arr,
                index: currentIteration,
                htmlElement: animationElement
            }
            insertLetters(elements);
            return currentIteration += 1;
        }else(
            clearInterval(animate)
        )

    }, 280)
}

printLetters(smartHost)

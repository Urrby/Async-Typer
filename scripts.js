function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandom(min = 20, max = 150, random = Math.random()) {
    return Math.floor(random * (max - min) + min);
}

async function draw(e) {
    const text = e.textContent;
    let soFar = "";
    for(const letter of text) {
        soFar += letter;
        e.textContent = soFar;

        const {typeMin, typeMax} = e.dataset;
        const waitAmount = getRandom(typeMin, typeMax)
        await wait(waitAmount);
        
    }
}

document.querySelectorAll("[data-type]").forEach(draw);


const base = 'https://api.github.com';
const userEndPoint = `${base}/users`;

async function displayUser(username) {
    const response = await fetch(`${userEndPoint}/${username}`);
    const data = await response.json();
    console.log(data.name);
    console.log(data.bio);
    console.log(data.location);
}


displayUser("WesBos");


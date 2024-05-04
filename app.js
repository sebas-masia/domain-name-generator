function generateRandomText() {
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];

    let domains = [];

    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                domains.push(pronoun[i] + adj[j] + noun[k] + '.com');
            }
        }
    }

    return domains[Math.floor(Math.random() * domains.length)];
}


function generateRandomTextForList() {
    const list = document.querySelectorAll('ul li');
    list.forEach((element) => {
        element.textContent = generateRandomText();
    });
    }

const button = document.querySelector('button');
button.addEventListener('click', generateRandomTextForList);

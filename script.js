const dadJokes = {
    // Each Joke consists of the following pieces:
    /*
        id - unique identifier for each joke
        active - Flag noting that the joke is 'active' and can be used.
        dadIntro - Dad's intro line before he tells his joke. Everyone knows that Dad cannot refrain from saying SOMETHING before continuing his antics.
        lines - Array of lines for the joke. Dad's jokes can be 1-liners, an appropriate length, or (more likely) INCREDIBLY long. 
        laugh - The EXPECTED response to the given joke. There's always an expected response.
    */
    _jokes: [
        {id: 1, active: true, dadIntro: 'Hey kids, look over there!', 
            lines: ['Ah, there\'s one of my DEER friends.', 'He\'s out standing in his field.'], laugh: 'HAHAHA!'}, 
        {id: 2, active: true, dadIntro: 'Ok here\'s a good one for you!', 
            lines: ['What does a shark order at McDonald\'s?', 'What?', 'A Quarter Flounder'], laugh: 'GLUBGLUBGLUB!'}, 
        {id: 3, active: true, dadIntro: 'I had a realization yesterday...', 
            lines: ['One day I might find a large number of BDSM magazines beneath my sons bed.', 'Needless to say, spanking will be out of the question'], 
            laugh: '*slaps knee* GOOD ONE!'}
    ], 
    get jokes () {
        return this._jokes;
    }, 
    jokeById (jokeId) {
        let arrayIndex = 0;
        while (arrayIndex < this._jokes.length) {
            if (jokeId === this._jokes[arrayIndex].id) {return this._jokes[arrayIndex]};
            arrayIndex++;
        }
        return null;
    },
    findMaxId () {
        let maxId = 0;
        for (let i = 0; i < this._jokes.length; i++) {
            maxId = Math.max(maxId, this._jokes[i].id);
        }
        return maxId;
    },
    findRandJoke () {
        while (true) {
            let randId = Math.ceil(Math.random() * this.findMaxId());
            for (let i = 0; i < this._jokes.length; i++) {
                if (randId === this._jokes[i].id && this._jokes[i].active) {return this._jokes[i]};
            }
        }
    },
    buildRandJoke () {
        return {dadIntro: this.findRandJoke().dadIntro, lines: this.findRandJoke().lines, laugh: this.findRandJoke().laugh}
    }
}

const randJoke = dadJokes.buildRandJoke();

console.log('Mixed Messages - Dad\'s Version');
console.log();
console.log(randJoke.dadIntro);
for (let i = 0; i < randJoke.lines.length; i++) {
    console.log(randJoke.lines[i]);
};
console.log(randJoke.laugh);

// console.log(dadJokes.buildRandJoke());

const dadJokes = {
    _jokes: [
        {id: 1, active: true, dadIntro: 'Hey kids, look over there!', 
            lines: ['Ah, there\'s one of my DEER friends.', 'He\'s out standing in his field.'], laugh: 'HAHAHA!'}, 
        {id: 2, active: true, dadIntro: 'Ok here\'s a good one for you!', 
            lines: ['What does a shark order at McDonal\'s?', 'What?', 'A Quarter Flounder'], laugh: 'GLUBGLUBGLUB!'}, 
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

// console.log("test");
// console.log(dadJokes.jokeById(1));
// console.log(dadJokes.findMaxId());
// console.log(dadJokes.findRandJoke());
console.log(dadJokes.buildRandJoke());
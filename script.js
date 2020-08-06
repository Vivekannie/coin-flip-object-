let coin = {
    state: 0,
    flip: function () {
        return this.state = Math.round(Math.random() * 1);
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function () {
        if (this.state === 0) {
            return "head"

        } else {
            return "tail"

        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function () {
        let image = document.createElement('img');
        image.style.width = "100px"
        image.style.height = "100px"
        if (this.state === 0) {
            image.src = "https://www.telegraph.co.uk/content/dam/news/2016/04/18/royal_mint_trans%2B%2BqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"
            return image;

        } else {
            image.src = "https://random-ize.com/coin-flip/us-half-dollar/us-half-dollar-back.jpg"
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
            return image;
    }
};
function display20flips() {
    let img = document.createElement('coin')
    coin.flip()
    img.append(coin.toString())
    for (let index = 0; index < 20; index++) {
        document.body.append(img)

    }
}
display20flips()

function display20imges() {
    for (let index = 0; index < 20; index++) {
        coin.flip()
        document.body.append(coin.toHTML())

    }
}
display20imges()

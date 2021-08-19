const headsTails = document.getElementById("headsTails");

const coin = {

    state: 0,

    flip: function() {
        this.state = Math.floor(Math.random()*2);

        return this.state;
    },
    
    toString: function() {
        if(coin.state === 0) {
            return "Heads";
        } else {
            return "Tails";
        }
    },

    toHTML: function() {
        const imageHeads = document.createElement("img");
        const imageTails = document.createElement("img");
        imageHeads.src = "./img/moeda_cara.png";
        imageHeads.alt = "Heads";
        imageTails.src = "./img/moeda_coroa.png";
        imageTails.alt = "Tails";

        if(coin.state === 0) {
            return imageHeads;
        } else {
            return imageTails;
        }
    }
};

function display20Flips() {
    
    const results = [];

    for(let i = 0; i < 20; i++) {
        
        coin.flip();
        results.push(coin.toString())
        headsTails.innerHTML += `${coin.toString()} `;
    }
    
    return results;
  }
  
  function display20Images() {
   
    const results = [];
   
    for(let i = 0; i < 20; i++) {
        
        coin.flip();
        results.push(coin.toString());
        headsTails.appendChild(coin.toHTML())
    }
    
    return results;
  }
function fetchAllCards(){

    const GET_CARDS_URL="http://tp.cpe.fr:8083/cards"; 
    let context =   {
                        method: 'GET'
                    };
        
    fetch(GET_CARDS_URL,context)
        .then(response => response.json())
            .then(response => callback(response))
            .catch(error => err_callback(error));
}

function findCard(cards, name){
    for(const card of cards){
        if(card.name == name){
            return card;
        }
    }
    return null;

}

function callback(response){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const search = urlParams.get('search')
    let card = findCard(response, search);
    console.log(card);

    let template = document.querySelector("#selectedCard");
    let clone = document.importNode(template.content, true);

    newContent= clone.firstElementChild.innerHTML
                .replace(/{{family_src}}/g, card.smallImgUrl)
                .replace(/{{family_name}}/g, card.family_name)
                .replace(/{{img_src}}/g, card.imgUrl)
                .replace(/{{name}}/g, card.name)
                .replace(/{{description}}/g, card.description)
                .replace(/{{hp}}/g, card.hp)
                .replace(/{{energy}}/g, card.energy)
                .replace(/{{attack}}/g, card.attack)
                .replace(/{{defense}}/g, card.defence);
    clone.firstElementChild.innerHTML= newContent;

    let cardContainer= document.querySelector("#cardContainer");
    cardContainer.appendChild(clone);
}

function err_callback(error){
    console.log(error);
}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const search = urlParams.get('search');
if (search) {
    fetchAllCards(search);
}

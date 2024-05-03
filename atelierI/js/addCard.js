$(document).ready(function(){
    $(".ui.form").on('submit', function(event){
        event.preventDefault();
        
        // Récupère toutes les valeurs du formulaire
        var formData = $(this).serializeArray();

        // Transforme le tableau en objet pour une utilisation plus facile
        var data = {};
        $(formData).each(function(index, obj){
            data[obj.name] = obj.value;
        });

        // Crée un nouvel objet avec le format attendu par l'API
        var apiData = {
            name: data['card-name'],
            description: data['card-description'],
            family: data['card-category'],
            affinity: data['card-affinity'],
            imgUrl: data['card-url'],
            smallImgUrl: data['card-url2'], // Utilise la même URL pour l'instant
            energy: parseInt(data['energy']),
            hp: parseInt(data['hp']),
            defence: parseInt(data['defence']),
            attack: parseInt(data['attack']),
        };

        // Affiche les valeurs des champs dans la console
        console.log(JSON.stringify(apiData));

        // Envoi des données en POST
        $.ajax({
            url: 'http://tp.cpe.fr:8083/card',
            type: 'POST',
            data: JSON.stringify(apiData),
            contentType: 'application/json', // Indique que nous envoyons du JSON
            success: function(data){
                console.log(data);
                window.location.href = "http://localhost/cards.html";
            },
            error: function(err){
                console.log('Erreur:', err);
                console.log('Détails de l\'erreur:', err.responseText);
            },
        });
    });
});
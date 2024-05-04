$(document).ready(function(){
    var nextPageUrl = 'https://rickandmortyapi.com/api/character'; // URL inicial de la API

    // Función para cargar personales
    function loadCharacters(url) {
        $.get(url, function(data){
            nextPageUrl = data.info.next; // Guarda la próxima URL para el scroll infinito.
            data.results.forEach(character => {
                $('#characters').append(`
                    <div class="col-md-4">
                        <div class="card">
                            <img src="${character.image}" class="card-img-top" alt="${character.name}">
                            <div class="card-body">
                                <h5 class="card-title">${character.name}</h5>
                                <p class="card-text">${character.species} - ${character.status}</p>
                                <button class="btn btn-primary more-info" data-id="${character.id}">Más info</button>
                            </div>
                        </div>
                    </div>
                `)
            })
        });
    }

    loadCharacters(nextPageUrl); // Carga los personajes al cargar la página.

    // Scroll infinito
    $(window).scroll(function(){
        if($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
            if(nextPageUrl) {
                loadCharacters(nextPageUrl);
            }
        }
    });

    // Manejar clic en "Más info"
    $('#characters').on('click', '.more-info', function(){
        var characterId = $(this).data('id');
        $.get(`https://rickandmortyapi.com/api/character/${characterId}`, function(character){
            var episodeList = character.episode.map(ep => `<li>${ep}</li>`).join('');
            $('.modal-body').html(`
                <h5>Nombre: ${character.name}</h5>
                <p>Especie: ${character.species}</p>
                <p>Estado: ${character.status}</p>
                <p>Ubicación: ${character.location.name}</p>
                <h6>Episodios: </h6>
                <ul>${episodeList}</ul>
            `);
            $('#infoModal').modal('show');
        });
    });
});
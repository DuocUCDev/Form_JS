$(document).ready(function(){
    $('#task-form').submit(function(e){
        e.preventDefault();
        let newTask = $('#new-task').val().trim();
        if(newTask){
            $('#task-list').append('<li class="list-group-item d-flex justify-content-between align-items-center">'+newTask+' <button class="btn btn-danger delete-task">X</button></li>');
            $('#new-task').val('');
        }
    });

    $('#task-list').on('click', '.delete-task', function(){
       $(this).parent().remove(); 
    });
});
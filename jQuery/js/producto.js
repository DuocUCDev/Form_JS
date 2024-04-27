$(document).ready(function(){
    $('#productForm').validate({
        rules: {
            productName: {
                required: true,
                minlength: 3
            },
            productPrice: {
                required: true,
                number: true,
                min: 1,
            }
        },
        messages: {
            productName: {
                required: "Por favor, introduce el nombre del producto",
                minlength: "El nombre del producto debe tener al menos 3 caracteres"
            },
            productPrice: {
                required: "Por favor, introduce el precio del producto",
                number: "El precio del producto debe ser un número",
                min: "El precio del producto debe ser mayor que 0"
            }
        },
        submitHandler: function(form) {
            addProduct();
            form.reset();
            return false;
        }
    });
});

function addProduct(){
    var ProductName = $('#productName').val();
    var ProductPrice = $('#productPrice').val();

    $('#productsTable tbody').append(`
        <tr>
            <td>${ProductName}</td>
            <td>${ProductPrice}</td>
            <td>
                <button class="btn btn-info" onclick="editProduct(this)">Editar</button>
                <button class="btn btn-danger" onclick="deleteProduct(this)">Eliminar</button>
            </td>
        </tr>
    `);
}

function editProduct(button){
    var row = $(button).closest('tr');
    var cols = row.children('td');
    if(button.textContent == 'Editar'){
        $(cols[0]).html(`<input type="text" class="form-control" value="${$(cols[0]).text()}">`);
        $(cols[1]).html(`<input type="number" class="form-control" value="${$(cols[1]).text()}">`);
        $(button).text('Guardar').removeClass('btn-info').addClass('btn-success');
        $(button).next().text('Cancelar').removeClass('btn-danger').addClass('btn-warning');
    } else {
        $(cols[0]).text($(cols[0]).children('input').val());
        $(cols[1]).text($(cols[1]).children('input').val());
        $(button).text('Editar').removeClass('btn-success').addClass('btn-info');
        $(button).next().text('Eliminar').removeClass('btn-warning').addClass('btn-danger');
    }
}

function deleteProduct(button){
    if(button.textContent === 'Cancelar'){
        var row = $(button).closest('tr');
        var cols = row.children('td');
        $(cols[0]).text($(cols[0]).children('input').val());
        $(cols[1]).text($(cols[1]).children('input').val());
        $(button).prev().text('Editar').removeClass('btn-warning').addClass('btn-info');
        $(button).text('Eliminar').removeClass('btn-warning').addClass('btn-danger');
    } else {
        $(button).closest('tr').remove();
    }
}




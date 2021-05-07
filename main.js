$(document).ready( function(){
    $('#search').keyup(function () {
        var find = $('#search').val();
        if (find != "") {
            $.ajax({

                url: 'autocompleteAPi.php',
                method: 'POST',
                data: { search: find },
                success: function (data) {
                    $('#content').html(data);
                }
            });
        }
        else {
            $('#content').html('');
        }

        $(document).on('click', 'a', function () {
            $('#search').val($(this).text());
            $('#content').html('');
        })
    })
});
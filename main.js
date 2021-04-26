var data = [{
        "text": "Nữ",
        "value": 0,
    },
    {
        "text": "Nam",
        "value": 1,
    },
    {
        "text": "Khác",
        "value": -1,
    },
]

$(document).ready(function () {
    $(document).on('click', '.input-group-text', function () {
        let displayDropDow = $('.dropdown-menu-gender').css('display');
        if (displayDropDow == "none") {
            $('.dropdown-menu-gender').css('display', 'block');
        } else {
            $('.dropdown-menu-gender').css('display', 'none');
        }
    });

    $(document).on('click', '.dropdown-item', function () {
        let value = $(this).val();
        let text = $(this).text();
        $('.txtInput').val(text);
        $('.dropdown-menu-gender').css('display', 'none');
    });

    $("input").keyup(function () {
        $("input").css("background-color", "pink");
    });
});
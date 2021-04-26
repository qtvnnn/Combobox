var textSelected = '';
const data = [{
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
        $('.dropdown-menu-gender').empty();

        data.forEach(function (value, index) {
            let a = `<option class="dropdown-item" value="` + value.value + `">` + value.text + `</option>`;
            $('.dropdown-menu-gender').append(a);
        });
        let displayDropDow = $('.dropdown-menu-gender').css('display');
        if (displayDropDow == "none") {
            $('.dropdown-menu-gender').css('display', 'block');
        } else {
            $('.dropdown-menu-gender').css('display', 'none');
        }
    });

    $(document).on('blur', 'input', function () {
        $('.txtInput').addClass('warning');

        let textInput = ($(this).val()).toLowerCase();
        data.forEach(function (item, index) {
            let itemTextFormat = item.text.toLowerCase();
            if (itemTextFormat == textInput) {
                $('.txtInput').removeClass('warning');
            }
        });
        $('.dropdown-menu-gender').css('display', 'none');
    });

    $(document).on('click', '.dropdown-item', function () {
        let text = $(this).text();
        $('.txtInput').val(text);
        $('.dropdown-menu-gender').css('display', 'none');
        $('.txtInput').removeClass('warning');

        textSelected = text;
    });
    $(document).on('keyup', 'input', function () {
        $('.dropdown-menu-gender').empty();
        $('.dropdown-menu-gender').css('display', 'none');

        filter($(this).val());
    });




    function filter(textFilter) {
        let textFilterFormat = textFilter.toLowerCase();
        data.forEach(function (item) {
            let itemTextFormat = item.text.toLowerCase();
            if (itemTextFormat.search(textFilterFormat) != -1) {
                let b = `<option class="dropdown-item" value="` + item.value + `">` + item.text + `</option>`;
                $('.dropdown-menu-gender').append(b);
                $('.dropdown-menu-gender').css('display', 'block');
            }
        });
    }

    // chuyển chữ hoa thành thường và bỏ dấu tiếng việt
    // function formatString(text) {
    //     return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    // }
});


$.fn.getValue = function () {
    var object = data.filter(e => e.text == textSelected);
    return object[0].value;
}

$.fn.getText = function () {
    return textSelected;
}

$.fn.getData = function () {
    return data;
}



    $.cookie('uCookie', 'Test');
    // $.removeCookie('uCookie');

const _temp_users = [];

    // Проверка на авторизацию

if ($.cookie('uCookie')) {

    let temp_UCookie = $.cookie('uCookie');

    $.ajax({
        url: "http://192.168.0.16/Users/login.php?check=" + temp_UCookie,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            /*
            if (data.text == temp_UCookie) {
                console.log("Куки такой")
            } else {
                console.log("Куки другой")
            }
            */
        },
        error: function (xhr, status, error) {
            $.removeCookie('uCookie');
        }
    });
} else if ($.cookie('uCookie') === "") {
    window.location.replace("/Home/Login");
    console.log("Нет UCookie");
}

// Функция отправки формы регистрации
$("#_auth_form #_reg_button").on('click', () => {
    var email = $("#_auth_form #email");
    var password = $("#_auth_form #password");

    if (!email.val() || !password.val()) {
        _toast("error", "Не все поля заполнены!");
    } else {
        _toast("success", "Вы успешно зарегистрировались!");
    }
})
// Функция отправки формы авторизации
$("#_auth_form #_auth_button").on('click', () => {
    var email = $("#_auth_form #email");
    var password = $("#_auth_form #password");

    if (!email.val() || !password.val()) {
        _toast("error", "Не все поля заполнены!");
    } else {
        _toast("success", "Вы успешно авторизовались!");
    }
})

    // Добавление пользователя в список виситов
    let t_p_v_s = 0;
    $("#_Public_Visit #send").on('click', () => {
        let _s_date = $("#_Public_Visit #_s_date");
        let _po_date = $("#_Public_Visit #_po_date");
        let _purpose = $("#_Public_Visit #_purpose");
        let _Division = $("#_Public_Visit #_Division");
        let _fio = $("#_Public_Visit #_fio");

        if (_temp_users.length < 1) {
            _toast("error", "Пользователей меньше 5");
        } else {
            if (!_s_date.val() || !_po_date.val() || !_purpose.val() || !_Division.val() || !_fio.val()) {
                _toast("error", "Не все поля заполнены!");

            } else {
                _toast("success", "Заявка отправлена");

                let tag_message = "[Получено]";
                let content_message = `С: ${_s_date.val()} \n
                                   ДО: ${_po_date.val()} \n
                                   Цель: ${_purpose.val()} \n
                                   Подразделение: ${_Division.val()} \n
                                   ФИО сотрудника: ${_fio.val()} \n
                                   Пользователи: ${_temp_users[0][1]}
                                   `;
                console.log(tag_message + ' ' + content_message);
                console.log(_temp_users.length);
                
            }
            
        }

    })
    $("#_Public_Visit #add").on('click', () => {

        let _s_date = $("#_Personal_Visit #_s_date");
        let _po_date = $("#_Personal_Visit #_po_date");
        let _purpose = $("#_Personal_Visit #_purpose");
        let _Division = $("#_Personal_Visit #_Division");
        let _fio = $("#_Personal_Visit #_fio");

        let _f_name = $("#_Public_Visit #_f_name");
        let _n_name = $("#_Public_Visit #_n_name");
        let _o_name = $("#_Public_Visit #_o_name");
        let _tel = $("#_Public_Visit #_tel");
        let _email = $("#_Public_Visit #email");
        let _organization = $("#_Public_Visit #_organization");
        let _node = $("#_Public_Visit #_node");
        let _date_age = $("#_Public_Visit #_date_age");
        let _ser_passport = $("#_Public_Visit #_ser_passport");
        let _num_passport = $("#_Public_Visit #_num_passport");

        if (!_f_name.val() || !_n_name.val() || !_tel.val()
            || !_organization.val() || !_node.val() || !_date_age.val() || !_ser_passport.val() || !_num_passport.val()) {

            _toast("error", "Не все поля заполнены!");

        } else {
            _temp_users.push([t_p_v_s, _f_name, _n_name, _o_name, _tel, _organization, _node, _date_age, _ser_passport, _num_passport]);

            $("#_Public_Visit #t_content").append(`<tr>
                        <th scope="row" id="id_`+ t_p_v_s + `">` + t_p_v_s + `</th>
                        <td>` + _f_name.val() + " " + _n_name.val() + " " + _o_name.val() + `</td>
                        <td>` + _tel.val() + `</td>
                    </tr>`);
            t_p_v_s++;

            _f_name.val('');
            _n_name.val('');
            _o_name.val('');
            _tel.val('');
            _email.val('');
            _organization.val('');
            _node.val('');
            _date_age.val('');
            _ser_passport.val('');
            _num_passport.val('');

            _toast("success", "Пользователь добавлен!");

            console.log(_temp_users);
        }
    })
    // Отправка заявки личного посещения
    $("#_Personal_Visit #send").on('click', () => {

        let _s_date = $("#_Personal_Visit #_s_date");
        let _po_date = $("#_Personal_Visit #_po_date");
        let _purpose = $("#_Personal_Visit #_purpose");
        let _Division = $("#_Personal_Visit #_Division");
        let _fio = $("#_Personal_Visit #_fio");

        let _f_name = $("#_Personal_Visit #_f_name");
        let _n_name = $("#_Personal_Visit #_n_name");
        let _o_name = $("#_Personal_Visit #_o_name");
        let _tel = $("#_Personal_Visit #_tel");
        let _email = $("#_Personal_Visit #email");
        let _organization = $("#_Personal_Visit #_organization");
        let _node = $("#_Personal_Visit #_node");
        let _date_age = $("#_Personal_Visit #_date_age");
        let _ser_passport = $("#_Personal_Visit #_ser_passport");
        let _num_passport = $("#_Personal_Visit #_num_passport");

        if (!_s_date.val() || !_po_date.val() || !_purpose.val() || !_Division.val() || !_fio.val() || !_f_name.val() || !_n_name.val() || !_tel.val()
            || !_organization.val() || !_node.val() || !_date_age.val() || !_ser_passport.val() || !_num_passport.val()) {

            _toast("error", "Не все поля заполнены!");

        } else {

            let tag_message = "[Получено]";
            let content_message = `С: ${_s_date.val()} \n
                                   ДО: ${_po_date.val() } \n
                                   Цель: ${_purpose.val() } \n
                                   Подразделение: ${_Division.val() } \n
                                   ФИО сотрудника: ${_fio.val() } \n
                                   Фамилия : ${_f_name.val() } \n
                                   Имя: ${_n_name.val() } \n
                                   Отчество: ${_o_name.val() } \n
                                   Телефон: ${_tel.val() } \n
                                   Email: ${_email.val() } \n
                                   Организация: ${_organization.val() } \n
                                   Примечание: ${_node.val() } \n
                                   Дата рождения: ${_date_age.val() } \n
                                   Серия: ${_ser_passport.val() } \n
                                   Номер: ${_num_passport.val() } \n
                                   `;
            console.log(tag_message + ' ' + content_message);

            _f_name.val('');
            _n_name.val('');
            _o_name.val('');
            _tel.val('');
            _email.val('');
            _organization.val('');
            _node.val('');
            _date_age.val('');
            _ser_passport.val('');
            _num_passport.val('');

            _toast("success", "Заявка отправлена");

        }
    })

    function _toast(type, text) {
        switch (type) {
            case "error":
                toastr[type](text, "Ошибка")
                break;
            case "success":
                toastr[type](text, "Успешно")
                break;
        }
    }

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }


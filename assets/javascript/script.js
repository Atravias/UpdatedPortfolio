var submitBox = $('#submit-box');
var nameBox = $('#name-box');
var emailBox = $('#email-box');
var submitBtn = $('#submit')

$(submitBtn).on('click', () => {
    localStorage.setItem(nameBox.val(), emailBox.val());
    return;

})
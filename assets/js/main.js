$('#addAnalysis').on('show.bs.modal', function (event) {
    let button = $(event.relatedTarget);
    let recipient = button.attr('data-whatever');
    let modal = $(this);
    modal.find('.modal-date').text(recipient);
});

$("#modalAddBtn").on("click", function (){
    if (!$(this).attr('data-whatever')) {
        let date = new Date();
        let today = ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear();

        $("#modalAddBtn").attr('data-whatever', today);
    }
});

jQuery.datetimepicker.setLocale('ru');

$('#dob').datetimepicker({
    timepicker:false,
    format:'d.m.Y',
    dayOfWeekStart: 1,
});
$('#datetimepickerMain').datetimepicker({
    timepicker:false,
    format:'d.m.Y',
    dayOfWeekStart: 1,
    inline: true,
    onChangeDateTime:function(dp,$input){
        $("#modalAddBtn").attr('data-whatever', $input.val());
    }
});


$(document).ready(function() {
    function clipBgHeight() {
        $(".clipBg").height(function(){
            let blockHeight = $(".signIn").height() / 3;
            if($(this).is("#doctors") || $(this).is("#clinics")) {
                blockHeight += 50;
            }
            return blockHeight;
        });
    }

    clipBgHeight();
    $(window).resize(function() {
        clipBgHeight();
    });

    $("#role").change(function() {
        let selectBlock = $("#role :selected").val();
        $(".roleBlock").addClass('hide');
        $(`#${selectBlock}`).removeClass('hide');
        clipBgHeight();
    });

});
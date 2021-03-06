$(function() {
  
  // all .toggle links must have a rel attribute to identify what element will toggle
  $(document).on("click",'a.toggle', function() {
    $($(this).attr('rel')).toggle();
  });

  // open modalbox
  $('.lightbox, .fancybox').fancybox({
    closeClick: false,
    autoSize: true
  });

  // datepicker input text field
  loadDatepickers();

  // notices fadeout
  $(document).on("click",'a#system_notice_close, #system_notice', function() {
    $('#system_notice').remove();
  });

  // ajax forms cancel button closes modal window
  $(document).on("click",'.mdwa_ajax a.cancel', function() {
    $.fancybox.close(true);
  }); 

  // set focus on modalbox form
  $(document).bind("ajaxComplete", function() {
    setFocusOnForm();
  });
  
});

function checkOrUncheckAll( to_be_checked ){
  var to_be_checked = to_be_checked || false;
  $( ".cid" ).prop( "checked", to_be_checked ).trigger('change');
}

function defineAction( form, action, confirmation ) {
  var response = true;
  if( confirmation ) {
    response = confirm("Are you sure?");
  }
  if( response ) {
    $( "#" + form ).prop( "action", action);
    $( "#" + form ).submit();
  }
}

function defineOrder( form, action, id ) {
  $( "#" + form ).prop( "action", action);
  $( "#cb" + id ).prop( "checked", true);
  $( "#" + form ).submit();
}

function deleteSystemNotice() {
  $('#system_notice').fadeOut('slow', function() {
    $('#system_notice').remove();
  });
}

// focus on the first text input field in the first field on the page
function setFocusOnForm() {
  $(':input:enabled:visible:first', "div.filtros").focus();
  $(':input:enabled:visible:first', "div.mdwa_new").focus();
  $(':input:enabled:visible:first', "div.mdwa_edit").focus();
}

function loadDatepickers() {
  $('.datepicker').datepicker();
}


$('#fighter').hide();
$('#greeting').hide();
$('#friends').hide();
$('#story').hide();
var lGrtr;

$('#login').click(function() {
  lGrtr = G$($('#firstname').val(), $('#lastname').val(), $('#lang').val(), $('#friendNum').val(), $('#weaponNum').val());
  $('#logindiv').hide();
  $('#fighter').show();
  lGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true);
  $('#greeting').fadeIn(2000);
});

$('#fighter').click(function() {
  $('#greeting').hide();
  $('#friends').show();
  $('#fighter').hide();
  lGrtr.HTMLFight('#greeting');
  $('#greeting').fadeIn(2000);
});

$('#friends').click(function() {
  $('#greeting').hide();
  $('#friends').hide();
  $('#story').show();
  lGrtr.HTMLFriends('#greeting');
  $('#greeting').fadeIn(2000);
});

$('#story').click(function() {
  $('#greeting').hide();
  $('#story').hide();
  lGrtr.HTMLFight('#greeting');
  $('#greeting').fadeIn(2000);
});

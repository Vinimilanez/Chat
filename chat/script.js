var $messages = $('.mensagens-conteudo'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.mensagem:last'));
  }
}

function insertMessage() {
  msg = $('.mensagem-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="mensagem mensagem-pessoal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.mensagem-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.mensagem-enviar').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  'Hi there, I\'m Vinicius and you?',
  'Nice to meet you',
  'Bye',
  ':)'
]

function fakeMessage() {
  if ($('.mensagem-input').val() != '') {
    return false;
  }
  $('<div class="mensagem loading new"><figure class="avatar"><img src="avatar.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.mensagem.loading').remove();
    $('<div class="mensagem new"><figure class="avatar"><img src="avatar.png" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}
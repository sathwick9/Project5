
/* Multiple pages within a webpage JS code*/

$(document).ready(function () {
    $('z').click(function () {
        var selected = $(this);
        $('z').removeClass('active');
        $(selected).addClass('active');
    });
    var $a = $('.a'), $b = $('.b'), $c = $('.c'), $d = $('.d'), $e = $('.e'), $f = $('.f'), $g = $('.g'), $z = $('.z')
    $about = $('.about'), $skills = $('.skills'), $Trips = $('.Trips'), $songs = $('.songs'), $table = $('.table'), $feedback = $('.feedback'), $game = $('.game'), $home = $('.home');

    $about.fadeOut();
    $skills.fadeOut();
    $Trips.fadeOut();
    $songs.fadeOut();
    $table.fadeOut();
    $feedback.fadeOut();
    $game.fadeOut();

    $z.click(function () {
        $home.fadeIn();
        $about.fadeOut();
        $skills.fadeOut();
        $Trips.fadeOut();
        $songs.fadeOut();
        $table.fadeOut();
        $feedback.fadeOut();
        $game.fadeOut();
    });

    $a.click(function () {
        $home.fadeOut();
        $about.fadeIn();
        $skills.fadeOut();
        $Trips.fadeOut();
        $songs.fadeOut();
        $table.fadeOut();
        $feedback.fadeOut();
        $game.fadeOut();
    });

    $b.click(function () {
      $home.fadeOut();
      $about.fadeOut();
      $skills.fadeIn();
      $Trips.fadeOut();
      $songs.fadeOut();
      $table.fadeOut();
      $feedback.fadeOut();
      $game.fadeOut();
    });

    $c.click(function () {
      $home.fadeOut();
      $about.fadeOut();
      $skills.fadeOut();
      $Trips.fadeIn();
      $songs.fadeOut();
      $table.fadeOut();
      $feedback.fadeOut();
      $game.fadeOut();
    });

    $d.click(function () {
      $home.fadeOut();
      $about.fadeOut();
      $skills.fadeOut();
      $Trips.fadeOut();
      $songs.fadeIn();
      $table.fadeOut();
      $feedback.fadeOut();
      $game.fadeOut();
    });

    $e.click(function () {
      $home.fadeOut();
      $about.fadeOut();
      $skills.fadeOut();
      $Trips.fadeOut();
      $songs.fadeOut();
      $table.fadeIn();
      $feedback.fadeOut();
      $game.fadeOut();
    });

    $g.click(function () {
      $home.fadeOut();
      $about.fadeOut();
      $skills.fadeOut();
      $Trips.fadeOut();
      $songs.fadeOut();
      $table.fadeOut();
      $feedback.fadeOut();
      $game.fadeIn();
        var error_game = document.getElementById("error_game");
        error_game.style.display = "none";
    });

    $f.click(function () {
      $home.fadeOut();
      $about.fadeOut();
      $skills.fadeOut();
      $Trips.fadeOut();
      $songs.fadeOut();
      $table.fadeOut();
      $feedback.fadeIn();
      $game.fadeOut();
      var error_message = document.getElementById("error_message");
      error_message.style.display = "none";

    });
});

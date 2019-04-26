$(document).ready(function() {

    $(".tip-button").click(function(){
        $(".tip-content").slideToggle();
    })
    $(".fiat-button").click(function(){
        $(".fiat-content").slideToggle();
    })
    $(".apiKey-okex-bottom").click(function(){
        $(".apiKey-okex-content").slideToggle();
        $(this).find('img').slideToggle();
    })
    $(".apiKey-etherscan-bottom").click(function(){
        $(".apiKey-etherscan-content").slideToggle();
        $(this).find('img').slideToggle();
    })
    $(".secret-bottom").click(function(){
        $(".secret-content").slideToggle();
        $(this).find('img').slideToggle();
    })
    $(".passphrase-bottom").click(function(){
        $(".passphrase-content").slideToggle();
        $(this).find('img').slideToggle();
    })

}) 



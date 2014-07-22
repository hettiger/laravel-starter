<?php 
$I = new FunctionalTester($scenario);
$I->wantTo('perform actions and see result');

$I->amOnPage('/');
$I->see('Hello World!');
$I->dontSee('Test');

$I->amOnPage('/flash');
$I->see('Hello World!');
$I->see('Test');

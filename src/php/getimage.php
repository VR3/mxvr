<?php
	
	header ('Content-Type: application/json');
	header("Access-Control-Allow-Origin: *");
	//Pick a random image from the MXVR Media Folder and serve the url.
	//mxvr.co/media/#{MEETUPNO}/img/#{IMGNO}
	
	//Main Media Folder
	$mediaDir = $_SERVER['DOCUMENT_ROOT'].'/media/';
	$mediaFiles = array_diff(scandir($mediaDir), array('.', '..'));
	
	//Get random meetup no
	$meetupNo = $mediaFiles[array_rand($mediaFiles)];

	//Images Folder from the Random Meetup No
	$imgDir = $_SERVER['DOCUMENT_ROOT'].'/media/'.$meetupNo.'/img/';
	$imgFiles = array_diff(scandir($imgDir), array('.', '..'));

	//Get random image
	$imgNo = $imgFiles[array_rand($imgFiles)];
	
	//Serve a random image url
	$randomImg = 'http://mxvr.co/media/'.$meetupNo.'/img/'.$imgNo.'/';
	
	echo json_encode($randomImg);

?>
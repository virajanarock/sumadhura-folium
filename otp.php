



<?php


	$customerKey = "333666";
	$apiKey = "UjmmN1XVUikii5TSBRsC83zmmH17aHmx";
	/* Current time in milliseconds since midnight, January 1, 1970 UTC. */
	$currentTimeInMillis = round(microtime(true) * 1000);
	/* Creating the Hash using SHA-512 algorithm */
	$stringToHash = $customerKey . number_format ( $currentTimeInMillis, 0, '', '' ) .
	$apiKey;
	$hashValue = hash("sha512", $stringToHash);
	/* Add $customerKeyHeader,$timestampHeader and $authorizationHeader in the
   httpheader */
	$customerKeyHeader = "Customer-Key: " . $customerKey;
	$timestampHeader = "Timestamp: " . number_format ( $currentTimeInMillis, 0, '', ''
	);
	$authorizationHeader = "Authorization: " . $hashValue;


$jsonRequest = $_REQUEST;
$phone = $_REQUEST['phone'];
$email = $_REQUEST['email'];
//  read($jsonRequest);

  /* The challenge rest api url which needs to be called to challenge the user. */
	$generateUrl = "https://login.xecurify.com/moas/api/auth/challenge";
	 /* The customer Key provided to you */
	$customerKey = "333666";
	 /* The customer API Key provided to you */
	$apiKey = "UjmmN1XVUikii5TSBRsC83zmmH17aHmx";
	 /* Current time in milliseconds since midnight, January 1, 1970 UTC. */
	$currentTimeInMillis = round(microtime(true) * 1000);
	 /* Creating the Hash using SHA-512 algorithm */
	$stringToHash = $customerKey . number_format ( $currentTimeInMillis, 0, '', '' ) .
	$apiKey;
	$hashValue = hash("sha512", $stringToHash);
	 /* The Array containing the request information */
	$jsonRequest = array(
    	"customerKey" => $customerKey,
    	"phone" => $phone,
    	"email" => $email,
    	"authType" => "SMS",
    	"transactionName" => "CUSTOM-OTP-VERIFICATION"
  );
	 /* JSON encode the request array to get JSON String */
	$jsonRequestString = json_encode($jsonRequest);
	$customerKeyHeader = "Customer-Key: " . $customerKey;
	$timestampHeader = "Timestamp: " . number_format ( $currentTimeInMillis, 0, '', ''
	);
	$authorizationHeader = "Authorization: " . $hashValue;
	 /* Initialize curl */
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json",
	$customerKeyHeader,$timestampHeader, $authorizationHeader));
	curl_setopt($ch, CURLOPT_URL, $generateUrl);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
	curl_setopt($ch, CURLOPT_VERBOSE, TRUE);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonRequestString);
	curl_setopt($ch, CURLOPT_POST, 1);
	 /* Calling the rest API */
	$result = curl_exec($ch);
	if (curl_errno($ch)) {
  	print curl_error($ch);
	} else {
  	curl_close($ch);
	}
	 /* If a valid response is received, get the JSON response */
	$response = (array)json_decode($result);
	$status = $response['status'];
	if($status == 'SUCCESS') {
  	return "SUCCESS";
  	echo "SUCCESS";
	} else {
  	return "FAILED: " . $response['message'];
  	echo "failed";
  }

?>
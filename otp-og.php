



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
	echo $authorizationHeader;
	
	
	
	
?>

	
	<?php 
	

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
	 $phone="919987110737";
	 $email = "sneha.kale@anarock.com";
	 
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
  	echo "SUCCESS";
  
	} else {
  	echo "FAILED: " . $response['message'];
  }
?>

<?php 

$validateUrl = "https://login.xecurify.com/moas/api/auth/validate";
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
	 /* The Array containing the validate information */
	$jsonRequest = array('txId' => 'fc727646-7c91-11e5-883e-0e2fb063e0f9',
    	'token' => '345345');
	 /* JSON encode the request array to get JSON String */
	$jsonRequestString = json_encode($jsonRequest);
	echo $jsonRequestString;
	$customerKeyHeader = "Customer-Key: " . $customerKey;
	$timestampHeader = "Timestamp: " . number_format ( $currentTimeInMillis, 0, '', ''
	);
	$authorizationHeader = "Authorization: " . $hashValue;
	echo $authorizationHeader;
	 /* Initialize curl */
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json",
	$customerKeyHeader,$timestampHeader, $authorizationHeader));
	curl_setopt($ch, CURLOPT_URL, $validateUrl);
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
  	echo  "SUCCESS";
	} else {
  	 echo "FAILED: " . $response['message'];
	}
        ?>
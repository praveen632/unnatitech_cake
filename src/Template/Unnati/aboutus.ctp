
<html lang="en">
<head>
    <?= $this->element('head') ?>
</head>

<body>
     <?= $this->element('header') ?>
   <div class="wrapper1"> 
   <div class="container-fluid sizeffects ">
    <div class="col-md-12">
    <h1 class="font1"><strong class="white">ABOUT US</strong></h1>
    <p class="font2">Globally renowned software development and IT company engineering software development
and consulting services that go beyond customer expectations</p>
    </div>
    </div>
    </div>

<div class="container-fluid backtoback ">

<div class="col-md-8 about">

           <p>Unnatitech Solutions is a leading global business consulting and solution provider for Internet based applications. Our value added services unlock business potential with our functional IT expertise and best industry practices. We are a software development organization providing businesses worldwide with our custom technology solutions.</p>
           <p>Our team of professionals excels in business solutions,client relationship management, business process quality, business aptitude,operations management,engineering solutions,product lifecycle management,and infrastructure services.</p>
           <p>With our experienced software developers, Unnatitech combines technological expertise, domain-specific experience, and passion for excellence to deliver enterprise-level solutions.</p>
           <p>Our seamless backend technology solutions enable and catalyze your desktop, mobile & web- based applications.Our professionals have been part of the industry for more than 10 years, based in Noida, India.</p>
     
</div>
<div class="col-md-4">

  <img <?= $this->Html->image('about-img.png')  ?> 
</div>
	</div>

<?= $this->Html->script('switcher/cookie.js'); ?>

  <?= $this->element('footer') ?>

  </body>
  </html>
  
    
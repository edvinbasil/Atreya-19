
/*
Workshop box
 */

$('.workshop_btn').click(function(e) {
    $('body').css('overflow','hidden');
    var imageurl;
    var workshop_number;
    var workshop_title;
    var workshop_desc;
    var workshop_title_selector=$('.workshop_box_title>h1');
    var workshop_text_selector=$(".workshop_box_text>p");
    workshop_number=$(this).parent().attr("workshop_no");
    imageurl="url('images/workshop_box_"+ workshop_number +".jpg')";
    $('.workshop_box').css("background-image",imageurl);



    switch(workshop_number){

        case "1":
            workshop_title="Internal Combustion Engine";
            workshop_desc="Internal combustion engines or ic engines have had a great impact on humanity. These engines produce immense power in contrast to their size and weight. Today, these engines power almost all air and land vehicles. In this workshop, get firsthand experience on the working principles and designing of ic engines.";
            break;
        case "2":
            workshop_title="Augmented Reality";
            workshop_desc="Technology is now as agile as time. The discovery of google glasses is an example of why augmented reality is one of the current cutting edge technology. Enhancing one's current perception of reality, ar technology allows for a digitally manipulable, enhanced and interactive view of a user’s real world. Along with acting as a tool of amplifying digital information, it is a link connecting reality and virtuality of our environment. This workshop will enable participants to work with ar modules and build modules including overlaying text, video, 2d and 3d elements. Animation and interaction with elements by making responsive ars will be an amazing thing to learn from this workshop.";
            break;
        case "3":
            workshop_title="Cloud Computing";
            workshop_desc="In the past, computing tasks, such as word processing, were not possible without the installation of application software on the user's device. Users purchase licenses for each application from software vendors and obtain the right to install the application on ones device. This workshop on cloud computing differs from the classic client-server model by providing applications from a server that are executed and managed by a client's web browser, without an installed client version of the application required. Centralization gives cloud service providers complete control over the versions of the browser-based applications provided to clients, which removes the need for version upgrades or license management on individual client computing devices.";
            break;
        case "4":
            workshop_title="Building Information Modelling";
            workshop_desc="Bim(building information modelling) is the trending concept in civil engineering where we can generate and manage digital representations of physical and functional characteristics of structural elements. Bim model holds all the information about a structure. This model will have thousands of information stored in it related to the structure, right from the smallest nut and bolt, to the largest concrete column in the building. This interactive workshop accompanied with actual case studies introduces civil engineering students the techniques involved in acquiring the information about the structures by using bim models, and exposing them to the various roles of a bim engineer.";
            break;
        case "5":
            workshop_title="Neural Network Using Python";
            workshop_desc="Neural networks can be defined as a mathematical function that maps a given input to a desired output. The inner workings of a neural network is important to an aspiring data scientist. They can be intimidating for people new to machine learning. But not to worry, as this workshop will break down the working of a neural network and at the end, by using python, you will have your very own working flexible neural network.";
            break;

        default:
            workshop_title="--Unknown workshop--";
            workshop_desc="--no description--";

    }


    workshop_desc += "<span>Contact</span>JERIN JOHNNY: +91 73561 23886 <br>ARUN SEBASTIAN: +91 70257 74464 <span style='margin-top: 30px;'><a style='border: solid 0px 0px 2px 0px; border-radius: 5px; padding: 4px 12px; align-self: center' href='https://www.townscript.com/widget/atreya-19-340430'>Register</a></span>";
    workshop_title_selector.html(workshop_title);
    workshop_text_selector.html(workshop_desc);
    $('#wbox_1').lightbox_me({
        centered: true,
        onClose: function() {$('body').css('overflow','visible');},
        overlayCSS: {background: 'black', opacity: .9}
    });
    e.preventDefault();
});



// Lecture Box

$('.lecture_btn').click(function(e) {
    $('body').css('overflow','hidden');
    var imageurl;
    var workshop_number;
    var workshop_title;
    var lecturer;
    var workshop_desc;
    var workshop_title_selector=$('.workshop_box_title>h1');
    var workshop_text_selector=$(".workshop_box_text>p");
    workshop_number=$(this).parent().attr("lecture_no");
    imageurl="url('images/lecture_box_"+ workshop_number +".jpg')";
    $('.workshop_box').css("background-image",imageurl);


    switch(workshop_number){

        case "1":
            workshop_title="The New Space Ecosystem In India & World";
            lecturer= "Suraj Jana";
            workshop_desc="Founder of india’s first space technology research start-ups - 'opencube labs' and the ai based healthcare platform, 'hey medy' - mr. Suraj kumar jana is a pronounced entrepreneur and a brilliant technologist with vast knowledge and experience which span from hard core technology disciplines like cloud computing, artificial intelligence, mobile applications to sophisticated consumer industries.";
            break;
        case "2":
            workshop_title="Is There A Science Of Stories?";
            lecturer= "Anil Menon";
            workshop_desc="Known for his intriguing writing, this bestselling science fiction writer also holds a ph.D in computer science from syracuse university. His debut novel, 'the beast with nine billion feet' was a bestseller and shortlisted for two esteemed awards.";
            break;
        case "3":
            workshop_title="Gravitational Waves: A New Window To The Universe";
            lecturer= "Dr. Rahul Kashyap, ICTS";
            workshop_desc="IITian and currently a post doctoral fellow at icts, dr. Rahul kashyap is a very erudite person with vast knowledge and interest in the field of astrophysics and related maths. Having completed his ph.D from the university of massachusetts, he currently has two astrophysical journals and a certification under his name.";
            break;
        case "4":
            workshop_title="Generative Adversarial Network (Gan) Applications And Theory";
            lecturer= "Dr. Deepak Mishra";
            workshop_desc="Dr. Deepak mishra, renowned for his brilliance in the field of neural networks and computer vision, is an iitian and is currently an associate professor at iist, trivandrum. Being a post doctoral fellow from the university of louisville, kentucky, he is a young scientist awardee from the system society of india. This versatile veteran has published research papers in journals of national and international repute.";
            break;

        default:
            workshop_title="--Unknown workshop--";
            workshop_desc="--no description--";

    }
    workshop_title = workshop_title + "<span><br>-- " + lecturer + "</span>"  ;
    workshop_desc = "<span>About the lecturer</span>" + workshop_desc + "<span>Contact</span>KUNCHERIA JOSE: +91 70257 59120 <br> DIYA KAMNANI: +91 80868 33068 <span style='margin-top: 30px;'><a style='border: solid 0px 0px 2px 0px; border-radius: 5px; padding: 4px 12px; align-self: center' href='https://www.townscript.com/widget/atreya-19-340430'>Register</a></span>";


    workshop_title_selector.html(workshop_title);
    workshop_text_selector.html(workshop_desc);
    $('#wbox_1').lightbox_me({
        centered: true,
        onClose: function() {$('body').css('overflow','visible');},
        overlayCSS: {background: 'black', opacity: .9}
    });
    e.preventDefault();
});

//var base_url = "http://172.20.0.9/piramal/aranya/";
var base_url ="http://www.piramalaranya.com/";
var property_id ='35';
//
$("#phone").keyup(function () {
    var flag = $('#enquiry_form .selected-flag').attr('title');
    var res = flag.split(":");
    var dialing_code = res[1];
    var country = $.trim(res[0].replace(/\(.*?\)/, ''));
    $("#hdn_country").val(country);
    $("#hdn_dialcode").val(dialing_code);

});
// create a custom phone number rule called 'intlTelNumber'
$.validator.addMethod("intlTelNumber", function(value, element) {
    return this.optional(element) || $(element).intlTelInput("isValidNumber");
}, "Please enter a valid mobile number");

$.validator.addMethod("alphabets", function (value, element) {
    return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
}, "Please enter Alphabets only");

$.validator.addMethod("email", function (value, element) {
    return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}, "Please enter a valid email address.");


/*Adding validator function*/
$('#enquiry_form').validate({  
     errorClass:'error_bottom',
    rules: {
        name: {
            required: true,
            alphabets: true,
            minlength: 3,
            maxlength: 100
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            intlTelNumber: true
        }
    },
    onkeyup: false,
    errorPlacement: function(error, element) {},
    submitHandler: function(form) {
        var source = getParameterByName('utm_source');
        var medium = getParameterByName('utm_medium');
        var campaign = getParameterByName('utm_campaign');
        var keyword = getParameterByName('keyword');
        var device = getParameterByName('device');
        var placement = getParameterByName('placement');
        var gclid = getParameterByName('gclid');
        var adgroup = getParameterByName('adgroup');
        var creative = getParameterByName('creative');
        var target = getParameterByName('target');
        var matchtype = getParameterByName('matchtype');
        var network = getParameterByName('network');
        var devicemodel = getParameterByName('devicemodel');
        var adposition = getParameterByName('adposition');
        var sfdc_campaign_code = getParameterByName('campaign_code');
        var campaign_code = getParameterByName('ncamp_code');

        if($("#form_type").val() != '')
        {
            var form_type = $("#form_type").val();
        }
        else
        {
            var form_type = 'main_form';         
        }
        

        if(source=="")
            source="NA";
        if(medium == "")
            medium = "NA";
        if(campaign == "")
            campaign = "NA";
        if(keyword == "")
            keyword = "NA";
        if(device == "")
            device = "NA";
        if(placement == "")
            placement = "NA";
        if(gclid == "")
            gclid = "NA";
        if(adgroup == "")
            adgroup = "NA";
        if(creative == "")
            creative = "NA";
        if(target == "")
            target = "NA";
        if(matchtype == "")
            matchtype = "NA";
        if(network == "")
            network = "NA";
        if(devicemodel == "")
            devicemodel = "NA";
        if(adposition == "")
            adposition = "NA";
        if(sfdc_campaign_code == "")
            sfdc_campaign_code = "NA";
        //Netbiz campaign code
        if(campaign_code == "")
            campaign_code = "NA";

        var comments = 'NA';
        var budget = 'NA';
        var configuration = 'NA';
        var ind_project_id = 'NA';
        var city = 'NA';
        var state = "NA";
        var sfdc_project_interested = 'NA';
        var ind_project_name = 'NA';

        var name = $('#name').val();
        var email = $('#email').val();
        var mobile = $('#phone').val();
        var country      = $('#hdn_country').val();
        var dialing_code = ($('#hdn_dialcode').val()).trim();

        var url = $(location).attr('href'); //get current url  //code added by Aparna C
        var encodedUrl = encodeURIComponent(url);

        if($("#config_type").val() != '')
        {
            var configuration = $("#config_type").val();
        }


        var data = 'name='+name+'&email='+email+'&mobile='+mobile+'&property_id='+property_id+'&sfdc_campaign_code='+sfdc_campaign_code+'&campaign_code='+campaign_code+'&source='+source+'&medium='+medium+'&campaign='+campaign+'&country='+country+'&city='+city+'&dialing_code='+dialing_code+'&state='+state+'&keyword='+keyword+'&device='+device+'&placement='+placement+'&gclickid='+gclid+'&form_type='+form_type+'&ind_project_name='+ind_project_name+'&sfdc_project_interested='+sfdc_project_interested+'&adgroup='+adgroup+'&creative='+creative+'&target='+target+'&matchtype='+matchtype+'&network='+network+'&devicemodel='+devicemodel+'&adposition='+adposition+'&comments='+comments+'&budget='+budget+'&configuration='+configuration+'&encoded_url='+encodedUrl;;
        
        // send_otp(mobile,'Radius',1); 
        
        $("#enquiry_form .subBtn").prop('disabled', true);
        
        var lead_url = "https://lms.netbizlabs.com/admin/leads_api/store_api_lead/";

        $.ajax({
             url        : lead_url,
             type       : 'POST',
             dataType   : 'text',
             data       : data,
             crossDomain: true,
             cache      : false,
            success: function (response) 
            {

                $('#enquiry_form')[0].reset();

                var response = response.split('#');

                var lead_id = response[1];
                
                 window.location.href = 'thankyou336c.html?configuration='+configuration;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Some error occurred');
            }
        });
    }
});

function getParameterByName(name) 
{
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function setFormtype(formval)
{
    $("#form_type").val(formval);
}

function setConfiguration(configval)
{
    $("#config_type").val(configval);
    setFormtype('Floor Plan Form');
}
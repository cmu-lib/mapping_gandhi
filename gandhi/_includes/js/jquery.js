<script type="type/javascript">$("altEnergy").click(function(){
             sublayer.setSQL("SELECT * FROM uploaddatafinal WHERE interventiontype LIKE 'Non-Conventional Energy Sources'");
							sublayer.setCartoCSS("#uploaddatafinal {marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #9EBF4E;marker-allow-overlap: true;}");
							return true;
           });  $('#selector').change(function() {
					 LayerActions[$(this).val()]();
           });
</script>

<script type="type/javascript">$("button").click(function(){
             $("#filters").html($("div[value='Energy']").data("text-swap"));
           }); $("altEnergy").css('cursor', 'pointer');   $("altEnergy").click(function(){
             $("#history").html($("p[value='altEnergy']").data("hist-swap"));
           }); $("altEnergy").click(function(){
  $("img").attr('src', 'assets/img/cowbiogas.gif');
});
</script>

<script type="type/javascript">$("sustAgri").click(function(){
           sublayer.setSQL("SELECT * FROM uploaddatafinal WHERE interventiontype LIKE 'Small Scale Business'");
            sublayer.setCartoCSS("#uploaddatafinal {marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #094003;marker-allow-overlap: true;}");
            return true;
         });                       $('#selector').change(function() {
         LayerActions[$(this).val()]();
         });
</script>

<script type="type/javascript">$("button #sustAgri").click(function(){
           $("#filters").html($("p[value='sustAgri']").data("text-swap"));
         }); $("sustAgri").css('cursor', 'pointer'); $("sustAgri").click(function(){
           $("#history").html($("p[value='sustAgri']").data("hist-swap"));
         });
         $("sustAgri").click(function(){
$("img").attr('src', '/assets/img/Fruit-Trees-1.gif');
});
</script>

<script type="type/javascript">$("watMgmt").click(function(){
              sublayer.setSQL("SELECT * FROM uploaddatafinal WHERE interventiontype ILIKE 'Water Resource Development'");
              sublayer.setCartoCSS("#uploaddatafinal {marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #7F3903;marker-allow-overlap: true;}");
              return true;
           });</script>
<script type="type/javascript">$("watMgmt").click(function(){
             $("#filters").html($("p[value='waterMGMT']").data("text-swap"));
           });  $("watMgmt").css('cursor', 'pointer'); $("watMgmt").click(function(){
             $("#history").html($("p[value='waterMGMT']").data("hist-swap"));
           });  $("watMgmt").click(function(){
  $("img").attr('src', '/assets/img/Revived-Rivers-1.gif');
});</script>

<script type="type/javascript">$("womEmpow").click(function(){
             sublayer.setSQL("SELECT * FROM uploaddatafinal WHERE interventiontype LIKE 'Womens Collaborative'");
							sublayer.setCartoCSS("#uploaddatafinal {marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #FF8277;marker-allow-overlap: true;}");
							return true;
           });          $('#selector').change(function() {
					 LayerActions[$(this).val()]();
         });</script>

<script type="type/javascript">$("womEmpow").click(function(){
             $("#filters").html($("p[value='womenEmp']").data("text-swap"));
           }); $("womEmpow").css('cursor', 'pointer'); $("womEmpow").click(function(){
             $("#history").html($("p[value='womenEmp']").data("hist-swap"));
           }); $("womEmpow").click(function(){
  $("img").attr('src', '/assets/img/Womens-Support-Groups-1.gif');
});</script>

<script type="type/javascript">$("villIndus").click(function(){
             sublayer.setSQL("SELECT * FROM uploaddatafinal WHERE interventiontype LIKE 'Agriculture Development'");
							sublayer.setCartoCSS("#uploaddatafinal {marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #E5A81A;marker-allow-overlap: true;}");
							return true;
           });  $('#selector').change(function() {
					 LayerActions[$(this).val()]();
           });           $('#selector').change(function() {
					 LayerActions[$(this).val()]();
         });</script>

<script type="type/javascript">$("villIndus").click(function(){
             $("#filters").html($("p[value='villInd']").data("text-swap"));
           }); $("villIndus").css('cursor', 'pointer'); $("villIndus").click(function(){
             $("#history").html($("p[value='villInd']").data("hist-swap"));
           }); $("villIndus").click(function(){
  $("img").attr('src', '/assets/img/Daal-Mill-1.gif');
});</script>

<script>
$("#altEner").click(function(){
             $("#altEnergy").show('slow');
             $("#altEnergy1").show('slow');
             $("#sustAgri").hide('slow');
             $("#sustAgri1").hide('slow');
             $("#waterMGMT").hide('slow');
             $("#waterMGMT1").hide('slow');
             $("#womenEmp").hide('slow');
             $("#womenEmp1").hide('slow');
             $("#villInd").hide('slow');
             $("#villInd1").hide('slow');
             $("img.biogas").attr("src","{{ site.baseurl }}/assets/img/CowBiogas.gif").show();
             $("img.fruit").attr("src","{{ site.baseurl }}/assets/img/Fruit-Trees-1.gif").hide();
             $("img.rivers").attr("src","{{ site.baseurl }}/assets/img/Revived-Rivers-1.gif").hide();
             $("img.women").attr("src","{{ site.baseurl }}/assets/img/Womens-Support-Groups-1.gif").hide();
             $("img.mill").attr("src","{{ site.baseurl }}/assets/img/Daal-Mill-1.gif").hide();
             sublayer.setSQL("SELECT * FROM uploaddatafinal WHERE interventiontype LIKE 'Non-Conventional Energy Sources'");
              sublayer.setCartoCSS("#uploaddatafinal {marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #9EBF4E;marker-allow-overlap: true;}");
              return true;
             $('#selector').change(function() {
             LayerActions[$(this).val()]();
             });
           });
$("#sustAgril").click(function(){
            $("#altEnergy").hide('slow');
            $("#altEnergy1").hide('slow');
            $("#sustAgri").show('slow');
            $("#sustAgri1").show('slow');
            $("#waterMGMT").hide('slow');
            $("#waterMGMT1").hide('slow');
            $("#womenEmp").hide('slow');
            $("#womenEmp1").hide('slow');
            $("#villInd").hide('slow');
            $("#villInd1").hide('slow');
            $("img.biogas").attr("src","{{ site.baseurl }}/assets/img/CowBiogas.gif").hide();
            $("img.fruit").attr("src","{{ site.baseurl }}/assets/img/Fruit-Trees-1.gif").show();
            $("img.rivers").attr("src","{{ site.baseurl }}/assets/img/Revived-Rivers-1.gif").hide();
            $("img.women").attr("src","{{ site.baseurl }}/assets/img/Womens-Support-Groups-1.gif").hide();
            $("img.mill").attr("src","{{ site.baseurl }}/assets/img/Daal-Mill-1.gif").hide();
            sublayer.setSQL("SELECT * FROM uploaddatafinal WHERE interventiontype LIKE 'Small Scale Business'");
             sublayer.setCartoCSS("#uploaddatafinal {marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #094003;marker-allow-overlap: true;}");
             return true;
            $('#selector').change(function() {
            LayerActions[$(this).val()]();
            });
          });
$("#watMgmt").click(function(){
            $("#altEnergy").hide('slow');
            $("#altEnergy1").hide('slow');
            $("#sustAgri").hide('slow');
            $("#sustAgri1").hide('slow');
            $("#waterMGMT").show('slow');
            $("#waterMGMT1").show('slow');
            $("#womenEmp").hide('slow');
            $("#womenEmp1").hide('slow');
            $("#villInd").hide('slow');
            $("#villInd1").hide('slow');
             $("img.biogas").attr("src","{{ site.baseurl }}/assets/img/CowBiogas.gif").hide();
             $("img.fruit").attr("src","{{ site.baseurl }}/assets/img/Fruit-Trees-1.gif").hide();
             $("img.rivers").attr("src","{{ site.baseurl }}/assets/img/Revived-Rivers-1.gif").show();
             $("img.women").attr("src","{{ site.baseurl }}/assets/img/Womens-Support-Groups-1.gif").hide();
             $("img.mill").attr("src","{{ site.baseurl }}/assets/img/Daal-Mill-1.gif").hide();
             sublayer.setSQL("SELECT * FROM uploaddatafinal WHERE interventiontype ILIKE 'Water Resource Development'");
             sublayer.setCartoCSS("#uploaddatafinal {marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #7F3903;marker-allow-overlap: true;}");
             return true;
             $('#selector').change(function() {
             LayerActions[$(this).val()]();
             });
           });
$("#womEmpow").click(function(){
            $("#altEnergy").hide('slow');
            $("#altEnergy1").hide('slow');
            $("#sustAgri").hide('slow');
            $("#sustAgri1").hide('slow');
            $("#waterMGMT").hide('slow');
            $("#waterMGMT1").hide('slow');
            $("#womenEmp").show('slow');
            $("#womenEmp1").show('slow');
            $("#villInd").hide('slow');
            $("#villInd1").hide('slow');
            $("img.biogas").attr("src","{{ site.baseurl }}/assets/img/CowBiogas.gif").hide();
            $("img.fruit").attr("src","{{ site.baseurl }}/assets/img/Fruit-Trees-1.gif").hide();
            $("img.rivers").attr("src","{{ site.baseurl }}/assets/img/Revived-Rivers-1.gif").hide();
            $("img.women").attr("src","{{ site.baseurl }}/assets/img/Womens-Support-Groups-1.gif").show();
            $("img.mill").attr("src","{{ site.baseurl }}/assets/img/Daal-Mill-1.gif").hide();
            sublayer.setSQL("SELECT * FROM uploaddatafinal WHERE interventiontype LIKE 'Womens Collaborative'");
             sublayer.setCartoCSS("#uploaddatafinal {marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #FF8277;marker-allow-overlap: true;}");
             return true;
             $('#selector').change(function() {
             LayerActions[$(this).val()]();
             });
          });
$("#villIndus").click(function(){
              $("#altEnergy").hide('slow');
              $("#altEnergy1").hide('slow');
              $("#sustAgri").hide('slow');
              $("#sustAgri1").hide('slow');
              $("#waterMGMT").hide('slow');
              $("#waterMGMT1").hide('slow');
              $("#womenEmp").hide('slow');
              $("#womenEmp1").hide('slow');
              $("#villInd").show('slow');
              $("#villInd1").show('slow');
             $("img.biogas").attr("src","{{ site.baseurl }}/assets/img/CowBiogas.gif").hide();
             $("img.fruit").attr("src","{{ site.baseurl }}/assets/img/Fruit-Trees-1.gif").hide();
             $("img.rivers").attr("src","{{ site.baseurl }}/assets/img/Revived-Rivers-1.gif").hide();
             $("img.women").attr("src","/assets/img/Womens-Support-Groups-1.gif").hide();
             $("img.mill").attr("src","{{ site.baseurl }}/assets/img/Daal-Mill-1.gif").show();
             sublayer.setSQL("SELECT * FROM uploaddatafinal WHERE interventiontype LIKE 'Agriculture Development'");
              sublayer.setCartoCSS("#uploaddatafinal {marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #E5A81A;marker-allow-overlap: true;}");
              return true;
             $('#selector').change(function() {
             LayerActions[$(this).val()]();
             });
           });

</script>

<script>
$(function () {
 $('[data-toggle="popover"]').popover({
               html:true
 });
});
$('body').on('click', function (e) {
    //only buttons
    if ($(e.target).data('toggle') !== 'popover'
        && $(e.target).parents('.popover.in').length === 0) {
        $('[data-toggle="popover"]').popover('hide');
    }
});
</script>

<script>
$("#peoplebtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#people--contact").offset().top},
        'slow');
});

$("#aboutbtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});
</script>

<script>
var sublayer;
    var map;
    function init(){
      // initiate leaflet map
      map = new L.Map('cartodb-map', {
        center: [20.7,78.5],
        zoom: 10
      })

      L.mapbox.accessToken = 'pk.eyJ1IjoiZGpldmFucyIsImEiOiJjaXdpMTg3ODkwMTZqMnZtbnZjZG12eTc3In0.mtm_YAt-YzVRouzj3eu1bw'

L.tileLayer('https://api.mapbox.com/styles/v1/djevans/ciwf3km8q00352pna51vni88g/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGpldmFucyIsImEiOiJjaXdpMTg3ODkwMTZqMnZtbnZjZG12eTc3In0.mtm_YAt-YzVRouzj3eu1bw', {
        attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
      }).addTo(map);


      var layerUrl = 'https://danieljohnevans.carto.com/api/v2/viz/abe2f3ce-eca7-11e6-956d-0ee66e2c9693/viz.json' ;
			cartodb.createLayer(map,layerUrl)
				.addTo(map)
				.on('done', function(layer){
					sublayer = layer.getSubLayer(0);
          layer.setZIndex(5);

      // change the query for the first layer
      var LayerActions = {
      waterMGMT: function(){
          sublayer.setSQL("SELECT * FROM wardha_uploaddata WHERE interventiontype LIKE 'Water Resource Development'");
          sublayer.setCartoCSS("#wardha_uploaddata {marker-fill-opacity: 0.9;marker-line-color: #FFF;marker-line-width: 1;marker-line-opacity: 1;marker-placement: point;marker-type: ellipse;marker-width: 10;marker-fill: #edc70a;marker-allow-overlap: true;}");
          return true;
        }
      };
      return true;

        }).on('error', function() {
          //log the error
        });
    }
</script>

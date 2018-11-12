$(document).ready(function(){
     $("button#get_age").click(function() {

       var table3_items = [];
       var i = 0;
       var airtable_read_endpoint =
       "https://api.airtable.com/v0/appdKlfv4HAjmlZGI/Json?api_key=key3P4gTMtrDY1ylx";
       var table3_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table3_items = [];
                      table3_items.push(value.fields.Companies);
                      table3_items.push(value.fields.Average_age);
                      table3_dataSet.push(table3_items);
                      console.log(table3_items);
               }); // end .each
               console.log(table3_dataSet);

               var chart = c3.generate({
                   data: {
                       columns: table3_dataSet,
                   },
               });
                   axis: {
                       x: {
                           label: 'Company'
                       },
                       y: {
                           label: 'Average Age'
                       },
                   }
               });

        }); // end .getJSON
     }); // end button
}); // document ready

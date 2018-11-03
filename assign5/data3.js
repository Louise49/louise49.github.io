$(document).ready(function(){
     $("button#get_data").click(function() {
       var table1_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appdKlfv4HAjmlZGI/Json?api_key=key3P4gTMtrDY1ylx";
       var table1_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table1_items = [];
                      table1_items.push(value.fields.Companies);
                      table1_items.push(value.fields.Foundation);
                      table1_items.push(value.fields.Location);
                      table1_items.push(value.fields.Weibo_Fans);
                      table1_items.push(value.fields.MissEvan_Fans);
                      table1_items.push(value.fields.Members);
                      table1_items.push(value.fields.Famous_Works);
                      table1_items.push(value.fields.Activities);
                      table1_dataSet.push(table1_items);
               }); // end .each

            $('#table1').DataTable( {
                data: table1_dataSet,
                retrieve: true,
                columns: [
                    { title: "Company",
                      defaultContent:""},
                    { title: "Setup",
                        defaultContent:"" },
                    { title: "Location",
                      defaultContent:"" },
                    { title: "WeiboFans",
                      defaultContent:"" },
                    { title: "MFans",
                      defaultContent:""},
                    { title: "Members",
                        defaultContent:""},
                    { title: "Famous Works",
                      defaultContent:""},
                    { title: "Activity",
                      defaultContent:""},
                ]
            } );
       }); // end .getJSON

       var table2_items = [];
       var i = 0;
       var airtable_read_endpoint =
       "https://api.airtable.com/v0/appdKlfv4HAjmlZGI/Json?api_key=key3P4gTMtrDY1ylx";
       var table2_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table2_items = [];
                      table2_items.push(value.fields.Companies);
                      table2_items.push(value.fields.Weibo_Fans);
                      table2_dataSet.push(table2_items);
               }); // end .each

               var chart = c3.generate({
                    data: {
                        columns: table2_dataSet,
                    },
                    axis: {
                            x: {
                                type: 'category',
                                categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                            }
                        }
                });


        }); // end .getJSON
     }); // end button
}); // document ready

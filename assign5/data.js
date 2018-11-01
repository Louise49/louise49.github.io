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
     }); // end button

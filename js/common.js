function   formatDate(now)   {     
			var   year=now.getFullYear();     
			var   month=now.getMonth()+1;     
			var   date=now.getDate();     
			var   hour=now.getHours();     
			var   minute=now.getMinutes(); 
			if ( hour < 10 ) hour="0"+hour;
			if ( minute < 10 ) minute="0"+minute;
			if ( date < 10 ) date="0"+date;
			if ( month < 10 ) month="0"+month;
			return   year+"-"+month+"-"+date+" "+hour+":"+minute;     
}

function doSendAjaxRequest(xurl,param,fnCallback){
                if ( xurl.indexOf('http://') == -1 ) xurl = g_UrlBase+xurl;
                $.ajax( {
                    "url":  xurl,
                    "data": param,
                    "timeout" : 10000,
                    "contentType" : "application/x-www-form-urlencoded; charset=utf-8",
                    "success": function (json) {
                        try{ 
                        		fnCallback( json );
                        }catch(e){}
                    },
                    "dataType": "json",
                    "cache": false,
                    "type": "POST",
                    "error": function (xhr, error, thrown) {
                        
                    }
                } );
}
			
function getUrlParam(xurl,name){
            var para="";
            if(xurl.lastIndexOf("?")>0){
                para=xurl.substring(xurl.lastIndexOf("?")+1,xurl.length);
                var arr=para.split("&");
                para="";
                for(var i=0;i<arr.length;i++){
                   if(arr[i].split("=")[0]==name) return arr[i].split("=")[1];
                }
                return "";
           }else{
                return "";
           }
}
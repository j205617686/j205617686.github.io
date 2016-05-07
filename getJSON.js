


document.write("<scr"+"ipt src='http://code.jquery.com/jquery-1.7.1.min.js'></scr"+"ipt>");
document.write("<scr"+"ipt src='http://code.jquery.com/mobile/1.1.0/jquery.mobile-1.1.0.min.js'></scr"+"ipt>");




(function ($) {
	  $.UrlParam = function (name) {
	    //宣告正規表達式
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	    /*
	     * window.location.search 獲取URL ?之後的參數(包含問號)
	     * substr(1) 獲取第一個字以後的字串(就是去除掉?號)
	     * match(reg) 用正規表達式檢查是否符合要查詢的參數
	    */
	    var r = window.location.search.substr(1).match(reg);
	    //如果取出的參數存在則取出參數的值否則回穿null
	    if (r != null) return unescape(r[2]); return null;
	  }
	})(jQuery);
	/*
	 *UrlParam取得網址參數需帶入參數名稱
	 *UrlParam(參數名稱)
	 */
	var barcode = String($.UrlParam("barcode"));
	//alert(barcode);
	
	//var barcodeWithOutRef=barcode.subString(1,barcode.length);
	
	
	//alert(barcode);
	var alldata;
	
	
	
		var barcode = 'barcode='+String($.UrlParam("barcode"));
		
		var graphObj;
		var Product;
		
		$.ajax({
			  url: "http://140.121.197.132:8080/fim/getProduct?",
			  type: "get",
			  data:barcode,
			  dataType: "json",
			  success: function(Jdata) {
			    //alert("SUCCESS!!!");
			    //console.log(Jdata);
			   
			    
			  

		   
			    
			    if(Jdata.status=="OK")
			    {
			    	
			    	
			    	
			    	
			    	Product=new Object();
			    	var ProductChild=new Array();
			    	
			    	
			    	
			    	var placeOfOrigin=new Object();
			    	placeOfOrigin.name="原產地";
			    	var manuAddress=new Object();
			    	manuAddress.name="製造商地址";
			    	var agents=new Object();
			    	agents.name="經銷商";
			    	var importer = new Object();
			    	importer.name="進口商";
			    	var additive = new Object();
			    	additive.name="添加劑";
			    	var relInfo = new Object();
			    	relInfo.name="相關資訊";
			    	var placeOfOriginChild=new Array();
			    	var manuAddressChild=new Array();
			    	var agentsChild=new Array();
			    	var importerChild = new Array();
			    	
			    	var placeOfOriginData=new Object();
			    	placeOfOriginData.name=Jdata.data.placeOfOrigin;
			    	var manuAddressData=new Object();
			    	manuAddressData.name=Jdata.data.manuAddress;
			    	var agentsData=new Object();
			    	agentsData.name=Jdata.data.agents;
			    	var importerData = new Object();
			    	importerData.name=Jdata.data.importer;
			    	
			    	placeOfOriginChild.push(placeOfOriginData);
			    	manuAddressChild.push(manuAddressData);
			    	agentsChild.push(agentsData);
			    	importerChild.push(importerData);
			    	
			    	placeOfOrigin.children=placeOfOriginChild;
			    	importer.children=manuAddressData;
			    	manuAddress.children=agentsData;
			    	agents.children=importerData;
			    	
			    		
			    	
			    	ProductChild.push(placeOfOrigin);
			    	ProductChild.push(importer);
			    	ProductChild.push(manuAddress);
			    	ProductChild.push(agents);
			    	ProductChild.push(additive);
			    	ProductChild.push(relInfo);
			    	
			    	
			    	var additiveChild = new Array();
			    	var relInfoChild = new Array();
			    	
			    	
			    	
			    	Product.name=Jdata.data.ProductName;
			    	Product.children=ProductChild;
			    	
			    	
			    	//console.log(JSON.stringify(Product));
			    	//document.write(JSON.stringify(Product));
			    	
			    	
			    	
			    	
			    	
			    
			    	
			    	
			    }else
			    {
			    	
			    	$("#divID").html("沒有找到任何資料!");
			    	
			    }
			    
			   
			  },
			  
			  error: function() {
			    alert("ERROR!!!");
			  }
			});

		
		
		
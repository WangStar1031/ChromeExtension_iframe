var arrIDs = [15051590487,15047347079,15047369723,15047391757];
var mainChecked = [];

for( var i = 0; i < arrIDs.length; i++){
	mainChecked.push(false);
}
var interval = setInterval( setZeroValue, 100);
function setZeroValue(){
	for( var i = 0; i < arrIDs.length; i++){
		if( mainChecked[i] == true)
			continue;
		var id = arrIDs[i];
		var $row = $('tr[data-betid="' + id + '"]', $('iframe').get(0).contentWindow.document);
		if( $row.length == 0)
			continue;

		if( $row.find(".bet-summary-item-return-value").length != 0)
			$row.find(".bet-summary-item-return-value").eq(0).html("0.00");
		if( $row.find(".multiples-bet-information-table-body-returns").length != 0){
			$row.find(".multiples-bet-information-table-body-returns").eq(0).html(" 0.00");
			
		}
		if( $row.find(".bet-confirmation-amounts").length != 0){	
			var strAmount = $row.find(".bet-confirmation-amounts").eq(0).html();
			var arrAmounts = strAmount.split("Return:");
			var strRetVal = arrAmounts[1];
			var strVal = strRetVal.trim();
			var strHtml = arrAmounts[0] + "Return:" + strRetVal.replace(strVal, "0.00");
			$row.find(".bet-confirmation-amounts").eq(0).html(strHtml);
			mainChecked[i] = true;
		}
		if( $row.find(".bet-confirmation-cash-out").length != 0){	
			var mucashhistorique = $row.find(".bet-confirmation-cash-out").eq(0).hide();
			
		}
	}
	var allChecked = true;
	for( var i = 0; i < arrIDs.length; i++){
		if( mainChecked[i] == false){
			allChecked = false;
			return;
		}
	}
	if( allChecked == true)
		clearInterval(interval);
}
;(function ($){
	//init bpopup
	$('._js-btn-open-modal').on('click', function (){
		$('#modal-order').bPopup({
			closeClass: 'modal-close',
		});
	});
	//init fromstayler
	 $('select').styler();
})(jQuery);


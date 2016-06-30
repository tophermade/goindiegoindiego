// previews for sectionals


// sorting page sections
$("#available-bits-inner").sortable({
	connectWith: "#assembly-line",
	helper: function (e, li) {
		this.copyHelper = li.clone().insertAfter(li);

		$(this).data('copied', false);

		return li.clone();
	},
	stop: function () {

		var copied = $(this).data('copied');

		if (!copied) {
			this.copyHelper.remove();
		}

		this.copyHelper = null;
	}
});

$("#assembly-line").sortable({
	receive: function (e, ui) {
		ui.sender.data('copied', true);
		console.log(e);
	}
});
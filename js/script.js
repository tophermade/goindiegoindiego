var availablePanels = $("#available-bits");

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



// content tools setup
ContentTools.StylePalette.add([
	new ContentTools.Style('Author', 'author', ['p'])
]);
var editor = ContentTools.EditorApp.get();
editor.init('[data-editable]', 'data-name')
editor.start(console.log("s"));
ContentEdit.Root.get().bind('mount', function (element) {
	$("#available-bits-inner").sortable("disable");
	$("#assembly-line").sortable("disable");
	$(availablePanels).css({
		opacity: .3
	});
});
ContentEdit.Root.get().bind('unmount', function (element) {
	$("#available-bits-inner").sortable("enable");
	$("#assembly-line").sortable("enable");
	$(availablePanels).css({
		opacity: 1
	});
});
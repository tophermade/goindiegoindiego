Template.pagesSingleTemplate.rendered = function(){
	var availablePanels		= $("#available-bits");
	var availableSorter		= $("#available-bits-inner");
	var assemblySorter		= $("#assembly-line");

// previews for sectionals


// sorting page sections
	$(availableSorter).sortable({
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

	$(assemblySorter).sortable({
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
	editor.init('[data-editable]', 'data-name');

	ContentEdit.Root.get().bind('mount', function (element) {
		$(availableSorter).sortable("disable");
		$(assemblySorter).sortable("disable");
		$(availablePanels).css({
			opacity: .3
		});
	});
	ContentEdit.Root.get().bind('unmount', function (element) {
		$(availableSorter).sortable("enable");
		$(assemblySorter).sortable("enable");
		$(availablePanels).css({
			opacity: 1
		});
	});
};
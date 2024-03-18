$(function(){
	var errorModal = function(param){
		this.timeout = null;
		this.$el = $("<div>").addClass("errorModal");
		$("body").append(this.$el);
	};
	$.extend(errorModal.prototype,{
		show: function(text){
			this.$el.addClass("activeErrorModal");
			this.$el.html(text);
			if(this.timeout){
				clearTimeout(this.timeout);
				this.timeout = null;
			}
			this.timeout = setTimeout(function(){
				this.$el.removeClass("activeErrorModal");
			}.bind(this),500);
		},
	});

	window.ErrorModal = new errorModal();


	$.ajaxSetup({
		error: function(){
			ErrorModal.show("网络错误");
		}
	});
});
var foldBtns = document.getElementsByClassName("fold-button");
var onePst = document.getElementsByClassName("one-post");

for (var i = 0; i < foldBtns.length; i++) {
	foldBtns[i].addEventListener("click", function(e)
    {
		if (e.target.className == "fold-button folded") {
			e.target.innerHTML = "свернуть";
			e.target.className = "fold-button";
			var j;
			for (j = 0; j < foldBtns.length; j++) {
				if (e.target == foldBtns[j]) {
					break;
				}
			}
			onePst[j].classList.remove("folded");
		}
		else {
			e.target.innerHTML = "развернуть";
			e.target.className = "fold-button folded";
			var j;
			for (j = 0; j < foldBtns.length; j++) {
				if (e.target == foldBtns[j]) {
					break;
				}
			}
			onePst[j].classList.add("folded");
                                 return;
		}
	});
}






	
	
	

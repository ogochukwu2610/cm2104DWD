<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>
			Noogle Search
		</title>
		<script>

		function validate() {
			// check if we have a search term before searching
			// 1. get a reference to the searchbox
			//    using the DOM api method document.getElementById();
			 searchbox = document.getElementById();

			// 2. get the value of the searchbox
			//    using the DOM api value property of an element
			searchvalue = document.value.search;

			// 3. test if the value is not equal to an empty string ("")
			 if (searchvalue != "") {
			 	return true;
			 }
			else {
				alert("please type a search query!");
			 	return false;
			 }
		}
		</script>
	</head>
	<body>
		<h1>
			Noogle!
		</h1>
		<form name='search' method="get" onsubmit="return validate();" action="results.html">
			<input type="text" name="q" id="searchbox" size="50">
			<input type="submit" value="Noogle it!">
		</form>
		<script>
		$(document).ready(function(){
		function addcontent(){
			$(button).click(function(){
				$(addcontent).append(img src"Ostrich.png");
			});
		}
	});
		</script>
	</body>
</html>
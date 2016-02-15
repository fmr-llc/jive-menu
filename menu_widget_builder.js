/*
Jive - Menu Widget

Copyright (c) 2015 Fidelity Investments
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

FILE DESCRIPTION
This is the Javascript library that drives the Menu widget builder app.

WIDGET DESCRIPTION
This Jive HTML widget loads in a Jive setup document with a bullet list acting 
as a table of contents.  This is parsed and formatted into a menu with the top level 
items as the main menu selections.  The second level items are built into drop-downs 
of the top level items.
*/
var fidosreg_id = 'b764a0a9536448345dc227af95e192521d337b5e4c3560c859b89ecd0407004a';
var $j = jQuery.noConflict();
var sourceURL = "";
var menuTitle = "";
var instanceHostname = '';
var backgroundDefault = "FFFFFF";
var backgroundActive = "F7A4A7";
var textDefault = "808080";
var textActive = "000000";
var previewMenuStyleSheet = null;
var titleSize = 15;
var menuSize = 15;
var submenuSize = 15;

var menu_color = {};
menu_color['white'] = {
	backgroundDefault: "FFFFFF",
	backgroundActive: "CCCCCC",
	textDefault: "808080",
	textActive: "000000"
	};
menu_color['gray1'] = { 
	backgroundDefault: "CCCCCC",
	backgroundActive: "BDABA0",
	textDefault: "808080",
	textActive: "000000"
	};
menu_color['gray2'] = { 
	backgroundDefault: "666666",
	backgroundActive: "92796a",
	textDefault: "C0C0C0",
	textActive: "FFFFFF"
	};
menu_color['black'] = { 
	backgroundDefault: "000000",
	backgroundActive: "BDABA0",
	textDefault: "C0C0C0",
	textActive: "FFFFFF"
	};
menu_color['yellow1'] = { 
	backgroundDefault: "FFFFCC",
	backgroundActive: "cbcb7a",
	textDefault: "808080",
	textActive: "000000"
	};
menu_color['yellow2'] = { 
	backgroundDefault: "FFFF66",
	backgroundActive: "c4c468",
	textDefault: "808080",
	textActive: "000000"
	};
menu_color['yellow3'] = { 
	backgroundDefault: "FFFF00",
	backgroundActive: "c4c444",
	textDefault: "808080",
	textActive: "000000"
	};
menu_color['yellow4'] = { 
	backgroundDefault: "AAAA00",
	backgroundActive: "CCCC44",
	textDefault: "FFFFFF",
	textActive: "000000"
	};
menu_color['orange1'] = { 
	backgroundDefault: "FFCC99",
	backgroundActive: "886644",
	textDefault: "808080",
	textActive: "FFFFFF"
	};
menu_color['orange2'] = { 
	backgroundDefault: "FFCC22",
	backgroundActive: "884400",
	textDefault: "808080",
	textActive: "FFFFFF"
	};
menu_color['orange3'] = { 
	backgroundDefault: "f58e1d",
	backgroundActive: "996124",
	textDefault: "C0C0C0",
	textActive: "FFFFFF"
	};
menu_color['orange4'] = { 
	backgroundDefault: "a35f14",
	backgroundActive: "f58e1d",
	textDefault: "C0C0C0",
	textActive: "000000"
	};
menu_color['red1'] = { 
	backgroundDefault: "FF99CC",
	backgroundActive: "884466",
	textDefault: "808080",
	textActive: "FFFFFF"
	};
menu_color['red2'] = { 
	backgroundDefault: "FF6666",
	backgroundActive: "AA2222",
	textDefault: "D0D0D0",
	textActive: "FFFFFF"
	};
menu_color['red3'] = { 
	backgroundDefault: "CC2222",
	backgroundActive: "871b1b",
	textDefault: "E0E0E0",
	textActive: "FFFFFF"
	};

menu_color['red4'] = {
	backgroundDefault: "AA0000",
	backgroundActive: "570000",
	textDefault: "C0C0C0",
	textActive: "FFFFFF"
}
menu_color['purple1'] = {
	backgroundDefault: "CCAAFF",
	backgroundActive: "664488",
	textDefault: "808080",
	textActive: "FFFFFF"
}
menu_color['purple2'] = {
	backgroundDefault: "DD66FF",
	backgroundActive: "660088",
	textDefault: "404040",
	textActive: "FFFFFF"
}
menu_color['purple3'] = {
	backgroundDefault: "BB66DD",
	backgroundActive: "662288",
	textDefault: "E0E0E0",
	textActive: "FFFFFF"
}
menu_color['purple4'] = {
	backgroundDefault: "660066",
	backgroundActive: "BB66DD",
	textDefault: "C0C0C0",
	textActive: "000000"
}
menu_color['blue1'] = {
	backgroundDefault: "e4f5ff",
	backgroundActive: "688288",
	textDefault: "808080",
	textActive: "FFFFFF"
}
menu_color['blue2'] = {
	backgroundDefault: "6666FF",
	backgroundActive: "3a3a71",
	textDefault: "C0C0C0",
	textActive: "FFFFFF"
}
menu_color['blue3'] = {
	backgroundDefault: "0000FF",
	backgroundActive: "2a2a76",
	textDefault: "C0C0C0",
	textActive: "FFFFFF"
}
menu_color['blue4'] = {
	backgroundDefault: "0000AA",
	backgroundActive: "6363e3",
	textDefault: "C0C0C0",
	textActive: "000000"
}
menu_color['green1'] = {
	backgroundDefault: "AAFFAA",
	backgroundActive: "448844",
	textDefault: "808080",
	textActive: "FFFFFF"
}
menu_color['green2'] = {
	backgroundDefault: "33FF33",
	backgroundActive: "1e951e",
	textDefault: "808080",
	textActive: "FFFFFF"
}
menu_color['green3'] = {
	backgroundDefault: "58953b",
	backgroundActive: "406d2b",
	textDefault: "D0D0D0",
	textActive: "FFFFFF"
}
menu_color['green4'] = {
	backgroundDefault: "2b4a1d",
	backgroundActive: "61904c",
	textDefault: "F0F0F0",
	textActive: "000000"
}
menu_color['brown1'] = {
	backgroundDefault: "cb9a5a",
	backgroundActive: "957142",
	textDefault: "404040",
	textActive: "FFFFFF"
}
menu_color['brown2'] = {
	backgroundDefault: "bf812e",
	backgroundActive: "8b5e22",
	textDefault: "000000",
	textActive: "FFFFFF"
}
menu_color['brown3'] = {
	backgroundDefault: "996600",
	backgroundActive: "573a00",
	textDefault: "C0C0C0",
	textActive: "FFFFFF"
}
menu_color['brown4'] = {
	backgroundDefault: "663300",
	backgroundActive: "cb9a5a",
	textDefault: "C0C0C0",
	textActive: "000000"
}

function log(msg){
	if (typeof console === "undefined" || typeof console.log === "undefined") return false;
	console.log(msg);
}

/*
* Checks the user input and determines whether or not to enable the
* Next button
*/
function toggleNextButton() {
	// A valid input document, a title, and a selection for the load
	// type must exist for the Next button to enable
	if ($j('#docURLInput').val().length > 0 &&
		$j('#menuTitle').val().length > 0)
	{
		$j('#nextButton').attr('disabled', false);
		$j('#URLStatus').html('');
	} else {
		$j('#nextButton').attr('disabled', true);
	}
}

function nextButton()
{
	// Validate the input document
	if($j('#docURLInput').val().indexOf(instanceHostname) == -1)
	{
		$j('#URLStatus').html('Invalid URL');
		$j('#docURLInput').val('');
		$j('#nextButton').attr('disabled', true);
		resize();
		return false;
	}
	// Make sure a title was specified
	if ($j('#menuTitle').val().length == 0) {
		$j('#URLStatus').html('You must give the menu a title');
		$j('#nextButton').attr('disabled', true);
		resize();
		return false;
	}

	// Hide the search, open the preview, and get the values
	$j('#startingDiv').hide();
	$j('#previewDiv').show();
	$j('#menuColor').show();
	sourceURL = $j('#docURLInput').val();
	menuTitle = $j('#menuTitle').val();
	$j.each(menu_color, function(key, value) {
		$j('.btn-' + key).css('color', '#' + this.textDefault);
		$j('.btn-' + key).css('background', '#' + this.backgroundDefault);
	});
	createPreview('white');
	resize();
}

function createPreview(menuColor) {
	$j('#previewMenuContainer').html(
		"<style>"+
		".navbar-brand { "+
		"font-size:"+titleSize+"px"+
		"} "+
		".navbar { "+
		"font-size:"+menuSize+"px;"+
		"width: 99%"+
		"} "+
		".dropdown-menu >li > a { "+
		"font-size:"+submenuSize+"px"+
		"} "+
		"</style>"+
		"<div id='previewMenu' class='navbar navbar-custom' role='navigation'>" +
		"<div class='container-fluid' style='overflow:visible'>" +
		"<div class='navbar-header' style='overflow:visible'>" +
		"<a class='navbar-brand' href='#'>Menu Title</a>" +
		"</div>" +
		"<div class='collapse navbar-collapse' id='navbar-preview'>" +
		"<ul class='nav navbar-nav'>" +
		"<li class='dropdown preview-menu-option'>" +
		"<a href='#' class='dropdown-toggle' data-toggle='dropdown'>Menu 1 <b class='caret'></b></a>" +
		"<ul class='dropdown-menu' >" +
		"<li><a href='#'' target='_blank'>Menu 1 - 1</a></li>" +
		"<li><a href='#' target='_blank'>Menu 1 - 2</a></li>" +
		"</ul>" +
		"</li>" +
		"<li class='dropdown preview-menu-option'>" +
		"<a href='#' class='dropdown-toggle' data-toggle='dropdown'>Menu 2 <b class='caret'></b></a>" +
		"<ul class='dropdown-menu' >" +
		"<li><a href='#' target='_blank'>Menu 2 - 1</a></li>" +
		"<li><a href='#' target='_blank'>Menu 2 - 2</a></li>" +
		"</ul>" +
		"</li>" +
		"<li class='dropdown preview-menu-option'>" +
		"<a href='#' class='dropdown-toggle' data-toggle='dropdown'>Link 1</a>" +
		"</li>" +
		"</ul>" +
		"</div>" +
		"</div>" +
		"</div>");

	backgroundDefault = menu_color[ menuColor ].backgroundDefault;
	$j("#backgroundDefault").spectrum('set', backgroundDefault );

	backgroundActive = menu_color[ menuColor ].backgroundActive;
	$j("#backgroundActive").spectrum('set', backgroundActive );

	textDefault = menu_color[ menuColor ].textDefault;
	$j("#textDefault").spectrum('set', textDefault );

	textActive = menu_color[ menuColor ].textActive;
	$j("#textActive").spectrum('set', textActive );

	updatePreview();
	resize();
	$j('#preview-next').attr('disabled', false);
}

function addCSSRule(sheet, selector, rules, index) {
	if("insertRule" in sheet) {
		sheet.insertRule(selector + "{" + rules + "}", index);
	}
	else if("addRule" in sheet) {
		sheet.addRule(selector, rules, index);
	}
}

function deleteCSSRule(sheet, index) {
	if("deleteRule" in sheet) {
		console.log('delete');
		sheet.deleteRule(index);
	} else if("removeRule" in sheet) {
		console.log('remove');
		sheet.removeRule(index);
	}
}

function updatePreview() {
	// If the Preview Menu Style Sheet has not been set, find it
	if (previewMenuStyleSheet == null) {
		// Get an array of the style sheets on the page
		var sheets = document.styleSheets;
		// Loop through the style sheets and find the Preview Menu
		// Style Sheet
		$j.each(sheets, function(index, curSheet) {
			if (curSheet.title == 'previewMenuStyleSheet') {
				previewMenuStyleSheet = curSheet;
			}
		});
	}

	// Remove all the rules from the style sheet
	for (var i = previewMenuStyleSheet.cssRules.length; i > 0; i--) {
		deleteCSSRule(previewMenuStyleSheet, 0);
	}

	addCSSRule(previewMenuStyleSheet,
		".navbar-custom", 
		"background:#" + backgroundDefault + ";color:#" + textDefault + ";border-radius:0;   padding: 0;");

	addCSSRule(previewMenuStyleSheet,
		".navbar-custom .navbar-brand",
		"color:#" + textDefault);

	addCSSRule(previewMenuStyleSheet,
		".navbar-custom .navbar-nav > li > a",
		"background:#" + backgroundDefault + ";color:#" + textDefault);

	addCSSRule(previewMenuStyleSheet,
		".navbar-custom .navbar-nav ul",
		"border-radius:0;   padding: 0;  "+"background:#" + backgroundDefault);

	addCSSRule(previewMenuStyleSheet,
		".navbar-custom .navbar-nav ul li a",
		"color:#" + textDefault+";display: block;");

	addCSSRule(previewMenuStyleSheet,
		".navbar-custom .navbar-brand:hover,.navbar-custom .navbar-brand:active", "background:#"
		+ backgroundActive + ";color:#"+ textActive);

	addCSSRule(previewMenuStyleSheet,
		".navbar-custom .navbar-nav > li > a:hover,.navbar-custom .navbar-nav > li > a:active",
		"background:#" + backgroundActive + ";color:#"	+ textActive);

	addCSSRule(previewMenuStyleSheet,
		".navbar-custom .navbar-nav ul li a:hover,.navbar-custom .navbar-nav ul li a:active",
		+  " background:#"	+ backgroundActive + ";color:#"	+ textActive);

	addCSSRule( previewMenuStyleSheet,
		".navbar-custom .dropdown-menu >  li > a:hover,.navbar-custom .dropdown-menu >  li > a:active",
		"background:#" + backgroundActive );

	resize();
}

function backButton() {
	$j('#startingDiv').show();
	$j('#previewDiv').hide();
	sourceURL = '';
	$j('#URLStatus').html('');
	$j('#docURLInput').val('');
	$j('#menuTitle').val('');
	toggleNextButton();
	resize();
}

function finish(){
	$j('#previewDiv').hide();
	$j('#search_layout').hide();
	$j('#URLStatus').html('');
	$j('#generatedCodeBox').text('');
	loadStatic(); 
}

function startOver(){
	$j('#startingDiv').show();
	$j('#search_layout').show();
	$j('#previewDiv').hide();
	$j('#generatedCodeDiv').hide();
	$j('#URLStatus').html('');
	$j('#docTable').html('');
	$j('#menuTitle').val('');
	resize();
}

function backButtonCodeDiv() {
	$j('#startingDiv').hide();
	$j('#generatedCodeDiv').hide();
	$j('#previewDiv').show();
	$j('#URLStatus').html('');
	resize();
}

function backStartDiv()
{
	$j('#startingDiv').show();
	$j('#search_layout').show();
	$j('#previewDiv').hide();
	$j('#generatedCodeDiv').hide();
	$j('#URLStatus').html('');
	$j('#docTable').html('');
	$j('#menuTitle').val('');
	resize();
}

function resize() {
	setTimeout(resizeMe,1);
}

function selectAll() {
	$j('#generatedCodeBox').select();
}// selectAll

// Start-up function called when library is pulled in.
// Check the document to make sure there is a 2 column table with more
// than 2 rows.
// Places the table in a hidden div.
function loadStatic() {
	// Do a jquery .load of the source table document, and only bring in
	// the data defined with the content_area_class element
	$j("#docTable")
	.load(
		sourceURL
		+ ' #jive-body-main div.jive-rendered-content',
		function(response, status, xhr) {

	// Error on page
	if (status == "error") {
		log("Menu Bar: Sorry but there was an error: Most likly reason is you did not enter a valid document");
		return false;
	}

	// Check to see if there is a table in the
	// docTable
	if ($j('#docTable ul').length < 1) {
		log('Menu Bar: No HTML returned from AJAX call, please check if you created a bullet list in the source content document.');
		return false;
	}

	// Takes the data from the table that was loaded
	// in and formats it for a twitter bootstrap
	// responsive-nav-bar.
	var tmpHTML = "<scr"+"ipt src='/api/core/v3/attachments/file/" + jquery_content_id + "/data'></scr"+"ipt>\n"
				+ "<scr"+"ipt src='/api/core/v3/attachments/file/" + library_loader_content_id + "/data'></scr"+"ipt>\n"
				+ "<scr"+"ipt>\n"
				+ "$j.load_library('bootstrap.css');\n"
				+ "$j.load_library('bootstrap-theme.css');\n"
				+ "$j.load_library('bootstrap.js');\n"
				+ "</scr"+"ipt>\n"
				+ "<style>\n"
				+ ".navbar-nav > li > a {\n"
				+ "  color:black;\n"
				+ "}\n"		
				+ ".navbar-brand {\n"
				+ "  color:black;\n"
				+ "  font-size:"+titleSize+"px"+";\n"
				+ "}\n"
				+ ".navbar{\n"
				+ "  font-size:"+menuSize+"px"+";\n"								
				+ "}\n"
				+ ".dropdown-menu >li > a{\n"
				+ "  font-size:"+submenuSize+"px"+";\n"
				+ "}\n"
				+ ".navbar-custom {\n" 
				+ "  background:#" + backgroundDefault + ";\n"
				+ "  color:#" + textDefault + ";\n"
				+ "  border-radius:5px;\n"
				+ "}\n"
				+ ".navbar-custom .navbar-brand{\n" 
				+ "  color:#" + textDefault + ";\n"
				+ "}\n"
				+ ".navbar-custom .navbar-nav > li > a {\n" 
				+ "  background:#" + backgroundDefault + ";\n"
				+ "  color:#" + textDefault + ";\n"
				+ "}\n"
				+ ".navbar-custom .navbar-nav ul{\n" 
				+ "  border-radius:0;\n"
				+ "  padding:0;\n"
				+ "  background:#" + backgroundDefault + ";\n"
				+ "}\n"
				+ ".navbar-custom .navbar-nav ul li a{\n" 
				+ "  display: block;\n"
				+ "  color:#" + textDefault + ";\n"
				+ "}\n"
				+ ".navbar-custom .navbar-brand:hover{\n" 
				+ "  background:#" + backgroundActive + ";\n"
				+ "  color:#" + textActive + ";\n"
				+ "}\n"
				+ ".navbar-custom .navbar-brand:focus{\n" 
				+ "  background:#" + backgroundActive + ";\n"
				+ "  color:#" + textActive + ";\n"
				+ "}\n"							
				+ ".navbar-custom .navbar-nav > li > a:hover{\n" 
				+ "  background:#" + backgroundActive + ";\n"
				+ "  color:#" + textActive + ";\n"
				+ "}\n"
				+ ".navbar-custom .navbar-nav > li > a:focus{\n" 
				+ "  background:#" +  backgroundDefault + ";\n"
				+ "  color:#" + textDefault + ";\n"
				+ "}\n"
				+ ".navbar-custom .navbar-nav ul li a:hover{\n" 
				+ "  background:#" + backgroundActive + ";\n"
				+ "  color:#" + textActive + ";\n"
				+ "}\n"
				+ ".navbar-custom .navbar-nav ul li a:focus{\n" 
				+ "  background:#" +  backgroundDefault + ";\n"
				+ "  color:#" + textDefault + ";\n"
				+ "}\n"
				+ ".navbar-custom .dropdown-menu >  li > a:hover{\n" 
				+ "  background:#" + backgroundActive + "; \n"
				+ "}\n"
				+ ".navbar-custom .dropdown-menu >  li > a:focus{\n" 
				+ "  background:#" + backgroundActive + ";\n"
				+ "}\n"
				+ ".dropdown:hover .dropdown-menu {\n"
				+ "  display: inline;\n"
				+ "  margin-top: 0;\n"
				+ "}\n"
				+ "</style>\n"
				+ "<div class='navbar navbar-custom' role='navigation'>\n"
				+ "  <div class='container-fluid' style='overflow:visible'>\n"
				+ "    <div class='navbar-header' style='overflow:visible'>\n"
				+ "      <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>\n"
				+ "        <span class='sr-only'>Toggle navigation</span>\n"
				+ "        <span class='icon-bar'></span>\n"
				+ "        <span class='icon-bar'></span>\n"
				+ "        <span class='icon-bar'></span>\n"
				+ "      </button>\n"
				+ "      <a class='navbar-brand' href='#'>"+ menuTitle + "</a>\n"
				+ "    </div>\n"
				+ "    <div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>\n"
				+ "      <ul class='nav navbar-nav'>\n";

	var curElem = $j('#docTable li:first');
	var a;
	while (curElem.length) {
		if (curElem[0].style.textAlign == 'right') {
		      tmpHTML	+="      </ul>\n"
						+ "      <ul class='nav navbar-nav navbar-right'>\n";
		}
		if ( $j(curElem).html().indexOf("<ul>") >= 0) {
			tmpHTML +="        <li class='dropdown'>\n"
					+ "          <a href='#' class='dropdown-toggle' data-toggle='dropdown'>" + curElem.html().substring(0, curElem.html().indexOf('<ul>')) + " <b class='caret'></b></a>\n"
					+ "          <ul class='dropdown-menu'>\n";

			$j(curElem).find('li').each(function(){
				a = $j(this).find('a');
				a.removeAttr("rel");
				a.removeAttr("class");
				a.attr('target', '_blank');
				tmpHTML += "            <li>" + $j(this).html() + "</li>\n";
			});
			tmpHTML +="          </ul>\n"
					+ "        </li>\n";
		} else {
			a = $j(curElem).find("a");
			a.removeAttr("rel");
			a.removeAttr("class");
			a.attr("target", "_blank");
			tmpHTML +="        <li>"
					+ $j(curElem).html()
					+ "</li>\n";
		}
		curElem = curElem.next();
	}

	tmpHTML +="      </ul>\n"
			+ "    </div>\n"
			+ "  </div>\n"
			+ "</div>\n"
			+ "<sc"+"ript>\n"
			+ "$j(document).ready(function() {\n"
			+ "	  $j('.navbar li').hover(\n"
			+ 	 "  function () {\n"
			+  " $j('ul', this).stop().slideDown(100);\n"
			+ 	" },\n"
			+ 	 "  function () {\n"
			+  " $j('ul', this).stop().slideUp(100);\n"
			+ "	}\n"
			+ "	);\n"
			+ "	});\n"
			+ "  $j('.dropdown').click(function(e){\n"
			+ "    window.setTimeout(resizeMe, 100);\n"
			+ "  });\n"
			+ "  $j('.navbar-toggle').click(function(e){\n"
			+ "    window.setTimeout(resizeMe, 100);\n"
			+ "  });\n"
			+ "  $j('.dropdown').hover(function(e){\n"
			+ "    window.setTimeout(resizeMe, 100);\n"
			+ "  });\n"
			+ "  $j('.navbar-toggle').hover(function(e){\n"
			+ "    window.setTimeout(resizeMe, 100);\n"
			+ "  });\n"
			+ "</sc"+"ript>\n";
	$j("#generatedCodeBox").text(tmpHTML);
	$j("#generatedCodeDiv").show();
	selectAll();
	resize();
	}); // end load
} // end loadStatic

$j(document).ready(	function() {
	// The following code checks the browser and sets trigger
	// functions to check the user input to see if the Next
	// button should be enabled
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf('MSIE ');
	var IEVersion = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)));
	if (IEVersion <= 8) {
		$j('#menuTitle').attr('onpropertychange', 'toggleNextButton()');
		$j('#docURLInput').attr('onpropertychange', 'toggleNextButton()');
	} else {
		$j('#docURLInput').bind('input', function() {
			toggleNextButton();
		});
		$j('#menuTitle').bind('input', function() {
			toggleNextButton();
		});
	}

	instanceHostname = window.parent._jive_base_absolute_url.replace(/.*?:\/\//g, "");

	$j('#titlesize_slider').change(function () {
		titleSize=$j(this).val();
		document.getElementById("titleSize").value = titleSize;
		$j('.navbar-brand').css('font-size',titleSize + 'px')
	});

	$j('#menusize_slider').change(function () {
		menuSize=$j(this).val();
		document.getElementById("menuSize").value = menuSize;
		$j('.navbar').css('font-size',menuSize + 'px')
	});

	$j('#submenusize_slider').change(function () {
		submenuSize=$j(this).val();
		document.getElementById("submenuSize").value = submenuSize;
		$j('.dropdown-menu >li > a').css('font-size',submenuSize + 'px')
	});

	$j('.navbar-nav li').hover(
		function () {
			$j('ul', this).stop().slideDown(1);
		},
		function () {
			$j('ul', this).stop().slideUp(1);
		}
		);

	$j("#textDefault").spectrum({
		color: textDefault,
	 	showInput: true,
	 	move: function(color) {
			textDefault = color.toHex();
			updatePreview();
		},
	 	hide: function(color) {
			textDefault = color.toHex();
			updatePreview();
		}
	});

	$j("#textActive").spectrum({
		color: textActive,
	 	showInput: true,
	 	move: function(color) {
			textActive = color.toHex();
			updatePreview();
		},
	 	hide: function(color) {
			textActive = color.toHex();
			updatePreview();
		}
	});

	$j("#backgroundDefault").spectrum({
		color: backgroundDefault,
	 	showInput: true,
	 	move: function(color) {
			backgroundDefault = color.toHex();
			updatePreview();
		},
	 	hide: function(color) {
			backgroundDefault = color.toHex();
			updatePreview();
		}
	});

	$j("#backgroundActive").spectrum({
		color: backgroundActive,
		showInput: true,
	 	move: function(color) {
			backgroundActive = color.toHex();
			updatePreview();
		},
	 	hide: function(color) {
			backgroundActive = color.toHex();
			updatePreview();
		}
	});
});
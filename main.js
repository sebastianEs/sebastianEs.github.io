
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);



(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}var n=e.prototype;n.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},n.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},n.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},n.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},n.on=n.addListener,n.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},n.once=n.addOnceListener,n.defineEvent=function(e){return this.getListeners(e),this},n.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},n.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},n.off=n.removeListener,n.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},n.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},n.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},n.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},n.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],o=n.listener.apply(this,t||[]),(o===this._getOnceReturnValue()||n.once===!0)&&this.removeListener(e,s[r][i].listener);return this},n.trigger=n.emitEvent,n.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},n.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define(r):e.eventie=r}(this),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===c.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,s){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?s=n:t(this.options,n),s&&this.on("always",s),this.getImages(),o&&(this.jqDeferred=new o.Deferred);var a=this;setTimeout(function(){a.check()})}function c(e){this.img=e}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},r.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&a&&s.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},o&&(o.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(o(this))});var f={};return c.prototype=new e,c.prototype.check=function(){var e=f[this.img.src];if(e)return this.useCached(e),void 0;if(f[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this.proxyImage=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.img.src},c.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},c.prototype.unbindProxyEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this)},r}var o=e.jQuery,s=e.console,a=s!==void 0,c=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);

var adz;

(function (adz, $, WIN, DOC, undefined) {

	var init,
		carousel,
		$carousel,
		$pagination,
		transition,
		scrollPage,
		$spots,
		spotTrigger,
		titleHeight,
		navAnimation,
		nextText = "Some More Stuff",
		noMoreText = "Stuffed";

	init = function () {
		$carousel = $('.carousel');
		if ($carousel.find('img').length > 1) carousel();

		if ($('html').hasClass('no-touch')) $('body#homeTpl nav a').on('click', scrollPage);

		titleHeight();

		$(WIN).resize(function () {
			titleHeight();
		});

		$spots = $('.spot');
		$('.screens').css({'visible':'hidden'});
		areImagesLoaded();

		$('.work-box').each(function (e) {
			if (e >= 2) $(this).hide();
		});

		$('.more-work').on('click', showMoreWork);

		$('.main').bind('touchstart', function(e) {
			$(".header-wrap header nav ul li ul").hide().removeAttr('style');
		});

		$('p a').each(function  () {
			var $this = $(this);
			if ($this.context.hash) $this.addClass('anchor');
		});

		$('a.anchor').on('click', function  (e) {
			var offset = 0;
			e.preventDefault();
			if ($('body#homeTpl').length == 0) offset = ($('header').height() + 50) * -1;
			$.scrollTo($(this).context.hash, 800, { offset: offset });
		});

		$('#contact-form').on('submit', sendForm);
	};

	areImagesLoaded = function () {
		imagesLoaded($spots, function() {
			if ($('body#homeTpl').length > 0) { $(WIN).scroll(spotTrigger); spotTrigger() };
		});

		imagesLoaded($('.screens'), function() {
			$('.screens').removeAttr('style');
		});
	};

	navAnimation = function () {
		var $nav = $('nav');

		if (!$nav.hasClass('triggered')) {
			$('#logo').hide();
			$nav.addClass('triggered').css({'float': 'right'}).animate({'width':'59%'}, function () {
				$('.header-wrap').addClass('full');
				$(this).removeAttr('style');
				$('#logo').fadeIn(function () {
					$(this).removeAttr('style');
				});
			});
		}
	};

	carousel = function () {

		$carousel.find('img').hide();
		$carousel.find('img:eq(0)').show();

		//build pagination
		$carousel.find('.work-info').append('<ul></ul>');
		$pagination = $carousel.find('.work-info ul');

		for (var i = 0; i < $carousel.find('img').length; i++) {
			$pagination.append('<li><a href="#">' + (i+1) + '</a></li>');
		};

		$pagination.find('li:eq(0) a').addClass('active');
		$pagination.find('li a').on('click', transition);
	};

	titleHeight = function () {
		var winHeight = $(WIN).height(),
			titleHeight,
			headerHeight = $('header').outerHeight(),
			diff;

		if (winHeight >= 768 && $(WIN).width() > 615) {
			$('.title').each(function (e) {
				$(this).removeAttr('style').css({'padding': 0});
				titleHeight = $(this).height();
				diff = winHeight - titleHeight + 40;

				if (e == 0) $(this).css({ 'height': winHeight - (diff / 2) - headerHeight + 55, 'padding-top': (diff / 2) - 25});
				else $(this).css({ 'height': winHeight - (diff / 2) - headerHeight , 'padding-top': (diff / 2) });
			});
		} else {
			$('.title').removeAttr('style');

			$('.title:eq(0)').removeAttr('style').css({'padding': 0});
			titleHeight = $('.title:eq(0)').height();
			diff = winHeight - titleHeight + 40;

			$('.title:eq(0)').css({ 'height': winHeight - (diff / 2) - headerHeight + 30, 'padding-top': (diff / 2) - 25});
		}
	};

	transition = function (e) {
		e.preventDefault();

		var index = $pagination.find('li a').index($(this)),
			oldIndex = $pagination.find('li a').index($('a.active')),
			$imageFrame = $carousel.find('.image-frame'),
			frameWidth = $imageFrame.width(),
			frameHeight = $imageFrame.height();

		if (index != oldIndex) {
			$pagination.find('a.active').removeClass('active');
			$(this).addClass('active');

			$imageFrame.css({'width': frameWidth, 'height': frameHeight});

			if (index > oldIndex) frameWidth = frameWidth * -1;

			$carousel.find('img').eq(oldIndex).css({'position': 'absolute'}).animate({'left': frameWidth});
			$carousel.find('img').eq(index).css({'left': -frameWidth, 'display': 'block', 'position': 'absolute'}).animate({'left': 0}, function () {
				$imageFrame.removeAttr('style');
				$imageFrame.find('img').removeAttr('style');
				$carousel.find('img').hide();
				$carousel.find('img:eq(' + index + ')').show();
			});
		};
	};

	scrollPage = function (e) {
		e.preventDefault();
		$.scrollTo(this.hash, 800, { onAfter: function (e) {
			WIN.location.hash = e;
		} });
	};

	spotTrigger = function () {
		var pos = $(WIN).scrollTop();
		if ( pos + 500 > $('#work').offset().top ) startAnimation($spots.eq(0));
		if ( pos + 500 > $('#about').offset().top ) startAnimation($spots.eq(1));
		if ( pos + 500 > $('#contact').offset().top ) startAnimation($spots.eq(2));
		if ( pos >= 500 && $(WIN).width() > 615) navAnimation();
		if ( pos + 200 > $('.carousel').offset().top && !$('.carousel').hasClass('triggered')) {
			$('.carousel').addClass('triggered');
			setTimeout(function() {
				if ($('html').hasClass('no-touch')) $pagination.find('li:eq(1) a').click();
			}, 3000);
		}
	};

	startAnimation = function ($this) {
		$this.removeClass('off');
		$this.find('span')[0].addEventListener('webkitTransitionEnd', stopCssAnimations, false);
		$this.find('span')[0].addEventListener('transitionend', stopCssAnimations, false);
	};

	stopCssAnimations = function () {
		$(this).parent().find('span').addClass('notransition');
	};

	showMoreWork = function (e) {
		var $wrapper = $(this).parent(),
			wrapperHeight = $wrapper.height(),
			boxHeight = $('.work-box').height(),
			margin = parseInt($('.work-box').css('margin-bottom')),
			newHeight = wrapperHeight + boxHeight + margin,
			shown = $('.work-box:visible').length,
			total = $('.work-box').length,
			$btn = $(this);

		e.preventDefault();

		if ( shown < total ) {
			$btn.css({'position': 'absolute', 'bottom': 0, 'left': 0});
			$wrapper.css({'height': wrapperHeight}).animate({'height': newHeight}, function () {
				$('.work-box').eq(shown).fadeIn();
				$('.work-box').eq(shown + 1).fadeIn();

				$wrapper.removeAttr('style');
				$btn.removeAttr('style');

				if ( shown + 2 >= total ) $btn.text(noMoreText).addClass('stop');
				else $btn.text(nextText);
			});
		}
	};

	sendForm = function (e) {
		$this =  $(this);
		var formBtn = $this.find('button')
		var data = $this.serialize();
		$.ajax({
      			type: "POST",
      			url: '/contact-ajax.html',
      			data: data    
    		}).done(function(results){
    			//AJAX url page will return 1 if message sent with now error.
    			if (results == 1) {
					formBtn.html('Message Delivered').addClass('stop');
				} else {
					formBtn.html('Error')
				}
    			
    		})
		e.preventDefault();
	}

    $(init);
    return adz;

}(adz = adz || {}, jQuery, window, document, undefined));

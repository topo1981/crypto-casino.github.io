webpackJsonp([8],{"1SJk":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("mtWM"),d=t.n(a),i=t("HNiq"),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};window.game_video_poker_sound=function(e,n){var t=this;this.id=e,this.file=e,this.is_loop=!1,this.volume=1,this.onload=n,this.play=function(){var e=(new createjs.PlayPropsConfig).set({interrupt:createjs.Sound.INTERRUPT_ANY,loop:t.is_loop?-1:0,volume:t.volume});createjs.Sound.play(t.id,e)},this.stop=function(){createjs.Sound.stop(t.id)},this.onfileload=function(e){"function"==typeof t.onload&&t.onload()};var a=new createjs.LoadQueue;return createjs.Sound.alternateExtensions=["mp3"],a.installPlugin(createjs.Sound),a.addEventListener("complete",t.onfileload),a.loadManifest([{id:t.id,src:t.file}]),this},window.game_video_poker_proto=function(e){var n={is_enabled:!0,is_full:!1,is_sound:!0,game_id:0,amount:0,win:0,balance:0,bet:0,query_draw:"",query_play:"",theme:Object(i.b)("settings.theme"),snd_click:null,snd_deal:null,snd_flip:null,snd_hold:null,snd_line_select:null,snd_lose:null,snd_unhold:null,snd_win:null,is_deal:!1,is_game:!1,hold:[],domInit:function(){if(n.container=window.document.getElementById("game_video_poker_conteiner"),!n.container)return!1;n.container_inner=n.container.getElementsByClassName("inner")[0],n.container_bg=window.document.getElementById("game_video_poker_bg"),n.label_preloader_percent=window.document.getElementById("gvp_preloader_text"),n.gvp_preloader=window.document.getElementById("gvp_preloader"),n.btn_mute=window.document.getElementById("gvp_btn_mute"),n.gvp_btn_fulls=window.document.getElementById("gvp_btn_fulls"),n.gvp_text_message=window.document.getElementById("gvp_text_message"),n.gvp_paytable=window.document.getElementById("gvp_paytable"),n.server_hash=window.document.getElementById("server-hash-input"),n.client_seed=window.document.getElementById("client-seed-input");var e=n.gvp_paytable.getElementsByClassName("gvp-paytable-bet");for(var t in e)"object"==o(e[t])&&"div"==e[t].tagName.toLowerCase()&&e[t].addEventListener("click",n.onClickBet);n.gvp_game_body=window.document.getElementById("gvp_game_body"),n.cards=[],n.cards[0]=window.document.getElementById("gvp_card_01"),n.cards[1]=window.document.getElementById("gvp_card_02"),n.cards[2]=window.document.getElementById("gvp_card_03"),n.cards[3]=window.document.getElementById("gvp_card_04"),n.cards[4]=window.document.getElementById("gvp_card_05"),n.cards_img=[],n.cards_img[0]=window.document.getElementById("gvp_card_img_01"),n.cards_img[1]=window.document.getElementById("gvp_card_img_02"),n.cards_img[2]=window.document.getElementById("gvp_card_img_03"),n.cards_img[3]=window.document.getElementById("gvp_card_img_04"),n.cards_img[4]=window.document.getElementById("gvp_card_img_05"),n.gvp_bet_btn_one=window.document.getElementById("gvp_bet_btn_one"),n.gvp_bet_btn_max=window.document.getElementById("gvp_bet_btn_max"),n.gvp_bet_btn_minus=window.document.getElementById("gvp_bet_btn_minus"),n.gvp_bet_btn_plus=window.document.getElementById("gvp_bet_btn_plus"),n.gvp_bet_text=window.document.getElementById("gvp_bet_text"),n.gvp_btn_deal=window.document.getElementById("gvp_btn_deal"),n.gvp_win_text=window.document.getElementById("gvp_win_text"),n.gvp_balance_text=window.document.getElementById("gvp_balance_text"),n.gvp_text_message.innerHTML=""},init:function(t){return n.domInit(),!!n.container&&(n.game_id=t.game_id,n.combinations=e.combinations,n.min_bet=parseFloat(t.min_bet),n.max_bet=parseFloat(t.max_bet),n.bet_change_amount=parseFloat(t.bet_change_amount),n.balance=parseFloat(t.balance),n.coins=parseFloat(t.default_bet_coins),n.amount=parseFloat(t.default_bet_amount),n.images_path="/images/games/video-poker/",n.url_draw=t.draw,n.url_play=t.play,n.lbl_load(1),n.balance_warn_text=Object(i.a)("Insufficient balance, please add more credits to play."),n.updateUIText(),n.res_ld=[n.images_path+n.theme+"/back.png",n.images_path+"cards/c3.png",n.images_path+"cards/c2.png",n.images_path+"cards/c4.png",n.images_path+"cards/c5.png",n.images_path+"cards/c6.png",n.images_path+"cards/c7.png",n.images_path+"cards/c8.png",n.images_path+"cards/c9.png",n.images_path+"cards/ct.png",n.images_path+"cards/cj.png",n.images_path+"cards/cq.png",n.images_path+"cards/ck.png",n.images_path+"cards/ca.png",n.images_path+"cards/d2.png",n.images_path+"cards/d3.png",n.images_path+"cards/d4.png",n.images_path+"cards/d5.png",n.images_path+"cards/d6.png",n.images_path+"cards/d7.png",n.images_path+"cards/d8.png",n.images_path+"cards/d9.png",n.images_path+"cards/dt.png",n.images_path+"cards/dj.png",n.images_path+"cards/dq.png",n.images_path+"cards/dk.png",n.images_path+"cards/da.png",n.images_path+"cards/h2.png",n.images_path+"cards/h3.png",n.images_path+"cards/h4.png",n.images_path+"cards/h5.png",n.images_path+"cards/h6.png",n.images_path+"cards/h7.png",n.images_path+"cards/h8.png",n.images_path+"cards/h9.png",n.images_path+"cards/ht.png",n.images_path+"cards/hj.png",n.images_path+"cards/hq.png",n.images_path+"cards/hk.png",n.images_path+"cards/ha.png",n.images_path+"cards/s2.png",n.images_path+"cards/s3.png",n.images_path+"cards/s4.png",n.images_path+"cards/s5.png",n.images_path+"cards/s6.png",n.images_path+"cards/s7.png",n.images_path+"cards/s8.png",n.images_path+"cards/s9.png",n.images_path+"cards/st.png",n.images_path+"cards/sj.png",n.images_path+"cards/sq.png",n.images_path+"cards/sk.png",n.images_path+"cards/sa.png"],n.loading_cnt=9+n.res_ld.length,n.loading_idx=1,createjs.Sound.registerPlugins([createjs.WebAudioPlugin,createjs.HTMLAudioPlugin]),window.addEventListener("resize",n.resize),n.resize(),n.load(),n)},load:function(e){if(n.snd_click)if(n.snd_none)if(n.snd_deal){if(!n.snd_flip)return n.snd_flip=[],n.snd_flip[0]=new window.game_video_poker_sound("/audio/games/video-poker/flip.wav"),n.snd_flip[1]=new window.game_video_poker_sound("/audio/games/video-poker/flip.wav"),n.snd_flip[2]=new window.game_video_poker_sound("/audio/games/video-poker/flip.wav"),n.snd_flip[3]=new window.game_video_poker_sound("/audio/games/video-poker/flip.wav"),void(n.snd_flip[4]=new window.game_video_poker_sound("/audio/games/video-poker/flip.wav",function(){n.loading_idx++,n.lbl_load_update(),n.load()}));if(n.snd_hold)if(n.snd_line_select)if(n.snd_lose)if(n.snd_unhold)if(n.snd_win){if(n.res_ld.length>0){var t=new Image;return t.onload=function(){n.loading_idx++,n.lbl_load_update(),n.load()},void(t.src=n.res_ld.pop())}n.loaded()}else n.snd_win=new window.game_video_poker_sound("/audio/games/video-poker/win.wav",function(){n.loading_idx++,n.lbl_load_update(),n.load()});else n.snd_unhold=new window.game_video_poker_sound("/audio/games/video-poker/unhold.wav",function(){n.loading_idx++,n.lbl_load_update(),n.load()});else n.snd_lose=new window.game_video_poker_sound("/audio/games/video-poker/lose.wav",function(){n.loading_idx++,n.lbl_load_update(),n.load()});else n.snd_line_select=new window.game_video_poker_sound("/audio/games/video-poker/line_select.wav",function(){n.loading_idx++,n.lbl_load_update(),n.load()});else n.snd_hold=new window.game_video_poker_sound("/audio/games/video-poker/hold.wav",function(){n.loading_idx++,n.lbl_load_update(),n.load()})}else n.snd_deal=new window.game_video_poker_sound("/audio/games/video-poker/deal.wav",function(){n.loading_idx++,n.lbl_load_update(),n.load()});else n.snd_none=new window.game_video_poker_sound("/audio/games/video-poker/none.wav",function(){n.loading_idx++,n.lbl_load_update(),n.load()});else n.snd_click=new window.game_video_poker_sound("/audio/games/video-poker/click.wav",function(){n.loading_idx++,n.lbl_load_update(),n.load()})},loaded:function(e){n.check_bet(),n.gvp_bet_btn_one.addEventListener("click",n.btn_one_click),n.gvp_bet_btn_max.addEventListener("click",n.btn_max_click),n.gvp_bet_btn_minus.addEventListener("click",n.btn_minus_click),n.gvp_bet_btn_plus.addEventListener("click",n.btn_plus_click),n.gvp_btn_deal.addEventListener("click",n.btn_deal_click),n.btn_mute.addEventListener("click",n.btn_mute_click),n.gvp_btn_fulls.addEventListener("click",n.btn_fulls_click),n.cards[0].addEventListener("click",n.btn_card_click),n.cards[1].addEventListener("click",n.btn_card_click),n.cards[2].addEventListener("click",n.btn_card_click),n.cards[3].addEventListener("click",n.btn_card_click),n.cards[4].addEventListener("click",n.btn_card_click),n.showDemo(),n.container.classList.add("loaded")},resize:function(){n.container.offsetWidth/n.container.offsetHeight<1.5?(n.container_inner.style.transform="translate(-50%,0) scale("+(n.container.offsetWidth/1620).toFixed(4)+")",n.container_inner.style.width=1620..toFixed(8)+"px"):(n.container_inner.style.transform="translate(-50%,0) scale("+(n.container.offsetHeight/1080).toFixed(4)+")",n.container_inner.style.width=(n.container.offsetWidth/(n.container.offsetHeight/1080)).toFixed(8)+"px")},lbl_load_update:function(){this.loading_idx>this.loading_cnt&&(this.loading_idx=this.loading_cnt),this.lbl_load(Math.round(100*this.loading_idx/this.loading_cnt))},lbl_load:function(e){this.label_preloader_percent.textContent=e+"%"},showDemo:function(){n.show_card(0,"back",!0),n.show_card(1,"back",!0),n.show_card(2,"back",!0),n.show_card(3,"back",!0),n.show_card(4,"back",!0)},show_card:function(e,t,a){void 0===a&&(a=!1),a?n.cards_img[e].src="back"==t?n.images_path+n.theme+"/"+t+".png":n.images_path+"cards/"+t+".png":function(e,t){n.is_sound&&n.snd_flip[e].play();var a=!1,d=function d(){a||(a=!0,n.cards[e].removeEventListener("webkitTransitionEnd",d),n.cards[e].removeEventListener("transitionend",d),n.cards[e].classList.add("no-display"),n.cards[e].classList.add("hidden"),setTimeout(function(){n.cards_img[e].src="back"==t?n.images_path+n.theme+"/"+t+".png":n.images_path+"cards/"+t+".png",n.cards[e].classList.remove("hide"),n.cards[e].classList.remove("no-display"),n.cards[e].classList.add("show")},0))};n.cards[e].addEventListener("webkitTransitionEnd",d),n.cards[e].addEventListener("transitionend",d),n.cards[e].classList.remove("hidden"),n.cards[e].classList.remove("show"),n.cards[e].classList.add("hide")}(e,t)},check_bet:function(){n.amount<n.min_bet&&(n.amount=n.min_bet),n.amount==n.min_bet?n.gvp_bet_btn_minus.disabled=!0:n.gvp_bet_btn_minus.disabled=!1,n.amount>n.max_bet&&(n.amount=n.max_bet),n.amount==n.max_bet||n.amount>n.balance?n.gvp_bet_btn_plus.disabled=!0:n.gvp_bet_btn_plus.disabled=!1,n.balance<n.coins*n.amount?(n.gvp_text_message.innerHTML=n.balance_warn_text,n.gvp_btn_deal.disabled=!0):(n.gvp_btn_deal.disabled=!1,n.gvp_text_message.innerHTML==n.balance_warn_text&&(n.gvp_text_message.innerHTML=""))},onClickBet:function(){n.is_enabled&&(n.is_sound&&n.snd_line_select.play(),n.coins=this.dataset.id,n.check_bet(),n.updateUIText())},btn_one_click:function(){n.is_sound&&n.snd_line_select.play(),n.coins++,n.coins>5&&(n.coins=1),n.check_bet(),n.updateUIText()},btn_max_click:function(){n.is_sound&&n.snd_line_select.play(),n.coins=5,n.amount=Math.min(n.max_bet,Math.max(n.min_bet,Math.round(n.balance/5*10)/10)),n.check_bet(),n.updateUIText()},btn_minus_click:function(){n.is_sound&&n.snd_click.play(),n.amount-=n.bet_change_amount,n.check_bet(),n.updateUIText()},btn_plus_click:function(){n.is_sound&&n.snd_click.play(),n.amount+=n.bet_change_amount,n.check_bet(),n.updateUIText()},btn_deal_click:function(){n.disableUI(),n.is_sound&&n.snd_deal.play(),n.gvp_text_message.innerHTML="",n.gvp_paytable.querySelectorAll(".blink").forEach(function(e){return e.classList.remove("blink")}),setTimeout(function(){if(n.is_deal){n.gvp_game_body.classList.remove("holding");var e=-200;-1==n.hold.indexOf(0)&&setTimeout(function(){return n.show_card(0,"back")},e+=200),-1==n.hold.indexOf(1)&&setTimeout(function(){return n.show_card(1,"back")},e+=200),-1==n.hold.indexOf(2)&&setTimeout(function(){return n.show_card(2,"back")},e+=200),-1==n.hold.indexOf(3)&&setTimeout(function(){return n.show_card(3,"back")},e+=200),-1==n.hold.indexOf(4)&&setTimeout(function(){return n.show_card(4,"back")},e+=200),setTimeout(function(){return d.a.post(n.url_play,{game_id:n.game_id,hold:n.hold}).then(function(e){n.balance=e.data.account.balance,n.is_deal=!1,n.game_id=e.data.next_game.id;var t=e.data.gameable.draw,a=-200;-1==n.hold.indexOf(0)&&setTimeout(function(){return n.show_card(0,t[0])},a+=200),-1==n.hold.indexOf(1)&&setTimeout(function(){return n.show_card(1,t[1])},a+=200),-1==n.hold.indexOf(2)&&setTimeout(function(){return n.show_card(2,t[2])},a+=200),-1==n.hold.indexOf(3)&&setTimeout(function(){return n.show_card(3,t[3])},a+=200),-1==n.hold.indexOf(4)&&setTimeout(function(){return n.show_card(4,t[4])},a+=200),setTimeout(function(){return n.server_hash.value=e.data.next_game.server_hash},1e3),setTimeout(function(){n.enableUI(),e.data.win?(n.gvp_paytable.querySelectorAll('[data-combination="'+e.data.gameable.combination+'"]').forEach(function(e){return e.classList.add("blink")}),n.is_sound&&n.snd_win.play(),n.win+=e.data.win,n.gvp_text_message.innerHTML=Object(i.a)("You won")+" "+e.data.win.toString()+"<br>"+n.combinations[e.data.gameable.combination]):(n.is_sound&&n.snd_lose.play(),n.gvp_text_message.innerHTML=Object(i.a)("No luck. Try again.")),n.updateUIText(),n.check_bet()},a+=200)})},400)}else n.win=0,n.balance-=n.amount*n.coins,n.updateUIText(),n.cards[0].classList.remove("hold"),n.cards[1].classList.remove("hold"),n.cards[2].classList.remove("hold"),n.cards[3].classList.remove("hold"),n.cards[4].classList.remove("hold"),n.hold=[],n.is_game&&(setTimeout(function(){return n.show_card(0,"back")},0),setTimeout(function(){return n.show_card(1,"back")},200),setTimeout(function(){return n.show_card(2,"back")},400),setTimeout(function(){return n.show_card(3,"back")},600),setTimeout(function(){return n.show_card(4,"back")},800)),setTimeout(function(){return d.a.post(n.url_draw,{game_id:n.game_id,bet_amount:n.amount,bet_coins:n.coins,seed:n.client_seed.value||parseInt(1e6*Math.random())}).then(function(e){n.gvp_paytable.querySelectorAll('[data-combination="'+e.data.gameable.combination+'"]').forEach(function(e){return e.classList.add("blink")}),n.is_game=!0,n.is_deal=!0,n.balance=e.data.account.balance,n.updateUIText();var t=e.data.gameable.draw;setTimeout(function(){return n.show_card(0,t[0])},0),setTimeout(function(){return n.show_card(1,t[1])},200),setTimeout(function(){return n.show_card(2,t[2])},400),setTimeout(function(){return n.show_card(3,t[3])},600),setTimeout(function(){return n.show_card(4,t[4])},800),setTimeout(function(){return n.gvp_game_body.classList.add("holding")},800),setTimeout(function(){return n.enableUI()},200),n.gvp_text_message.innerHTML=Object(i.a)("Click on a card to hold it")})},400)},200)},btn_mute_click:function(){n.is_sound=!n.is_sound,n.is_sound?(n.btn_mute.classList.remove("mute"),n.snd_click.play()):n.btn_mute.classList.add("mute")},btn_fulls_click:function(){document.fullscreenElement&&null!==document.fullscreenElement||document.webkitFullscreenElement&&null!==document.webkitFullscreenElement||document.mozFullScreenElement&&null!==document.mozFullScreenElement||document.msFullscreenElement&&null!==document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():n.container.requestFullscreen?n.container.requestFullscreen():n.container.mozRequestFullScreen?n.container.mozRequestFullScreen():n.container.webkitRequestFullScreen?n.container.webkitRequestFullScreen():n.container.msRequestFullscreen&&n.container.msRequestFullscreen(),setTimeout(n.resize,100)},btn_card_click:function(){n.is_deal?-1==n.hold.indexOf(parseInt(this.dataset.id))?(n.is_sound&&n.snd_hold.play(),n.hold.push(parseInt(this.dataset.id)),this.classList.add("hold")):(n.is_sound&&n.snd_unhold.play(),n.hold.splice(n.hold.indexOf(parseInt(this.dataset.id)),1),this.classList.remove("hold")):n.is_sound&&n.snd_none.play()},disableUI:function(){n.is_enabled=!1,n.gvp_btn_deal.disabled=!0,n.gvp_bet_btn_max.disabled=!0,n.gvp_bet_btn_one.disabled=!0,n.gvp_bet_btn_plus.disabled=!0,n.gvp_bet_btn_minus.disabled=!0},enableUI:function(){n.is_enabled=!0,n.gvp_btn_deal.disabled=!1,n.gvp_bet_btn_max.disabled=!1,n.gvp_bet_btn_one.disabled=!1,n.gvp_bet_btn_plus.disabled=!1,n.gvp_bet_btn_minus.disabled=!1},updateUIText:function(){n.gvp_paytable.dataset.amount=n.coins,n.gvp_bet_text.innerText=parseFloat(n.amount.toFixed(2)).toString(),n.gvp_win_text.innerText=parseFloat(n.win.toFixed(2)).toString(),n.gvp_balance_text.innerText=parseFloat(n.balance.toFixed(2)).toString()}};return n.init(e),n}},3:function(e,n,t){e.exports=t("1SJk")},HNiq:function(e,n,t){"use strict";n.a=function(e){return void 0!==window.i18n?o(window.i18n,e,e):e},n.b=function(e){return void 0!==window.cfg?o(window.cfg,e):e},n.c=function(e){e.select();try{document.execCommand("copy")}catch(e){}document.getSelection().removeAllRanges(),document.activeElement.blur()},n.f=function(e,n,t,a){new(d.a.extend(e))({propsData:a,parent:n}).$mount(t)},n.d=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},n.g=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=Math.pow(10,n);return Math.round(e*t)/t},n.e=function(e,n,t){e=""+e;for(;e.length<t;)e=n+e;return e},n.h=function(e){document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen()};var a=t("I3G/"),d=t.n(a),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return n.split(".").reduce(function(e,n){return e&&void 0!=i(e[n])&&null!=e[n]?e[n]:t},e)}}},[3]);
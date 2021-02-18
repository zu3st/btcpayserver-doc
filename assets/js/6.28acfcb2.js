(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{323:function(e,t,r){e.exports=r.p+"assets/img/SetupWallet.eb581fe8.png"},324:function(e,t,r){e.exports=r.p+"assets/img/SetupWalletXpub.14517c10.png"},436:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet1.584fbbe1.png"},437:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet2.b93dd22b.png"},438:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet3.9838bf5a.png"},439:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet4.dec51a41.png"},440:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet6.be59dd9f.png"},441:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet7.0e77ac1d.png"},442:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet9.474b2e7a.png"},443:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet10.6fd1db5f.png"},444:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet11.092cfb6d.png"},445:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet11a.05edcf6d.png"},446:function(e,t,r){e.exports=r.p+"assets/img/ElectrumWallet12.139c7796.png"},649:function(e,t,r){"use strict";r.r(t);var a=r(25),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"connecting-electrum-wallet-to-btcpay-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-electrum-wallet-to-btcpay-server"}},[e._v("#")]),e._v(" Connecting Electrum Wallet to BTCPay Server")]),e._v(" "),a("p",[e._v("This documents explains "),a("strong",[e._v("how to connect a desktop "),a("a",{attrs:{href:"https://electrum.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Electrum Wallet"),a("OutboundLink")],1),e._v(" to a BTCPay Server")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Word of caution")]),e._v(" Electrum wallet relies on Electrum servers that are controlled by third-parties. Information, like public addresses, balances and the transacted amount can "),a("em",[e._v("potentially")]),e._v(" be leaked.")]),e._v(" "),a("p",[e._v("To protect yourself against such leaks, set up "),a("RouterLink",{attrs:{to:"/ElectrumX/"}},[e._v("ElectrumX Server")]),e._v(" or "),a("a",{attrs:{href:"https://github.com/chris-belcher/electrum-personal-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("Electrum Personal Server - EPS"),a("OutboundLink")],1),e._v(".")],1),e._v(" "),a("p",[e._v("You can read about the differences between EPS and ElectrumX "),a("a",{attrs:{href:"https://www.reddit.com/r/Electrum/comments/7xb0lz/whats_the_difference_between_electrumx_server_and/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("ol",[a("li",[e._v("Create a Store in BTCPay Server")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://electrum.org/#download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download"),a("OutboundLink")],1),e._v(" and install Electrum Wallet")])]),e._v(" "),a("h2",{attrs:{id:"electrum-wallet-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#electrum-wallet-setup"}},[e._v("#")]),e._v(" Electrum Wallet Setup")]),e._v(" "),a("p",[e._v("After the installation, open "),a("strong",[e._v("Electrum Wallet")]),e._v(" by clicking on the icon on your desktop.")]),e._v(" "),a("h3",{attrs:{id:"quick-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-setup"}},[e._v("#")]),e._v(" Quick Setup")]),e._v(" "),a("ol",[a("li",[e._v("Create a new Electrum Wallet")]),e._v(" "),a("li",[e._v("In Electrum, Wallet > Wallet Information - copy the "),a("strong",[e._v("Master Public Key")]),e._v(".")]),e._v(" "),a("li",[e._v("In BTCPay Server, Store > Settings > Setup > Wallet > In the Derivation Scheme Box - Paste the Extended Public Key")]),e._v(" "),a("li",[e._v("Go to Receive tab in Electrum.")]),e._v(" "),a("li",[e._v("Compare the addresses in Electrum and BTCPay Server, they should match.")]),e._v(" "),a("li",[e._v("Confirm the address match in BTCPay.")])]),e._v(" "),a("h2",{attrs:{id:"step-by-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-by-step"}},[e._v("#")]),e._v(" Step by Step")]),e._v(" "),a("p",[e._v("The following setup guides you through setting up an entirely new Bech32(SegWit) Wallet in Electrum. If you already have a wallet skip to the Extended Public Key copying.")]),e._v(" "),a("p",[e._v("Firstly, give your wallet a name, for example, "),a("code",[e._v("BTCPay Server Wallet")]),e._v(" and click "),a("code",[e._v("Next")]),e._v(".")]),e._v(" "),a("figure",[a("img",{attrs:{src:r(436),alt:"ElectrumWallet",title:"Create Electrum Wallet"}})]),e._v(" "),a("p",[e._v("Choose "),a("code",[e._v("Standard wallet")]),e._v(" and proceed by clicking the "),a("code",[e._v("Next")]),e._v("button.")]),e._v(" "),a("figure",[a("img",{attrs:{src:r(437),alt:"ElectrumWallet",title:"Choose Standard Wallet in Electrum"}})]),e._v(" "),a("p",[e._v("Since we're creating a brand-new wallet,choose  "),a("code",[e._v("Create a new seed")]),e._v(" and "),a("code",[e._v("Next")])]),e._v(" "),a("figure",[a("img",{attrs:{src:r(438),alt:"ElectrumWallet",title:"Generate a new seed in Electrum"}})]),e._v(" "),a("p",[e._v("From the multiple choice menu, select "),a("code",[e._v("SegWit")]),e._v(" and "),a("code",[e._v("Next")])]),e._v(" "),a("figure",[a("img",{attrs:{src:r(439),alt:"ElectrumWallet",title:"Choose Segwit seed type in Electrum"}})]),e._v(" "),a("p",[a("strong",[e._v("IMPORTANT NOTE:")]),e._v(" If you're a merchant, instead of SegWit (Bech32), it's recommended to use SegWit wrapped (P2SH) format. "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=-1DBJWwA2Cw",target:"_blank",rel:"noopener noreferrer"}},[e._v("This guide"),a("OutboundLink")],1),e._v(" explains how to create P2SH wallet in Electrum that's more suited for merchants, due to compatability with legacy wallets customers use.")]),e._v(" "),a("p",[a("strong",[e._v("IMPORTANT NOTE 2:")]),e._v(" Write down your recovery words in the order you see them on the screen. Write them down a piece of paper and store it somewhere secure. Take your time and triple check each word. Do not store your seed in a digital format (photograph, text document). Whoever has the access to your seed can access your funds. Confirm that the seed has been properly backed up by re-entering it in the same order. Once the seed is validated, proceed to the next step.")]),e._v(" "),a("figure",[a("img",{attrs:{src:r(440),alt:"ElectrumWallet",title:"Backup Electrum seed"}})]),e._v(" "),a("p",[e._v("It's highly recommended that you encrypt your wallet. Select a password that you can easily remember and mark make sure "),a("code",[e._v("Encrypt Wallet File")]),e._v(" is marked. Proceed by clicking "),a("code",[e._v("Next")]),e._v(".")]),e._v(" "),a("figure",[a("img",{attrs:{src:r(441),alt:"ElectrumWallet",title:"Encrypt Electrum wallet"}})]),e._v(" "),a("p",[e._v("When the wallet loads (it may take few moments), in the top menu, click on the "),a("code",[e._v("Wallet")]),e._v(" and then"),a("code",[e._v("Information")]),e._v(" .")]),e._v(" "),a("figure",[a("img",{attrs:{src:r(442),alt:"ElectrumWallet",title:"Electrum Wallet Information"}})]),e._v(" "),a("p",[e._v("Select and "),a("strong",[e._v("copy")]),e._v(" the "),a("code",[e._v("Master Public Key")]),e._v(". This is the "),a("strong",[e._v("public")]),e._v(" key from which BTCPay will derive addresses.")]),e._v(" "),a("figure",[a("img",{attrs:{src:r(443),alt:"ElectrumWallet",title:"Copy Electrum master public key"}})]),e._v(" "),a("p",[e._v("Return to your BTCPay Server. Click on the "),a("code",[e._v("Stores")]),e._v(" in the header menu and select Settings. Find Wallet and click on the "),a("code",[e._v("Setup")]),e._v(" button.")]),e._v(" "),a("figure",[a("img",{attrs:{src:r(323),alt:"ElectrumWallet",title:"Set up your wallet"}})]),e._v(" "),a("p",[e._v("Paste the "),a("code",[e._v("Master Public Key")]),e._v(" into derivation scheme field as it is, without adding anything else. Make sure that "),a("code",[e._v("Enabled")]),e._v(" checkbox is ticked and click "),a("code",[e._v("Continue")]),e._v(".")]),e._v(" "),a("figure",[a("img",{attrs:{src:r(324),alt:"ElectrumWallet",title:"Paste the xpub key and enable the wallet"}})]),e._v(" "),a("p",[e._v("Return to the "),a("strong",[e._v("Electrum Wallet")]),e._v(". Go to "),a("code",[e._v("Receive tab")]),e._v(" which shows your wallet receiving address.")]),e._v(" "),a("p",[a("strong",[e._v("Compare the address you see in Electrum Wallet to Addresses shown in BTCPay Server")]),e._v(". If there's a match, "),a("code",[e._v("continue")]),e._v(". If there is no match, copy the address from Electrum and paste it into "),a("code",[e._v("Hint Address Form")]),e._v(". If you still can't get the matching, double-check that you're actually pasting "),a("code",[e._v("Master Public Key")]),e._v(".")]),e._v(" "),a("figure",[a("img",{attrs:{src:r(444),alt:"ElectrumWallet",title:"Compare Electrum Wallet and BTCPay Server addresses"}})]),e._v(" "),a("h3",{attrs:{id:"configuring-the-gap-limit-in-electrum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-gap-limit-in-electrum"}},[e._v("#")]),e._v(" Configuring the Gap Limit in Electrum")]),e._v(" "),a("p",[e._v("In the top menu, click on the "),a("code",[e._v("View")]),e._v(" and then"),a("code",[e._v("Show Console")]),e._v(" .")]),e._v(" "),a("figure",[a("img",{attrs:{src:r(445),alt:"ElectrumWallet",title:"Show Electrum Wallet console"}})]),e._v(" "),a("p",[e._v("Enter following commands in Electrum console and press "),a("code",[e._v("enter")]),e._v("on your keyboard.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" wallet.change_gap_limit(100)\n")])])]),a("p",[e._v("If you are running a version older than Electrum 4, also enter the following command and press 'enter'")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wallet.storage.write()\n")])])]),a("figure",[a("img",{attrs:{src:r(446),alt:"ElectrumWallet",title:"Electrum Wallet console"}})]),e._v(" "),a("p",[e._v("Restart your Electrum and verify that the newly set gap limit is correct by entering in the console:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wallet.gap_limit\n")])])]),a("p",[e._v("There's no good answer to how much you should set the gap limit to. Most merchants set 100-200. If you're a big merchants with high transaction volume, you can try with even higher gap limit.")]),e._v(" "),a("p",[e._v("For more details about the "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-Wallet/#missing-payments-in-my-software-or-hardware-wallet"}},[e._v("Gap Limit, check the FAQ")]),e._v(".")],1),e._v(" "),a("p",[a("strong",[e._v("Electrum and BTCPay Server are now connected")]),e._v(". Any payments received to your BTCPay will be visible in Electrum, where you can further spend them.")])])}),[],!1,null,null,null);t.default=l.exports}}]);
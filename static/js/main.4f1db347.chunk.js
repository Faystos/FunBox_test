(this.webpackJsonpfun_box_test=this.webpackJsonpfun_box_test||[]).push([[0],[,,,,,,,function(t,e,a){t.exports=a(15)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),o=a(2),r=a.n(o),s=(a(12),a(3)),i=a(4),l=a(6),p=a(5),u=(a(13),a(14),function(t){var e=t.taste,a=t.proposal,c=t.weight;return n.a.createElement("div",{className:"block_product-product"},n.a.createElement("div",{className:"product-block_title"},n.a.createElement("p",{className:"block_title-title"},"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e"),n.a.createElement("p",{className:"block_title-title_cancel"},"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?")),n.a.createElement("h2",{className:"product-brend"},"\u041d\u044f\u043c\u0443\u0448\u043a\u0430"),n.a.createElement("p",{className:"product-taste"},e),n.a.createElement("p",{className:"product-bonus"},a),n.a.createElement("div",{className:"product-weight"},c," ",n.a.createElement("span",{className:"product-weight_unit"},"\u043a\u0433")))}),d=function(t){var e=t.description,a=t.taste,c=t.clickProduct,o=t.id;return n.a.createElement("div",{className:"block_product-block_post"},n.a.createElement("span",{className:"block_post-post_unactive"},"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d, ",n.a.createElement("a",{href:"/",className:"block_product-post_link",onClick:function(t){t.preventDefault(),c(o)}},"\u043a\u0443\u043f\u0438.")),n.a.createElement("span",{className:"block_post-post_active"},e),n.a.createElement("span",{className:"block_post-post_disabled"},"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, ",a," \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."))},m=function(t){var e=t.product,a=t.clickProduct,c=e.map((function(t){var e=t.taste,c=t.proposal,o=t.description,r=t.id,s=t.active,i=t.disabled,l=t.weight,p=s?"block_product--active":"block_product--unactive";i&&(p="block_product--disabled");return n.a.createElement("div",{className:"block_product ".concat(p),key:r,onClick:function(t){var e=t.target,c=t.target.parentNode;(e.classList.contains("block_product-product")||c.classList.contains("block_product-product"))&&e.addEventListener("mouseleave",(function t(e){a(r),e.target.removeEventListener("mouseleave",t)}))}},n.a.createElement(u,{taste:e,proposal:c,weight:l}),n.a.createElement(d,{description:o,taste:e,clickProduct:a,id:r}))}));return n.a.createElement("div",{className:"main-block_product"},c)},v=function(t){Object(l.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).state={productsData:[{id:1,taste:"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",proposal:"10 \u043f\u043e\u0440\u0446\u0438\u0439 \u043c\u044b\u0448\u044c\xa0\u0432\xa0\u043f\u043e\u0434\u0430\u0440\u043e\u043a",description:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.",weight:"0,5",active:!1,disabled:!1},{id:2,taste:"\u0441 \u0440\u044b\u0431\u043e\u0439",proposal:"40 \u043f\u043e\u0440\u0446\u0438\u0439 2\xa0\u043c\u044b\u0448\u0438\xa0\u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",description:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430.",weight:"2",active:!0,disabled:!1},{id:3,taste:"\u0441 \u043a\u0443\u0440\u043e\u0439",proposal:"100 \u043f\u043e\u0440\u0446\u0438\u0439 5\xa0\u043c\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d",description:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435.",weight:"5",active:!1,disabled:!0}]},t.clickProduct=function(e){t.setState((function(t){return{productsData:t.productsData.map((function(t){return t.id===e&&(t.active=!t.active),t}))}}))},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this.state.productsData;return n.a.createElement("div",{className:"main"},n.a.createElement("h1",{className:"main-title"},"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"),n.a.createElement(m,{product:t,clickProduct:this.clickProduct}))}}]),a}(c.Component);r.a.render(n.a.createElement(v,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.4f1db347.chunk.js.map
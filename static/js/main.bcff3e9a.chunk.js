(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{17:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(8),o=a.n(i),s=(a(7),a(11)),r=a(4),l=a(2),u=a(9),d=a(10),p=new(function(){function e(t){Object(u.a)(this,e),this._baseUrl=t.baseUrl,this._groupID=t.groupID,this._headers=t.headers}return Object(d.a)(e,[{key:"getInitialCards",value:function(){var e=fetch("".concat(this._baseUrl,"/").concat(this._groupID,"/cards"),{headers:{authorization:this._headers.authorization}});return this._handleResult(e)}},{key:"getProfileData",value:function(){var e=fetch("".concat(this._baseUrl,"/").concat(this._groupID,"/users/me"),{headers:{authorization:this._headers.authorization}});return this._handleResult(e)}},{key:"setAvatar",value:function(e){var t=fetch("".concat(this._baseUrl,"/").concat(this._groupID,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})});return this._handleResult(t)}},{key:"setProfileData",value:function(e,t){var a=fetch("".concat(this._baseUrl,"/").concat(this._groupID,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})});return this._handleResult(a)}},{key:"createCard",value:function(e,t){var a=fetch("".concat(this._baseUrl,"/").concat(this._groupID,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})});return this._handleResult(a)}},{key:"removeCard",value:function(e){var t=fetch("".concat(this._baseUrl,"/").concat(this._groupID,"/cards/").concat(e),{method:"DELETE",headers:this._headers});return this._handleResult(t)}},{key:"likeCard",value:function(e){var t=fetch("".concat(this._baseUrl,"/").concat(this._groupID,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers});return this._handleResult(t)}},{key:"unlikeCard",value:function(e){var t=fetch("".concat(this._baseUrl,"/").concat(this._groupID,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers});return this._handleResult(t)}},{key:"_handleResult",value:function(e){return e.then((function(e){return e.ok?e.json():Promise.reject("\u0421\u0442\u0430\u0442\u0443\u0442 \u043e\u0448\u0438\u0431\u043a\u0438: ".concat(e.status))}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1",groupID:"cohort-26",headers:{authorization:"05288f01-26d1-4add-96c0-b100674c662e","Content-Type":"application/json"}}),_=a.p+"static/media/logo.9acae848.svg",b=a(0);var h=function(){return Object(b.jsx)("header",{className:"header",children:Object(b.jsx)("a",{className:"logo",href:"/",children:Object(b.jsx)("img",{className:"logo__image",src:_,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 Mesto"})})})},j=c.a.createContext(),m=a.p+"static/media/button-delete.e3c42771.svg";var f=function(e){var t=e.card,a=e.onClick,n=e.onLikeClick,i=e.onDeleteClick,o=c.a.useContext(j),s=t.owner._id===o._id,r=t.likes.some((function(e){return e._id===o._id})),l="".concat(s?"card__button-delete":"card__button-delete card__button-delete_disabled"),u="".concat(r?"card__button-like-img card__button-like-img_active":"card__button-like-img");return t.deleteClicked&&(l+=" card__button-delete_wait"),t.likeClicked&&(u+=" card__button-like-img_wait"),Object(b.jsxs)("li",{className:"photo-gallery__card card list__item",children:[Object(b.jsx)("button",{className:l,type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){return i(t)},children:Object(b.jsx)("img",{className:"card__button-delete-img",src:m,alt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})}),Object(b.jsx)("img",{className:"card__photo",src:t.link,alt:t.name,onClick:function(){return a(t)}}),Object(b.jsxs)("div",{className:"card__title-and-like",children:[Object(b.jsx)("h2",{className:"card__title",children:t.name}),Object(b.jsxs)("button",{className:"card__button-like",type:"button","aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",onClick:function(){return n(t)},children:[Object(b.jsx)("div",{className:u}),Object(b.jsx)("p",{className:"card__button-like-count",children:t.likes.length})]})]})]})},v=a.p+"static/media/loader.3e10a767.gif",O=a.p+"static/media/button-edit.6c7bf054.svg",x=a.p+"static/media/button-add.bed8c136.svg";var g=function(e){var t,a=e.cards,n=e.currentUser,c=e.onEditProfile,i=e.onEditAvatar,o=e.onAddCard,s=e.onCardClick,r=e.onCardLike,l=e.onCardDelete;return Object(b.jsxs)("main",{className:"content",children:[Object(b.jsxs)("section",{className:"profile",children:[Object(b.jsx)("button",{className:"profile__button-edit-avatar profile__button-edit-avatar-overlay",onClick:i,children:Object(b.jsx)("img",{className:"profile__avatar",src:null!==(t=n.avatar)&&void 0!==t?t:v,alt:"\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})}),Object(b.jsxs)("div",{className:"profile__info",children:[Object(b.jsxs)("div",{className:"profile__info-full-name-and-button-edit",children:[Object(b.jsx)("h1",{id:"fullName",className:"profile__info-full-name",children:n.name}),Object(b.jsx)("button",{className:"profile__button-edit",type:"button","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",onClick:c,children:Object(b.jsx)("img",{className:"profile__button-edit-img",src:O,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})})]}),Object(b.jsx)("p",{id:"profession",className:"profile__info-profession",children:n.about})]}),Object(b.jsx)("button",{className:"profile__button-add-card",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e",onClick:o,children:Object(b.jsx)("img",{className:"profile__button-add-card-img",src:x,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u0435\u0441\u0442\u0430"})})]}),Object(b.jsx)("section",{className:"photo-gallery",children:Object(b.jsx)("ul",{className:"photo-gallery__cards list",children:a.map((function(e){return Object(b.jsx)(f,{card:e,onClick:s,onLikeClick:r,onDeleteClick:l},e._id)}))})})]})};var C=function(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})},k=a.p+"static/media/button-\u0441lose.9f1fbe67.svg";var N=function(e){var t=e.title,a=e.name,n=e.buttonText,i=e.children,o=e.onSubmit,s=e.isOpen,r=e.onClose,u=c.a.useState(!1),d=Object(l.a)(u,2),p=d[0],_=d[1];return c.a.useEffect((function(){_(!1)}),[s]),Object(b.jsx)("div",{className:"popup popup_type_".concat(a," ").concat(s?"popup_opened":""," "),onClick:r,children:Object(b.jsxs)("div",{className:"popup__container",onClick:function(e){return e.stopPropagation()},children:[Object(b.jsx)("h2",{className:"popup__title",children:t}),Object(b.jsxs)("form",{className:"popup__form popup__form_type_".concat(a," "),name:"form - ".concat(a),onSubmit:function(e){e.preventDefault(),o(),_(!0)},children:[i,Object(b.jsxs)("button",{className:"popup__button-save",type:"submit","aria-label":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[n,p?"...":""]})]}),Object(b.jsx)("button",{className:"popup__button-close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:r,children:Object(b.jsx)("img",{className:"popup__button-close-img",src:k,alt:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e"})})]})})};var y=function(e){var t=e.onUpdateUser,a=e.isOpen,n=e.onClose,i=c.a.useContext(j),o=c.a.useState(""),s=Object(l.a)(o,2),r=s[0],u=s[1],d=c.a.useState(""),p=Object(l.a)(d,2),_=p[0],h=p[1];return c.a.useEffect((function(){u(i.name),h(i.about)}),[i]),Object(b.jsx)(N,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(){t({name:r,about:_})},isOpen:a,onClose:n,children:Object(b.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(b.jsx)("input",{id:"name-input",className:"popup__input popup__input_text_full-name",value:null!==r&&void 0!==r?r:"",onChange:function(e){u(e.target.value)},placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",type:"text",name:"fullName",required:!0,minLength:2,maxLength:40}),Object(b.jsx)("span",{className:"popup__error name-input-error"}),Object(b.jsx)("input",{id:"about-you-input",className:"popup__input popup__input_text_profession",value:null!==_&&void 0!==_?_:"",onChange:function(e){h(e.target.value)},placeholder:"\u0412\u0430\u0448\u0430 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",type:"text",name:"profession",required:!0,minLength:2,maxLength:200}),Object(b.jsx)("span",{className:"popup__error name-input-error"})]})})};var D=function(e){var t=e.onUpdateAvatar,a=e.isOpen,n=e.onClose,i=c.a.useRef();return c.a.useEffect((function(){i.current.value=""}),[a]),Object(b.jsx)(N,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(){t(i.current.value)},isOpen:a,onClose:n,children:Object(b.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(b.jsx)("input",{id:"url-avatar-input",className:"popup__input",ref:i,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",type:"url",name:"avatar",required:!0}),Object(b.jsx)("span",{className:"popup__error url-avatar-input-error"})]})})};var S=function(e){var t=e.onAddPlace,a=e.isOpen,n=e.onClose,i=c.a.useState(""),o=Object(l.a)(i,2),s=o[0],r=o[1],u=c.a.useState(""),d=Object(l.a)(u,2),p=d[0],_=d[1];return Object(b.jsx)(N,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(){t({title:s,pic:p})},isOpen:a,onClose:n,children:Object(b.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(b.jsx)("input",{id:"title-pic-input",className:"popup__input",value:null!==s&&void 0!==s?s:"",onChange:function(e){r(e.target.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0441\u0442\u0430",type:"text",name:"title",required:!0,minLength:2,maxLength:30}),Object(b.jsx)("span",{className:"popup__error title-pic-input-error"}),Object(b.jsx)("input",{id:"url-pic-input",className:"popup__input popup__input_url_pic",value:null!==p&&void 0!==p?p:"",onChange:function(e){_(e.target.value)},placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"url",name:"pic",required:!0}),Object(b.jsx)("span",{className:"popup__error url-pic-input-error"})]})})};var U=function(e){var t=e.card,a=e.onClose;return Object(b.jsx)("div",{className:"popup popup_type_pic ".concat(t?"popup_opened":""),onClick:a,children:Object(b.jsxs)("div",{className:"popup__container-pic",onClick:function(e){return e.stopPropagation()},children:[Object(b.jsx)("img",{className:"popup__pic",alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",src:null===t||void 0===t?void 0:t.link}),Object(b.jsx)("h2",{className:"popup__pic-title",children:"".concat(null===t||void 0===t?void 0:t.name," || ").concat(null===t||void 0===t?void 0:t.owner.name," (").concat(null===t||void 0===t?void 0:t.owner.about,")")}),Object(b.jsx)("button",{className:"popup__button-close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",children:Object(b.jsx)("img",{className:"popup__button-close-img",src:k,alt:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:a})})]})})};var P=function(){var e=c.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],i=c.a.useState(!1),o=Object(l.a)(i,2),u=o[0],d=o[1],_=c.a.useState(!1),m=Object(l.a)(_,2),f=m[0],v=m[1],O=c.a.useState(),x=Object(l.a)(O,2),k=x[0],N=x[1],P=c.a.useState({}),E=Object(l.a)(P,2),I=E[0],L=E[1],T=c.a.useState([]),A=Object(l.a)(T,2),R=A[0],w=A[1];function q(){n(!1),d(!1),v(!1),N(void 0)}return c.a.useEffect((function(){Promise.all([p.getProfileData(),p.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];L(a),w(n)})).catch((function(e){console.log(e)}))}),[]),Object(b.jsx)(j.Provider,{value:I,children:Object(b.jsxs)("div",{className:"page",children:[Object(b.jsxs)("div",{className:"page__container",children:[Object(b.jsx)(h,{}),Object(b.jsx)(g,{cards:R,currentUser:I,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===I._id}));w((function(t){return t.map((function(t){return t._id===e._id?Object(r.a)(Object(r.a)({},t),{},{likeClicked:!0}):t}))})),(t?p.unlikeCard(e._id):p.likeCard(e._id)).then((function(e){w((function(t){return t.map((function(t){return t._id===e._id?e:t}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){w((function(t){return t.map((function(t){return t._id===e._id?Object(r.a)(Object(r.a)({},t),{},{deleteClicked:!0}):t}))})),p.removeCard(e._id).then((function(){var t=R.filter((function(t){return t._id!==e._id}));w(t)})).catch((function(e){console.log(e)}))},onEditAvatar:function(){n(!0)},onEditProfile:function(){d(!0)},onAddCard:function(){v(!0)},onCardClick:function(e){N(e)}}),Object(b.jsx)(C,{})]}),Object(b.jsx)(y,{onUpdateUser:function(e){p.setProfileData(e.name,e.about).then((function(e){L(e),q()})).catch((function(e){console.log(e)}))},isOpen:u,onClose:q}),Object(b.jsx)(D,{onUpdateAvatar:function(e){p.setAvatar(e).then((function(e){L(e),q()})).catch((function(e){console.log(e)}))},isOpen:a,onClose:q}),Object(b.jsx)(S,{onAddPlace:function(e){p.createCard(e.title,e.pic).then((function(e){w([e].concat(Object(s.a)(R))),q()})).catch((function(e){console.log(e)}))},isOpen:f,onClose:q}),Object(b.jsx)(U,{card:k,onClose:q})]})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),i(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root")),E()},7:function(e,t,a){}},[[17,1,2]]]);
//# sourceMappingURL=main.bcff3e9a.chunk.js.map
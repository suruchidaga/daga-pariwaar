"use strict";(self.webpackChunkfamilyDirectory=self.webpackChunkfamilyDirectory||[]).push([[711],{5811:function(n,e,l){l.r(e),l.d(e,{default:function(){return D}});var o=l(9439),r=l(573),i=l(7935),t=(l(7902),l(8332),l(1197)),a=l(3220),c=l(2791),R=(l(5914),l(1228)),E=l(184);function u(n,e){return""!=n.RESADD&&(n.RESADD=A(n.RESADD)),""==n.RESADD&&""!=e.RESADD&&(n.RESADD=A(e.RESADD)),""==n.RESPHNO&&""!=e.RESPHNO&&(n.RESPHNO=e.RESPHNO),"H"!=e.Relation&&"W"!=e.Relation||(n.SPOUSE=e.NAME),n}function s(n,e){return console.log("inside fillRemainingDetails: "+e.NAME),console.log(n),"H"!=e.Relation&&"W"!=e.Relation||(e.DOA=n.DOA,e.SPOUSE=n.NAME),"S"!=e.Relation&&"D"!=e.Relation||(console.log(n.children.length),e.FATHER=null==n.children||""!=n.Relation&&"S"!=n.Relation?n.children.length>0&&"H"==n.children[0].Relation?n.children[0].NAME:"":n.NAME,e.MOTHER=null==n.children||""!=n.Relation&&"D"!=n.Relation?n.children.length>0&&"W"==n.children[0].Relation?n.children[0].NAME:"":n.NAME),"W"!=e.Relation&&"H"!=e.Relation||(e.FATHER=n.FATHERINLAW,e.MOTHER=n.MOTHERINLAW,e.FATHERINLAW=n.FATHER,e.MOTHERINLAW=n.MOTHER),""==e.RESADD&&(e.RESADD=A(n.RESADD)),""==e.RESPHNO&&(e.RESPHNO=n.RESPHNO),console.log(e),e}function A(n){console.log(n);var e=n.replace(/(\r\n|\r|\n)/g,"<br/>");return console.log(e),e}function D(){var n,e,l=(0,i.jw)("selectedMember"),A=("".concat(null===l||void 0===l||null===(n=l.name)||void 0===n?void 0:n.first," ").concat(null===l||void 0===l||null===(e=l.name)||void 0===e?void 0:e.last),[]);A.push(function(n){var e=[],l={};for(var o in n.forEach((function(n){var e=n.No;l.hasOwnProperty(e)||(l[e]=n,l[e].children=[])})),n.forEach((function(n){var e=n.Parent;if(!l.hasOwnProperty(e)){var o=n;o.key=0,o.Name=n.NAME,o.Parent=n.Parent,l[e]=o,l[e].children=[]}})),l)if(l.hasOwnProperty(o)){var r=l[o];if(r.key=r.No,r.Parent){var i=r.Parent,t=r,a=l[i];t=s(a=u(a,t),t),console.log("after fillRemainingDetails: "),console.log(t),a.children.push(t)}else e.push(r)}return e[0]}(R));var D=(0,c.useState)((function(){return A})),h=(0,o.Z)(D,2),f=h[0],S=(h[1],(0,c.useState)((function(){return R}))),d=(0,o.Z)(S,2),N=d[0];d[1];return console.log(f),(0,E.jsxs)(a.Z,{children:[(0,E.jsx)(r.Z,{headerTitle:"Celebrations Time"}),(0,E.jsx)(t.Z,{familyData:N})]})}}}]);
//# sourceMappingURL=711.31bb3ef2.chunk.js.map
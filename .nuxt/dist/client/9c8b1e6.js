(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{478:function(e,o,r){"use strict";r.r(o);var t=r(527),n=r(470),l=r(462),c=r(521),d=r(523),m=r(522),f=r(460),v=r(465),w=r(30),x=(r(113),{data:function(){return{usuario:{},confirmarPassword:""}},methods:{registrarUsuario:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function o(){var r,t,n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(e.usuario.password!==e.confirmarPassword){o.next=8;break}for(t in r=new FormData,e.usuario)"imagen"===t?e.usuario.imagen&&r.append(t,e.usuario.imagen):r.append(t,e.usuario[t]);return o.next=5,e.$axios.post("/empleados/create",r);case 5:n=o.sent,console.log(n),n.data.success&&(e.usuario={},e.$router.push("/"));case 8:case"end":return o.stop()}}),o)})))()},goToLogin:function(){this.$router.push("/")}}}),_=r(56),component=Object(_.a)(x,(function(){var e=this,o=e._self._c;return o(n.a,{attrs:{flat:"",elevation:"0",width:"800",color:"#E5D9F2"}},[o(l.c,[o("p",{staticClass:"text-center",staticStyle:{width:"100% !important"},attrs:{color:"#A594F9"}},[e._v("\n      Homer Bussines Register\n    ")])]),e._v(" "),o(l.b,[o(f.a,[o(c.a,{attrs:{cols:"4"}},[o(v.a,{attrs:{dense:"",outlined:"",label:"apaterno"},model:{value:e.usuario.apaterno,callback:function(o){e.$set(e.usuario,"apaterno",o)},expression:"usuario.apaterno"}})],1),e._v(" "),o(c.a,{attrs:{cols:"4"}},[o(v.a,{attrs:{dense:"",outlined:"",label:"amaterno"},model:{value:e.usuario.amaterno,callback:function(o){e.$set(e.usuario,"amaterno",o)},expression:"usuario.amaterno"}})],1),e._v(" "),o(c.a,{attrs:{cols:"4"}},[o(v.a,{attrs:{dense:"",outlined:"",label:"Nombre"},model:{value:e.usuario.nombre,callback:function(o){e.$set(e.usuario,"nombre",o)},expression:"usuario.nombre"}})],1)],1),e._v(" "),o(f.a,[o(c.a,{attrs:{cols:"4"}},[o(v.a,{attrs:{dense:"",outlined:"",label:"direccion"},model:{value:e.usuario.direccion,callback:function(o){e.$set(e.usuario,"direccion",o)},expression:"usuario.direccion"}})],1),e._v(" "),o(c.a,{attrs:{cols:"4"}},[o(v.a,{attrs:{dense:"",outlined:"",label:"ciudad"},model:{value:e.usuario.ciudad,callback:function(o){e.$set(e.usuario,"ciudad",o)},expression:"usuario.ciudad"}})],1),e._v(" "),o(c.a,{attrs:{cols:"4"}},[o(v.a,{attrs:{dense:"",outlined:"",label:"estado"},model:{value:e.usuario.estado,callback:function(o){e.$set(e.usuario,"estado",o)},expression:"usuario.estado"}})],1)],1),e._v(" "),o(f.a,[o(c.a,{attrs:{cols:"4"}},[o(v.a,{attrs:{dense:"",outlined:"",label:"telefono"},model:{value:e.usuario.telefono,callback:function(o){e.$set(e.usuario,"telefono",o)},expression:"usuario.telefono"}})],1),e._v(" "),o(c.a,{attrs:{cols:"4"}},[e._v("\n        rol\n        "),o(d.a,{attrs:{items:["Admin","Compras"],dense:"",outlined:""},model:{value:e.usuario.rol,callback:function(o){e.$set(e.usuario,"rol",o)},expression:"usuario.rol"}})],1),e._v(" "),o(c.a,{attrs:{cols:"4"}},[o(m.a,{attrs:{dense:"",outlined:"",label:"imagen"},model:{value:e.usuario.imagen,callback:function(o){e.$set(e.usuario,"imagen",o)},expression:"usuario.imagen"}})],1)],1),e._v(" "),o(f.a,[o(c.a,{attrs:{cols:"4"}},[o(v.a,{attrs:{dense:"",outlined:"",label:"usuario"},model:{value:e.usuario.usuario,callback:function(o){e.$set(e.usuario,"usuario",o)},expression:"usuario.usuario"}})],1),e._v(" "),o(c.a,{attrs:{cols:"4"}},[o(v.a,{attrs:{type:"password",dense:"",outlined:"",label:"password"},model:{value:e.usuario.password,callback:function(o){e.$set(e.usuario,"password",o)},expression:"usuario.password"}})],1),e._v(" "),o(c.a,{attrs:{cols:"4"}},[o(v.a,{attrs:{type:"password",dense:"",outlined:"",label:"Confirmar Password"},model:{value:e.confirmarPassword,callback:function(o){e.confirmarPassword=o},expression:"confirmarPassword"}})],1)],1)],1),e._v(" "),o(l.a,[o(f.a,{staticClass:"ma-3",attrs:{align:"center",justify:"center"}},[o(t.a,{staticClass:"ml-3",attrs:{color:"#CD1FF"}},[o("span",{staticStyle:{"text-transform":"none",color:"#6C48C5"}},[e._v("\n          cancelar\n        ")])]),e._v(" "),o(t.a,{staticClass:"ml-3",attrs:{color:"#CD1FF"},on:{click:e.registrarUsuario}},[o("span",{staticStyle:{"text-transform":"none",color:"#6C48C5"}},[e._v("\n          Registrar\n        ")])])],1)],1)],1)}),[],!1,null,"75d35238",null);o.default=component.exports}}]);
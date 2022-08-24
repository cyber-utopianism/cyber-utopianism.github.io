import{R as c,j as s,a as p,G as o,P as n,r as b,B as _,b as d,c as m,d as j}from"./vendor.4195ce1a.js";import{S as v,P as y,W,C as H,O as C,A as g,D as f,V as w,G as I}from"./vendor_three.7c882a55.js";const T=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}};T();class r extends c.Component{constructor(t){super(t),this.state={images:this.props.images}}setCustomTags(t){return t.tags.map(i=>s("div",{style:q,children:i.title},i.value))}render(){var t=this.state.images.map(i=>(i.customOverlay=p("div",{style:M,children:[s("div",{children:i.caption}),i.hasOwnProperty("tags")&&this.setCustomTags(i)]}),i));return s("div",{style:{display:"block",height:"100%",width:"100%",border:"1px solid #ddd"},children:s(o,{images:t,enableImageSelection:!1})})}}r.propTypes={images:n.arrayOf(n.shape({src:n.string.isRequired,thumbnail:n.string.isRequired,srcset:n.array,caption:n.oneOfType([n.string,n.element]),thumbnailWidth:n.number.isRequired,thumbnailHeight:n.number.isRequired})).isRequired};const M={backgroundColor:"rgba(0, 0, 0, 0.8)",maxHeight:"240px",overflow:"hidden",position:"absolute",bottom:"0",width:"100%",color:"white",padding:"2px",fontSize:"90%"},q={wordWrap:"break-word",display:"inline-block",backgroundColor:"white",height:"auto",fontSize:"75%",fontWeight:"600",lineHeight:"1",padding:".2em .6em .3em",borderRadius:".25em",color:"black",verticalAlign:"baseline",margin:"2px"};r.defaultProps={images:[{src:"../assets/13_desserts/1638801157233_comp",thumbnail:"../assets/13_desserts/1638801157233_comp",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"13 desserts",title:"13 desserts"}],caption:""},{src:"../assets/13_desserts/1638801157268_comp",thumbnail:"../assets/13_desserts/1638801157268_comp",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"13 desserts",title:"13 desserts"}],caption:""},{src:"../assets/13_desserts/1638801157287_compressed",thumbnail:"../assets/13_desserts/1638801157287_compressed",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"13 desserts",title:"13 desserts"}],caption:""},{src:"../assets/dreaming_of_insdustrial_ruins/IMG_0058_comp",thumbnail:"../assets/dreaming_of_insdustrial_ruins/IMG_0058_comp",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Dreaming of Industrial Ruins",title:"Dreaming of Industrial Ruins"}],caption:""},{src:"../assets/dreaming_of_insdustrial_ruins/IMG_117_comp",thumbnail:"../assets/dreaming_of_insdustrial_ruins/IMG_117_comp",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Dreaming of Industrial Ruins",title:"Dreaming of Industrial Ruins"}],caption:""},{src:"../assets/TTristana/CI7A8114.jpg",thumbnail:"../assets/TTristana/CI7A8114.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Ttristana",title:"TTristana"}],caption:""},{src:"../assets/TTristana/CI7A8125.jpg",thumbnail:"../assets/TTristana/CI7A8125.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Ttristana",title:"TTristana"}],caption:""},{src:"../assets/TTristana/CI7A8155.jpg",thumbnail:"../assets/TTristana/CI7A8155.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Ttristana",title:"TTristana"}],caption:""},{src:"../assets/TTristana/CI7A8230.jpg",thumbnail:"../assets/TTristana/CI7A8230.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Ttristana",title:"TTristana"}],caption:""},{src:"../assets/TTristana/CI7A8319.jpg",thumbnail:"../assets/TTristana/CI7A8319.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Ttristana",title:"TTristana"}],caption:""},{src:"../assets/TTristana/CI7A8387.jpg",thumbnail:"../assets/TTristana/CI7A8387.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Ttristana",title:"TTristana"}],caption:""},{src:"../assets/TTristana/CI7A8618.jpg",thumbnail:"../assets/TTristana/CI7A8618.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Ttristana",title:"TTristana"}],caption:""},{src:"../assets/izem/Numeriser.jpeg",thumbnail:"../assets/izem/Numeriser.jpeg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Izem",title:"Izem"}],caption:""},{src:"../assets/izem/jeannine_x_izem_3.png",thumbnail:"../assets/izem/jeannine_x_izem_3.png",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Izem",title:"Izem"}],caption:""},{src:"../assets/mystique_moesha/moesha/_1080533.jpg",thumbnail:"../assets/mystique_moesha/moesha/_1080533.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Moesha",title:"Moesha"}],caption:""},{src:"../assets/mystique_moesha/moesha/_1080549.jpg",thumbnail:"../assets/mystique_moesha/moesha/_1080549.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Moesha",title:"Moesha"}],caption:""},{src:"../assets/mystique_moesha/moesha/_1080580.jpg",thumbnail:"../assets/mystique_moesha/moesha/_1080580.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Moesha",title:"Moesha"}],caption:""},{src:"../assets/mystique_moesha/moesha/_1080587.jpg",thumbnail:"../assets/mystique_moesha/moesha/_1080587.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Moesha",title:"Moesha"}],caption:""},{src:"../assets/mystique_moesha/mystique/014_13A_2.jpg",thumbnail:"../assets/mystique_moesha/mystique/014_13A_2.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Mystique",title:"Mystique"}],caption:""},{src:"../assets/mystique_moesha/mystique/019_18A.jpg",thumbnail:"../assets/mystique_moesha/mystique/019_18A.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Mystique",title:"Mystique"}],caption:""},{src:"../assets/mystique_moesha/mystique/022_21A-1_glissees.jpg",thumbnail:"../assets/mystique_moesha/mystique/022_21A-1_glissees.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Mystique",title:"Mystique"}],caption:""},{src:"../assets/mystique_moesha/mystique/035_32A.jpg",thumbnail:"../assets/mystique_moesha/mystique/035_32A.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Mystique",title:"Mystique"}],caption:""},{src:"../assets/m3c/_1080533.png",thumbnail:"../assets/m3c/_1080533.png",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"m3c",title:"m3c"}],caption:"m3c photoshoot"},{src:"../assets/m3c/m3Ccc_1_1.png",thumbnail:"../assets/m3c/m3Ccc_1_1.png",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"m3c",title:"m3c"}],caption:"m3c photoshoot"},{src:"../assets/m3c/m3Ccc_1_11.png",thumbnail:"../assets/m3c/m3Ccc_1_11.png",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"m3c",title:"m3c"}],caption:"m3c photoshoot"},{src:"../assets/m3c/m3Ccc_2_11.png",thumbnail:"../assets/m3c/m3Ccc_2_11.png",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"m3c",title:"m3c"}],caption:"m3c photoshoot"},{src:"../assets/m3c/m3Ccc_3_11.png",thumbnail:"../assets/m3c/m3Ccc_3_11.png",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"m3c",title:"m3c"}],caption:"m3c photoshoot"},{src:"../assets/m3c/m3Ccc_4_11.png",thumbnail:"../assets/m3c/m3Ccc_4_11.png",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"m3c",title:"m3c"}],caption:"m3c photoshoot"},{src:"../assets/m3c/m3Ccc_6_11.png",thumbnail:"../assets/m3c/m3Ccc_6_11.png",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"m3c",title:"m3c"}],caption:"m3c photoshoot"},{src:"../assets/m3c/m3Ccc_7_11.png",thumbnail:"../assets/m3c/m3Ccc_7_11.png",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"m3c",title:"m3c"}],caption:"m3c photoshoot"},{src:"../assets/m3c/m3Ccc_11_11.png",thumbnail:"../assets/m3c/m3Ccc_11_11.png",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"m3c",title:"m3c"}],caption:"m3c photoshoot"},{src:"../assets/parallele/11/DSC_0818.jpg",thumbnail:"../assets/parallele/11/DSC_0818.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 11",title:"parallele 11"}],caption:"parallele"},{src:"../assets/parallele/11/DSC_0821.jpg",thumbnail:"../assets/parallele/11/DSC_0821.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 11",title:"parallele 11"}],caption:"parallele"},{src:"../assets/parallele/11/DSC_0875.jpg",thumbnail:"../assets/parallele/11/DSC_0875.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 11",title:"parallele 11"}],caption:"parallele"},{src:"../assets/parallele/11/DSC_0893.jpg",thumbnail:"../assets/parallele/11/DSC_0893.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 11",title:"parallele 11"}],caption:"parallele"},{src:"../assets/parallele/11/DSC_0963.jpg",thumbnail:"../assets/parallele/11/DSC_0963.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 11",title:"parallele 11"}],caption:"parallele"},{src:"../assets/parallele/11/DSC_1002.jpg",thumbnail:"../assets/parallele/11/DSC_1002.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 11",title:"parallele 11"}],caption:"parallele"},{src:"../assets/parallele/11/DSC_1046.jpg",thumbnail:"../assets/parallele/11/DSC_1046.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 11",title:"parallele 11"}],caption:"parallele"},{src:"../assets/parallele/11/DSC_1048.jpg",thumbnail:"../assets/parallele/11/DSC_1048.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 11",title:"parallele 11"}],caption:"parallele"},{src:"../assets/parallele/11/ManifestoXXIDreamy-9.jpg",thumbnail:"../assets/parallele/11/ManifestoXXIDreamy-9.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 11",title:"parallele 11"}],caption:"parallele"},{src:"../assets/parallele/11/ManifestoXXIDreamy-10.jpg",thumbnail:"../assets/parallele/11/ManifestoXXIDreamy-10.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 11",title:"parallele 11"}],caption:"parallele"},{src:"../assets/oustal/img.jpg",thumbnail:"../assets/oustal/img.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"oustal",title:"oustal"}],caption:"oustal"},{src:"../assets/oustal/img_1.jpg",thumbnail:"../assets/oustal/img_1.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"oustal",title:"oustal"}],caption:"oustal"},{src:"../assets/oustal/img_2.jpg",thumbnail:"../assets/oustal/img_2.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"oustal",title:"oustal"}],caption:"oustal"},{src:"../assets/oustal/img_3.jpg",thumbnail:"../assets/oustal/img_3.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"oustal",title:"oustal"}],caption:"oustal"},{src:"../assets/oustal/img_4.jpg",thumbnail:"../assets/oustal/img_4.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"oustal",title:"oustal"}],caption:"oustal"},{src:"../assets/oustal/img_5.jpg",thumbnail:"../assets/oustal/img_5.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"oustal",title:"oustal"}],caption:"oustal"},{src:"../assets/oustal/img_8.jpg",thumbnail:"../assets/oustal/img_8.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"oustal",title:"oustal"}],caption:"oustal"},{src:"../assets/oustal/img_10.jpg",thumbnail:"../assets/oustal/img_10.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"oustal",title:"oustal"}],caption:"oustal"},{src:"../assets/parallele/12/AglaeMiguel_insta1.jpg",thumbnail:"../assets/parallele/12/AglaeMiguel_insta1.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 12",title:"parallele 12"}],caption:"parallele 12"},{src:"../assets/parallele/12/AglaeMiguel_insta2.jpg",thumbnail:"../assets/parallele/12/AglaeMiguel_insta1.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 12",title:"parallele 12"}],caption:"parallele 12"},{src:"../assets/parallele/12/ClaireBouffay_insta1.jpg",thumbnail:"../assets/parallele/12/ClaireBouffay_insta1.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 12",title:"parallele 12"}],caption:"parallele 12"},{src:"../assets/parallele/12/CollectifGrapain_insta1.jpg",thumbnail:"../assets/parallele/12/CollectifGrapain_insta1.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 12",title:"parallele 12"}],caption:"parallele 12"},{src:"../assets/parallele/12/CollectifGrapain_insta2.jpg",thumbnail:"../assets/parallele/12/CollectifGrapain_insta2.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 12",title:"parallele 12"}],caption:"parallele 12"},{src:"../assets/parallele/12/CollectifGrapain_insta3.jpg",thumbnail:"../assets/parallele/12/CollectifGrapain_insta3.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 12",title:"parallele 12"}],caption:"parallele 12"},{src:"../assets/parallele/12/CollectifGrapain_insta4.jpg",thumbnail:"../assets/parallele/12/CollectifGrapain_insta4.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 12",title:"parallele 12"}],caption:"parallele 12"},{src:"../assets/parallele/12/LeaDeCacqueray_insta1.jpg",thumbnail:"../assets/parallele/12/LeaDeCacqueray_insta1.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 12",title:"parallele 12"}],caption:"parallele 12"},{src:"../assets/parallele/12/LeaDeCacqueray_insta2.jpg",thumbnail:"../assets/parallele/12/LeaDeCacqueray_insta2.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 12",title:"parallele 12"}],caption:"parallele 12"},{src:"../assets/parallele/12/LeaDeCacqueray_insta3.jpg",thumbnail:"../assets/parallele/12/LeaDeCacqueray_insta3.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 12",title:"parallele 12"}],caption:"parallele 12"},{src:"../assets/parallele/12/LeaDeCacqueray_insta4.jpg",thumbnail:"../assets/parallele/12/LeaDeCacqueray_insta4.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 12",title:"parallele 12"}],caption:"parallele 12"},{src:"../assets/parallele/12/PrunePhi_insta1.jpg",thumbnail:"../assets/parallele/12/PrunePhi_insta1.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 12",title:"parallele 12"}],caption:"parallele 12"},{src:"../assets/parallele/12/PrunePhi_insta2.jpg",thumbnail:"../assets/parallele/12/PrunePhi_insta2.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 12",title:"parallele 12"}],caption:"parallele 12"},{src:"../assets/parallele/12/PrunePhi_insta3.jpg",thumbnail:"../assets/parallele/12/PrunePhi_insta3.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"parallele 12",title:"parallele 12"}],caption:"parallele 12"},{src:"../assets/venus/img_5.jpg",thumbnail:"../assets/venus/img_5.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"venus",title:"venus"}],caption:"venus"},{src:"../assets/venus/img_6.jpg",thumbnail:"../assets/venus/img_6.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"venus",title:"venus"}],caption:"venus"},{src:"../assets/venus/img_9.jpg",thumbnail:"../assets/venus/img_9.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"venus",title:"venus"}],caption:"venus"},{src:"../assets/venus/img_12.jpg",thumbnail:"../assets/venus/img_12.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"venus",title:"venus"}],caption:"venus"},{src:"../assets/venus/img_13.jpg",thumbnail:"../assets/venus/img_13.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"venus",title:"venus"}],caption:"venus"},{src:"../assets/venus/img_22.jpg",thumbnail:"../assets/venus/img_22.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"venus",title:"venus"}],caption:"venus"},{src:"../assets/venus/img_24.jpg",thumbnail:"../assets/venus/img_24.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"venus",title:"venus"}],caption:"venus"},{src:"../assets/webiliscious/IMG-3809.jpg",thumbnail:"../assets/webiliscious/IMG-3809.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"webiliscious",title:"webiliscious"}],caption:"webiliscious"},{src:"../assets/webiliscious/IMG_3856.jpg",thumbnail:"../assets/webiliscious/IMG_3856.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"webiliscious",title:"webiliscious"}],caption:"webiliscious"},{src:"../assets/webiliscious/IMG_3861.jpg",thumbnail:"../assets/webiliscious/IMG_3861.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"webiliscious",title:"webiliscious"}],caption:"webiliscious"},{src:"../assets/webiliscious/IMG_3860.jpg",thumbnail:"../assets/webiliscious/IMG_3860.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"webiliscious",title:"webiliscious"}],caption:"webiliscious"},{src:"../assets/webiliscious/IMG_3859.jpg",thumbnail:"../assets/webiliscious/IMG_3859.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"webiliscious",title:"webiliscious"}],caption:"webiliscious"},{src:"../assets/webiliscious/IMG_3855.jpg",thumbnail:"../assets/webiliscious/IMG_3855.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"webiliscious",title:"webiliscious"}],caption:"webiliscious"},{src:"../assets/webiliscious/IMG_1.jpg",thumbnail:"../assets/webiliscious/IMG_1.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"webiliscious",title:"webiliscious"}],caption:"webiliscious"},{src:"../assets/webiliscious/IMG_2.jpg",thumbnail:"../assets/webiliscious/IMG_2.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"webiliscious",title:"webiliscious"}],caption:"webiliscious"},{src:"../assets/viree_seche/011Viree_Seche.jpg",thumbnail:"../assets/viree_seche/011Viree_Seche.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Viree Seche",title:"Viree Seche"}],caption:""},{src:"../assets/viree_seche/143Viree_Seche.jpg",thumbnail:"../assets/viree_seche/143Viree_Seche.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Viree Seche",title:"Viree Seche"}],caption:""},{src:"../assets/viree_seche/144Viree_Seche.jpg",thumbnail:"../assets/viree_seche/144Viree_Seche.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Viree Seche",title:"Viree Seche"}],caption:""},{src:"../assets/viree_seche/146Viree_Seche.jpg",thumbnail:"../assets/viree_seche/146Viree_Seche.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Viree Seche",title:"Viree Seche"}],caption:""},{src:"../assets/viree_seche/157Viree_Seche.jpg",thumbnail:"../assets/viree_seche/157Viree_Seche.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Viree Seche",title:"Viree Seche"}],caption:""},{src:"../assets/viree_seche/184Viree_Seche.jpg",thumbnail:"../assets/viree_seche/184Viree_Seche.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Viree Seche",title:"Viree Seche"}],caption:""},{src:"../assets/viree_seche/313Viree_Seche.jpg",thumbnail:"../assets/viree_seche/313Viree_Seche.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Viree Seche",title:"Viree Seche"}],caption:""},{src:"../assets/viree_seche/319Viree_Seche.jpg",thumbnail:"../assets/viree_seche/319Viree_Seche.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Viree Seche",title:"Viree Seche"}],caption:""},{src:"../assets/thesaurus_cyber/Cyber_7.jpg",thumbnail:"../assets/thesaurus_cyber/Cyber_7.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Thesaurus Cyber And (u_dys)topia",title:"Thesaurus Cyber And (u_dys)topia"}],caption:""},{src:"../assets/thesaurus_cyber/Cyber_6.jpg",thumbnail:"../assets/thesaurus_cyber/Cyber_6.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Thesaurus Cyber And (u_dys)topia",title:"Thesaurus Cyber And (u_dys)topia"}],caption:""},{src:"../assets/thesaurus_cyber/Cyber_16.jpg",thumbnail:"../assets/thesaurus_cyber/Cyber_16.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Thesaurus Cyber And (u_dys)topia",title:"Thesaurus Cyber And (u_dys)topia"}],caption:""},{src:"../assets/thesaurus_cyber/Cyber_20.jpg",thumbnail:"../assets/thesaurus_cyber/Cyber_20.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Thesaurus Cyber And (u_dys)topia",title:"Thesaurus Cyber And (u_dys)topia"}],caption:""},{src:"../assets/thesaurus_cyber/Cyber_17.jpg",thumbnail:"../assets/thesaurus_cyber/Cyber_17.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Thesaurus Cyber And (u_dys)topia",title:"Thesaurus Cyber And (u_dys)topia"}],caption:""},{src:"../assets/thesaurus_cyber/Cyber_18.jpg",thumbnail:"../assets/thesaurus_cyber/Cyber_18.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Thesaurus Cyber And (u_dys)topia",title:"Thesaurus Cyber And (u_dys)topia"}],caption:""},{src:"../assets/thesaurus_cyber/Cyber_20.jpg",thumbnail:"../assets/thesaurus_cyber/Cyber_20.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Thesaurus Cyber And (u_dys)topia",title:"Thesaurus Cyber And (u_dys)topia"}],caption:""},{src:"../assets/quarantine_diares/day_1/IMG_20200320_161111.jpg",thumbnail:"../assets/quarantine_diares/day_1/IMG_20200320_161111.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Quarantine Diaries",title:"Quarantine Diaries"}],caption:""},{src:"../assets/quarantine_diares/day_1/IMG_20200320_161254.jpg",thumbnail:"../assets/quarantine_diares/day_1/IMG_20200320_161254.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Quarantine Diaries",title:"Quarantine Diaries"}],caption:""},{src:"../assets/quarantine_diares/day_1/IMG_20200320_161622.jpg",thumbnail:"../assets/quarantine_diares/day_1/IMG_20200320_161622.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Quarantine Diaries",title:"Quarantine Diaries"}],caption:""},{src:"../assets/quarantine_diares/day_1/IMG_20200320_161944.jpg",thumbnail:"../assets/quarantine_diares/day_1/IMG_20200320_161944.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Quarantine Diaries",title:"Quarantine Diaries"}],caption:""},{src:"../assets/quarantine_diares/day_2/IMG_20200320_152305.jpg",thumbnail:"../assets/quarantine_diares/day_2/IMG_20200320_152650.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Quarantine Diaries",title:"Quarantine Diaries"}],caption:""},{src:"../assets/quarantine_diares/day_2/IMG_20200320_152650.jpg",thumbnail:"../assets/quarantine_diares/day_2/IMG_20200320_152650.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Quarantine Diaries",title:"Quarantine Diaries"}],caption:""},{src:"../assets/quarantine_diares/day_3_4/IMG_20200322_183735.jpg",thumbnail:"../assets/quarantine_diares/day_3_4/IMG_20200322_183735.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Quarantine Diaries",title:"Quarantine Diaries"}],caption:""},{src:"../assets/quarantine_diares/day_3_4/IMG_20200326_231624.jpg",thumbnail:"../assets/quarantine_diares/day_3_4/IMG_20200326_231624.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Quarantine Diaries",title:"Quarantine Diaries"}],caption:""},{src:"../assets/quarantine_diares/day_8/IMG_20200328_171540.jpg",thumbnail:"../assets/quarantine_diares/day_8/IMG_20200328_171540.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Quarantine Diaries",title:"Quarantine Diaries"}],caption:""},{src:"../assets/quarantine_diares/day_8/IMG_20200328_172937.jpg",thumbnail:"../assets/quarantine_diares/day_8/IMG_20200328_172937.jpg",thumbnailWidth:320,thumbnailHeight:213,tags:[{value:"Quarantine Diaries",title:"Quarantine Diaries"}],caption:""}]};class S{constructor(t){this.scene=void 0,this.camera=void 0,this.renderer=void 0,this.fov=45,this.nearPlane=1,this.farPlane=1e3,this.canvasId=t,this.clock=void 0,this.stats=void 0,this.controls=void 0,this.ambientLight=void 0,this.directionalLight=void 0}initialize(){this.scene=new v,this.camera=new y(this.fov,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.z=48;const t=document.getElementById(this.canvasId);this.renderer=new W({canvas:t,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.clock=new H,this.controls=new C(this.camera,this.renderer.domElement),this.ambientLight=new g(16777215,.9),this.ambientLight.castShadow=!0,this.scene.add(this.ambientLight),this.directionalLight=new f(16777215,2),this.directionalLight.position.set(0,32,64),this.scene.add(this.directionalLight),window.addEventListener("resize",()=>this.onWindowResize(),!1)}animate(){window.requestAnimationFrame(this.animate.bind(this)),this.render(),this.controls.update()}render(){this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}function D(){return b.exports.useEffect(()=>{const l=new S("myThreeJsCanvas");l.initialize(),l.animate();const t=document.getElementById("video"),i=new w(t);l.scene.background=i,t.play(),new I().load("./assets/room/try.gltf",e=>{e.scene.position.y=0,e.scene.position.x=5,e.scene.scale.set(2.8,2.8,2.8),l.scene.add(e.scene);const a=new g(16777215,.5);a.position.set(20,20,20),l.scene.add(a),l.scene.rotation.y=Math.PI+.3,l.scene.rotation.z=-.18})},[]),s("div",{children:s("canvas",{id:"myThreeJsCanvas"})})}function G(){return s(_,{children:p(d,{children:[s(m,{index:!0,element:s(D,{})}),s(m,{path:"/gallery",exact:!0,element:s(r,{})})]})})}j.render(s(c.StrictMode,{children:s(G,{})}),document.getElementById("root"));

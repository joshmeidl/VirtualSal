(this.webpackJsonpvirtual_sal=this.webpackJsonpvirtual_sal||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},25:function(e,t,a){},34:function(e,t,a){e.exports=a(51)},39:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),l=a.n(o);a(39),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(40);var s=a(4),c=a(6),u=a(7),m=a(8),i=(a(25),a(9)),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"landingContainer"},r.a.createElement(i.b,{to:"/signin"},r.a.createElement("button",{className:"landingButton"},"SIGN IN")),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/signup"},r.a.createElement("button",{className:"landingButton"},"SIGN UP")),r.a.createElement("br",null),r.a.createElement(i.b,{to:"/dashboard"},r.a.createElement("button",{className:"landingButton"},"GUEST")))}}]),a}(n.Component),h=a(53),p=(a(17),a(11)),E=a.n(p),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){var t=document.getElementById("username").value,a=document.getElementById("password").value;if(!t||!a)return alert("Please fill out the entire form"),e.preventDefault(),void e.stopPropagation();E.a.ajax({url:"http://localhost:8080/VirtualSal/signInValidation",data:{username:t,password:a},async:!1,success:function(a){if(console.log(a),console.log(a.validSignIn),"true"===a.validSignIn){var n=a.name,r=a.lastname,o=a.email,l=a.courses;localStorage.setItem("username",t),localStorage.setItem("fullName",n+" "+r),localStorage.setItem("email",o),localStorage.setItem("courses",l),alert("You are now signed in!")}else"false"===a.validSignIn&&"true"===a.validUsername?(alert("Incorrect Password. Please try again."),e.preventDefault(),e.stopPropagation(),document.getElementById("username").value=""):(alert("Incorrect Username and Password. Please try again."),e.preventDefault(),e.stopPropagation(),document.getElementById("username").value="",document.getElementById("password").value="")}})},n.state={username:"",password:""},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"formContainer"},r.a.createElement("h1",{className:"formTitle"},"WELCOME"),r.a.createElement("h2",{className:"formSubtitle"},"PLEASE SIGN IN TO CONTINUE"),r.a.createElement("br",null),r.a.createElement(h.a,null,r.a.createElement(h.a.Group,{controlId:"username"},r.a.createElement(h.a.Control,{type:"text",placeholder:"USERNAME",required:!0,style:{left:"0%"}})),r.a.createElement(h.a.Group,{controlId:"password"},r.a.createElement(h.a.Control,{type:"password",placeholder:"PASSWORD",required:!0,style:{left:"0%"}})),r.a.createElement(i.b,{to:"/dashboard",className:"landingButton",type:"button",onClick:this.handleSubmit},"SIGN IN")))}}]),a}(n.Component),f=a(52),b=a(32),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).resetForm=function(){document.getElementById("firstname").value="",document.getElementById("lastname").value="",document.getElementById("email").value="",document.getElementById("username").value="",document.getElementById("password").value="",document.getElementById("confirmPassword").value=""},n.handleSubmit=function(e){var t=document.getElementById("firstname").value,a=document.getElementById("lastname").value,n=document.getElementById("email").value,r=document.getElementById("username").value,o=document.getElementById("password").value,l=document.getElementById("confirmPassword").value;return t&&a&&n&&r&&o&&l?o!==l?(alert("Password and Confirm Password do no match."),e.preventDefault(),e.stopPropagation(),document.getElementById("password").value="",void(document.getElementById("confirmPassword").value="")):void E.a.ajax({url:"http://localhost:8080/VirtualSal/signupvalidation",async:!1,data:{username:r,password:o,firstname:t,email:n,lastname:a},success:function(o){console.log(o),"false"!==o.validUsername&&"false"!==o.validEmail||("false"===o.validUsername||"false"===o.validEmail?alert("Both the username and password have already been taken."):"false"===o.validUsername?alert("Username has been taken."):"false"===o.validEmail&&alert("Email has been taken."),e.preventDefault(),e.stopPropagation()),localStorage.setItem("username",r),localStorage.setItem("fullName",t+" "+a),localStorage.setItem("email",n)}}):(alert("Please fill out the entire form"),e.preventDefault(),void e.stopPropagation())},n.state={firstname:"",lastname:"",email:"",username:"",password:""},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"formContainer-SignUp"},r.a.createElement("h1",{className:"formTitle"},"WELCOME"),r.a.createElement("h2",{className:"formSubtitle"},"PLEASE FILL OUT THE INFO TO SIGN UP"),r.a.createElement("br",null),r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement(h.a.Group,{as:b.a,controlId:"firstname"},r.a.createElement(h.a.Control,{type:"text",placeholder:"FIRST NAME",style:{left:"0%"}})),r.a.createElement(h.a.Group,{as:b.a,controlId:"lastname"},r.a.createElement(h.a.Control,{type:"text",placeholder:"LAST NAME",style:{left:"0%"}}))),r.a.createElement(h.a.Group,{controlId:"email"},r.a.createElement(h.a.Control,{type:"text",placeholder:"EMAIL",required:!0,style:{left:"0%"}}),r.a.createElement(h.a.Text,{style:{color:"white"}},"We'll never share your email with anyone else.")),r.a.createElement(h.a.Group,{controlId:"username"},r.a.createElement(h.a.Control,{type:"text",placeholder:"USERNAME",required:!0,style:{left:"0%"}})),r.a.createElement(h.a.Group,{controlId:"password"},r.a.createElement(h.a.Control,{type:"text",placeholder:"PASSWORD",required:!0,style:{left:"0%"}})),r.a.createElement(h.a.Group,{controlId:"confirmPassword"},r.a.createElement(h.a.Control,{type:"text",placeholder:"CONFIRM PASSWORD",required:!0,style:{left:"0%"}})),r.a.createElement(i.b,{to:"/uploadSchedule",className:"landingButton",type:"button",onClick:this.handleSubmit},"SIGN UP")))}}]),a}(n.Component),S=function e(t,a,n,r,o){Object(s.a)(this,e),this.semester=t,this.year=a,this.courseName=n,this.professor=r,this.sectionNumber=o},g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleNewCourse=function(){var e=document.getElementById("semester").value,t=document.getElementById("year").value,a=document.getElementById("courseName").value,r=document.getElementById("professor").value,o=document.getElementById("sectionNumber").value,l=new S(e,t,a,r,o);n.setState({courseList:n.state.courseList.concat(l)},alert(l.courseName+" has been added to your courses!")),n.resetForm()},n.handleSubmission=function(){n.state.courseList.map((function(e){return E.a.ajax({url:"http://localhost:8080/VirtualSal/AddCourse",data:{courseName:e.courseName,sectionNumber:e.sectionNumber,professor:e.professor,year:e.year,semester:e.semester},success:function(e){console.log(e)}})}))},n.state={courseList:[]},n}return Object(c.a)(a,[{key:"resetForm",value:function(){document.getElementById("semester").value="",document.getElementById("year").value="",document.getElementById("courseName").value="",document.getElementById("professor").value="",document.getElementById("sectionNumber").value=""}},{key:"render",value:function(){return r.a.createElement("div",{className:"formContainer-Upload"},r.a.createElement("h1",{className:"formTitle"},"SCHEDULE UPLOAD"),r.a.createElement("h2",{className:"formSubtitle"},"PLEASE FILL OUT THE INFO TO ADD A COURSE."),r.a.createElement("h3",{className:"formSubtitle"},"PRESS SUBMIT TO CONTINUE TO DASHBOARD."),r.a.createElement("br",null),r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement(h.a.Group,{as:b.a,controlId:"semester"},r.a.createElement(h.a.Control,{type:"text",placeholder:"SEMESTER",style:{left:"0%"}})),r.a.createElement(h.a.Group,{as:b.a,controlId:"year"},r.a.createElement(h.a.Control,{type:"text",placeholder:"YEAR",style:{left:"0%"}}))),r.a.createElement(h.a.Group,{controlId:"courseName"},r.a.createElement(h.a.Control,{type:"text",placeholder:"COURSE NAME",required:!0,style:{left:"0%"}})),r.a.createElement(h.a.Group,{controlId:"professor"},r.a.createElement(h.a.Control,{type:"text",placeholder:"PROFESSOR",required:!0,style:{left:"0%"}})),r.a.createElement(h.a.Group,{controlId:"sectionNumber"},r.a.createElement(h.a.Control,{type:"text",placeholder:"SECTION NUMBER",required:!0,style:{left:"0%"}})),r.a.createElement(f.a,null,r.a.createElement(b.a,null,r.a.createElement("button",{className:"formButton",onClick:this.handleNewCourse},"ADD COURSE")),r.a.createElement(b.a,null,r.a.createElement(i.b,{to:"/dashboard",onClick:this.handleSubmission},r.a.createElement("button",{className:"formButton"},"SUBMIT"))))))}}]),a}(n.Component),C=a(15),N=(a(18),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"scheduleHeader"},"Semester: ",this.props.semester),r.a.createElement("hr",{style:{color:"#000000",backgroundColor:"#000000",height:.8,borderColor:"#ffffff"}}),r.a.createElement("div",null,r.a.createElement("p",{className:"scheduleText"},this.props.courseName),r.a.createElement("p",{className:"scheduleText"},"Section: ",this.props.sectionNumber),r.a.createElement("p",{className:"scheduleText"},this.props.professor)),r.a.createElement("hr",{style:{color:"#000000",backgroundColor:"#000000",height:.8,borderColor:"#ffffff"}}))}}]),a}(n.Component)),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={courseList:{details:[],valid:""}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){E.a.ajax({url:"http://localhost:8080/VirtualSal/MyScheduleServlet",dataType:"json",async:!1,success:function(e){console.log(e),this.setState({courseList:e})}.bind(this)}),console.log(this.state.courseList)}},{key:"render",value:function(){var e=this.state.courseList.details.map((function(e){return r.a.createElement("div",null,r.a.createElement(N,{key:e.sectionNumber,semester:e.semester,courseName:e.courseName,professor:e.professor,sectionNumber:e.sectionNumber}),r.a.createElement("br",null))}));return r.a.createElement("div",null,e)}}]),a}(n.Component),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",{style:{color:"white"}},"Hello, ",localStorage.getItem("username")))}}]),a}(n.Component),O=a(33),j=(a(47),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={course:"",professor:"",workload:0,clarity:0,comment:""},e.change=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){if(console.log(e.state),!(e.state.course&&e.state.professor&&e.state.workload&&e.state.clarity&&e.state.comment))return alert("One or more fields left blank"),t.preventDefault(),void t.stopPropagation();E.a.ajax({url:"http://localhost:8080/VirtualSal/AddReviewServlet",data:{courseName:e.state.course,workload:e.state.workload,clarity:e.state.clarity,comment:e.state.comment,professor:e.state.professor}}),alert("Review for "+e.state.course+" added!")},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Create a Review"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"course"},r.a.createElement("select",{name:"course",value:this.state.course,onChange:function(t){return e.change(t)}},r.a.createElement("option",{value:"none",selected:!0,disabled:!0,hidden:!0},"Course"),r.a.createElement("option",{value:"CSCI 103"},"CSCI 103"),r.a.createElement("option",{value:"CSCI 109"},"CSCI 109"),r.a.createElement("option",{value:"CSCI 170"},"CSCI 170"),r.a.createElement("option",{value:"CSCI 201"},"CSCI 201"),r.a.createElement("option",{value:"CSCI 270"},"CSCI 270"),r.a.createElement("option",{value:"CSCI 310"},"CSCI 310"))),r.a.createElement("br",null),r.a.createElement("div",{className:"professor"},r.a.createElement("input",{name:"professor",placeholder:"professor",value:this.state.professor,onChange:function(t){return e.change(t)}})),r.a.createElement("div",{className:"workload"},r.a.createElement("select",{name:"workload",value:this.state.workload,onChange:function(t){return e.change(t)}},r.a.createElement("option",{value:"none",selected:!0,disabled:!0,hidden:!0},"Workload"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")),r.a.createElement("p",{className:"clarification"},"1: Light, 5: Extreme")),r.a.createElement("div",{className:"clarity"},r.a.createElement("select",{name:"clarity",value:this.state.clarity,onChange:function(t){return e.change(t)}},r.a.createElement("option",{value:"none",selected:!0,disabled:!0,hidden:!0},"Clarity"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")),r.a.createElement("p",{className:"clarification"},"1: Muddy, 5: Clear")),r.a.createElement("div",{className:"form-group w-50"},r.a.createElement("textarea",{type:"text",name:"comment",value:this.state.comment,placeholder:"comment",class:"form-control",onChange:function(t){return e.change(t)}})),r.a.createElement("br",null),r.a.createElement("div",{className:"submit"},r.a.createElement("input",{type:"submit",value:"Submit"}))))}}]),a}(n.Component)),k=[{id:100,question:"Who's the best professor in the CS department?",upvotes:10,downvotes:3,thread:[{comment:"Miller!! <3",upvotes:100,downvotes:2},{comment:"Miller is easily the best.",upvotes:80,downvotes:5},{comment:"It used to be Reddekop for me, but now it's definitely Miller!",upvotes:6,downvotes:0}]},{id:101,question:"What's your favorite programming language?",upvotes:6,downvotes:2,thread:[{comment:"mmm hard to decide, but probably Python",upvotes:3,downvotes:1},{comment:"Java!",upvotes:7,downvotes:1},{comment:"Python it's so easy",upvotes:15,downvotes:4},{comment:"C++, I'm a nerd!",upvotes:18,downvotes:10},{comment:"python :p",upvotes:1,downvotes:0}]},{id:102,question:"Any programming jokes?",upvotes:29,downvotes:2,thread:[{comment:"Q. How did the programmer die in the shower? A. He read the shampoo bottle instructions: Lather. Rinse. Repeat.",upvotes:15,downvotes:3},{comment:"A man is smoking a cigarette and blowing smoke rings into the air.  His girlfriend becomes irritated with the smoke and says, Can\u2019t you see the warning on the cigarette pack?  Smoking is hazardous to your health! To which the man replies, I am a programmer.  We don\u2019t worry about warnings; we only worry about errors.",upvotes:12,downvotes:1},{comment:"Have you heard about the new Cray super computer?  It\u2019s so fast, it executes an infinite loop in 6 seconds.",upvotes:8,downvotes:3},{comment:"Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25.",upvotes:11,downvotes:1},{comment:"A programmer walks to the butcher shop and buys a kilo of meat.  An hour later he comes back upset that the butcher shortchanged him by 24 grams.",upvotes:3,downvotes:10}]},{id:103,question:"Internship megathread!",upvotes:41,downvotes:18,thread:[{comment:"let's get rejected by google",upvotes:15,downvotes:0},{comment:"let's get rejected by facebook",upvotes:2,downvotes:0},{comment:"let's get rejected by apple",upvotes:4,downvotes:0},{comment:"let's get rejected by amazon",upvotes:8,downvotes:0}]},{id:104,question:"What are the Most Abundant Careers in CS?",upvotes:12,downvotes:3,thread:[{comment:"web dev",upvotes:0,downvotes:0}]}],B=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleInput=function(){var t=document.getElementById("userDashboardSearch");null!==t&&e.props.onSearch(t.value)},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"dashboardContainer"},r.a.createElement("div",{className:"welcomeContainer"},r.a.createElement("h1",{className:"welcomeText"},"WELCOME, ",localStorage.getItem("fullName"))),r.a.createElement("div",{className:"questionContainer"},r.a.createElement(i.b,{to:"/dashboard/questions"},r.a.createElement("button",{className:"askQuestionButton"},"+ Question"))),r.a.createElement("div",{className:"userSearchBarContainer"},r.a.createElement("input",{className:"userSearchBar",id:"userDashboardSearch",type:"text",placeholder:"SEARCH FOR A QUESTION, A FORUM, OR A CLASS",onInput:this.handleInput}),r.a.createElement(i.b,{to:"/dashboard/search-results"},r.a.createElement("button",{className:"userSearchButton"},"search"))),r.a.createElement("div",{className:"scheduleTitleContainer"},r.a.createElement("label",{className:"moduleTitle"},"My Classes")),r.a.createElement("div",{className:"scheduleContainer"},r.a.createElement(I,null)),r.a.createElement("div",{className:"reviewTitleContainer"},r.a.createElement("label",{className:"moduleTitle"},"My Reviews")),r.a.createElement("div",{className:"reviewContainer"},r.a.createElement(j,null)),r.a.createElement("div",{className:"infoTitleContainer"},r.a.createElement("label",{className:"moduleTitle"},"My Info")),r.a.createElement("div",{className:"infoContainer"},r.a.createElement(w,null)),r.a.createElement("div",{className:"forumsTitleContainer"},r.a.createElement("label",{className:"moduleTitle"},"Popular Forums")),r.a.createElement("div",{className:"forumsContainer"},k.map((function(e){return r.a.createElement("div",{className:"popularForumLink"},r.a.createElement(i.b,{to:"/dashboard/forum-id="+e.id,style:{color:"white"}},e.question),r.a.createElement("br",null))}))))}}]),a}(n.Component),A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleInput=function(){var t=document.getElementById("guestDashboardSearch");null!==t&&e.props.onSearch(t.value)},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"guestDashboardContainer"},r.a.createElement("h1",{className:"guestHeader"},"VirtualSal"),r.a.createElement("br",null),r.a.createElement("div",{className:"guestSearchBarContainer"},r.a.createElement("input",{className:"guestSearchBar",id:"guestDashboardSearch",type:"text",placeholder:"SEARCH FOR A QUESTION, A FORUM, OR A CLASS",onInput:this.handleInput}),r.a.createElement(i.b,{to:"/dashboard/search-results"},r.a.createElement("button",{className:"guestSearchButton"},"search"))),r.a.createElement(i.b,{to:"/dashboard/questions"},r.a.createElement("button",{className:"questionButton"},"+ Ask Question")))}}]),a}(n.Component),T=(a(48),a(19)),R=(a(49),[{type:"course",id:4,data:{semester:"Spring",year:"2020",course:"CSCI201 - Principles of Software Development",professor:"Jeffery Miller",sectionNumber:"30112"}},{type:"course",id:5,data:{semester:"Spring",year:"2020",course:"CSCI270 - Introduction to Algorithms and Theory of Computing",professor:"Shahrair Shamsian",sectionNumber:"30231"}},{type:"course",id:6,data:{semester:"Spring",year:"2020",course:"CSCI104 - Data Structures and Object Oriented Design",professor:"Shahrair Shamsian",sectionNumber:"30231"}},{type:"course",id:7,data:{semester:"Spring",year:"2020",course:"CSCI170 - Discrete Methods in Computer Science",professor:"Shahrair Shamsian",sectionNumber:"30231"}}]),L=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchBarInput:"",searchKey:"",resultsList:[{type:"",id:"",data:[]}]},e.componentDidMount=function(){e.setState({searchKey:e.props.searchKey}),e.setState({resultsList:R})},e.linkTitle=function(e){return"forum"===e.type?e.data.question:e.data.course},e.handleInput=function(){var t=document.getElementById("resultsSearch");null!==t&&e.setState({searchBarInput:t.value})},e.handleSearch=function(){Object(T.a)(e);e.setState({searchKey:e.state.searchBarInput})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.resultsList.map((function(t){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h1",{className:"searchResultsLink"},t.type.toUpperCase()+": "),r.a.createElement(i.b,{className:"searchResultsLink",key:t.id,to:t.type+"-id="+t.id.toString()},e.linkTitle(t)),r.a.createElement("hr",null))})),a=this.state.resultsList.map((function(t){return"forum"===t.type?r.a.createElement(C.a,{path:"/dashboard/forum-id="+t.id.toString()},r.a.createElement(P,{key:t.id,question:t.data.question,upvotes:t.data.upvotes,downvotes:t.data.downvotes,thread:t.data.thread,handleSubmit:e.handleNewComment})):"course"===t.type?r.a.createElement(C.a,{path:"/dashboard/course-id="+t.id.toString()},r.a.createElement(N,{key:t.id,semester:t.data.semester,year:t.data.year,courseName:t.data.course,professor:t.data.professorName,sectionNumber:t.data.sectionNumber})):"review"===t.type?r.a.createElement(C.a,{path:"/dashboard/review-id="+t.id.toString()},r.a.createElement(j,{key:t.id,course:t.data.course,professor:t.data.professor,workload:t.data.workload,clarity:t.data.clarity,comment:t.data.comment})):void 0}));return r.a.createElement(i.a,null,r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/dashboard/search-results"},r.a.createElement("div",{className:"searchResultsContainer"},r.a.createElement("div",{className:"resultsSearchBarContainer"},r.a.createElement("input",{className:"userSearchBar",id:"resultsSearch",type:"text",placeholder:"SEARCH FOR A QUESTION, A FORUM, OR A CLASS",onInput:this.handleInput}),r.a.createElement("button",{onClick:this.handleSearch,className:"userSearchButton"},"search")),r.a.createElement("h1",{className:"searchResultsTitle"},"Search Results"),r.a.createElement("h2",{className:"searchResultsSearchKey"},"Showing Results For: ",this.state.searchKey),t)),a))}}]),a}(n.Component),P=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={sthread:[],reply:""},e.componentDidMount=function(){console.log(e.props.thread),e.setState({sthread:e.props.thread})},e.voteApprove=function(t){e.setState({sthread:e.state.sthread.map((function(e){return e.key===t&&(e.voteYes||(e.voteYes=!0,e.upvotes++)),e}))})},e.voteDisapprove=function(t){e.setState({sthread:e.state.sthread.map((function(e){return e.key===t&&(e.voteNo||(e.voteNo=!0,e.downvotes++)),e}))})},e.handlesubmit=function(){if(""!==e.state.reply&&null!==e.state.reply){var t=e.state.sthread[e.state.sthread.length-1].key;t+=1,e.state.reply}else alert("One or more fields left blank")},e.onchange=function(t){e.setState({reply:t.target.value})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t="";return t=this.state.sthread?this.state.sthread.map((function(t){return r.a.createElement("div",{className:"commentFormat"},r.a.createElement("h5",{className:"answerFormat"},t.comment),r.a.createElement("p",null,r.a.createElement("button",{className:"buttonFormat_yes",onClick:function(){return e.voteApprove(t.key)}},r.a.createElement("span",{style:{color:"green"}},"Approve")),"         ",r.a.createElement("span",{className:"numLikes"},t.upvotes)," ",r.a.createElement("button",{className:"buttonFormat_no",onClick:function(){return e.voteDisapprove(t.key)}},r.a.createElement("span",{style:{color:"red"}},"Disapprove"))," "," ",r.a.createElement("span",{className:"numDisLikes"},t.downvotes)))})):r.a.createElement("h2",null,"No answers to this question from Trojans yet."),r.a.createElement("div",null,r.a.createElement("h1",{className:"questionFormat"},this.props.question),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handlesubmit},r.a.createElement("div",{className:"form-group w-50"},r.a.createElement("div",{className:"reply"},r.a.createElement("h5",null,r.a.createElement("font",{color:"white"},"Your Reply:"))),r.a.createElement("textarea",{className:"form-control",rows:"3",id:"comment",name:"reply",value:this.state.reply,onChange:this.onchange})),r.a.createElement("div",{className:"submit"},r.a.createElement("input",{type:"submit",value:"Post Reply",style:{margin:10}})),r.a.createElement("br",null)),t)}}]),a}(n.Component),D=a(54),U=(a(50),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={questionTitle:"",questionBody:"",courseName:""},e.handlesubmit=function(e){var t=document.getElementById("course").value;console.log(t);var a=document.getElementById("body").value;console.log(a);var n=document.getElementById("title").value;if(console.log(n),"USC Courses"===t||!a||!n)return alert("All fields must be filled"),e.preventDefault(),void e.stopPropagation();alert("Your Question has been added to Virtual Sal")},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h1",{className:"titleFormat"},"Ask a Question"),r.a.createElement("br",null),r.a.createElement(h.a,{onSubmit:this.handlesubmit,className:"formControl"},r.a.createElement(h.a.Row,null,r.a.createElement(h.a.Group,{controlId:"title"},r.a.createElement(h.a.Label,{className:"questionLabel"},"Question Title"),r.a.createElement(h.a.Control,{className:"answerField",placeholder:"Enter title"}))),r.a.createElement(h.a.Row,null,r.a.createElement(h.a.Group,{controlId:"course"},r.a.createElement(h.a.Label,{className:"questionLabel"},"What USC Computer Science Course relates most to the question?"),r.a.createElement(h.a.Control,{className:"answerField",as:"select"},r.a.createElement("option",{value:"USC Courses",defaultValue:!0},"Select Course"),r.a.createElement("option",{value:"CSCI 103"},"CSCI 103"),r.a.createElement("option",{value:"CSCI 201"},"CSCI 201"),r.a.createElement("option",{value:"CSCI 104"},"CSCI 104"),r.a.createElement("option",{value:"CSCI 170"},"CSCI 170"),r.a.createElement("option",{value:"CSCI 109"},"CSCI 109")))),r.a.createElement(h.a.Row,null,r.a.createElement(h.a.Group,{controlId:"body"},r.a.createElement(h.a.Label,{className:"questionLabel"},"Enter Question"),r.a.createElement(h.a.Control,{className:"answerField",as:"textarea",cols:"50"}))),r.a.createElement("div",{class:"submitButon"},r.a.createElement(D.a,{type:"submit"},"Ask Question"))))}}]),a}(n.Component)),q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchKey:""},e.handleSearch=function(t){e.setState({searchKey:t})},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(i.a,null,r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/dashboard"},null===localStorage.getItem("username")?r.a.createElement(A,{onSearch:this.handleSearch}):r.a.createElement(B,{onSearch:this.handleSearch})),r.a.createElement(C.a,{path:"/dashboard/search-results"},r.a.createElement(L,{searchKey:this.state.searchKey})),k.map((function(e){return r.a.createElement(C.a,{path:"/dashboard/forum-id="+e.id},r.a.createElement(P,{key:e.id,question:e.question,upvotes:e.upvotes,downvotes:e.downvotes,thread:e.thread}))})),r.a.createElement(C.a,{path:"/dashboard/questions"},r.a.createElement(U,null))))}}]),a}(n.Component),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"dependentHome",value:function(){return localStorage.getItem("username")?"/dashboard":"/"}},{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement(i.b,{to:this.dependentHome(),className:"header",style:{color:"white"}},"VirtualSal"))}}]),a}(n.Component),M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(i.a,{basename:Object({NODE_ENV:"production",PUBLIC_URL:"/VirtualSal",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_ROUTER_BASE||""},r.a.createElement("div",{className:"AppContainer"},r.a.createElement(x,null),r.a.createElement("div",{className:"AppContentContainer"},r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/"},r.a.createElement(d,null)),r.a.createElement(C.a,{path:"/signin"},r.a.createElement(v,null)),r.a.createElement(C.a,{path:"/signup"},r.a.createElement(y,null)),r.a.createElement(C.a,{path:"/uploadSchedule"},r.a.createElement(g,null)),r.a.createElement(C.a,{path:"/dashboard"},r.a.createElement(q,null)),r.a.createElement(C.a,{path:"/info"},r.a.createElement(w,null)),r.a.createElement(C.a,{path:"/dashboard/questions"},r.a.createElement(U,null))))))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.f7ffdd74.chunk.js.map
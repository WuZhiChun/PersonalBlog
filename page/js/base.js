var randomTags = new Vue({
    el: "#random_tags",
    data: {
        tags:[],
    },
    computed: {
        randomColor: function () {
            return function () {
                var red= Math.random()*255;
                var green= Math.random()*255;
                var blue= Math.random()*255;
                return "rgb("+ red + "," + green + "," + blue +")";
            }
        },
        randomSize: function () {
            return function () {
                var size = (Math.random() * 20 + 12) + "px";
                return size;
            }
        }
    },
    created: function () {
        axios({
            method: "get",
            url:"/queryRandomTags",
        }).then(function (resp) {
            var result = [];
            for (var i = 0; i < resp.data.data.length ; i ++) {
                result.push({text:resp.data.data[i].tag, link: "/?tag=" + resp.data.data[i].tag})
            }
            randomTags.tags = result;
        })
    }

});

var newHot = new Vue({
    el: "#new_hot",
    data: {
      titleList:[],
    },
    created: function () {
        axios({
            method: "get",
            url: "/queryHotBlog",
        }).then(function (resp) {
            var result = [];
            for (var i = 0; i < resp.data.data.length; i++) {
                var temp ={};
                temp.title = resp.data.data[i].title;
                temp.link = "/blog_detail.html?bid=" + resp.data.data[i].id;
                result.push(temp);
            }
            newHot.titleList = result;
        })
    }
});

var newComments = new Vue({
    el: "#new_comments",
    data: {
        commentList: []
    },
    created: function () {
        axios({
            method: "get",
            url: "/queryNewComments",
        }).then(function (resp) {
            var result = [];
            for (var i = 0; i < resp.data.data.length; i++) {
                var temp ={};
                temp.name = resp.data.data[i].user_name;
                let time = resp.data.data[i].ctime;
                let date = new Date(time * 1000);
                let datetime = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日 " + date.getHours() + ":" + date.getMinutes()
                temp.date =datetime;
                temp.comment = resp.data.data[i].comments
                result.push(temp);
            }
            newComments.commentList = result;
        })
    }
});
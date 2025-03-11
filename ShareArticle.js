var baseUrl;
var BaseUrl;
var storyserail = 0;
var StoryMap = [];
var Orgid;
var currentPage = 0;
var isSmallImg = 0;

function GetBaseURL(url) {
    BaseUrl = url;
    baseUrl = url;
}

function GetStoryId() {

    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    var sharedUrl = window.location.href;
    for (var i = 0; i < url.length; i++) {
        var urlparam = url[i].split('=');
        if (urlparam[0].toLowerCase() == "orgid" || urlparam[0].toLowerCase() == "pictureid") {

            var sharedUrl = window.location.href;
            /*
             *var facebookshare = "http://www.facebook.com/sharer.php?u=" + sharedUrl;
              var googleshare = "https://plus.google.com/share?url=" + sharedUrl;
              var twittershare = "https://twitter.com/intent/tweet?url=" + sharedUrl;
              //var watsappshare = "whatsapp://send?text=" + sharedUrl;
              //var watsappshare = "https://api.whatsapp.com/send?text=" + sharedUrl;
              var watsappshare = "https://web.whatsapp.com/send?text=" + sharedUrl;
  
              $("#idfacebook").attr("href", facebookshare);
              //$("#idgoogleshare").attr("href", googleshare);
              $("#idtwittershare").attr("href", twittershare);
              $("#idwatsappshare").attr("href", watsappshare);
              $("#idemailshare").attr('sharelink', sharedUrl);
              */
            $("#link_WriteToEditor").attr('sharelink', sharedUrl);
            //$("#link_WriteToEditor").attr('ContentId', storyid);
            $("#link_WriteToEditor").attr('ContentType', 1);
            return urlparam[1];
        }
    }
}

function CreateUrl(OrgId) {
    Orgid = OrgId;
    // var Imageview = $("#ArticleViewType").val();

    var urlParams = new URLSearchParams(window.location.search);
    var eid = $("#EditionId").val();
    var imageview = urlParams.get('imageview');
    //  var EDITION_SLUG = $.cookie("EDITION_SLUG");

    //var url = encodeURIComponent(window.location.origin + baseUrl + "Home/ShareArticle?OrgId=" + OrgId + "&imageview=" + Imageview + "&standalone=1");

    var url = encodeURIComponent(window.location.origin + baseUrl + "article/" + EDITION_SLUG.trim() + "?OrgId=" + OrgId + "&eid=" + eid + "&imageview=" + imageview + "&standalone=1&device=desktop");

    var googleshare = "https://plus.google.com/share?url=" + url;
    var facebookshare = "http://www.facebook.com/sharer.php?u=" + url;
    var twittershare = "https://twitter.com/intent/tweet?url=" + url;
    //var watsappshare = "whatsapp://send?text=" + url;
    //var watsappshare = "https://api.whatsapp.com/send?text=" + url;
    var watsappshare = "https://web.whatsapp.com/send?text=" + url;
    // $("#idgoogleshare").attr('valhref', googleshare);
    $("#idfacebook").attr('valhref', facebookshare);
    $("#idtwittershare").attr('valhref', twittershare);
    $("#idwatsappshare").attr("valhref", watsappshare);
    $("#idemailshare").attr('sharelink', decodeURIComponent(url));
    $("#link_url").attr('sharelink', decodeURIComponent(url));




    //var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    //var sharedUrl = window.location.href;
    //for (var i = 0; i < url.length; i++) {
    //    var urlparam = url[i].split('=');
    //    if (urlparam[0].toLowerCase() == "pictureid") {
    //        var url = window.location.origin + baseUrl + "Home/ShareImage?Pictureid=" + OrgId;
    //        var googleshare = "https://plus.google.com/share?url=" + url;
    //        var facebookshare = "http://www.facebook.com/sharer.php?u=" + url;
    //        var twittershare = "https://twitter.com/intent/tweet?url=" + url;
    //        var watsappshare = "https://api.whatsapp.com/send?text=" + url;
    //        $("#idfacebook").attr('valhref', facebookshare);
    //        $("#idtwittershare").attr('valhref', twittershare);
    //        $("#idwatsappshare").attr("href", watsappshare);
    //        $("#idemailshare").attr('sharelink', url);
    //        $("#link_url").attr('sharelink', url);
    //    }
    //}
}

function openprintarticlepage() {

    var url = BaseUrl + "Home/PrintArticle?OrgId=" + Orgid;
    window.open(url, "_blank");
}

function CreateUrl_img(OrgId) {
    if (OrgId.length > 0) {
        // var url = window.location.origin + baseUrl + "Home/ShareImage?Pictureid=" + OrgId;
        var url = encodeURIComponent(window.location.origin + baseUrl + "image/" + EDITION_SLUG + "?Pictureid=" + OrgId + "&device=desktop");
        var googleshare = "https://plus.google.com/share?url=" + url;
        var facebookshare = "http://www.facebook.com/sharer.php?u=" + url;
        var twittershare = "https://twitter.com/intent/tweet?url=" + url;
        //var watsappshare = "whatsapp://send?text=" + url;
        //var watsappshare = "https://api.whatsapp.com/send?text=" + url;
        var watsappshare = "https://web.whatsapp.com/send?text=" + url;
        // $("#idgoogleshare").attr('valhref', googleshare);
        $("#idfacebook").attr('valhref', facebookshare);
        $("#idtwittershare").attr('valhref', twittershare);
        $("#idwatsappshare").attr("valhref", watsappshare);
        $("#idemailshare").attr('sharelink', decodeURIComponent(url));
        $("#link_url").attr('sharelink', decodeURIComponent(url));
    }
}

function CreateUrlForShareImage(OrgId) {

    // var url = window.location.origin + baseUrl + "Home/ShareImage?Pictureid=" + OrgId;
    var url = encodeURIComponent(window.location.origin + baseUrl + "image/" + EDITION_SLUG + "?Pictureid=" + OrgId + "&device=desktop");
    var googleshare = "https://plus.google.com/share?url=" + url;
    var facebookshare = "http://www.facebook.com/sharer.php?u=" + url;
    var twittershare = "https://twitter.com/intent/tweet?url=" + url;
    //var watsappshare = "https://api.whatsapp.com/send?text=" + url;
    var watsappshare = "https://web.whatsapp.com/send?text=" + url;
    // $("#idgoogleshare").attr('valhref', googleshare);
    $("#idfacebook").attr('valhref', facebookshare);
    $("#idtwittershare").attr('valhref', twittershare);
    $("#idwatsappshare").attr("valhref", watsappshare);
    $("#idemailshare").attr('sharelink', decodeURIComponent(url));
}

function div_article_view_empty() {
    $("#articleAdsPara").empty();
    $("#row_view h1").empty();
    $("#row_view h3").empty();
    $("#row_view h6").empty();
    $("#Kicker").empty();
    $("#byline").empty();
    $("#DateLine").empty();
    $("#Graphicimg").empty();
    $("#articleBigimage").empty();
    $("#BigsubArticle").empty();
    $("#subarticles").empty();
    $("#articleimage img").removeAttr('src');
    $("#subHeadline").empty();
    $("#divheading").empty();

    $("#div_article_image").empty();
    $("#body").empty();
    $("#byline").empty();
    $("#article_date").empty();
    //$("#ads_area_headLine").empty();
    //$("#imgView").empty();

}

function View_Article(Org_Id) {
    isSmallImg = 0;
    var isSubArticle = 0;
    var paraLength = 0;
    var SmallImg = 0;
    audioLstCount = 0;
    var windowWidth = $(window).width();
    var url = baseUrl + "User/ShowArticleView";
    var param = { OrgId: Org_Id };

    div_article_view_empty();
    var windowWidth = $(window).width();
    $.ajax({
        url: url,
        type: "Get",
        async: true,
        dataType: "json",
        data: param,
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus) {
            result = data;
            $("#loader").hide();
            var res2;
            var res3;
            if (result != "Error" && result != null) {
                $("#page_no_mobile").text("Page " + result.PageNumber);
                $("#divheading h1").empty();
                $("#divheading h3").empty();
                $("#div_article_image").empty();
                $("#body").empty();
                $("#byline").empty();
                $("#pageContent").scrollTop(0);
                $("#textView").show();
                $("#divheading").show();
                $("#imgView").empty();
                CreateUrl(Org_Id);

                var Image_view = $("#ArticleViewType").val();
                if (Image_view == "1") {
                    $('#audio_speak').css({ 'pointer-events': 'none', 'opacity': '.4' })
                } else {
                    $('#audio_speak').css({ 'pointer-events': '', 'opacity': '1' })
                }
                $("#row_view").attr("story_id", result.storyid);
                $("#row_view").attr("Edname", result.Edname);
                $("#link_WriteToEditor").attr('ContentId', result.storyid);
                // applyActiveClass(Org_Id);
                if (result.StoryContent != null) {
                    if (result.StoryContent.length > 0) {
                        var BigHeadline = result.StoryContent[0].BigHeadline;
                        var Body = result.StoryContent[0].Body;
                        var Headlines = result.StoryContent[0].Headlines;

                        if (ClientCode == "AJ") {
                            if (BigHeadline == "" && Body == "" && Headlines == "") {
                                $('#textview_a').css("opacity", ".4");
                                $('#textview_a').css('pointer-events', 'none');
                                $("#ArticleViewType").val("1"); //Means image view
                            }
                            else {
                                $("#ArticleViewType").val("0"); //Means text view
                            }
                        }
                        else {
                            if (BigHeadline == "" && Body == "" && Headlines == "") {
                                $('#textview_a').css("opacity", ".4");
                                $('#textview_a').css('pointer-events', 'none');
                                $("#ArticleViewType").val("1"); //Means image view
                            }
                        }
                    }
                    else {
                        $("#ArticleViewType").val("1");
                    }
                }
                else {
                    $("#ArticleViewType").val("1");
                }

                if ($("#ArticleViewType").val() == "0") {

                    $("#imageZoomOut").hide();
                    $("#imageZoomIn").css("display", "flex");

                    $("#imageZoomIn").css({
                        "pointer-events": "none",
                        "opacity": "0.4"
                    });

                    $("#btndecfont").css({
                        "pointer-events": "unset",
                        "opacity": "unset"
                    });

                    var subarticles = document.createElement('div');
                    if (result.StoryContent != null && result.StoryContent.length > 0) {
                        if (result.LinkedStoryIds != null && result.LinkedStoryIds != undefined) {
                            if (result.LinkedStoryIds.length > 0) {
                                for (var linkstorycounter = 0; linkstorycounter <= result.LinkedStoryIds.length; linkstorycounter++) {
                                    ShowLinkedStory(result.LinkedStoryIds[linkstorycounter]);
                                }
                            }
                        }
                        //ShowLinkedStory(result.LinkedStoryId);
                        $("#Kicker").text(result.HeadKicker);
                        for (var i = 0; i < result.StoryContent.length; i++) {

                            var urlTypeIcon = _linkedUrlType(result.UrlType, result.LinkedUrl);

                            $("#divheading").append(urlTypeIcon);
                            if (result.StoryContent[i].Headlines != "" && result.StoryContent[i].Headlines != null) {
                                var bigHeadline = result.StoryContent[i].BigHeadline;
                                for (var k = 0; k < result.StoryContent[i].Headlines.length; k++) {
                                    var headLine = document.createElement('span');
                                    if (k == bigHeadline) {
                                        $(headLine).addClass('head_line');
                                    }
                                    else {
                                        $(headLine).addClass("kicker");
                                    }
                                    $(headLine).html(result.StoryContent[i].Headlines[k]);
                                    $("#divheading").append(headLine);
                                }

                            }
                            $("#body").html(result.StoryContent[i].Body);
                            $("#body").css("font-size", $.cookie("fontsize"));

                            //=======sub article ======================================
                            $("#subarticles").empty();

                            $(subarticles).attr('id', 'subarticles');
                            $(subarticles).attr('class', 'subarticles');
                            if (result.StoryContent[i].SubArticle != null && result.StoryContent[i].SubArticle.length > 0) {
                                for (var j = 0; j < result.StoryContent[i].SubArticle.length; j++) {

                                    var blockb = result.StoryContent[i].SubArticle[j];

                                    for (var k = 0; k < blockb.headlines.length; k++) {

                                        var sub_article = document.createElement('div');
                                        $(sub_article).addClass('sub_article');

                                        var sub_article_head = document.createElement('span');
                                        $(sub_article_head).addClass('sub_article_head');
                                        $(sub_article_head).append(blockb.headlines[k]);
                                        //$(sub_article_head).css('font-size', '17px');
                                        $(sub_article).append(sub_article_head);
                                        $(subarticles).append(sub_article);
                                    }
                                    var subArticleSize = result.StoryContent[i].SubArticle[j].AttrWidth;
                                    var sub_article_body = document.createElement('div');
                                    $(sub_article_body).addClass('sub_article_body');
                                    $(sub_article_body).append(blockb.matter);
                                    $(sub_article).append(sub_article_body);
                                    if (subArticleSize <= 0) {
                                        $("#div_article_image").css("width", "35%");//float: right;
                                        $("#div_article_image").css("float", "right");
                                        $(subarticles).append(sub_article);
                                        isSubArticle = 1;
                                    }
                                    else {
                                        $("#BigsubArticle").attr('class', 'subarticles');
                                        $("#BigsubArticle").append(sub_article);
                                    }
                                }
                            }
                        }

                    }

                    res2 = result.LinkPicture;
                    if (result.LinkPicture != null) {

                        for (var j = 0; j < res2.length; j++) {
                            var mainDiv = document.createElement("div");
                            $(mainDiv).attr('img_Number', j);
                            $(mainDiv).addClass('main_img_Number', j);
                            var img = document.createElement("img");
                            var imgsrc = res2[j].fullpathlinkpic;
                            $(img).attr("src", imgsrc);

                            var rect_right = res2[j].rect_right;
                            var rect_left = res2[j].rect_left;
                            var lead = res2[j].Lead;
                            var Picid = res2[j].PictureId;
                            $(img).attr("picId", Picid);     // hover picid attribute
                            var h6 = document.createElement("h6");
                            var span = document.createElement("span");
                            var sp = $(span).text(res2[j].caption);
                            $(h6).append(sp);
                            var urlTypeIcon = _linkedUrlType(res2[j].UrlType, res2[j].LinkedUrl);
                            $(mainDiv).append(urlTypeIcon);
                            //if (rect_right - rect_left < 150)
                            if (lead == 0) {      // check for lead value from DB

                                $(".story-box").addClass("display_page_with_article");
                                $("#div_article_image").css("width", "35%");
                                $(img).css("max-width", "100%");
                                $("#div_article_image").css('float', 'right')
                                $(mainDiv).append(img).append(h6);
                                $("#div_article_image").append(mainDiv);
                                SmallImg++;

                            }
                            else {
                                $(mainDiv).append(img).append(h6);
                                $("#articleBigimage").append(mainDiv);
                            }

                        }
                    }


                    if (result.LinkPicture == null && (windowWidth > 1023)) {
                        $(subarticles).css("width", "35%");
                    }
                    $("#div_article_image").append(subarticles);
                    $("#Kicker").text(result.HeadKicker);
                    if (result.Byline != null)
                        $("#byline").text(result.Byline);
                    $("#byline").css("font-size", $.cookie("fontsize"));
                    if (result.Eddate != null)
                        $("#article_date").text(result.Eddate);
                    $("#article_date").css("font-size", $.cookie("fontsize"));
                    $('#DateLine').text(result.dateLine);
                    $("#DateLine").css("font-size", $.cookie("fontsize"));
                    $("#imgView").empty().hide();
                    $("#b_textView").show();
                }
                else {
                    try {

                        if (result.LinkedUrl.replace('#', '') != "") {
                            let urlTypeIcon = _linkedUrlType(result.UrlType, result.LinkedUrl);
                            $("#imgView").append(urlTypeIcon);
                        }

                        res3 = result.filepathstorypic;

                        $("#b_textView").hide();
                        $("#textView").hide();
                        $("#divheading").hide();

                        $("#btndecfont").css({
                            "pointer-events": "none",
                            "opacity": "0.4"
                        });


                        let img = document.createElement('img');
                        let imageBox = document.querySelector('#imgView');

                        // assign and onload event handler
                        img.addEventListener('load', (event) => {
                            console.log('The image has been loaded');

                            let imageBoxWidth = imageBox.clientWidth + 30;
                            let imageWidth = img.naturalWidth + 20;
                            console.log(imageWidth);
                            console.log(imageBoxWidth);
                            if (imageWidth > imageBoxWidth) {
                                //  debugger;

                                document.querySelector('#imageZoomIn').style.pointerEvents = "unset";
                                document.querySelector('#imageZoomIn').style.opacity = "unset";

                            }

                        });

                        // add image to the document

                        imageBox.appendChild(img);
                        imageBox.style.display = "block";
                        img.src = res3;

                        if (result.LinkedStoryIds != null && result.LinkedStoryIds != undefined) {
                            if (result.LinkedStoryIds.length > 0) {
                                for (var linkstorycounter = 0; linkstorycounter <= result.LinkedStoryIds.length; linkstorycounter++) {
                                    ShowLinkedStory(result.LinkedStoryIds[linkstorycounter]);
                                }
                            }
                        }
                        //ShowLinkedStory(result.LinkedStoryId);
                    }
                    catch (error) {
                        console.log(error);
                    }

                }

                $('#divstoryid').attr('storyid', result.storyid);

                $('#EditionId').val(result.EditionId);
                $('#EditionDate').val(result.Eddate);
                $('#PageId').val(result.PageId);

                $('#spn_date').text(result.headerdate);
                $('#spn_edition').text(result.Edname);

                var st = $('#divstoryid').attr('storyid');
                ShowFavourite(st);
                share_UserActionLog("Article visit", st, "", "Success", "Article visit on share page");

                showAdsBetweenStory('body p', 0, SmallImg);

                // if ($("#hd_IsImage").val == 1)
                //  Count_DSVF(0, 0, 1, 0, st, 1);
                // else
                //  Count_DSVF(0, 0, 1, 0, st, 0);

            }
        },
        error: function (e) {
            result = "Error";
            $("#loader").hide();
        }
    });

    // adscounter++;
}

function ShowLinkedStory(storyid) {
    $("#divlinkedstory").empty();
    if (storyid <= 0) {
        return;
    }
    var url = baseUrl + "Home/getstorydetail";
    var param = { Storyid: storyid };
    $.ajax({
        url: url,
        type: "Get",
        async: true,
        dataType: "json",
        data: param,
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus) {
            result = data;
            var res2;
            var res3;
            if (result != "Error") {
                var linkedStoryImg = document.createElement("div");
                var linkedBigimg = document.createElement("div");
                $("#row_view").attr("LinkedStoryId", storyid);
                var hdview = $("#hd_View").val();
                if ($("#ArticleViewType").val() == "0") {
                    if (result.StoryContent.length > 0) {

                        $(linkedStoryImg).attr('id', 'linkedimg');
                        for (var i = 0; i < result.StoryContent.length; i++) {
                            var urlTypeIcon = _linkedUrlType(result.UrlType, result.LinkedUrl);
                            $("#divlinkedstory").append(urlTypeIcon);
                            var divheadLine = document.createElement('div');
                            if (result.StoryContent[i].Headlines != "" && result.StoryContent[i].Headlines != null) {
                                //var bigHeadline = result.StoryContent[i].BigHeadline;
                                $(divheadLine).attr('id', 'divlinkedstoryheadline');
                                $(divheadLine).addClass('headline');
                                var bigHeadline = result.StoryContent[i].BigHeadline;
                                for (var k = 0; k < result.StoryContent[i].Headlines.length; k++) {
                                    var headLine = document.createElement('span');
                                    if (k == bigHeadline) {
                                        $(headLine).addClass('head_line');
                                    }
                                    else {
                                        $(headLine).addClass("kicker");
                                    }
                                    $(headLine).html(result.StoryContent[i].Headlines[k]);
                                    $(divheadLine).append(headLine);
                                }

                                $("#divlinkedstory").append(divheadLine);
                            }
                            var divbody = document.createElement('div');
                            $(divbody).attr('id', 'divlinkedstorybody');
                            $(divbody).html(result.StoryContent[i].Body);
                            // $(divbody + " p").css("font-size", $.cookie("fontsize"));
                            $("#divlinkedstory").append(linkedBigimg);
                            $("#divlinkedstory").append(linkedStoryImg);
                            $("#divlinkedstory").append(divbody);
                        }
                    }
                    res2 = result.LinkPicture;
                    for (var j = 0; j < res2.length; j++) {

                        var mainDiv = document.createElement("div");

                        $(mainDiv).attr('imgNumber', j);
                        $(mainDiv).addClass('div_linkedimg');
                        var img = document.createElement("img");
                        var span = document.createElement("span");
                        var div = document.createElement("div");
                        var Picid = res2[j].PictureId;
                        var imgsrc = res2[j].fullpathlinkpic;
                        var rect_right = res2[j].rect_right;
                        var rect_left = res2[j].rect_left;
                        var lead = res2[j].Lead;
                        $(img).attr("LinkedStorypicId", Picid);
                        //--------------crop image-----------------------
                        //var cropdiv = document.createElement("span");
                        //var imgcrop = document.createElement("img");
                        //$(imgcrop).attr("src", StaticCdn + "/img/ToolImage/crop.png");
                        //$(cropdiv).addClass("crope_icon hide");
                        //$(cropdiv).attr("id", "Linkedimgcropdiv" + j);


                        $(img).attr("src", imgsrc);
                        $(span).html(res2[j].caption);
                        $(span).addClass("article-image-caption");
                        //var urlTypeIcon = _linkedUrlType(res2[j].UrlType, res2[j].LinkedUrl);
                        //$(div).append(urlTypeIcon);
                        $(div).append(img);
                        $(div).append(span);
                        //$(cropdiv).append(imgcrop);
                        //$(mainDiv).append(cropdiv);
                        $(mainDiv).append(div);
                        //----------------end----------------------------
                        //if (rect_right - rect_left < 150)
                        if (lead == 0) {
                            $(".story-box").addClass("display_page_with_article");
                            $(linkedStoryImg).css("width", "35%");
                            $(linkedStoryImg).addClass('articleimage');
                            $(linkedStoryImg).css("float", "right");
                            $(img).css("max-width", "100%");

                            $(linkedStoryImg).append(mainDiv);
                        }
                        else {
                            if ($(".story-box").hasClass("display_page_with_article")) {
                                var Para = document.createElement("p");
                                $(Para).append(img);
                                $(div).append(Para);
                            }
                            $(img).css("max-width", "100%");
                            $(img).css("width", "auto");
                            $(linkedBigimg).append(mainDiv);
                        }

                    }



                }
                else {

                    $("#a_fontsize").css("pointer-events", "none");
                    $("#a_fontsize").css("opacity", "0.4");



                    res3 = result.filepathstorypic;
                    var img = document.createElement("img");
                    var imgsrc = res3;
                    $(img).attr("src", imgsrc);
                    $(img).css("max-width", "100%");
                    $(img).css("width", "auto");
                    $(img).css("cursor", "zoom-in");
                    $(img).click(function () {
                        var storyid = $("#row_view").attr('story_id');
                        var url = BaseUrl + "Home/GetOrgId";
                        var param = { OrgId: storyid };
                        var result = getResult(url, param);
                        var Imageview = $("#ArticleViewType").val();
                        if (result != "Error") {

                            //var urlquerstr = BaseUrl + "Home/ShareArticle?OrgId=" + result + "&imageview=" + Imageview;
                            // window.open(urlquerstr);
                        }
                    });
                    $(linkedStoryImg).addClass('articleimage');
                    $(linkedStoryImg).append(img);
                    $("#imgView").append(linkedStoryImg);
                    //$("#divlinkedstory").append(linkedStoryImg);

                }
            }
        },
        error: function (e) {
            result = "Error";
        }
    });

}

function ShareWindowOpen(event, Action, Status, Remark) {

    //var storyid = $("#row_view").attr('pic_org');
    var storyid = $("#row_view").attr('story_id');
    window.open(event, 'mywin', 'left=50,top=50,width=600,height=350,toolbar=0');
    share_UserActionLog(Action, storyid, "", Status, Remark);
    //if ($("#hd_IsImage").val == 1)
    //    Count_DSVF(0, 1, 0, 0, storyid, 1);
    //else
    Count_DSVF(0, 1, 0, 0, storyid, 0);

    if (Action == "Facebook share")
        SAM_Variables.TaskID = "102";
    else if (Action == "Twitter share")
        SAM_Variables.TaskID = "103";
    SAM_Variables.eventname = "Share Article";
    SAM_Variables.gaEvent = Action;
    SAM_Variables.status = "success";
    SAM_Variables.Contenttype = "Article";
    SAM_Variables.contentID = storyid;
    SAM_Variables.sharedon = Action;
    SAM_View(SAM_Variables);
}

function share_UserActionLog(Action, Id, View, Status, Remark) {

    var url = baseUrl + "Home/UserActionLog";

    var ActCode;
    if (Action == "Article visit")
        ActCode = "40";
    else if (Action == "Facebook share")
        ActCode = "102";
    else if (Action == "Google share")
        ActCode = "104";
    else if (Action == "Twitter share")
        ActCode = "103";
    else if (Action == "Email Share")
        ActCode = "100";

    var param = { useraction: Action, id: Id, view: View, status: Status, remark: Remark, ActionCode: ActCode };

    var result = getResultasync(url, param);

}

function fillMaps(result) {

    if (result != null && result.length > 0) {
        for (var i = 0; i < result.length; i++) {
            getStoriesOnPageForShare(result[i].PageId, result[i].PageNo);
        }
    }
}

function storyMapForDesktop(edid, eddate) {

    var url = BaseUrl + "Home/GetAllpages";

    var eddate = EditionDate;    //$.cookie("changeddate");
    var param = { editionid: edid, editiondate: eddate };

    $.ajax({
        url: url,
        type: "Get",
        async: true,
        dataType: "json",
        data: param,
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus) {
            result = data;

            totalpages = result.length;
            fillMaps(result);

        },
        error: function (e) {
            result = "Error";
        }
    });
}

function showShareMedia() {
    $("#sharemedianame").dialog("open");
}

function getStoriesOnPageForShare(pageId, PageNo) {

    var url = baseUrl + "Home/getStoriesOnPage";
    var param = { pageid: pageId };
    //var result = getResultnew(url, param);
    $.ajax({
        url: url,
        type: "Get",
        async: true,
        dataType: "json",
        data: param,
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus) {
            result = data;

            if (result != "Error") {
                if (result != null && result.length > 0) {
                    for (var i = 0; i < result.length; i++) {

                        StoryMap.push({ OrgId: result[i].OrgId, PageNo: PageNo, story_id: result[i].storyid });
                        // ---show story ---footer
                        var count = 0;
                        var articleIndex = 0;
                        var ArticleSeq = [];
                        $(StoryMap).each(function (k, arr) {
                            if (arr.PageNo == currentPage) {
                                ArticleSeq.push(arr.OrgId);
                                //  articleIndex = (ArticleSeq.indexOf(arr.OrgId) + 1);
                                count = count + 1;
                                return true;
                            }
                        });
                        articleIndex = (ArticleSeq.indexOf(Orgid) + 1);
                        $('#page_no_mobile').text("Page " + currentPage);
                        $("#PageQue").text("Page " + currentPage + "/" + totalpages + " | " + "Article " + articleIndex + "/" + count);
                        //------------end---------------------
                    }
                }
            }
        },
        error: function (e) {
            result = "Error";
        }
    });

};

function DownloadAsPdfArticle(storyid, contenttype) {

    window.location = (baseUrl + "Home/downloadpdfarticle?id=" + storyid + "&type=" + contenttype);
    Count_DSVF(1, 0, 0, 0, storyid, 0);
}

function downloadHtml(storyid, contenttype) {

    var url = baseUrl + "Home/DownloadArticleHtml";
    var param = { 'sid': storyid, 'type': contenttype };
    var result = getResult(url, param);
    if (result.status) {
        var content = document.getElementById("row_view").innerHTML;
        var DOCTYPE = "<!DOCTYPE html>\n";
        DOCTYPE = DOCTYPE + "<html>\n";
        DOCTYPE = DOCTYPE + "<head>\n";
        DOCTYPE = DOCTYPE + "<meta charset='utf-8' />\n";
        DOCTYPE = DOCTYPE + "</head>\n";
        DOCTYPE = DOCTYPE + "<body style='max-width: 100%;'>\n";
        DOCTYPE = DOCTYPE + content + "\n</body>\n</html>";
        var filename = result.FileName;
        var blob = new Blob([DOCTYPE], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, filename);
        } else {
            var link = document.createElement("a");
            if (link.download !== "undefined") { // feature detection
                // Browsers that support HTML5 download attribute
                var url1 = URL.createObjectURL(blob);
                link.setAttribute("href", url1);
                link.setAttribute("download", filename);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }
    else {
        $.notify({
            message: result.message
        }, {
                type: 'success',
                delay: 2000,
                offset: {
                    x: 400,
                    y: 25
                }
            });
    }
}

function showemailsharepopup() {
    $("#Sharepopup").dialog("close");
    $("#EmailShare").dialog("open");

    $('#divEsharemessage').hide();
    var link = $("#idemailshare").attr('sharelink');
    $("#Idpara_share_email").text(link);
}

function SharePopUp() {

    $("#Sharepopup").dialog("open");
}

function ShareEmaillink(toemail) {

    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    var FromEmail = $("#txtshareFromEmail").val();
    if (FromEmail == '') {
        $('#divEsharemessage').text('Enter your name/email id !!');
        $('#divEsharemessage').show();
        $("#txtshareFromEmail").focus();
        return false;
    }

    if (toemail == '') {
        $('#divEsharemessage').text('Enter Share Email !!');
        $('#divEsharemessage').show();
        $("#txtshareEmail").focus();
        return false;
    }
    if (expr.test(toemail)) {
        $('#divEsharemessage').show();
        $('#divEsharemessage').text("Please wait..");

        setTimeout(function () {
            var url = "";
            if (baseUrl == "undefined" || baseUrl == undefined) {
                url = BaseUrl + "Home/ShareSendMail";
            }
            else {
                url = baseUrl + "Home/ShareSendMail";
            }

            var link = $("#idemailshare").attr('sharelink');
            var param = { Link: link, ToEmail: toemail, FromEmail: FromEmail };
            var result = getResult(url, param);
            var storyid = $('#divstoryid').attr('storyid');

            if (result) {

                Removecropnew();
                $("#spn_cropbtn").removeClass("active");
                $("#spn_cropbtn").addClass("inactive");

                share_UserActionLog("Email Share", storyid, "", "Success", "Email share successfully to email: " + toemail);
                $('#divEsharemessage').hide();
                $("#EmailShare").dialog("close");
                $.notify("Link shared successfully.", "success");

                try {
                    if ($("#hd_IsImage").val == 1)
                        Count_DSVF(0, 1, 0, 0, StoryId, 1);
                    else
                        Count_DSVF(0, 1, 0, 0, StoryId, 0);

                    SAM_Variables.TaskID = "100";
                    SAM_Variables.eventname = "Share Article";
                    SAM_Variables.gaEvent = "Email Share";
                    SAM_Variables.status = "success";
                    SAM_Variables.Contenttype = "Image";
                    SAM_Variables.contentID = StoryId;
                    SAM_Variables.sharedon = "Email Share";
                    SAM_View(SAM_Variables);
                } catch (e) { }

            }
            else {
                $("#divEsharemessage").text("Issue while sharing link. ")
                share_UserActionLog("Email Share", storyid, "", "Failed", "Email share is failed to email: " + toemail)
            }

        }, 1000);

    }
    else {
        $('#divEsharemessage').show();
        $('#divEsharemessage').text("Enter Valid Share Email !!");
        $("#txtshareEmail").focus();
    }

}

function favouritest() {

    var url = baseUrl + "Home/favourite";
    var stId = $('#divstoryid').attr('storyid');
    var param = { storyid: stId };
    var result = getResult(url, param);
    if (result != "Error") {
        if (result.status) {

            $("#favourite").attr('title', globalCultureDB['RemoveFav']);
            $("#favourite label").text(globalCultureDB['RemoveFav']);

            $("#lbl_label_mobile").text(globalCultureDB['MobileRemoveFav']);

            $("#favourite > i").removeClass("si-heart");
            $("#favourite > i").addClass("si-heart-fill");
            alert_Mesage_Selector("#favourite", "bottom", "success", globalCultureDB['FavouriteAddedSuccessText'], 1500);

            Count_DSVF(0, 0, 0, 1, stId, 0);
            SAM_Variables.eventname = "Add favourite Article";
            SAM_Variables.status = "success";
            SAM_Variables.Pageview = "Solo";
            SAM_Variables.Contenttype = "Article";
            SAM_Variables.contentID = stId;
            SAM_View(SAM_Variables);
        }
        else {
            alert_Mesage_Selector("#favourite", "bottom", "error", result.message, 1500);

        }
    }
}

function delfavouritest() {

    var url = baseUrl + "Home/Delfavourite";
    var stId = $('#divstoryid').attr('storyid');
    var param = { storyid: stId };
    var result = getResult(url, param);

    if (result != "Error") {

        if (result.status) {

            $("#favourite").attr('title', globalCultureDB['Savefav']);
            $("#favourite label").text(globalCultureDB['Savefav']);

            $("#favourite .label_mobile").text(globalCultureDB['Mobilefav']);

            $("#favourite > i").removeClass("si-heart-fill");
            $("#favourite > i").addClass("si-heart");
            alert_Mesage_Selector("#favourite", "bottom", "success", globalCultureDB['FavouriteRemoveSuccessText'], 1500);
            SAM_Variables.eventname = "Delete favourite Article";
            SAM_Variables.status = "success";
            SAM_Variables.Contenttype = "Article";
            SAM_Variables.contentID = stId;
            SAM_View(SAM_Variables);
        }
        else {
            alert_Mesage_Selector("#favourite", "bottom", "error", result.message, 1500);

        }
    }
}

function ShowFavourite(storyid) {
    var url = baseUrl + "Home/Showfavourite";
    var param = { storyid: storyid };
    $.ajax({
        url: url,
        type: "Get",
        async: true,
        dataType: "json",
        data: param,
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus) {
            favourite = data;
            if (favourite) {
                $("#favourite").attr('title', globalCultureDB['RemoveFav']);
                $("#favourite label").text(globalCultureDB['RemoveFav']);
                $("#favourite #lbl_label_desktop").text(globalCultureDB['RemoveFav']);
                $("#favourite .label_mobile").text(globalCultureDB['MobileRemoveFav']);
                $("#favourite > i").removeClass("si-heart");
                $("#favourite > i").addClass("si-heart-fill");
            }
            else {
                $("#favourite").attr('title', globalCultureDB['Savefav']);
                $("#favourite label").text(globalCultureDB['Savefav']);
                $("#favourite #lbl_label_desktop").text(globalCultureDB['Savefav']);
                $("#favourite .label_mobile").text(globalCultureDB['Mobilefav']);
                $("#favourite > i").removeClass("si-heart-fill");
                $("#favourite > i").addClass("si-heart");
            }
        },
        error: function (e) {
            result = "Error";
        }
    });

}

function OpenDivPopUpZoom() {

    $("#divPopUpZoom").dialog("open");
    // var bodytxt = $("#body p:first").text();
    let bodytxt = $("#body p").text().substring(0, 150);
    if (bodytxt.trim() == "") {
        bodytxt = $("p").text().substring(0, 150);
    }
    $("#zoomtxtpreview").text(bodytxt);

}

function zoomIn() {
    // Increase Font Size
    var curSize = $('#body').css('fontSize');
    var newSize = parseInt(curSize.replace("px", "")) + 1;
    if (newSize < 30) {
        $('#body').css("fontSize", newSize + "px");
        $('#body > p').css("fontSize", newSize + "px");
        $('#byline').css("fontSize", newSize + "px");
        $('#article_date').css("fontSize", newSize + "px");
        $('#DateLine').css("fontSize", newSize + "px");
        $('#zoomtxtpreview').css("fontSize", newSize + "px");

        $('#divlinkedstory').css("fontSize", newSize + "px");
        $('#divlinkedstorybody > p').css("fontSize", newSize + "px");

        $('.sub_article_head').css("fontSize", newSize + "px");
        $('.sub_article_body > p').css("fontSize", newSize + "px");

        $('#articleBigimage > span').css("fontSize", newSize + "px");
    }

    curSize = $('#zoomtxtpreview').css('fontSize');

}

function zoomOut() {
    // Decrease Font Size
    var curSize = $('#body').css('fontSize');
    var newSize = parseInt(curSize.replace("px", "")) - 1;
    if (newSize >= 16) {
        $('#body').css("fontSize", newSize + "px");
        $('#body > p').css("fontSize", newSize + "px");
        $('#byline').css("fontSize", newSize + "px");
        $('#article_date').css("fontSize", newSize + "px");
        $('#DateLine').css("fontSize", newSize + "px");

        $('#divlinkedstory').css("fontSize", newSize + "px");
        $('#divlinkedstorybody > p').css("fontSize", newSize + "px");

        $('.sub_article_head').css("fontSize", newSize + "px");
        $('.sub_article_body > p').css("fontSize", newSize + "px");

        $('#articleBigimage > span').css("fontSize", newSize + "px");
    }

    var curSize = $('#zoomtxtpreview').css('fontSize');
    var newSize = parseInt(curSize.replace("px", "")) - 1;
    if (newSize >= 16)
        $('#zoomtxtpreview').css("fontSize", newSize + "px");

}

function closewindow() {
    window.top.close();
    window.history.back();

}

function linkedUrlPopup(eve) {
    var width = window.innerWidth * 0.66;
    // define the height in
    var height = width * window.innerHeight / window.innerWidth;
    // Ratio the hight to the width as the user screen ratio
    window.open(eve.href, 'newwindow', 'width=' + width + ', height=' + height + ', top=' + ((window.innerHeight - height) / 2) + ', left=' + ((window.innerWidth - width) / 2));
    return false;
}

function _linkedUrlType(UrlType, LinkedUrl) {
    var Span = null;
    if (LinkedUrl.replace('#', '') != "") {
        if (UrlType > 0) {
            Span = document.createElement('span');
            $(Span).addClass('urlIcon');
            var ancr = document.createElement('a');
            $(ancr).attr('href', LinkedUrl);
            $(ancr).attr('onclick', 'return linkedUrlPopup(this)');
            var _img = document.createElement('img');
            if (UrlType == 1) {
                $(_img).attr('src', BaseCDNUrl + "/img/ContentType.png");
            }
            if (UrlType == 2) {
                $(_img).attr('src', BaseCDNUrl + "/img/VideoType.png");
            }
            if (UrlType == 3) {
                $(_img).attr('src', BaseCDNUrl + "/img/PodcastType.png");
            }

            $(_img).addClass('linkurl');
            $(ancr).append(_img);
            $(Span).append(ancr);
        }
    }
    return Span;

}

function copyLink() {
    let link = $("#link_url").attr('sharelink');

    if (ClientCode.toLowerCase() == "mm") {
        navigator.clipboard.writeText(link).then(() => {
            console.log('Copied!');
            $("#socialShareModal").notify("Url copied", { position: "bottom right", className: "success" });
        },
            () => {
                console.log('Copy error');
                $("#socialShareModal").notify("Could not copy url", { position: "bottom right", className: "error" });
            });
    } else {
        navigator.clipboard.writeText(link).then(() => {
            console.log('Copied!');
            $("#link_url").notify("Url copied", { position: "bottom right", className: "success" });
        },
            () => {
                console.log('Copy error');
                $("#link_url").notify("Could not copy url", { position: "bottom right", className: "error" });
            });
    }
    
}

function sharePageLoad() {
    var popupwidth = $(window).width();
    if (popupwidth > 767)
        popupwidth = 600;
    else
        popupwidth = 300;


    $('body').keydown(function (e) {
        // ESCAPE key pressed
        if (e.keyCode == 27) {
            $("#AgreePopUp").dialog('open');

        }

    });
    getAndApplyCurrentCulture();
    var screenwidth = $(window).width();
    if (screenwidth >= 1024) {
        //$("#idwatsappshare").hide();
    }
    var windowHeight = $(window).height();
    var height = windowHeight - 278;
    $(".share_article_container").css('min-height', windowHeight);

    // code for enable hover,focus,active in iOs touch devices
    $('body').bind('touchstart', function () { });
    var theme = $.cookie("theme");
    if (theme != null) {
        $("#MainBody").addClass(theme);
    }
    else {
        $("#MainBody").addClass("theme-day");
    }

    $("#AgreePopUp").dialog({
        autoOpen: false,
        width: popupwidth,
        height: "auto",
        modal: true,
        resizable: false,
        minHeight: 120,
        fluid: true,
        dialogClass: 'agree_popup',
        open: function (event, ui) {
            $(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
            $('.ui-dialog').css('z-index', 1080);
            $('.ui-widget-overlay').css({ 'z-index': 1070, 'background-color': '#000', 'opacity': '0.5' });
            // $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();     //for all
        }

    });

    $("#btnIagree").click(function () {

        var date = new Date();
        var days = 300;
        date.setTime(date.getTime() + (300 * 24 * 60 * 60 * 1000));
        $.cookie("Privacypolicy", true, { expires: date });
        // frompop = true;
        $("#AgreePopUp").dialog('close');
        //  Checklogin();

    })
    if (!$.cookie("Privacypolicy") && IsEurope != "") {
        $("#AgreePopUp").dialog("open");

    }
    else {
        //Checklogin();
    }

    $("#Sharepopup").dialog({
        autoOpen: false,
        width: 300,
        modal: true,
        resizable: false,
        minHeight: 120,
        fluid: true,
        dialogClass: 'base_theme share_dialog',
        close: function (event, ui) {
        },
        open: function (event, ui) {
            $('.ui-dialog').css('z-index', 1100);
            $('.ui-widget-overlay').css({ 'z-index': 1040, 'background-color': '#000', 'opacity': '0.5' });
        }
    });



    $("#EmailShare").dialog({
        autoOpen: false,
        width: 300,
        modal: true,
        resizable: false,
        minHeight: 120,
        fluid: true,
        dialogClass: 'base_theme email_share_dialog',
        close: function (event, ui) {
        },
        open: function (event, ui) {
            $('.ui-dialog').css('z-index', 1100);
            $('.ui-widget-overlay').css({ 'z-index': 1040, 'background-color': '#000', 'opacity': '0.5' });
        }
    });

    $("#divPopUpZoom").dialog({
        autoOpen: false,
        width: 300,
        height: 300,
        // width: "auto",
        // maxWidth: 250,
        modal: true,
        resizable: false,
        minHeight: 120,
        fluid: true,
        dialogClass: 'base_theme popup_text_resize',
        open: function (event, ui) {
            $('.ui-dialog').css('z-index', 1050);
            $('.ui-widget-overlay').css({ 'z-index': 1040, 'background-color': '#000', 'opacity': '0.5' });

        },
        close: function (event, ui) {
        }
    });

    $("#downloadpdf").click(function () {

        var storyid = $('#divstoryid').attr('storyid');
        DownloadAsPdfArticle(storyid, 3)

    });

    $("#DownloadHTML").click(function () {

        var storyid = $('#divstoryid').attr('storyid');
        //if (Dproduct == "iPad" || Dproduct == "iPhone") {
        //    window.location = (baseUrl + "Home/downloadpdfarticle?id=" + storyid + "&type=" + 3);
        //}
        //else {
        downloadHtml(storyid, 3);
        // }
        Count_DSVF(1, 0, 0, 0, storyid, 0);
    });
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    var imageviewvalue = urlParams("imageview");
    Orgid = GetStoryId();
    $("#loader").show();

    try {
        View_Article(Orgid);
    }
    catch (error) { console.log(error) }

    if (url.length > 1) {
        var theme1 = $.cookie("theme");

        if (theme1 == "theme-night") {
            //$("#ArticleViewType").val(url[1].substring(url[1].indexOf('=') + 1));
            $("#ArticleViewType").val(imageviewvalue);
            if ($("#ArticleViewType").val() == 0) {
                $("#textview").attr('src', BaseCDNUrl + '/img/text-view-rev-night.png');
                $('#textview').css("opacity", ".4");
                $('#textview').css('pointer-events', 'none');
            }
            else {
                $("#pictxtview").attr('src', BaseCDNUrl + '/img/image-view-rev-night.png');
                $('#pictxtview_a').css("opacity", ".4");
                $('#pictxtview_a').css('pointer-events', 'none');
            }
        }
        else {
            //$("#ArticleViewType").val(url[1].substring(url[1].indexOf('=') + 1));
            $("#ArticleViewType").val(imageviewvalue);
            //var fbShar = url[1].substring(url[1].indexOf('=') + 1);
            var fbShar = imageviewvalue;
            if (fbShar.length > 1) {
                $("#ArticleViewType").val(0);

            }
            if ($("#ArticleViewType").val() == 0) {
                $("#textview").attr('src', BaseCDNUrl + '/img/text-view-w-dark-grey.png');
                $('#textview_a').css("opacity", ".4");
                $('#textview_a').css('pointer-events', 'none');
            }
            else {
                $("#pictxtview").attr('src', BaseCDNUrl + '/img/image-view-w-dark-grey.png');
                $('#pictxtview_a').css("opacity", ".4");
                $('#pictxtview_a').css('pointer-events', 'none');
                $('#btndecfont').css("opacity", ".4");
                $('#btndecfont').css('pointer-events', 'none');
            }
        }
    } else {
        $("#ArticleViewType").val(0);
        $("#textview").attr('src', BaseCDNUrl + '/img/text-view-rev-night.png');
        $('#textview_a').css("opacity", ".4");
        $('#textview_a').css('pointer-events', 'none');
    }
    $("#pictxtview_a").click(function () {

        var theme = $.cookie("theme");
        if (theme == "theme-night") {
            $("#pictxtview").attr('src', BaseCDNUrl + '/img/image-view-rev-night.png');
        }
        else {
            $("#pictxtview").attr('src', BaseCDNUrl + '/img/image-view-w-dark-grey.png');
        }

        $("#textview_a").css("pointer-events", "");
        $("#textview_a").css("opacity", "1");
        $('#textview').css("pointer-events", "");
        $('#textview').css("opacity", "unset");
        $('#pictxtview_a').css("opacity", ".4");
        $('#pictxtview_a').css('pointer-events', 'none');
        $('#btndecfont').css("opacity", ".4");
        $('#btndecfont').css('pointer-events', 'none');
        $("#ArticleViewType").val("1");
        if (Enable_textview == "1") {
            View_Article(Orgid);
        }

        var queryParams = new URLSearchParams(window.location.search);
        queryParams.set("imageview", "1");
        // var eid = $("#EditionId").val();
        var url = baseUrl + "article/" + EDITION_SLUG + "?" + queryParams.toString();

        var obj = { Page: Orgid, Url: url };
        history.pushState(obj, obj.Page, obj.Url);

        let currentindex;
        $(StoryMap).each(function (i, arr) {
            if (arr.OrgId == Orgid) {
                currentindex = i;
                return true;
            }
        });
        let pageNo = StoryMap[currentindex].PageNo;
        let sid = $("#row_view").attr('story_id');
        let Edname = $("#row_view").attr('Edname');
        let Eddate = $("#EditionDate").val();
        AddtoGAArt('M/' + Edname, Eddate, 'Page ' + pageNo, sid, 'Article textview click');

    });


    $("#textview_a").click(function () {

        var theme = $.cookie("theme");

        if (theme == "theme-night") {
            $("#textview").attr('src', BaseCDNUrl + '/img/text-view-rev-night.png');
        }
        else {
            $("#textview").attr('src', BaseCDNUrl + '/img/text-view-w-dark-grey.png');
        }

        $("#pictxtview_a").css("pointer-events", "");
        $("#pictxtview_a").css("opacity", "unset");
        $('#textview_a').css("opacity", ".4");
        $('#textview_a').css('pointer-events', 'none');
        $('#btndecfont').css("opacity", "unset");
        $('#btndecfont').css("pointer-events", "");
        $("#ArticleViewType").val("0");
        View_Article(Orgid);

        var queryParams = new URLSearchParams(window.location.search);
        queryParams.set("imageview", "0");
        // var eid = $("#EditionId").val();
        var url = baseUrl + "article/" + EDITION_SLUG + "?" + queryParams.toString();

        var obj = { Page: Orgid, Url: url };
        history.pushState(obj, obj.Page, obj.Url);


        let currentindex;
        $(StoryMap).each(function (i, arr) {
            if (arr.OrgId == Orgid) {
                currentindex = i;
                return true;
            }
        });
        let pageNo = StoryMap[currentindex].PageNo;
        let sid = $("#row_view").attr('story_id');
        let Edname = $("#row_view").attr('Edname');
        let Eddate = $("#EditionDate").val();
        AddtoGAArt('M/' + Edname, Eddate, 'Page ' + pageNo, sid, 'Article textview click');

    });

    $("#favourite").click(function () {
        if ($("#favourite > i").hasClass("si-heart")) {
            favouritest();
        } else {
            delfavouritest();
        }
    });

    $("#textview_a").attr('title', globalCultureDB['TextView']);
    $("#lblTxtView").text(globalCultureDB['TextView']);
    $("#lblTxtViewMob").text(globalCultureDB['TextViewMob']);

    $("#lblShareMob").text(globalCultureDB['lblShareMob']);
    $("#pictxtview_a").attr('title', globalCultureDB['ImgView']);
    $("#lblPicView").text(globalCultureDB['ImgView']);
    $("#lblPicViewMob").text(globalCultureDB['ImgViewMob']);
    $("#share").attr('title', globalCultureDB['FullView']);
    $("#lblFulView").text(globalCultureDB['FullView']);
    $("#downloadpdf").attr('title', globalCultureDB['DownLoadTitle']);
    $("#lblDownLoad").text(globalCultureDB['DownLoadLabel']);
    $("#lblDownLoadMob").text(globalCultureDB['DownLoadLabelMob']);
    $("#DownloadHTML").attr('title', globalCultureDB['DownloadHtmlTitle']);
    $("#lblDownloadhtml").text(globalCultureDB['DownloadHtml']);
    $("#lblDownloadhtmlMob").text(globalCultureDB['DownloadhtmlMob']);
    $("#btndecfont").attr('title', globalCultureDB['fontInc']);
    $("#lblFontInc").text(globalCultureDB['fontInc']);
    $("#startSpeaking").attr('title', "Listen");

    if (Enable_textview == "1") {
        $("#textview_a").closest("li").css("display", "");
    }
    else {
        $("#textview_a").closest("li").css("display", "none");
        //$('#pictxtview_a').click(); https://freedcamp.com/dashboard/tasks//panel/task/53275859
        //$('#pictxtview_a').css("opacity", ".4");
        //$('#pictxtview_a').css('pointer-events', 'none')
    }
    if (Enable_imageview == "1") {
        $("#pictxtview_a").closest("li").css("display", "");
    }
    else {
        $("#pictxtview_a").closest("li").css("display", "none");
        //$("#textview_a").click(); https://freedcamp.com/dashboard/tasks//panel/task/53275859
        //$('#textview_a').css("opacity", ".4");
        //$('#textview_a').css('pointer-events', 'none');
    }

    var popupwidth = $(window).width();
    if (popupwidth > 767)
        popupwidth = 600;
    else
        popupwidth = 300;
    $("#ContentFeedbackPopup").dialog({
        title: "Email ",   //Write to Editor 
        autoOpen: false,
        width: popupwidth,
        height: "auto",
        position: { my: 'top', at: 'top+150' },
        modal: true,
        resizable: false,
        minHeight: 120,
        fluid: true,
        dialogClass: 'base_theme landing_page_popup',
        open: function (event, ui) {
            $('.ui-dialog').css('z-index', 1050);
            $('.ui-widget-overlay').css({ 'z-index': 1040, 'background-color': '#000', 'opacity': '0.5' });
            $('.ui-dialog .ui-dialog-titlebar-close').css({ 'width': '25px', 'height': '25px', 'top': '44%' });
            $('#UserFeedbackMessage').focus();
        },
        close: function (event, ui) {
        }
    });

    function ContentFeedback_Callback(data) {
        result = data;
        if (result != undefined) {
            if (result.status == true || result.status == 'true') {
                alert(globalCultureDB['MsgSentSuccessfullyKey']);
                $('#WaitLoader').css('visibility', 'hidden');
                $('#btn_SendFeedback').attr("disabled", false);
                $('#UserFeedbackMessage').attr("disabled", false);
                $("#ContentFeedbackPopup").dialog("close");
            }
            else {
                alert(globalCultureDB['ErrorInFeedbackKey']);
                $('#WaitLoader').css('visibility', 'hidden');
                $('#btn_SendFeedback').attr("disabled", false);
                $('#UserFeedbackMessage').attr("disabled", false);
            }
        }
    }

    $("#btn_SendFeedback").click(function (event) {
        event.preventDefault();
        var contentUrl = $("#link_WriteToEditor").attr('sharelink');
        if (contentUrl != null || contentUrl != undefined) {
            var UserMessage = $('#UserFeedbackMessage').val();
            if (UserMessage != "") {
                $('#WaitLoader').css('visibility', 'visible');
                $('#btn_SendFeedback').attr("disabled", true);
                $('#UserFeedbackMessage').attr("disabled", true);
                var storyid = $("#link_WriteToEditor").attr('ContentId');
                var storyTitle = '';
                var contentType = $("#link_WriteToEditor").attr('ContentType');
                if (contentType == 1) {
                    if ($('#row_view').attr('story_id') == storyid) {
                        storyTitle = $('#row_view > #divheadline').text();
                    }

                    if (storyTitle == '') {
                        storyTitle = $('#row_view').find('#divheading').text();
                    }
                }
                var title = storyTitle;
                if (title != '') {
                    title = 'Story-Title : ' + title;
                }
                var url = BaseUrl + "User/contentFeedback";
                var param = { 'contenturl': contentUrl, 'contentId': storyid, 'contentType': contentType, 'feedback': UserMessage, 'feedbackTitle': title };
                param = JSON.stringify(param);
                //var result = getResultPost(url, param);
                var result = getResultPostAsync(url, param, ContentFeedback_Callback);
            }
            else {
                alert(globalCultureDB['InputFeedbackKey']);
                $('#UserFeedbackMessage').focus();
            }
        }
        else {
            alert(globalCultureDB['SelectStoryKey']);
        }
    });

    if (window.location.href.indexOf('/article/') != -1)
        AdsBetweenStoryShareWeb();
    else
        AdsBetweenStoryPageListView();

    var refurl = document.referrer.toLowerCase();

    if (refurl.indexOf("myfavourite") > -1) {
        MyFavouritelist();
    }
    else {
        // storyMapForDesktop();
        var ediid = urlParams("eid");
        if (ediid == undefined || ediid == "undefined" || ediid == "") {
            ediid = $("#EditionId").val();
        }
        // var ediid = $.cookie('MainEditionId');
        GetSuplementSharePage(ediid, EditionDate);
    }

}

function shareImgPageLoad() {
    Orgid = GetStoryId();
    CreateUrl_img(Orgid);
    var popupwidth = $(window).width();
    if (popupwidth > 767)
        popupwidth = 600;
    else
        popupwidth = 300;


    $('body').keydown(function (e) {
        // ESCAPE key pressed
        if (e.keyCode == 27) {
            $("#AgreePopUp").dialog('open');

        }

    });
    getAndApplyCurrentCulture();
    var screenwidth = $(window).width();
    if (screenwidth >= 1024) {
        // $("#idwatsappshare").hide();
    }
    var windowHeight = $(window).height();
    var height = windowHeight - 278;
    $(".share_article_container").css('min-height', windowHeight);

    // code for enable hover,focus,active in iOs touch devices
    $('body').bind('touchstart', function () { });
    var theme = $.cookie("theme");
    if (theme != null) {
        $("#MainBody").addClass(theme);
    }
    else {
        $("#MainBody").addClass("theme-day");
    }

    $("#AgreePopUp").dialog({
        autoOpen: false,
        width: popupwidth,
        height: "auto",
        modal: true,
        resizable: false,
        minHeight: 120,
        fluid: true,
        dialogClass: 'agree_popup',
        open: function (event, ui) {
            $(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
            $('.ui-dialog').css('z-index', 1080);
            $('.ui-widget-overlay').css({ 'z-index': 1070, 'background-color': '#000', 'opacity': '0.5' });
            // $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();     //for all
        }

    });

    $("#btnIagree").click(function () {

        var date = new Date();
        var days = 300;
        date.setTime(date.getTime() + (300 * 24 * 60 * 60 * 1000));
        $.cookie("Privacypolicy", true, { expires: date });
        // frompop = true;
        $("#AgreePopUp").dialog('close');
        //  Checklogin();

    })
    if (!$.cookie("Privacypolicy") && IsEurope != "") {
        $("#AgreePopUp").dialog("open");

    }
    else {
        //Checklogin();
    }

    $("#Sharepopup").dialog({
        autoOpen: false,
        width: 300,
        modal: true,
        resizable: false,
        minHeight: 120,
        fluid: true,
        dialogClass: 'base_theme share_dialog',
        close: function (event, ui) {
        },
        open: function (event, ui) {
            $('.ui-dialog').css('z-index', 1100);
            $('.ui-widget-overlay').css({ 'z-index': 1040, 'background-color': '#000', 'opacity': '0.5' });
        }
    });




    $("#EmailShare").dialog({
        autoOpen: false,
        width: 300,
        modal: true,
        resizable: false,
        minHeight: 120,
        fluid: true,
        dialogClass: 'base_theme email_share_dialog',
        close: function (event, ui) {
        },
        open: function (event, ui) {
            $('.ui-dialog').css('z-index', 1100);
            $('.ui-widget-overlay').css({ 'z-index': 1040, 'background-color': '#000', 'opacity': '0.5' });
        }
    });

    $("#divPopUpZoom").dialog({
        autoOpen: false,
        width: 300,
        height: 300,
        // width: "auto",
        // maxWidth: 250,
        modal: true,
        resizable: false,
        minHeight: 120,
        fluid: true,
        dialogClass: 'base_theme popup_text_resize',
        open: function (event, ui) {
            $('.ui-dialog').css('z-index', 1050);
            $('.ui-widget-overlay').css({ 'z-index': 1040, 'background-color': '#000', 'opacity': '0.5' });

        },
        close: function (event, ui) {
        }
    });

    $("#downloadpdf").click(function () {

        var storyid = $('#divstoryid').attr('storyid');
        DownloadAsPdfArticle(storyid, 3)

    });

    $("#DownloadHTML").click(function () {

        var storyid = $('#divstoryid').attr('storyid');

        downloadHtml(storyid, 3);

        Count_DSVF(1, 0, 0, 0, storyid, 0);
    });

    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    $("#loader").show();
    $("#textview_a").attr('title', globalCultureDB['TextView']);
    $("#lblTxtView").text(globalCultureDB['TextView']);
    $("#lblTxtViewMob").text(globalCultureDB['TextViewMob']);

    $("#lblShareMob").text(globalCultureDB['lblShareMob']);
    $("#pictxtview_a").attr('title', globalCultureDB['ImgView']);
    $("#lblPicView").text(globalCultureDB['ImgView']);
    $("#lblPicViewMob").text(globalCultureDB['ImgViewMob']);
    $("#share").attr('title', globalCultureDB['FullView']);
    $("#lblFulView").text(globalCultureDB['FullView']);
    $("#downloadpdf").attr('title', globalCultureDB['DownLoadTitle']);
    $("#lblDownLoad").text(globalCultureDB['DownLoadLabel']);
    $("#lblDownLoadMob").text(globalCultureDB['DownLoadLabelMob']);
    $("#DownloadHTML").attr('title', globalCultureDB['DownloadHtmlTitle']);
    $("#lblDownloadhtml").text(globalCultureDB['DownloadHtml']);
    $("#lblDownloadhtmlMob").text(globalCultureDB['DownloadhtmlMob']);
    $("#btndecfont").attr('title', globalCultureDB['fontInc']);
    $("#lblFontInc").text(globalCultureDB['fontInc']);
    $("#startSpeaking").attr('title', "Listen");
}

function WriteToEditor() {
    $('#btn_SendFeedback').attr("disabled", false);
    $('#UserFeedbackMessage').val('');
    $('#WaitLoader').css('visibility', 'hidden');
    SAM_Variables.eventname = "Write to Editor";
    SAM_View(SAM_Variables);
    $("#ContentFeedbackPopup").dialog("open");
}

function previousArticle() {
    var previndex;
    $(StoryMap).each(function (i, arr) {
        if (arr.OrgId == Orgid) {
            previndex = i - 1;
            return true;
        }
    });
    if (previndex < 0) {
        alert("Your are already viewing first article.");
    }
    else if (previndex == undefined) {
        //window.location.href = baseUrl + "Login/LandingPage/"
    }
    else {
        $("#loader").show();
        Orgid = StoryMap[previndex].OrgId;
        pageNo = StoryMap[previndex].PageNo;

        if (Orgid != null) {

            var urlParams = new URLSearchParams(window.location.search);
            var imageview = urlParams.get('imageview');
            var eid = urlParams.get('eid');
            var page = Orgid;
            //var url = baseUrl + "home/ShareArticle?OrgId=" + Orgid + "&imageview=" + imageview;

            var url = baseUrl + "article/" + EDITION_SLUG + "?OrgId=" + Orgid + "&eid=" + eid + "&imageview=" + imageview + "&device=desktop";

            var obj = { Page: page, Url: url };
            history.pushState(obj, obj.Page, obj.Url);

            //window.location.href = baseUrl + "Home/ShareArticle?OrgId=" + Orgid + "&imageview=0";
            View_Article(Orgid);
            $("#page_no_mobile").text("Page " + pageNo);
            if (ClientCode != "SAK") {
                if (ClientCode != "LS") {
                    var sid = $("#row_view").attr('story_id');
                    var Edname = $("#row_view").attr('Edname');
                    //var Eddate = $.cookie("changeddate");
                    var Eddate = $("#EditionDate").val();
                    AddtoGAArt('M/' + Edname, Eddate, 'Page ' + pageNo, sid, 'Previous Article Button Click');
                    eventTrackingGA4("page_view", "ePaper", "page_share_article", "page_visit", "article_change", "Article change");
                }
            }
        }
    }
}

function nextArticle() {
    var nextindex;
    $(StoryMap).each(function (i, arr) {
        if (arr.OrgId == Orgid) {
            nextindex = i + 1;
            return true;
        }
    });

    var Length = StoryMap.length;
    if (nextindex < Length) {
        $("#loader").show();
        Orgid = StoryMap[nextindex].OrgId;
        pageNo = StoryMap[nextindex].PageNo;

        if (Orgid != null) {
            var urlParams = new URLSearchParams(window.location.search);
            var imageview = urlParams.get('imageview');
            var eid = urlParams.get('eid');
            var page = Orgid;
            //  var url = baseUrl + "home/ShareArticle?OrgId=" + Orgid + "&imageview=" + imageview
            var url = baseUrl + "article/" + EDITION_SLUG + "?OrgId=" + Orgid + "&eid=" + eid + "&imageview=" + imageview + "&device=desktop";
            var obj = { Page: page, Url: url };
            history.pushState(obj, obj.Page, obj.Url);
            //window.location.href = baseUrl + "Home/ShareArticle?OrgId=" + Orgid +"&imageview=0";
            View_Article(Orgid);
            $("#page_no_mobile").text("Page " + pageNo);
            if (ClientCode != "SAK") {
                if (ClientCode != "LS") {
                    var sid = $("#row_view").attr('story_id');
                    var Edname = $("#row_view").attr('Edname');
                    // var Eddate = $.cookie("changeddate");
                    var Eddate = $("#EditionDate").val();
                    AddtoGAArt('M/' + Edname, Eddate, 'Page ' + pageNo, sid, 'Next Article Button Click');
                    eventTrackingGA4("page_view", "ePaper", "page_share_article", "page_visit", "article_change", "Article change");
                }
            }
        }
    }
    else if (nextindex == undefined) {
        //window.location.href = baseUrl + "Login/LandingPage/";\

    }
    else {
        alert("Your are already viewing last article.");
    }
}

function urlParams(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function goTopage() {
    //var eid = $("#EditionId").val();
    //var eid = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&')[1].split('=')[1];
    var eid = urlParams("eid");
    if (eid == undefined || eid == "undefined" || eid == "") {
        eid = $("#EditionId").val();
    }
    var edate = $("#EditionDate").val();
    var pgid = $("#PageId").val();
    if (ClientCode == "PA") {
        // window.location.href = baseUrl + "Home/ArticleView?eid=" + eid + "&edate=" + edate + "&pgid=" + pgid + "&paid=" + eid + "&epedate=" + edate;
        switch (GotoViewType) {
            case "5":
                return window.location.href = BaseUrl + "home/NewsView";
            case "2":
                return window.location.href = baseUrl + "Home/ArticleView?eid=" + eid + "&edate=" + edate + "&pgid=" + pgid + "&paid=" + eid + "&epedate=" + edate;
            case "3":
                return window.location.href = baseUrl + "Home/FullPage?eid=" + eid + "&edate=" + edate + "&pgid=" + pgid + "&paid=" + eid + "&epedate=" + edate;
            case "1":
                return window.location.href = baseUrl + "Home/Index?eid=" + eid + "&edate=" + edate + "&pgid=" + pgid + "&paid=" + eid + "&epedate=" + edate;
            default:
                return window.location.href = BaseUrl + "home/ArticleView";
        }

    }
    else {
        //   window.location.href = baseUrl + "Home/ArticleView?eid=" + eid + "&edate=" + edate + "&pgid=" + pgid;

        switch (GotoViewType) {
            case "5":
                return window.location.href = BaseUrl + "home/NewsView";
            case "2":
                return window.location.href = baseUrl + "Home/ArticleView?eid=" + eid + "&edate=" + edate + "&pgid=" + pgid;
            case "3":
                return window.location.href = baseUrl + "Home/FullPage?eid=" + eid + "&edate=" + edate + "&pgid=" + pgid;
            case "1":
                return window.location.href = baseUrl + "Home/Index?eid=" + eid + "&edate=" + edate + "&pgid=" + pgid;
            default:
                return window.location.href = BaseUrl + "home/ArticleView";
        }

    }
}

function createImgGalleryOnStandaloneImage(data) {


    if (data.Gallery != null && data.Gallery.length > 0) {
        for (var i = 0; i < data.Gallery.length; i++) {

            var div_tr = document.createElement('div');
            $(div_tr).addClass("item");
            var img = document.createElement("img");
            var imgsrc = data.Gallery[i].Imagepath;
            $(img).attr('src', imgsrc);

            $(div_tr).append(img);
            $("#idGallery" + data.PicId).append(div_tr);

        }
    }
}

function initJssor(id) {
    var options = { $AutoPlay: 1 };
    var jssor1_slider = new $JssorSlider$(id, options);
}

function MyFavouritelist() {

    var url = BaseUrl + "user/MyfavouriteJson";
    var param = {};

    $.ajax({
        url: url,
        type: "Get",
        async: true,
        dataType: "json",
        data: param,
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus) {

            var favlist = data;
            totalpages = favlist.lstFavLog.length;
            for (var i = 0; totalpages > i; i++) {
                StoryMap.push({ OrgId: favlist.lstFavLog[i].OrgId, PageNo: 1, story_id: favlist.lstFavLog[i].storyid });
            }
        },
        error: function (e) {
            result = "Error";
        }
    });

}

function imageZoomIn() {
    $("#imgView").addClass("imgZoomedIn");
    $("#imageZoomIn").hide();
    $("#imageZoomOut").css("display", "flex");
}

function imageZoomOut() {
    $("#imgView").removeClass("imgZoomedIn");
    $("#imageZoomIn").css("display", "flex");
    $("#imageZoomOut").hide();
}

function GetSuplementSharePage(editionid, editiondate) {

    var isSuppliment = false;
    var isInheritedPageEdition = false;
    if (editionid != null) {
        var url = BaseUrl + "Home/GetEditionDetail";
        var param = { edid: editionid };
        var EdDetail = getResult(url, param);

        if (EdDetail != null && EdDetail != undefined && EdDetail.MainId != EdDetail.ParentEditionID && EdDetail.MainId > 0 && EdDetail.ParentEditionID > 0) //suppliment
        {
            isSuppliment = true;
            editionid = EdDetail.ParentEditionID;
        }
        else if (EdDetail != null && EdDetail != undefined && EdDetail.MainId == EdDetail.ParentEditionID && EdDetail.PCL > 0) {
            isInheritedPageEdition = true;
        }
    }

    //  debugger;
    var url = BaseUrl + "Home/GetAllSupplement";
    var param = { edid: editionid, EditionDate: editiondate };
    $.ajax({
        url: url,
        type: "Get",
        async: false,
        dataType: "json",
        data: param,
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus) {
            var results = data;
            if (results != "Error") {
                if (results != null && results.length > 0) {
                    for (var i = 0; i < results.length; i++) {
                        // console.log(results);
                        storyMapForDesktop(results[i].EditionId, editiondate);
                    }
                }
            }
            $("#loader").hide();
        },
        error: function (e) {
            $("#loader").hide();

        }
    });

}

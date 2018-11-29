// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [
      {
      type: "overview",
      date: "2018",
      text: {
        headline: "国语商配资讯站",
        text: "<p>涵盖国内九大顶尖商业配音团队。最新资讯，一站享有。</p>"
      },
      media: {
        url: "https://dl.airtable.com/sJG8lNQRcmbY4bjJhbw8_logo.png",
        credit: "香港",
        caption: ""
      }
    },
     {
      date: "2016",
      text: {
        headline: "729声工场",
        text: "<p> 创始于2005年7月29日，原名729配音组。2016年7月29日，729配音组正式更名729声工场，发展成为一支专业配音团队。著名配音导演及演员张杰为该品牌创始人之一。参与并制作诸多动画、 影视、游戏、广播剧等作品。 代表作：动画《狐妖小红娘》、《全职高手》、游戏《仙剑奇侠传》系列等。</p>"
      },
      location: {
        name: "729声工场",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 39.9587664,
        lon: 116.3579938,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://dl.airtable.com/a6LGXVK5SoKMfjalKoib_729logo.png",
        type: 		"image",
        credit: "北京",
        caption: "以声动人，用心做事。"
      }
    },
    {
     date: "2015",
     text: {
       headline: "光合积木工作室",
       text: "<p> 2015年成立，是由资深配音演员姜广涛创建的配音团队。以影视配音为主要业务，担任众多影视剧的对白配音工作，并参与动画、游戏、有声漫画、广播剧等各类有声作品的创作。代表作有电视剧《大唐荣耀》《择天记》《思美人》、电影《港囧》《微微一笑很倾城》《从你的全世界路过》、动画《黑白无双》《超神学院之黑甲》《少年锦衣卫》、广播剧《芈月传》等。</p>"
     },
     location: {
       name: "光合积木工作室",
       icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
       lat: 39.9676207,
       lon: 116.5326328,
       zoom: 16,
       line: true
     },
     media: {
       url: "https://dl.airtable.com/a6LGXVK5SoKMfjalKoib_729logo.png",
       type: 		"image",
       credit: "北京",
       caption: "阳光，可以孕育生命；积木，可以无限组合；声音的积木，把这个世界说给你听。"
     }
   },
     {
      date: "2014",
      text: {
        headline: "北斗企鹅工作室",
        text: "<p> 成立于2014年，是一家专注于ACG（动画，漫画及配音）领域的专业声优公司。团队目前拥有专职声优艺人四十余名，并与其他业内艺人保持良好的合作关系。 动画游戏以及新媒体属于新兴产业，北斗企鹅以保证作品质量和诚意为核心理念。在选人方面，以优秀的年轻配音演员为主，成熟配音演员为辅，从而使整个公司的人员构成多元化、立体化，可以更快的适应时代要求和市场要求，从而更好的完成项目，与市场对接。</p> "
      },
      location: {
        name: "北斗企鹅工作室",
        ICON:"https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 39.9082031,
        lon: 116.6039003,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://pg.com.cuhk.edu.hk/wp-content/uploads/2014/09/banner_mediaedu-en-1165x657.jpg",
        type: "image",
        credit: "CUHK",
        caption: "CUHK School of Journalism and Communication."
      }
    }
    ] // end of slides
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}

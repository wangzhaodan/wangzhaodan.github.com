$(function () {

    var index, length, saying = [
        '善良是一种智慧，是一种远见，一种自信，一种精神力量，是一种文化，一种快乐',

        '说一遍是陈述，说两遍是反复，说三遍是排比，反反复复说个没完是在开会',

        '最难战胜的敌人是自己；最可怕的敌人是朋友；最防不胜防的敌人是欲望；最迷惑人的敌人是感情',

        '对于和自己生活习惯不同的人，那就把距离拉远一点，各自活各自的，不去影响别人，也别要求别人改变',

        '竞争是终身的，输赢是暂时的',

        '当大部分人都在关注你飞得高不高时，只有少部分人关心你飞得累不累，这就是友情',

        '成功的人做别人不愿做的事，做别人不敢做的事，做别人做不到的事',

        '一个人，只要还有梦想就不算老，当追悔取代了梦想才算老，如果连追悔都没有了，那才是真正的老',

        '这个世界不是有钱人的世界，也不是有权人的世界,它是有心人的世界',

        '知道什么时候应该受委屈，是聪明的；知道什么时候应该停止受委屈，则不仅是聪明的，而且是能干的',

        '现实中用真名说假话，网络中用假名说真话',

        '每一趟旅程都会因为不一样的风景而美丽，当你读书就是一个个这样的旅程',

        '若你欲哭无泪，那就尝试着说出来，有时一开口，你的眼泪就会跟着流，眼泪能说出你不能说得东西',

        '做父母是个专业性很强的职业，可大部分的父母未经任何培训就上岗了',

        '恋爱不是慈善事业，不能随便施舍',

        '妻子，对青年男人来说是主人；对中年男人来说是朋友；对老年男人来说是护士',

        '而是美好的希望',

        '真正点亮生命的不是明天的景色',

        '真正的快乐都是免费的',

        '当不幸降临在他人头上时，他们往往都能像智者一样劝慰别人；而当同样的不幸降临自己身上时，人往往很难同样地开导自己',

        '人之所以痛苦，在于追求错误的东西',

        '世上有一种永远亏本的事，那就是发脾气',

        '保持微笑，停止抱怨那些改变不了的事，开心与否，时间总是不等人的',

        '万事随缘，但不要放弃努力',

        '有希望在的地方，痛苦也成欢乐',

        '失去金钱的人损失甚少，失去健康的人损失极多，失去勇气的人损失一切',

        '最好的状态是正常，最有效的手段是平衡，最高的境界是自然',

        '不相信目标能实现的人活不下来，相信很快能实现目标的人也活不下来',

        '经验确实是个好老师，但是她总是要价颇高',

        '给人以真诚的关注，让每个遇到你的人都感到他（她）是重要的',

        '所谓婚礼，就是有情人终成“家属”的仪式',

        '奢侈品是给别人看的，必需品是给自己用的',

        '金钱是一个好人的仆人，但却是一个坏人的主人',

        '由爱故是生忧，由爱故是生怖，若离于是爱者，无忧亦是无怖',

        '幸福的人不一定开心，但开心的人一定幸福，因为有些人身在福中不知福',

        '人生的路上别总是狂奔，有时我们得停下来，宽宽的心地，才是盎然的世界',

        '追随梦想，勇往直前，过自己想要的生活',

        '漂亮的女人像是放在展柜里的工艺品，欣赏的人很多，但买下的人只能一个人',

        '互相宽容的朋友一定百年同舟，互相宽容的夫妻一定百年共枕，互相宽容的世界一定和平美丽',

        '等一等就安全了，让一让就过去了，忍一忍就和谐了',

        '单身是领悟，恋爱是失误，分手是觉悟，结婚是错误，离婚是醒悟，再婚是执迷不悟，没有情人是废物，情人多了是动物',

        '身先才能率人，律己才能服人',

        '放弃该放弃的是无奈，放弃不该放弃的是无能；不放弃该放弃的是无知，不放弃不该放弃的是执着',

        '房子可以买，家不可以买；婚姻可以买，爱不可以买；钟表可以买，时间不可以买；关心可以买，爱心不可以买；奢华可以买，优雅不可以买；尊重可以卖，尊严不能卖；忠心可以卖，良心不能卖；风格可以卖，人格不能卖',

        '不敢生气的是懦夫，不去生气的才是智者'
    ];

    length = saying.length;
    index = Math.floor(Math.random() * length);

    $('.small-title').text(saying[index]);

});
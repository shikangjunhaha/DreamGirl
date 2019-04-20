// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        btn:cc.Button,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        cc.debug.setDisplayStats(false);
        this.btn.node.on("click",this.buttons,this);
     },

    start () {
    
    },
    buttons(){
       
        var img_p1 = cc.find('img_p1');
        var img_p3 = cc.find('img_p3');
        var img_p2 = cc.find('img_p2');
        var nextPage = cc.find("nextPage")
        var text1 = cc.find("text1")
        var text2 = cc.find("text2");
        var start = cc.find("start")
        var interval = 0.1;
        // 重复次数
        var repeat = 1;
        // 开始延时
        var delay = 0.1;
        this.schedule(function() {
            console.log("asd")
            // 这里的 this 指向 component
            nextPage.opacity -= 127.5;
            text1.active = false;
            text2.opacity += 127.5
            start.opacity +=127.5
            nextPage.opacity -= 127.5
            img_p1.opacity -= 127.5
            img_p2.opacity += 127.5
        }, interval, repeat, delay);    
        this.btn.node.off('click',this.buttons, this);
        
       
    }

    // update (dt) {},
});

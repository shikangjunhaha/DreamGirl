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
        btn:cc.Button
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.btn.node.on("click",this.button1,this);
    },
    button1(){
        var skill=cc.find("skill");
        var talk=cc.find("talk");
        console.log(talk)
        talk.opacity=0;
        console.log(talk.opacity)
        skill.opacity=255;
    },


    start () {

    },

    // update (dt) {},
});

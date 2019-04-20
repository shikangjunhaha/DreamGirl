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
        target:cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var door=cc.find("door1");
        var doorplay = door.getComponent(cc.Animation);
        doorplay.play("doorsm")
    },

    start () {

    },

     update (dt) {
         console.log(this.target.x)
         if(this.target.x<158){
             this.target.x=158
         }
         if(this.target.x>850&this.target.x<900){
            cc.director.loadScene("library");
         }
         if(this.target!=168){
             this.target.y=168
         }

     },
});

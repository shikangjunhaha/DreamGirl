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
        target:cc.Node,
        UIY:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {},

    start () {

    },

     update (dt) {
         
         var camera = cc.find("Canvas/Main Camera");
         camera.x=this.target.x-100
         camera.y=-3
         this.UIY.y=-320
         this.UIY.x=this.target.x-580
         if(this.target.x<101){
             this.target.x=101;
             camera.x=1;

         }
          if(this.target.x>1181){
             camera.x=1081
             
         }

     },
});

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var bbttn=true;
cc.Class({
    extends: cc.Component,

    properties: {
        btn:cc.Button,
        
    },
    onLoad () {
           if(bbttn==true){
            this.btn.node.once("click",this.button1,this);
           }
           
        },
    button1(){
        console.log("1")
           var newGame = cc.find("newGame") ;
           var quitGame = cc.find("quitGame");
           var img_p1 = cc.find('img_p1');
           var img_p2 = cc.find('img_p2');
           var img_p3 = cc.find('img_p3');
           var text1 = cc.find("text1");
           var nextPage = cc.find("nextPage")
/*            console.log(img_p3.getComponent(cc.Sprite))
           img_p3.getComponent(cc.Sprite).spriteFrame=new cc.SpriteFrame(texture); */
           var interval = 0.1;
           // 重复次数
           var repeat = 1;
           // 开始延时
           var delay = 0.1;
           this.schedule(function() {
               // 这里的 this 指向 component
               newGame.opacity -= 127.5;
               quitGame.opacity -= 127.5;
               text1.opacity += 127.5
               nextPage.opacity +=127.5
               img_p3.opacity -=127.5
               img_p1.opacity +=127.5
           }, interval, repeat, delay);    

           this.btn.node.off('click',this.button1, this);
           if(bbttn==true){
             newGame.active=false;
/*             this.btn.node.once("click",this.button2,this);      */       
           }
/*            bbttn = false */
           
    },
/*     button2(){
        this.bbtn=false;
        console.log("3")
    }, */

    start () {

    },

    // update (dt) {},
});

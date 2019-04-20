// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var beAttack=false;
var CDJ=true;
var liCD=true;
var loss=0;
window.Global = {
    sk:null,
}

cc.Class({
    extends: cc.Component,

    properties: {
        movespeed:50,
        hp:100,
        hp_label:cc.Label,
        hp_show:cc.Sprite,
        
    },
      
    onLoad(){
        cc.debug.setDisplayStats(false);
        this.accTop = false;
        this.accDown = false;
        this.accLeft = false;
        this.accRight = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this); 
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.hp_max = 100  //最大血量
        this.hp_now = 100; //当前血量
        this.atk = 1;  //每次被攻击值




    },


    onKeyDown(event){
      switch(event.keyCode){
          case cc.macro.KEY.a:    //A
           this.accLeft = true;
           this.accRight = false;
           this.node.x -=this.movespeed
           if (!beAttack){
           var animationComponent = this.getComponent(cc.Animation);
           animationComponent.play('Archer_LeftMove_Animation')
           }else{
            var racconplay=this.node.getComponent(cc.Animation);
            racconplay.play("Archer_BeAttack_Left_Animation")


           }
          break;
         case cc.macro.KEY.d:    // D
           this.accRight = true;
           this.accLeft = false;
           this.node.x +=this.movespeed
           if (!beAttack){
            var animationComponent = this.getComponent(cc.Animation);
            animationComponent.play('Archer_Move_Animation')
           }else{
            var racconplay=this.node.getComponent(cc.Animation);
            racconplay.play("Archer_BeAttack_Right_Animation")
           }
           break;
        
           case cc.macro.KEY.w:    // W
           this.node.y +=this.movespeed
           if(!beAttack){
            if(this.accLeft){
                var animationComponent = this.getComponent(cc.Animation);
                animationComponent.play('Archer_LeftMove_Animation')   
            }else{
                var animationComponent = this.getComponent(cc.Animation);
                animationComponent.play('Archer_Move_Animation')
            }

           }else{
            var racconplay=this.node.getComponent(cc.Animation);
            racconplay.play("Archer_BeAttack_Right_Animation")

           }
           break;

           case cc.macro.KEY.s:        //S
           this.node.y -=this.movespeed
           if(!beAttack){
            if(this.accLeft){
                var animationComponent = this.getComponent(cc.Animation);
                animationComponent.play('Archer_LeftMove_Animation')   
            }else{
                var animationComponent = this.getComponent(cc.Animation);
                animationComponent.play('Archer_Move_Animation')
            }

           }else{
            var racconplay=this.node.getComponent(cc.Animation);

           }

           break;


           case cc.macro.KEY.j:        //J
                if(CDJ){
                    var shootingIco = cc.find("Canvas/UI/zhuangtai/shooting")
                    var shooting=shootingIco.getComponent(cc.Sprite);
                    var animationComponent = this.getComponent(cc.Animation);
                    var arrow=this.node.getChildByName("arrow")
                    var arrowplay=arrow.getComponent(cc.Animation);
                    animationComponent.play('Archer_Acttack_Animation')
                    arrow.active=true
                    shooting.fillRange=0;
                    if(!this.accRight&&!this.accLeft){
                        arrowplay.play("Arrow_Fly_Animation")
                        arrow.opacity=255
                    }
                if(this.accRight){
                    animationComponent.play('Archer_Acttack_Animation')
                    arrow.opacity=255
                    arrowplay.play("Arrow_Fly_Animation")
                } else if(this.accLeft){  
                    var arrow_Left=this.node.getChildByName("arrow_Left")
                    arrow_Left.opacity=255
                    var arrow_LeftPlay=arrow_Left.getComponent(cc.Animation);
                    animationComponent.play('Archer_Acttack_Left_Animation')
                    arrow_LeftPlay.play("Arrow_FlyLeft_Animation")
                }
                CDJ=false;
                if(!CDJ){   //冷却
                    this.callback = function () {
                        shooting.fillRange+=0.125
                        if (shooting.fillRange==1) {
                            CDJ=true;
                            this.unschedule(this.callback);
                        }
                    }
                    this.schedule(this.callback, 0.1);
                }

            }
            break;





    }
    },

    gameOver(){

    },
    onCollisionStay(){

      
        beAttack=true;
        var hpBlood = cc.find("Archer1/hp");
        var hpBloodPlay = hpBlood.getComponent(cc.Animation);
        var racconplay=this.node.getComponent(cc.Animation);
        racconplay.play("Archer_BeAttack_Right_Animation")
        hpBloodPlay.playAdditive ("blood")
        this.hp_now -= this.atk;  //血量的减少
         loss=loss+1;
        this.hp_label.opacity=255;
        this.hp_label.string = "-"+loss

        var hp_bili = this.hp_now /this.hp_max;
        if(hp_bili>1){
          
            hp_bili=1;
        }
        this.hp_show.fillRange = hp_bili;

    },
    onCollisionExit(){
        beAttack=false
        this.scheduleOnce(function() {
            // 这里的 this 指向 component
            this.hp_label.string = ""
            loss=0;
        }, 0.8);
    },
    update(dt){
        var hp_bili = this.hp_now /this.hp_max;
        if(hp_bili>1){ 
 
            hp_bili=1;
        }
        this.hp_show.fillRange = hp_bili;
        if(hp_bili<=0){
            console.log("111")
            var dead=cc.find("Canvas/UI/dead")
            var Archer1=cc.find("Archer1");
            var Devil = cc.find("Devil")
            dead.opacity=255
            Archer1.opacity=0;
            Devil.opacity=0;
        }
    },
    start () {
 
    },

});

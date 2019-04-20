// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var attackflag;
var magicK=false;
var liCD=true;
var liCDL=true;
var liCDO=true;
var liCDU=true;
var liCDH=true;
var liCDP=true;
var liCDI=true;
cc.Class({
    extends: cc.Component,

    properties: {
        hp:1000,
        target:cc.Node,
        hp_label:cc.Label,
        hp_show:cc.Sprite,

    },
    onLoad () {

        for(var i=0;i<Global.sk.length;i++){
            
            var empower =Global.sk[i];
            console.log(empower)
            if(empower==1){
                this.I=true
            }
            else if(empower==2){
                this.K=true;
            }else if(empower==3){
                this.O=true;
            }else if(empower==4){
                this.U=true;
            }else if(empower==5){
                this.L=true;
            }else if(empower==6){
                this.P=true;
            }else if(empower==7){
                this.H=true;
            }
        }
        this.sum=-1;
        this.NumberOfDeaths=0;
        this.hp_max = 1000  //最大血量
        this.hp_now = 1000; //当前血量
        this.atk = 20;  //每次被攻击值
        this.allowAttack=true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);   
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        var racconplay=this.node.getComponent(cc.Animation);
        var dark = cc.find("Devil/dark")
        var darkplay = dark.getComponent(cc.Animation)
        var shan = cc.find("Archer1/shan1")
        var shanplay = shan.getComponent(cc.Animation)
        var moon = cc.find("Devil/Scarlet_Moon")
        var moonplay = moon.getComponent(cc.Animation)
        var darts = cc.find("Devil/Darts")
        var dartsplay = darts.getComponent(cc.Animation)
        var buff = cc.find("Devil/buff1")
        var buffplay = buff.getComponent(cc.Animation)
        var redpick = cc.find("Archer1/redpick")
        var redpickplay = redpick.getComponent(cc.Animation)
        var laser = cc.find("Devil/laser0");
        var laserplay = laser.getComponent(cc.Animation)
        var beam = cc.find("Devil/beam1");
        var beamplay = beam.getComponent(cc.Animation)
        if(this.allowAttack){ // 开始战斗后

        this.schedule(function() {       //控制技能
          


            var x=this.node.x;
            var y=this.node.y;
             var rand = Math.floor(Math.random()*11)
            if(x>=this.target.x+650){   //左
                racconplay.play("Devil_Animation") 
                darkplay.play("dark_Fly")
                 if(y>=this.target.y+10){  //左
                    this.node.y=this.node.y-10
                    moonplay.play("moon")
                }else if(y<this.target.y-10){  //右
                    console.log("嗨")
                    racconplay.play("orange") 
                    dartsplay.play("Darts_Fly")
                    console.log(dartsplay)
                    this.node.y=this.node.y+10

                }
            }else if(x<=this.target.x-30){  //右
               console.log("2")
               this.node.x=this.node.x+10
               if(y>=this.target.y+250){  //左
                racconplay.play("Devil_Animation") 
                darkplay.play("dark_Fly")
                this.node.y=this.node.y-10

            }else if(y<this.target.y-250){  //右
                racconplay.play("Devil_Animation") 
                darkplay.play("dark_Fly")
                this.node.y=this.node.y+10
            }
               
            }else if(this.node.x-this.target.x<this.node.x/2){
                this.node.x=this.node.x+15;
                racconplay.play("orange") 
                darkplay.play("lightning_attack")

            }else{

                if(y>=this.target.y+20){  //左
                    console.log("这里可以放技能")
                    this.node.y=this.node.y-15
    
                }else if(y<this.target.y-20){  //右
    
                    this.node.y=this.node.y+15
    
                }else{
                    console.log(this.NumberOfDeaths)
                        if(this.NumberOfDeaths==0){
                            if(rand==1 ){   
                                racconplay.play("Devil_Animation") 
                                buffplay.play("BUFF")
                            }else if(rand==2||rand == 3){
                                redpickplay.play("redpick")
    
                            }else if(rand==3||rand==5||rand==8){
                                racconplay.play("orange") 
                                dartsplay.play("Darts_Fly")
                            }else if(rand ==4){
                                racconplay.play("orange") 
                                shanplay.play("lightning_attack")
                            }else if(rand==6){
                                moonplay.play("moon")
                            } else{
                                racconplay.play("Devil_Animation") 
                                darkplay.play("dark_Fly")
                            }
                        }else if(this.NumberOfDeaths==1){  //完成前参数别忘了改！
                             this.hp_max = 2000  //最大血量

                            this.hp=2000;
                            if(rand==1||rand==2||rand==4||rand==6){
                                racconplay.play("Devil_Animation") 
                                 laserplay.play("laser")
                            }else if(rand == 3||rand==5){
                                beamplay.play("beam")
                                this.hp_now=this.hp_now+70
                                if(this.hp_now>this.hp_max){
                                    this.hp_now=this.hp_max
                                }
                                this.UpdateBlood();

                                console.log(this.hp_now);
                            }
                            else if(rand==8){
                                racconplay.play("orange") 
                                shanplay.play("lightning_attack")
                            }
                            else if(rand==7||rand==9){
                                racconplay.play("Devil_Animation") 
                                darkplay.play("dark_Fly")
                            }else if(rand==10||rand==11){
                                racconplay.play("orange") 
                                shanplay.play("lightning_attack")
                            }

                        }else{             //结算界面明天记得价格按钮！回到主菜单
                            var victory = cc.find("Canvas/UI/victory");
                            victory.opacity=255
                            cc.director.pause();

                        }

                    }
            }

  
       
        },2.2);
    }

    },
    onCollisionEnter(){
        this.hp_now -= this.atk;  //血量的减少
       this.hp_label.opacity=255;
       this.hp_label.string = this.hp_now + '/' + this.hp_max;
       this.hp_bili = this.hp_now /this.hp_max;
       this.hp_show.fillRange = this.hp_bili
       if( this.hp_bili<=0){
           this.allowAttack=false;
           var secondTo=cc.find("Devil/Second");   
           var secondplay = secondTo.getComponent(cc.Animation)
           secondplay.play("Second")
           this.hp_now=2000
           this.hp_label.string = this.hp_now + '/' + this.hp_max;
           this.hp_show.fillRange=0.5
           this.NumberOfDeaths+=1;
           
       }
    },
    onCollisionExit(){

    },

    onKeyDown(event){

        switch(event.keyCode){
            case cc.macro.KEY.k:
                if(liCD===true&&this.K===true){
                    this.sum+=1
                    magicK=true
                var lightNing = cc.find("Canvas/UI/zhuangtai/lightning") 
                var liSprite=lightNing.getComponent(cc.Sprite);
                liSprite.fillRange=0;
                var light = cc.find("Devil/Light")
                light.opacity=255
                this.hp_now -= 10*(this.sum*1.5);
                
                var racconplay=light.getComponent(cc.Animation);
                racconplay.play("Light")
                liCD=false;
                if(liCD===false){
                   
                    this.callback = function () {
                        liSprite.fillRange+=0.01
                        if (liSprite.fillRange==1) {
                            liCD=true;
                            this.unschedule(this.callback);
                        }
                    }
                    this.schedule(this.callback, 0.1);
                 }

            }

              break;

            case cc.macro.KEY.l:
            if(liCDL===true&&this.L){
              
            var hiting = cc.find("Canvas/UI/zhuangtai/hiting") 
            var hitingSprite=hiting.getComponent(cc.Sprite);
            hitingSprite.fillRange=0;
            var hit = cc.find("Devil/hit")
            hit.opacity=255
            this.hp_now -= 70;
            var racconplay=hit.getComponent(cc.Animation);
            racconplay.play("hit")
            liCDL=false;
            if(liCDL===false){
                this.callback1 = function () {
                    hitingSprite.fillRange+=0.01
                    if (hitingSprite.fillRange==1) {
                        liCDL=true;
                        this.unschedule(this.callback1);
                    }
                }

                this.schedule(this.callback1, 0.1);
             }
            
        
        }
            break;


            case cc.macro.KEY.o:
            if(liCDO===true&&this.O){
              
            var blackMagic = cc.find("Canvas/UI/zhuangtai/blackMagicIco") 
            var blackMagicSprite=blackMagic.getComponent(cc.Sprite);
            blackMagicSprite.fillRange=0;
            var black = cc.find("Devil/blackMagic1")
            black.opacity=255
            let hp_now=this.hp_now
            this.hp_now -= (-5+(hp_now*0.05))
            
            var racconplay=black.getComponent(cc.Animation);
            racconplay.play("blackMagic")
            liCDO=false;
            if(liCDO===false){
                this.callback1 = function () {
                    blackMagicSprite.fillRange+=0.01
                    if (blackMagicSprite.fillRange==1) {
                        liCDO=true;
                        this.unschedule(this.callback1);
                    }
                }

                this.schedule(this.callback1, 0.1);
             }
            
        
        }
            break;



            case cc.macro.KEY.u:
            if(liCDU===true&&this.U){
              
            var clow = cc.find("Canvas/UI/zhuangtai/clowIco") 
            var clowSprite=clow.getComponent(cc.Sprite);
            clowSprite.fillRange=0;
            var clowTo = cc.find("Devil/claw1")
            clowTo.opacity=255
            this.hp_now -= 10;
            var racconplay=clowTo.getComponent(cc.Animation);
            racconplay.play("clawTo")
            liCDU=false;
            if(liCDU===false){
                this.callback1 = function () {
                    clowSprite.fillRange+=0.01
                    if (clowSprite.fillRange==1) {
                        liCDU=true;
                        this.unschedule(this.callback1);
                    }
                }

                this.schedule(this.callback1, 0.1);
             }
            
        
        }
            break;


            case cc.macro.KEY.h:
            if(liCDH===true&&this.H){
              
            var orangeLing = cc.find("Canvas/UI/zhuangtai/orangeLing") 
            var orangLingSprite=orangeLing.getComponent(cc.Sprite);
            orangLingSprite.fillRange=0;
            var orangeLightning = cc.find("Archer1/orangeLightning1")
            orangeLightning.opacity=255
            this.hp_now -= 100;
            var racconplay=orangeLightning.getComponent(cc.Animation);
            racconplay.play("orangeLightning")
            liCDH=false;
            if(liCDH===false){
                this.callback1 = function () {
                    orangLingSprite.fillRange+=0.01
                    if (orangLingSprite.fillRange==1) {
                        liCDH=true;
                        this.unschedule(this.callback1);
                    }
                }

                this.schedule(this.callback1, 0.1);
             }
            
        
        }
            break;





            case cc.macro.KEY.p:
            if(liCDP===true&&this.P){
              
            var suckingIco = cc.find("Canvas/UI/zhuangtai/suckingIco") 
            var suckingSprite=suckingIco.getComponent(cc.Sprite);
            suckingSprite.fillRange=0;
            var sucking = cc.find("Devil/sucking0")
            sucking.opacity=255
            this.hp_now -= 40;
            this.schedule(function() {
                console.log("中毒")
                this.hp_now -= 10;
                if(this.hp_now<=0){
                    this.hp_now=1;
                }
                 this.UpdateBlood();
            }, 1, 5, 1);
            var racconplay=sucking.getComponent(cc.Animation);
            racconplay.play("sucking")
            liCDP=false;
            if(liCDP===false){
                this.callback1 = function () {
                    suckingSprite.fillRange+=0.01
                    if (suckingSprite.fillRange==1) {
                        liCDP=true;
                        this.unschedule(this.callback1);
                    }
                }

                this.schedule(this.callback1, 0.1);
             }
            
        
        }
            break;

            case cc.macro.KEY.i:
            console.log("b")
              if(liCDI&&this.I){
                  var shield = cc.find("Canvas/UI/zhuangtai/ShieldIco");
                  var shieldSprite = shield.getComponent(cc.Sprite);
                  shieldSprite.fillRange=0;
                  var shielding = cc.find("Archer1/Shield")

                  this.hp_now += 15;  //防止血量溢出
                  if(this.hp_now>this.hp){
                      this.hp_now=this.hp
                  }
                  var shieldBuff=shielding.getComponent(cc.Animation);
                  shieldBuff.play("Shield")
                  var playArcher=cc.find("Archer1");
                  playArcher.getComponent(cc.BoxCollider).enabled=false  //做个无敌
                  
                  this.scheduleOnce(function() {      //三秒之后无敌消失
                    playArcher.getComponent(cc.BoxCollider).enabled=true
                    
                }, 3);
                liCDI=false;
                  if(liCDI===false){
                    this.callback1 = function () {
                        shieldSprite.fillRange+=0.01
                        if (shieldSprite.fillRange==1) {
                            liCDI=true;
                            this.unschedule(this.callback1);
                        }
                    }
                    this.schedule(this.callback1, 0.1);
              }   
      }
      break;

        }
    },
    UpdateBlood(){
        this.hp_label.string = this.hp_now + '/' + this.hp_max;
        this.hp_bili = this.hp_now /this.hp_max;
        this.hp_show.fillRange = this.hp_bili
    },
    

    start () {

        this.schedule(function() {   //控制移动
            var x=this.node.x;
            var y=this.node.y;
            if(x>=this.target.x+650){   //左
                this.node.x=this.node.x-10
                 if(y>=this.target.y+10){  //左
                    this.node.y=this.node.y-10
                }else if(y<this.target.y-10){  //右
                    this.node.y=this.node.y+10
                }
            }else if(x<=this.target.x-30){  //右
               this.node.x=this.node.x+10
               if(y>=this.target.y+250){  //左
                this.node.y=this.node.y-10
            }else if(y<this.target.y-250){  //右
                this.node.y=this.node.y+10
            }
            }else if(this.node.x-this.target.x<this.node.x/2){
                this.node.x=this.node.x+15;
            }else{
                if(y>=this.target.y+20){  //左
                    this.node.y=this.node.y-15
                }else if(y<this.target.y-20){  //右
                    this.node.y=this.node.y+15
                }else{

            }
            }
        },0.35)
    },
    

     update (dt) {
        if(!this.K){
            var lightNing = cc.find("Canvas/UI/zhuangtai/lightning") 
            lightNing.opacity=0;
        } if(!this.O){
            var blackMagic = cc.find("Canvas/UI/zhuangtai/blackMagicIco") 
            blackMagic.opacity=0;
        }if(!this.U){
            var clow = cc.find("Canvas/UI/zhuangtai/clowIco") 
            clow.opacity=0;
        } if(!this.P){
            var suckingIco = cc.find("Canvas/UI/zhuangtai/suckingIco") 
            suckingIco.opacity=0;
        } if(!this.H){
            var orangeLing = cc.find("Canvas/UI/zhuangtai/orangeLing") 
            orangeLing.opacity=0;
        } if(!this.L){
            var hiting = cc.find("Canvas/UI/zhuangtai/hiting")
            hiting.opacity=0;
        } if(!this.I){
            var shield = cc.find("Canvas/UI/zhuangtai/ShieldIco");
            shield.opacity=0;
        }
     },
});

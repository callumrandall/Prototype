gdjs.StartCode = {};
gdjs.StartCode.GDPlayerObjects1_1final = [];

gdjs.StartCode.GDdeathzoneObjects1_1final = [];

gdjs.StartCode.GDendObjects1_1final = [];

gdjs.StartCode.GDfloorObjects1_1final = [];

gdjs.StartCode.GDfloorcenterObjects1_1final = [];

gdjs.StartCode.GDfloorgreenObjects1_1final = [];

gdjs.StartCode.GDfloorleftObjects1_1final = [];

gdjs.StartCode.GDfloorrightObjects1_1final = [];

gdjs.StartCode.GDPlayerObjects1= [];
gdjs.StartCode.GDPlayerObjects2= [];
gdjs.StartCode.GDPlayerObjects3= [];
gdjs.StartCode.GDPlayerObjects4= [];
gdjs.StartCode.GDfloorObjects1= [];
gdjs.StartCode.GDfloorObjects2= [];
gdjs.StartCode.GDfloorObjects3= [];
gdjs.StartCode.GDfloorObjects4= [];
gdjs.StartCode.GDfloorrightObjects1= [];
gdjs.StartCode.GDfloorrightObjects2= [];
gdjs.StartCode.GDfloorrightObjects3= [];
gdjs.StartCode.GDfloorrightObjects4= [];
gdjs.StartCode.GDfloorleftObjects1= [];
gdjs.StartCode.GDfloorleftObjects2= [];
gdjs.StartCode.GDfloorleftObjects3= [];
gdjs.StartCode.GDfloorleftObjects4= [];
gdjs.StartCode.GDfloorcenterObjects1= [];
gdjs.StartCode.GDfloorcenterObjects2= [];
gdjs.StartCode.GDfloorcenterObjects3= [];
gdjs.StartCode.GDfloorcenterObjects4= [];
gdjs.StartCode.GDfloorgreenObjects1= [];
gdjs.StartCode.GDfloorgreenObjects2= [];
gdjs.StartCode.GDfloorgreenObjects3= [];
gdjs.StartCode.GDfloorgreenObjects4= [];
gdjs.StartCode.GDjumpthruObjects1= [];
gdjs.StartCode.GDjumpthruObjects2= [];
gdjs.StartCode.GDjumpthruObjects3= [];
gdjs.StartCode.GDjumpthruObjects4= [];
gdjs.StartCode.GDjumpthruleftObjects1= [];
gdjs.StartCode.GDjumpthruleftObjects2= [];
gdjs.StartCode.GDjumpthruleftObjects3= [];
gdjs.StartCode.GDjumpthruleftObjects4= [];
gdjs.StartCode.GDjumpthrurightObjects1= [];
gdjs.StartCode.GDjumpthrurightObjects2= [];
gdjs.StartCode.GDjumpthrurightObjects3= [];
gdjs.StartCode.GDjumpthrurightObjects4= [];
gdjs.StartCode.GDjumpthrucenterObjects1= [];
gdjs.StartCode.GDjumpthrucenterObjects2= [];
gdjs.StartCode.GDjumpthrucenterObjects3= [];
gdjs.StartCode.GDjumpthrucenterObjects4= [];
gdjs.StartCode.GDcollectibleObjects1= [];
gdjs.StartCode.GDcollectibleObjects2= [];
gdjs.StartCode.GDcollectibleObjects3= [];
gdjs.StartCode.GDcollectibleObjects4= [];
gdjs.StartCode.GDScoreObjects1= [];
gdjs.StartCode.GDScoreObjects2= [];
gdjs.StartCode.GDScoreObjects3= [];
gdjs.StartCode.GDScoreObjects4= [];
gdjs.StartCode.GDendObjects1= [];
gdjs.StartCode.GDendObjects2= [];
gdjs.StartCode.GDendObjects3= [];
gdjs.StartCode.GDendObjects4= [];
gdjs.StartCode.GDdeathzoneObjects1= [];
gdjs.StartCode.GDdeathzoneObjects2= [];
gdjs.StartCode.GDdeathzoneObjects3= [];
gdjs.StartCode.GDdeathzoneObjects4= [];
gdjs.StartCode.GDInstructionsObjects1= [];
gdjs.StartCode.GDInstructionsObjects2= [];
gdjs.StartCode.GDInstructionsObjects3= [];
gdjs.StartCode.GDInstructionsObjects4= [];
gdjs.StartCode.GDGodTextObjects1= [];
gdjs.StartCode.GDGodTextObjects2= [];
gdjs.StartCode.GDGodTextObjects3= [];
gdjs.StartCode.GDGodTextObjects4= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};
gdjs.StartCode.condition2IsTrue_0 = {val:false};
gdjs.StartCode.condition3IsTrue_0 = {val:false};
gdjs.StartCode.condition4IsTrue_0 = {val:false};
gdjs.StartCode.condition5IsTrue_0 = {val:false};
gdjs.StartCode.conditionTrue_1 = {val:false};
gdjs.StartCode.condition0IsTrue_1 = {val:false};
gdjs.StartCode.condition1IsTrue_1 = {val:false};
gdjs.StartCode.condition2IsTrue_1 = {val:false};
gdjs.StartCode.condition3IsTrue_1 = {val:false};
gdjs.StartCode.condition4IsTrue_1 = {val:false};
gdjs.StartCode.condition5IsTrue_1 = {val:false};


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.StartCode.GDPlayerObjects2, gdjs.StartCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects3[i].flipX(false);
}
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.StartCode.GDPlayerObjects2, gdjs.StartCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects3[i].flipX(true);
}
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.StartCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects2[i].getVariableNumber(gdjs.StartCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.StartCode.condition0IsTrue_0.val = true;
        gdjs.StartCode.GDPlayerObjects2[k] = gdjs.StartCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects2.length = k;}if (gdjs.StartCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.StartCode.condition1IsTrue_0.val = true;
        gdjs.StartCode.GDPlayerObjects2[k] = gdjs.StartCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects2.length = k;}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.StartCode.condition1IsTrue_0.val = true;
        gdjs.StartCode.GDPlayerObjects2[k] = gdjs.StartCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects2.length = k;}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.StartCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.StartCode.condition0IsTrue_0.val = true;
        gdjs.StartCode.GDPlayerObjects2[k] = gdjs.StartCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects2.length = k;}if (gdjs.StartCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.StartCode.condition0IsTrue_0.val = true;
        gdjs.StartCode.GDPlayerObjects2[k] = gdjs.StartCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects2.length = k;}if (gdjs.StartCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].setAnimation(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.StartCode.condition0IsTrue_0.val = true;
        gdjs.StartCode.GDPlayerObjects2[k] = gdjs.StartCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects2.length = k;}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "impactPlate_light_004.ogg", false, 10, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.StartCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        gdjs.StartCode.condition0IsTrue_0.val = true;
        gdjs.StartCode.GDPlayerObjects1[k] = gdjs.StartCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects1.length = k;}if (gdjs.StartCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.StartCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects2[i].getVariableNumber(gdjs.StartCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == -(1) ) {
        gdjs.StartCode.condition0IsTrue_0.val = true;
        gdjs.StartCode.GDPlayerObjects2[k] = gdjs.StartCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects2.length = k;}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.StartCode.condition1IsTrue_0.val = true;
        gdjs.StartCode.GDPlayerObjects2[k] = gdjs.StartCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects2.length = k;}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].addPolarForce(275, 25, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects2[i].getVariableNumber(gdjs.StartCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.StartCode.condition0IsTrue_0.val = true;
        gdjs.StartCode.GDPlayerObjects2[k] = gdjs.StartCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects2.length = k;}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.StartCode.condition1IsTrue_0.val = true;
        gdjs.StartCode.GDPlayerObjects2[k] = gdjs.StartCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects2.length = k;}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].addPolarForce(360, 100, 0);
}
}{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].addPolarForce(265, 25, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects1[i].getVariableNumber(gdjs.StartCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) != 0 ) {
        gdjs.StartCode.condition0IsTrue_0.val = true;
        gdjs.StartCode.GDPlayerObjects1[k] = gdjs.StartCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects1.length = k;}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
{gdjs.StartCode.conditionTrue_1 = gdjs.StartCode.condition1IsTrue_0;
gdjs.StartCode.GDPlayerObjects1_1final.length = 0;gdjs.StartCode.condition0IsTrue_1.val = false;
gdjs.StartCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.StartCode.GDPlayerObjects1, gdjs.StartCode.GDPlayerObjects2);

for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.StartCode.condition0IsTrue_1.val = true;
        gdjs.StartCode.GDPlayerObjects2[k] = gdjs.StartCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects2.length = k;if( gdjs.StartCode.condition0IsTrue_1.val ) {
    gdjs.StartCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.StartCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDPlayerObjects1_1final.indexOf(gdjs.StartCode.GDPlayerObjects2[j]) === -1 )
            gdjs.StartCode.GDPlayerObjects1_1final.push(gdjs.StartCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.StartCode.GDPlayerObjects1, gdjs.StartCode.GDPlayerObjects2);

for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.StartCode.condition1IsTrue_1.val = true;
        gdjs.StartCode.GDPlayerObjects2[k] = gdjs.StartCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects2.length = k;if( gdjs.StartCode.condition1IsTrue_1.val ) {
    gdjs.StartCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.StartCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDPlayerObjects1_1final.indexOf(gdjs.StartCode.GDPlayerObjects2[j]) === -1 )
            gdjs.StartCode.GDPlayerObjects1_1final.push(gdjs.StartCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.StartCode.GDPlayerObjects1_1final, gdjs.StartCode.GDPlayerObjects1);
}
}
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects1[i].returnVariable(gdjs.StartCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


};gdjs.StartCode.eventsList3 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.StartCode.GDPlayerObjects1, gdjs.StartCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].returnVariable(gdjs.StartCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects1[i].returnVariable(gdjs.StartCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(-(1));
}
}}

}


};gdjs.StartCode.eventsList4 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.StartCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.StartCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.StartCode.eventsList5 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setMaxFallingSpeed(1000);
}
}}

}


{



}


{

gdjs.StartCode.GDPlayerObjects1.length = 0;

gdjs.StartCode.GDfloorObjects1.length = 0;

gdjs.StartCode.GDfloorcenterObjects1.length = 0;

gdjs.StartCode.GDfloorgreenObjects1.length = 0;

gdjs.StartCode.GDfloorleftObjects1.length = 0;

gdjs.StartCode.GDfloorrightObjects1.length = 0;


gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
{gdjs.StartCode.conditionTrue_1 = gdjs.StartCode.condition0IsTrue_0;
gdjs.StartCode.GDPlayerObjects1_1final.length = 0;gdjs.StartCode.GDfloorObjects1_1final.length = 0;gdjs.StartCode.GDfloorcenterObjects1_1final.length = 0;gdjs.StartCode.GDfloorgreenObjects1_1final.length = 0;gdjs.StartCode.GDfloorleftObjects1_1final.length = 0;gdjs.StartCode.GDfloorrightObjects1_1final.length = 0;gdjs.StartCode.condition0IsTrue_1.val = false;
gdjs.StartCode.condition1IsTrue_1.val = false;
gdjs.StartCode.condition2IsTrue_1.val = false;
gdjs.StartCode.condition3IsTrue_1.val = false;
gdjs.StartCode.condition4IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("floorgreen"), gdjs.StartCode.GDfloorgreenObjects2);
for(var i = 0, k = 0, l = gdjs.StartCode.GDfloorgreenObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDfloorgreenObjects2[i].isCollidingWithPoint((( gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects2[0].getPointX("Grab")), (( gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects2[0].getPointY("Grab"))) ) {
        gdjs.StartCode.condition0IsTrue_1.val = true;
        gdjs.StartCode.GDfloorgreenObjects2[k] = gdjs.StartCode.GDfloorgreenObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDfloorgreenObjects2.length = k;if( gdjs.StartCode.condition0IsTrue_1.val ) {
    gdjs.StartCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.StartCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDPlayerObjects1_1final.indexOf(gdjs.StartCode.GDPlayerObjects2[j]) === -1 )
            gdjs.StartCode.GDPlayerObjects1_1final.push(gdjs.StartCode.GDPlayerObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.StartCode.GDfloorgreenObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDfloorgreenObjects1_1final.indexOf(gdjs.StartCode.GDfloorgreenObjects2[j]) === -1 )
            gdjs.StartCode.GDfloorgreenObjects1_1final.push(gdjs.StartCode.GDfloorgreenObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.StartCode.GDfloorObjects2);
for(var i = 0, k = 0, l = gdjs.StartCode.GDfloorObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDfloorObjects2[i].isCollidingWithPoint((( gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects2[0].getPointX("Grab")), (( gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects2[0].getPointY("Grab"))) ) {
        gdjs.StartCode.condition1IsTrue_1.val = true;
        gdjs.StartCode.GDfloorObjects2[k] = gdjs.StartCode.GDfloorObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDfloorObjects2.length = k;if( gdjs.StartCode.condition1IsTrue_1.val ) {
    gdjs.StartCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.StartCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDPlayerObjects1_1final.indexOf(gdjs.StartCode.GDPlayerObjects2[j]) === -1 )
            gdjs.StartCode.GDPlayerObjects1_1final.push(gdjs.StartCode.GDPlayerObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.StartCode.GDfloorObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDfloorObjects1_1final.indexOf(gdjs.StartCode.GDfloorObjects2[j]) === -1 )
            gdjs.StartCode.GDfloorObjects1_1final.push(gdjs.StartCode.GDfloorObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("floorleft"), gdjs.StartCode.GDfloorleftObjects2);
for(var i = 0, k = 0, l = gdjs.StartCode.GDfloorleftObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDfloorleftObjects2[i].isCollidingWithPoint((( gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects2[0].getPointX("Grab")), (( gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects2[0].getPointY("Grab"))) ) {
        gdjs.StartCode.condition2IsTrue_1.val = true;
        gdjs.StartCode.GDfloorleftObjects2[k] = gdjs.StartCode.GDfloorleftObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDfloorleftObjects2.length = k;if( gdjs.StartCode.condition2IsTrue_1.val ) {
    gdjs.StartCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.StartCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDPlayerObjects1_1final.indexOf(gdjs.StartCode.GDPlayerObjects2[j]) === -1 )
            gdjs.StartCode.GDPlayerObjects1_1final.push(gdjs.StartCode.GDPlayerObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.StartCode.GDfloorleftObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDfloorleftObjects1_1final.indexOf(gdjs.StartCode.GDfloorleftObjects2[j]) === -1 )
            gdjs.StartCode.GDfloorleftObjects1_1final.push(gdjs.StartCode.GDfloorleftObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("floorright"), gdjs.StartCode.GDfloorrightObjects2);
for(var i = 0, k = 0, l = gdjs.StartCode.GDfloorrightObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDfloorrightObjects2[i].isCollidingWithPoint((( gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects2[0].getPointX("Grab")), (( gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects2[0].getPointY("Grab"))) ) {
        gdjs.StartCode.condition3IsTrue_1.val = true;
        gdjs.StartCode.GDfloorrightObjects2[k] = gdjs.StartCode.GDfloorrightObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDfloorrightObjects2.length = k;if( gdjs.StartCode.condition3IsTrue_1.val ) {
    gdjs.StartCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.StartCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDPlayerObjects1_1final.indexOf(gdjs.StartCode.GDPlayerObjects2[j]) === -1 )
            gdjs.StartCode.GDPlayerObjects1_1final.push(gdjs.StartCode.GDPlayerObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.StartCode.GDfloorrightObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDfloorrightObjects1_1final.indexOf(gdjs.StartCode.GDfloorrightObjects2[j]) === -1 )
            gdjs.StartCode.GDfloorrightObjects1_1final.push(gdjs.StartCode.GDfloorrightObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("floorcenter"), gdjs.StartCode.GDfloorcenterObjects2);
for(var i = 0, k = 0, l = gdjs.StartCode.GDfloorcenterObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDfloorcenterObjects2[i].isCollidingWithPoint((( gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects2[0].getPointX("Grab")), (( gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDPlayerObjects2[0].getPointY("Grab"))) ) {
        gdjs.StartCode.condition4IsTrue_1.val = true;
        gdjs.StartCode.GDfloorcenterObjects2[k] = gdjs.StartCode.GDfloorcenterObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDfloorcenterObjects2.length = k;if( gdjs.StartCode.condition4IsTrue_1.val ) {
    gdjs.StartCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.StartCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDPlayerObjects1_1final.indexOf(gdjs.StartCode.GDPlayerObjects2[j]) === -1 )
            gdjs.StartCode.GDPlayerObjects1_1final.push(gdjs.StartCode.GDPlayerObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.StartCode.GDfloorcenterObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDfloorcenterObjects1_1final.indexOf(gdjs.StartCode.GDfloorcenterObjects2[j]) === -1 )
            gdjs.StartCode.GDfloorcenterObjects1_1final.push(gdjs.StartCode.GDfloorcenterObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.StartCode.GDPlayerObjects1_1final, gdjs.StartCode.GDPlayerObjects1);
gdjs.copyArray(gdjs.StartCode.GDfloorObjects1_1final, gdjs.StartCode.GDfloorObjects1);
gdjs.copyArray(gdjs.StartCode.GDfloorcenterObjects1_1final, gdjs.StartCode.GDfloorcenterObjects1);
gdjs.copyArray(gdjs.StartCode.GDfloorgreenObjects1_1final, gdjs.StartCode.GDfloorgreenObjects1);
gdjs.copyArray(gdjs.StartCode.GDfloorleftObjects1_1final, gdjs.StartCode.GDfloorleftObjects1);
gdjs.copyArray(gdjs.StartCode.GDfloorrightObjects1_1final, gdjs.StartCode.GDfloorrightObjects1);
}
}
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
{gdjs.StartCode.conditionTrue_1 = gdjs.StartCode.condition1IsTrue_0;
gdjs.StartCode.condition0IsTrue_1.val = false;
gdjs.StartCode.condition1IsTrue_1.val = false;
{
gdjs.StartCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.StartCode.condition0IsTrue_1.val ) {
    gdjs.StartCode.conditionTrue_1.val = true;
}
}
{
gdjs.StartCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.StartCode.condition1IsTrue_1.val ) {
    gdjs.StartCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxFallingSpeed(50);
}
}{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects1[i].returnVariable(gdjs.StartCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects1[i].setAnimation(4);
}
}
{ //Subevents
gdjs.StartCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.StartCode.eventsList6 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.StartCode.GDPlayerObjects1, gdjs.StartCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].addPolarForce(0, 3000, 0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "impactPlate_heavy_000.ogg", false, 10, 1);
}{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].returnVariable(gdjs.StartCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)).sub(1);
}
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects1[i].addPolarForce(180, 3000, 0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "impactPlate_heavy_000.ogg", false, 10, 1);
}{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects1[i].returnVariable(gdjs.StartCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}}

}


};gdjs.StartCode.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.StartCode.GDPlayerObjects1 */

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects1[i].getVariableNumber(gdjs.StartCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)) > 0 ) {
        gdjs.StartCode.condition1IsTrue_0.val = true;
        gdjs.StartCode.GDPlayerObjects1[k] = gdjs.StartCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects1.length = k;}}
if (gdjs.StartCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.StartCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.StartCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.StartCode.condition0IsTrue_0.val = true;
        gdjs.StartCode.GDPlayerObjects2[k] = gdjs.StartCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects2.length = k;}if (gdjs.StartCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].returnVariable(gdjs.StartCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.StartCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        gdjs.StartCode.condition0IsTrue_0.val = true;
        gdjs.StartCode.GDPlayerObjects1[k] = gdjs.StartCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayerObjects1.length = k;}if (gdjs.StartCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.StartCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.StartCode.GDPlayerObjects2});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDcollectibleObjects2Objects = Hashtable.newFrom({"collectible": gdjs.StartCode.GDcollectibleObjects2});gdjs.StartCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("collectible"), gdjs.StartCode.GDcollectibleObjects2);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDPlayerObjects2Objects, gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDcollectibleObjects2Objects, false, runtimeScene, false);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDPlayerObjects2 */
/* Reuse gdjs.StartCode.GDcollectibleObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDPlayerObjects2[i].returnVariable(gdjs.StartCode.GDPlayerObjects2[i].getVariables().getFromIndex(2)).add(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "impactGlass_light_000.ogg", false, 10, 1);
}{for(var i = 0, len = gdjs.StartCode.GDcollectibleObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDcollectibleObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.StartCode.GDScoreObjects2);
{for(var i = 0, len = gdjs.StartCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDScoreObjects2[i].setString("Score: " + (gdjs.RuntimeObject.getVariableString(((gdjs.StartCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.StartCode.GDPlayerObjects2[0].getVariables()).getFromIndex(2))));
}
}}

}


{


{
}

}


};gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.StartCode.GDPlayerObjects2});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDendObjects2Objects = Hashtable.newFrom({"end": gdjs.StartCode.GDendObjects2});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.StartCode.GDPlayerObjects2});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDdeathzoneObjects2Objects = Hashtable.newFrom({"deathzone": gdjs.StartCode.GDdeathzoneObjects2});gdjs.StartCode.eventsList10 = function(runtimeScene) {

{

gdjs.StartCode.GDPlayerObjects1.length = 0;

gdjs.StartCode.GDdeathzoneObjects1.length = 0;

gdjs.StartCode.GDendObjects1.length = 0;


gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
{gdjs.StartCode.conditionTrue_1 = gdjs.StartCode.condition0IsTrue_0;
gdjs.StartCode.GDPlayerObjects1_1final.length = 0;gdjs.StartCode.GDdeathzoneObjects1_1final.length = 0;gdjs.StartCode.GDendObjects1_1final.length = 0;gdjs.StartCode.condition0IsTrue_1.val = false;
gdjs.StartCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("end"), gdjs.StartCode.GDendObjects2);
gdjs.StartCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDPlayerObjects2Objects, gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDendObjects2Objects, false, runtimeScene, false);
if( gdjs.StartCode.condition0IsTrue_1.val ) {
    gdjs.StartCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.StartCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDPlayerObjects1_1final.indexOf(gdjs.StartCode.GDPlayerObjects2[j]) === -1 )
            gdjs.StartCode.GDPlayerObjects1_1final.push(gdjs.StartCode.GDPlayerObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.StartCode.GDendObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDendObjects1_1final.indexOf(gdjs.StartCode.GDendObjects2[j]) === -1 )
            gdjs.StartCode.GDendObjects1_1final.push(gdjs.StartCode.GDendObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.StartCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("deathzone"), gdjs.StartCode.GDdeathzoneObjects2);
gdjs.StartCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDPlayerObjects2Objects, gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDdeathzoneObjects2Objects, false, runtimeScene, false);
if( gdjs.StartCode.condition1IsTrue_1.val ) {
    gdjs.StartCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.StartCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDPlayerObjects1_1final.indexOf(gdjs.StartCode.GDPlayerObjects2[j]) === -1 )
            gdjs.StartCode.GDPlayerObjects1_1final.push(gdjs.StartCode.GDPlayerObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.StartCode.GDdeathzoneObjects2.length;j<jLen;++j) {
        if ( gdjs.StartCode.GDdeathzoneObjects1_1final.indexOf(gdjs.StartCode.GDdeathzoneObjects2[j]) === -1 )
            gdjs.StartCode.GDdeathzoneObjects1_1final.push(gdjs.StartCode.GDdeathzoneObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.StartCode.GDPlayerObjects1_1final, gdjs.StartCode.GDPlayerObjects1);
gdjs.copyArray(gdjs.StartCode.GDdeathzoneObjects1_1final, gdjs.StartCode.GDdeathzoneObjects1);
gdjs.copyArray(gdjs.StartCode.GDendObjects1_1final, gdjs.StartCode.GDendObjects1);
}
}
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Start");
}}

}


};gdjs.StartCode.eventsList11 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


};gdjs.StartCode.eventsList12 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("GodText"), gdjs.StartCode.GDGodTextObjects2);
{for(var i = 0, len = gdjs.StartCode.GDGodTextObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDGodTextObjects2[i].setString("God mode: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "g");
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
{gdjs.StartCode.conditionTrue_1 = gdjs.StartCode.condition1IsTrue_0;
gdjs.StartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8083396);
}
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{ //Subevents
gdjs.StartCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.StartCode.eventsList13 = function(runtimeScene) {

{


gdjs.StartCode.eventsList1(runtimeScene);
}


{


gdjs.StartCode.eventsList2(runtimeScene);
}


{


gdjs.StartCode.eventsList5(runtimeScene);
}


{


gdjs.StartCode.eventsList8(runtimeScene);
}


{


gdjs.StartCode.eventsList9(runtimeScene);
}


{


gdjs.StartCode.eventsList10(runtimeScene);
}


{


gdjs.StartCode.eventsList12(runtimeScene);
}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDPlayerObjects1.length = 0;
gdjs.StartCode.GDPlayerObjects2.length = 0;
gdjs.StartCode.GDPlayerObjects3.length = 0;
gdjs.StartCode.GDPlayerObjects4.length = 0;
gdjs.StartCode.GDfloorObjects1.length = 0;
gdjs.StartCode.GDfloorObjects2.length = 0;
gdjs.StartCode.GDfloorObjects3.length = 0;
gdjs.StartCode.GDfloorObjects4.length = 0;
gdjs.StartCode.GDfloorrightObjects1.length = 0;
gdjs.StartCode.GDfloorrightObjects2.length = 0;
gdjs.StartCode.GDfloorrightObjects3.length = 0;
gdjs.StartCode.GDfloorrightObjects4.length = 0;
gdjs.StartCode.GDfloorleftObjects1.length = 0;
gdjs.StartCode.GDfloorleftObjects2.length = 0;
gdjs.StartCode.GDfloorleftObjects3.length = 0;
gdjs.StartCode.GDfloorleftObjects4.length = 0;
gdjs.StartCode.GDfloorcenterObjects1.length = 0;
gdjs.StartCode.GDfloorcenterObjects2.length = 0;
gdjs.StartCode.GDfloorcenterObjects3.length = 0;
gdjs.StartCode.GDfloorcenterObjects4.length = 0;
gdjs.StartCode.GDfloorgreenObjects1.length = 0;
gdjs.StartCode.GDfloorgreenObjects2.length = 0;
gdjs.StartCode.GDfloorgreenObjects3.length = 0;
gdjs.StartCode.GDfloorgreenObjects4.length = 0;
gdjs.StartCode.GDjumpthruObjects1.length = 0;
gdjs.StartCode.GDjumpthruObjects2.length = 0;
gdjs.StartCode.GDjumpthruObjects3.length = 0;
gdjs.StartCode.GDjumpthruObjects4.length = 0;
gdjs.StartCode.GDjumpthruleftObjects1.length = 0;
gdjs.StartCode.GDjumpthruleftObjects2.length = 0;
gdjs.StartCode.GDjumpthruleftObjects3.length = 0;
gdjs.StartCode.GDjumpthruleftObjects4.length = 0;
gdjs.StartCode.GDjumpthrurightObjects1.length = 0;
gdjs.StartCode.GDjumpthrurightObjects2.length = 0;
gdjs.StartCode.GDjumpthrurightObjects3.length = 0;
gdjs.StartCode.GDjumpthrurightObjects4.length = 0;
gdjs.StartCode.GDjumpthrucenterObjects1.length = 0;
gdjs.StartCode.GDjumpthrucenterObjects2.length = 0;
gdjs.StartCode.GDjumpthrucenterObjects3.length = 0;
gdjs.StartCode.GDjumpthrucenterObjects4.length = 0;
gdjs.StartCode.GDcollectibleObjects1.length = 0;
gdjs.StartCode.GDcollectibleObjects2.length = 0;
gdjs.StartCode.GDcollectibleObjects3.length = 0;
gdjs.StartCode.GDcollectibleObjects4.length = 0;
gdjs.StartCode.GDScoreObjects1.length = 0;
gdjs.StartCode.GDScoreObjects2.length = 0;
gdjs.StartCode.GDScoreObjects3.length = 0;
gdjs.StartCode.GDScoreObjects4.length = 0;
gdjs.StartCode.GDendObjects1.length = 0;
gdjs.StartCode.GDendObjects2.length = 0;
gdjs.StartCode.GDendObjects3.length = 0;
gdjs.StartCode.GDendObjects4.length = 0;
gdjs.StartCode.GDdeathzoneObjects1.length = 0;
gdjs.StartCode.GDdeathzoneObjects2.length = 0;
gdjs.StartCode.GDdeathzoneObjects3.length = 0;
gdjs.StartCode.GDdeathzoneObjects4.length = 0;
gdjs.StartCode.GDInstructionsObjects1.length = 0;
gdjs.StartCode.GDInstructionsObjects2.length = 0;
gdjs.StartCode.GDInstructionsObjects3.length = 0;
gdjs.StartCode.GDInstructionsObjects4.length = 0;
gdjs.StartCode.GDGodTextObjects1.length = 0;
gdjs.StartCode.GDGodTextObjects2.length = 0;
gdjs.StartCode.GDGodTextObjects3.length = 0;
gdjs.StartCode.GDGodTextObjects4.length = 0;

gdjs.StartCode.eventsList13(runtimeScene);
return;

}

gdjs['StartCode'] = gdjs.StartCode;

IR.IR_callbackUser(function (message) {
    basic.showNumber(message)
    if (message == 5) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
    } else if (message == 77) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
    	
    }
})
basic.showIcon(IconNames.No)

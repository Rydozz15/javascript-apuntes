//Ejercicio - Design an stopwatch
function Stopwatch(){
    let recordTime = {
        recording:false
    }
    this.start = function(){
        if (recordTime.recording == true){
            throw new Error('Stopwatch has already started')};
        recordTime.recording = true;
        let startTime = Date.now()
        recordTime.start = startTime;
    }
    this.stop = function(){
        if (recordTime.recording == false){
            throw new Error('Stopwatch is not started')};
        recordTime.recording = false;
        let endTime = Date.now()
        recordTime.end = endTime
    }
    Object.defineProperty(this, 'duration', {
        get: function() {
            let duration = String((recordTime.end - recordTime.start)/1000) + " seconds";
            if (duration == '0 seconds' || duration == 'NaN seconds'){
                throw new Error("It has not started")
            }
            return duration
        }});
    this.reset = function(){
        recordTime.start = 0;
        recordTime.end = 0;
        recordTime.recording = false
    }
    //No se ocupo, pero sirvió
    /*let start = function(){
        
        recordTime.recording = true;
        let startTime = Date.now()
        recordTime.start = startTime;
    }
    let stop = function(){
        recordTime.recording = false;
        let endTime = Date.now()
        recordTime.end = endTime
    }
    */
    /*Object.defineProperty(this, 'start', {
        set: function() {
            if (recordTime.recording == true){
                throw new Error('Stopwatch has already started')};
            start();
        }})
    Object.defineProperty(this, 'stop', {
        set: function() {
            if (recordTime.recording == false){
                throw new Error('Stopwatch is not started')};
            stop();
        }})*/
}
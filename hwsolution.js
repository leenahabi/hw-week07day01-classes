class RunTracker {
    constructor(name,email) {
        this.name = name
        this.email = email
        this.date = []
        this.distance = []
        this.time=[]
        
    } 
    addRun (d,timeInSec,dist) {
        
        this.date.push(d)
        this.distance.push(dist)
        this.time.push(timeInSec)
    }
    // totalDistance() {
            // let total = 0
            // for (let i=0;i<this.distance.length;i++) {
            //   total += this.distance[i]
            //   return total
            // }
            totalDistance = (function () {
                let total = 0
                return function () {
                    for (let i=0;i<this.distance.length;i++)
                  total = total + this.distance[i]
                  return total
                } 
              })()
        //   }
    
    longestDistance(){
        let longest = 0
        for (let i=0;i<this.distance.length;i++){
        if (this.distance[i] > longest) {
           longest = this.distance[i]
           
        }}return longest
    } 
    totaltime = (function () {
        let total = 0
        return function () {
        for (let i=0;i<this.time.length;i++)
          total = total + this.time[i]
          return total
        } 
      })()
    averageSpeed(){
    
        let speed  = this.totalDistance()/this.totaltime()
          return speed
    }
}



const runner = new RunTracker("Salman", "Salman@salman.com");

runner.addRun("2017-01-02", 5, 20)
runner.addRun("2017-01-01", 10, 30)

console.log(runner)
console.log(runner.totalDistance()) // 50 meters
console.log(runner.totaltime()) // 50 meters

runner.longestDistance() // 30 meters
console.log(runner.longestDistance())
runner.averageSpeed() // 0.3 meters per second
console.log(runner.averageSpeed())
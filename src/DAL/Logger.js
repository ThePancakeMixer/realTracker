import axios from 'axios';
import React from 'react';
import { resolve } from 'path';


function ParseWorkoutData(workoutData){
    API.exName_stats = {}
    let exNames = new Set()
    for(let i=0; i<workoutData.length; i++){
        let data = workoutData[i];
        exNames.add(data.exName)
        if(!(data.exName in API.exName_stats))
        {
            API.exName_stats[data.exName] = []
        }
        API.exName_stats[data.exName].push({
            exName : data.exName,
            reps: data.reps,
            weight : data.weight,
            date : data.date
        })
    }
    API.exNames = Array.from(exNames)
}


let API = {

    exNames : [],
    exName_stats : {},
    globalStats : {},
    postWorkoutInfo : async function(workoutName, weight, reps){
        try
        {
            console.log("posting workout info.." + workoutName + "," + weight + "lb x " + reps)
            let response = await axios.post('http://localhost:5000/postWorkoutInfo',{
                exName : workoutName,
                weight: weight,
                reps: reps
            })
            this.exName = response.data.exNames
            this.exName_stats = response.data.exNamestats
            this.globalStats = response.data.globalstats
            this.setTodayData()
            this.updateGlobalStatsFromAPI()
            this.setExNames(this.exName)
        }
        catch(err)
        {
            console.log("error posting workout info: " + err)
        }
        console.log("posted workout info")
    },
    getWorkoutInfo : async function(setExNames){
        try
        {
            console.log("getting workout info..")
            let response = await axios.get('http://localhost:5000/getWorkoutInfo')        
            this.globalStats = response.data.globalstats
            this.exName = response.data.exNames
            this.exName_stats = response.data.exNamestats
            setExNames(response.data.exNames)
        }
        catch(err)
        {
            console.log("error getting workout info: " + err)
        }
        console.log("got workout info")
    },
    setTodayData : () => {},
    setGlobalData : () => {},
    setExNames : () => {},
    updateGlobalStatsFromAPI : () => {},
}

export default API;

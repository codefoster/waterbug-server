module.exports = {
    //mongo shell string mongo --ssl --sslAllowInvalidCertificates waterbug-data.documents.azure.com:10250/waterbug-data -u waterbug-data -p RoACnxNa0b6reN8DekWIs6xYrUCieYQn5DBbAlAo7WsnlmZJk1Dz1Yly5EVoK6dyHHXy65XBhy6Nts7kUaHo1Q==
    documentDBConnectionString:"mongodb://waterbug-data:RoACnxNa0b6reN8DekWIs6xYrUCieYQn5DBbAlAo7WsnlmZJk1Dz1Yly5EVoK6dyHHXy65XBhy6Nts7kUaHo1Q==@waterbug-data.documents.azure.com:10250/waterbug-data?ssl=true",
    //mongo shell strign mongo ds030829.mlab.com:30829/waterbug-data -u waterbug-data -p WaterBug01
    mongoLabsConnectionString: "mongodb://waterbug-data:WaterBug01@ds030829.mlab.com:30829/waterbug-data",
    devPort:8080
}




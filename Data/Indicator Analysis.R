setwd("/Users/yuetongliu/Desktop/") 

install.packages("ggplot2")
library(ggplot2)

rm(list = ls())
##Other

YY <- read_excel("YT.xlsx", sheet = "Aggregate (within 9 cities)")
size<-YY$Population_Index*1.1+YY$Density_Index*1.1
qplot(YY$City,size)
range(size)

econ1<-YY$`Median_Family_Income _Index`^5*1.25+
  YY$`Employee _Index`^5*1.25
qplot(YY$City,econ1)

YY$Air_Quality_Index<-as.numeric(YY$Air_Quality_Index)
YY$`Fatalities/100,000_Index`[4]<-1
YY$`Injuries/100,000_Index`[4]<-1 #Delete Winnipeg

safe<-YY$Air_Quality_Index/2+(5-
                                YY$`Fatalities/100,000_Index`^5+
                                YY$`Injuries/100,000_Index`^5)-2
qplot(YY$City,safe)
range(safe)

##Transportation
YT <- read_excel("Desktop/YT.xlsx", sheet = "Transportation")
Los<-(0.4+YT$Frequency_Index)^2
qplot(YT$City,Los)
range(Los)
frequency<-5-Los

size
frequency

fare<-YT$Fare_Index^4*2.5
qplot(YT$City,fare)
range(fare)

fare
econ1


chair<-YT$wheelchair*5
qplot(YT$City,chair)
range(chair)

safe
chair









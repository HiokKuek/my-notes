---
title: How to publish Obsidian notes with Quartz on GitHub Pages
draft: true
tags:
---
# Designing a healthy data pipeline 


1. Data - where is the data stored? 
2. Resource used - how much resources should be allocated for the data pipeline? 
3. Partitioning - how should we partition our table (in hadoop)
	- Divide and organise data into smaller and more manageable subsets
	- Improve write performance, decrease the run time of the data pipeline 
4. Job Scheduling - how frequently should the data pipeline run
5. Data dependency - does the pipeline depend on the data of other tables? 

# Amazon S3
- object storage service - data lakes 
- Buckets: containers where data are stored 
- Objects: Files stored in the bucket 
- Storage Classes (For cost/ performance trade-off)

# AWS Lambda
- Serverless compute service that runs your code in response to events 
- Pay for execution time, not infrastructure. 
- Stateless: each invocation is independent 

### Example use cases: 
- cleaning a CSV when uploaded to S3 

# Amazon Simple Notification Service 
- messaging service: sends messages from publishers to subscribers 
- Unlike polling, SNS pushes messages directly
### Subscribers
- Email, SMS 
- Lambda functions 
- HTTP endpoints 
- SQS queues 

# Common Workflow 
```
1. Raw data file uploaded to S3
2. S3 triggers a Lambda function 
3. Lambda cleans/ transforms the data 
4. Lambda sends processed data to another S3 bucket or to a database 
5. Lambda publishes a status message to SNS 
6. SNS notifies team members or triggers another Lambda/service
```
# Questions 
What will the project be about? 
Will there be opportunity to contribute to production-level systems? 
Will there be an opportunity to continue working with the organisation after the internship? 

# Notes 
Talent division 


Luan Ting - End user: business to technical 

- scholarships 
- young leaders, tech and media graduate 
- connection opportunities 
- Maintain database on aws 
- ingest, extract, standardise, store the data 
- operations monitoring, programme reporting 
- input: from ops room 

2 things 
- identify vulnerabilities when creating more pipelines 
- lookg through dataset, identify error, 

S3 -> lambda (data cleaning)
- there are avoidable errors (alot of errors with the database)


essentially optimize the current 

build another system in place 
- if resources allows 

Sensitivity twoards data


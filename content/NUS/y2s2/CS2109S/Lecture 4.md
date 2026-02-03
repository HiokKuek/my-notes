---
title: Lecture 4 - CS2109s
draft: false
tags:
---
There are some problems that are inherently intractable to solve, meaning that no efficient solution exists for all cases. 
e.g. 
- The game of Go 
- Protein folding

How about design an agent that learns a set of function to solve the problems mentioned above. 


# Machine Learning 
### Supervised learning 
Learning from labeled data to learn a mapping from inputs to outputs

Think about Data, Model, Loss
- Data: A set of input-output pairs that the model learns from 
	- We assume that the data comes from the ground truth 
- Model: A function that predicts the output based on the input features
- Loss: A function that is often used by a learning algorithm to assess the model's ability in making predictions over a set of data 

Phases: 
- Training phase 
- Testing / evaluation phase
	- Estimates the generalisation of the model: how well the model will perform in real-world when facing new unseen data. 

**Tasks**
1) Classification
	- Predict a discrete label from a set of predefined classes based on input features 
	- The output variable is a categorical value 
	- e.g. cancer prediction, spam detection, document categorization
2) Regression 
	- Predict a continuous numerical value based on input features 
	- The output variable is a real number
	- e.g. house price prediction, temperature prediction, sales forecasting 

#### Model 
A model refers to a function that maps from inputs to outputs h: X --> Y and that can be learned by a learning algorithm 
- we want the find a model h(x) that best predicts the set of outputs given a set of inputs. 

#### Performance Measure and Loss Functions 
Functions that take in a dataset $D$ and a model $h$ and return a number representing how well $h$ predicts the mapping x->y
- Examples include Mean square error (MSE), Mean absolute error (MAE)
- Accuracy , confusion matrix, precision, recall, f1-score
![[Pasted image 20260203163355.png]]




### Unsupervised learning 
Learn from unlabelled data to find patterns or structure
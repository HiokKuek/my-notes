---
title: Branching
draft: false
tags:
---
 Ss

### Branching
- Git creates a branch named `master` by default
Create new branch 
```
git branch feature1
git checkout feature1
```
or, do it in one step
```
git checkout -b feature1

```

```
git switch -c feature1

```

>[!warning] Avoid rookie mistake
>Always remember to switch back to the `master` branch before creating a new branch. If not, your new branch will be created on top of the current branch 

merge branch
```
git merge <branch-name>

git merge --no-ff <branch-name> -m 'commit message'

```
- if the branch you are merging has not diverged, 
	- git moves the branch pointer forward to include all the new commits 
	- known as a **fast-forward merge**
- Merging branches are useful in helping the branches be in sync 

Squash Merge
- merges all the changes from a branch into a single commit on the receiving branch
- won't preserve the full history of the branch being merged 
```
git merge --squash <branch-name>
```

Resolve Merge Conflicts 
- git cannot automatically combine changes from two branches
```
blue 
<<<<<< HEAD 
black 
======= 
green 
>>>>>> fix1 
red
```
- black is coming from `master` branch while green is coming from `fix1` branch

Renaming branches
```
git branch -m <current-name> <new-name>

```

Deleting branches 
- you may want to delete branches that you have merged
```
git branch -d <branch-name>

```


Rebasing 
- moves the base of your branch to the tip of other branch 
- Helps to keep the history clean and linear 
- e.g. merge vs rebase
- ![[Pasted image 20250825231944.png|500]]
- will rewrite the history of the current branch
```
git rebase <branch-name> 

```

Cherry-picking 
- "cherry pick" specific commits from a different branch onto the current branch
```
git cherry-pick <commit-sha>

```

Push branch to remote 
```
git push <remote> -u <branch>

```

Pull/ create local copy of remote branch
```
git switch -c <branch> <remote-branch>

```

Delete Remote Branch
```
git push origin --delete <remote-branch>

```

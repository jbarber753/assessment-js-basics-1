/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = `Git is a software that assists developers in version control. It allows developers to keep track of the changes they make to a project throughout the development project, and also allowing developers to easily collaborate on the same project`;

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = `Github is an online platform that hosts project git repositories for developers, allowing convenient and accessible collaboration/version control.`;

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

let gitInitDefinition = `Git init is a command that initializes a git repository on your local machine. This command is the first step in using git to track the changes made to a program.`;

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

let gitCloneDefinition = `Git clone is a command that creates a copy of a repository. Often, this is used to make a local copy of a remote repository (housed on a platform like github) allowing a developer to contribute to that repositiry from their machine`;

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

let gitStatusDefinition = `Git status shows you the current state of the directory you are currently working on. Specifically, it will show you the changes that are currently staged to be committed. It will also indicate which files have not been added to be tracked by git.`;

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

let gitAddDefinition = `Git add allows the developer to choose which files need to be tracked by git for changes. The files tracked using add will have their changes added to the staging area, which will then be included in the next commit.`;
let gitAddCode = `git add .`;

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

let gitCommitDefinition = `Git commit creates a "snapshot" of your repository at the time of said commit. All changes which have been added to the staging area will be included in the commit, which will generate a new snapshot that includes your recent changes. These snapshots are the primary way developers can use git/Github to keep track of their projects' versions throughout development.`;
let gitCommitCode = `git commit -m"initial commit"`;

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

let gitPushDefinition = `Git push takes the committed changes you've made locally and applies them to the remote branch you are working on. The changes you commit locally will not be applied to the remote repository you are working on until you use git push to apply them there.`;
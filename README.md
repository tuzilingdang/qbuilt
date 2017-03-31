# qbuilt
A tool for scaffolding frontend project.

## Start 

### 1. 安装| install 

`` npm install qbuilt ``

### 2. 查看现有模板| look up existed templates

`` qbuilt list`` 

or you can input this simple command `` qbuilt l ``

### 3. 添加自己的模板| add your own template

If you have a template which often used in project, first you can upload this template to github , then add it to qbuilt.

Sign in github and create a new repository, and push local template to remote repository.

Input command `` qbuilt add `` to create your own template , and clone the git url of your template to it. Then , after the next step the template will be used in your new project.

### 4. 初始化项目目录| Initialize project directory

`` qbuilt init`` to initialize a project , `` qbuilt i `` for short. 

cd filepath  , and use ``npm install ``to install node modules needed in the project.

### 5. 删除模板 | Delete template

`` qbuilt delete`` to delete template you have added to qbuilt, use `` qbuilt d`` for short.
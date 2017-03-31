# qbuild
A tool for scaffolding frontend project.

### Start 

1. 安装| install 

`` npm install qbuild ``

2. 查看现有模板| look up existed templates

`` qbuild list`` 

or you can input this simple command `` qbuild l ``

3. 添加自己的模板| add your own template

If you have a template which often used in project, first you can upload this template to github , then add it to qbuild.

Sign in github and create a new repository, and push local template to remote repository.

Input command `` qbuild add `` to create your own template , and clone the git url of your template to it. Then , after the next step the template will be used in your new project.

3. 初始化项目目录| Initialize project directory

`` qbuild init`` to initialize a project , `` qbuild i `` for short. 

cd filepath  , and use ``npm install ``to install node modules needed in the project.

4. 删除模板 | Delete template

`` qbuild delet`` to delete template you have added to qbuild, use `` qbuild d`` for short.
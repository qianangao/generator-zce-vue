const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type:'input',
                name:'name',
                message:'you project name',
                default:this.appname
            }
        ]).then(answers =>{
            this.answers = answers
        })
    }
    writing() {
        //把一个文件都通过模板转换到目标路径
        const temlates = [
            '.editorconfig',
           '.eslintignore',
           'package.json',
           '.gitattributes',
           'public/index.html'

        ]
        temlates.forEach(item=>this.fs.copyTpl(
            this.templatePath(item),
            this.destinationPath(item),
            this.answers
        ))
    }
}
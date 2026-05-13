pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/Dharshan1999/devops_node.js.git'
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker build -t devops-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 devops-app'
            }
        }
    }
}

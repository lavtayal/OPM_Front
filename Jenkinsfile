
pipeline{
agent any
stages {
stage('Checkout'){
steps{
git branch: 'master', url: 'https://github.com/lavtayal/OPM_Front.git'
}
}
stage('Install'){
steps{
bat 'npm install -g @angular/cli'
}
}
stage('Build'){
steps{
bat 'npm run-script build'
}
}



stage('Deploy')
{
steps{
bat 'ng serve'
}
}
}
}

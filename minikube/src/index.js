const core = require('@actions/core')

try {
  const minikubeVersion = core.getInput('minikube-version')
  const kubernetesVersion = core.getInput('k8s-version')

  const { spawnSync } = require('child_process')

  console.log(`Downloading Minikube...`)
  var lastCommandRunning = spawnSync('curl', [
    '-LO',
    `https://storage.googleapis.com/minikube/releases/latest/minikube_${minikubeVersion}.deb`,
  ])
  console.log(`${lastCommandRunning.stdout.toString()}`)
  console.error(`${lastCommandRunning.stderr.toString()}`)

  console.log(`Installing Minikube...`)
  lastCommandRunning = spawnSync('sudo', ['dpkg', '-i', `minikube_${minikubeVersion}.deb`])
  console.log(`${lastCommandRunning.stdout.toString()}`)
  console.error(`${lastCommandRunning.stderr.toString()}`)

  console.log(`Creating Minikube launch command...`)

  const launcher = [
    'CHANGE_MINIKUBE_NONE_USER=true',
    'sudo',
    '-E',
    'minikube',
    'start',
    '--vm-driver=none',
    '--kubernetes-version',
    `v${kubernetesVersion}`,
    '--extra-config',
    'kubeadm.ignore-preflight-errors=SystemVerification',
  ].join(' ')

  core.setOutput('launcher', launcher)

  console.log(`Ready to launch minikube!!!`)
} catch (error) {
  if (!!lastCommandRunning) {
    console.log(`${lastCommandRunning.stdout.toString()}`)
    console.error(`${lastCommandRunning.stderr.toString()}`)
  }
  core.setFailed(error.message)
}
